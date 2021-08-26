import { useMemo } from "react";
import DateFormat from "../../libs/dateFormat";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../libs/server";
import {
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  createPlateComponents,
  PlatePlugin,
  Plate,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createHeadingPlugin,
  createKbdPlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createReactPlugin,
  createSelectOnBackspacePlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  withProps,
  MentionElement,
  ELEMENT_MENTION,
  SPEditor,
  MARK_COLOR,
  withStyledProps,
  StyledLeaf,
  MARK_BG_COLOR,
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
} from "@udecode/plate";
import {
  createExcalidrawPlugin,
  ExcalidrawElement,
  ELEMENT_EXCALIDRAW,
} from "@udecode/plate-excalidraw";
import { optionsAutoformat } from "./config/autoformatRules";
import { editableProps } from "./config/pluginOptions";
import { renderMentionLabel } from "./config/renderMentionLabel";
import { ReactEditor } from "slate-react";
import { useEffect } from "react";
import { useRouteMatch } from "react-router";
import { useState } from "react";
import Wrapper from "../../components/sectionWrapper";

type TEditor = SPEditor & ReactEditor;

let components = createPlateComponents({
  [ELEMENT_MENTION]: withProps(MentionElement, {
    renderLabel: renderMentionLabel,
  }),
  [ELEMENT_EXCALIDRAW]: withProps(ExcalidrawElement, {}),
  [MARK_COLOR]: withStyledProps(StyledLeaf, {
    leafProps: {
      [MARK_COLOR]: ["color"],
    },
  }),
  [MARK_BG_COLOR]: withStyledProps(StyledLeaf, {
    leafProps: {
      [MARK_BG_COLOR]: ["backgroundColor"],
    },
  }),
  // customize your components by plugin key
});

export default function Post() {
  const [Post, setPost]: any = useState({});
  const { params }: any = useRouteMatch();
  const pluginsMemo: PlatePlugin<TEditor>[] = useMemo(() => {
    const plugins = [
      createReactPlugin(),
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createExcalidrawPlugin(),
      createAlignPlugin(),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontColorPlugin(),
      createFontBackgroundColorPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createAutoformatPlugin(optionsAutoformat),
      createTrailingBlockPlugin({
        type: ELEMENT_PARAGRAPH,
      }),
      createSelectOnBackspacePlugin({
        allow: [ELEMENT_IMAGE, ELEMENT_EXCALIDRAW],
      }),
    ];
    return plugins;
  }, []);

  const { day, month, year, date } = DateFormat(Post.createdAt);

  const dateString = `${day}, ${date} ${month} ${year}`;

  function PostContentParser(post: any) {
    let content = JSON.parse(post.content);
    return { ...post, content };
  }

  useEffect(() => {
    axios
      .get(`${baseUrl}/post`, {
        params: {
          idPost: params.id,
        },
      })
      .then((response) => {
        setPost(PostContentParser(response.data.post));
      })
      .catch((reason) => console.log(reason));
  }, [params]);

  return (
    <div className="bg-qosgray">
      <Wrapper id="Editor" className="py-32 md:w-10/12 mx-auto">
        <h3 className="my-4 md:text-mH2 block max-w-screen-md mx-auto">
          {Post.title}
        </h3>
        <div className="flex w-11/12 max-w-screen-md mx-auto items-center my-4">
          <p className="text-qosorange uppercase opacity-90 mr-8 font-medium">
            {Post.category}
          </p>
          <p className="text-msm md:text-mmd">{dateString}</p>
        </div>
        <div className="mx-auto my-4 h-96 w-11/12 max-w-screen-md overflow-hidden">
          <img src={Post.poster} alt="" className="poster" />
        </div>
        <section className="w-11/12 max-w-screen-md mx-auto sticky md:flex justify-between overflow-auto hideScroll">
          <div className="flex sticky self-start top-1/4 justify-between items-center max-w-max">
            <img
              className="profil"
              src={`${
                Post.author ? `${Post.author.profil}` : "connection error"
              }`}
              alt="profil"
            />
            <div>
              <span className="font-semibold text-mmd">
                {`${
                  Post.author
                    ? `${Post.author.firstname} ${Post.author.lastname} `
                    : "connection error"
                }`}
              </span>
              <p>
                {`${Post.author ? `${Post.author.poste}` : "connection error"}`}
              </p>
            </div>
          </div>
          <div className="w-full max-w-xl pt-10">
            <Plate
              id={params.id}
              plugins={pluginsMemo}
              components={components}
              editableProps={editableProps}
              value={Post.content}
            ></Plate>
          </div>
        </section>
      </Wrapper>
      <Wrapper>
        <h3 className="md:text-mH1 text-center mb-8">Read more articles</h3>
      </Wrapper>
      <Wrapper className="mb-20">
        <ArticlesGrid skip={params.pos} category={params.cat} />
      </Wrapper>
    </div>
  );
}
function ArticlesGrid({ skip, category }: any) {
  const [Posts, setPosts] = useState({
    posts: [],
    number: 0,
  });

  const limit = 4;

  useEffect(() => {
    axios
      .get(`${baseUrl}/posts`, {
        params: { published: true, skip, limit: limit, category },
      })
      .then((response) => setPosts(response.data))
      .catch((reason) => console.log(reason.response));
  }, [skip, category]);

  return (
    <>
      <div className="grid md:grid-cols-2 w-full lg:grid-cols-4 gap-y-4 gap-x-4 mx-auto p-4 lg:p-0">
        {Posts.posts.map((data, index) => (
          <Article
            key={index}
            {...data}
            index={index}
            prevPos={skip}
            cat={category}
          />
        ))}
      </div>
    </>
  );
}

export function Article({
  title,
  poster,
  resume,
  _id: id,
  category,
  createdAt,
  index,
  prevPos,
  cat,
}: any) {
  const { day, month, year, date } = DateFormat(createdAt);
  const dateString = `${day}, ${date} ${month} ${year}`;
  const pos = index * 1 + 1 + prevPos * 1;
  cat = cat === "undefined" ? false : cat;
  return (
    <div className="my-4 bg-qosgray rounded-xl shadow-md max-w-sm">
      <img
        src={poster}
        alt="hello"
        className="h-48 sm:h-64 md:h-52 w-full rounded-xl shadow-xl mx-auto opacity-80 block mb-5"
      />
      <div className="w-11/12 md:w-10/12 mx-auto mb-2">
        <div className="flex justify-between items-center mx-auto mb-4">
          <p className="text-msm uppercase text-qosblue text-opacity-80 font-semibold">
            {category}
          </p>
          <p className="text-msm"> {dateString} </p>
        </div>
        <h4 className="mb-2 lg:text-mST block h-8 overflow-hidden uppercase font-medium">
          {title}
        </h4>
        <p className="text-msm md:text-dsm h-20 overflow-hidden">{resume}</p>
        <Link
          to={`/blog/post/${id}/${pos}${cat ? `/${cat}` : ""}`}
          className="text-qosblue text-opactiy-80 my-2 float-right p-2 text-mmd"
        >
          Read More{" "}
          <span className="fi fi fi-rr-arrow-right inline-block"></span>{" "}
        </Link>
      </div>
    </div>
  );
}
