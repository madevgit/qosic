import Wrapper from "../../components/sectionWrapper";
import { Link } from "react-router-dom";
import Pretitle from "../../components/pretitle";
import { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import DateFormat from "../../libs/dateFormat";
import baseUrl from "../../libs/server";
export default function Blog() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("hello");
    axios
      .get(`${baseUrl}/posts`, {
        params: { published: true, skip: 0, limit: 3 },
      })
      .then((response) => setPosts(response.data.posts))
      .catch((reason) => console.log(reason.response));
  }, []);

  return (
    <>
      <Wrapper className="pt-24">
        <h2 className="uppercase mb-5 mt-5">
          <span className="text-qosorange">QOS</span> Blog
        </h2>
        <p className="mb-8 uppercase font-bold text-qosdark text-opacity-80">
          Engennering, Marketing and Corporate
        </p>
        <div className="overflow-x-scroll hideScroll">
          <div className="min-w-max flex transform transition-all duration-500">
            {Posts.map((data, index) => (
              <Link>
                <PostCard {...data} key={index} index={index} />
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
      <ArticlesGrid />
      <Wrapper>
        <BlogSuscribeForm />
        <div className="font-bold my-8 md:my-14 lg:flex items-center">
          <h3 className="uppercase max-w-screen-md font-normal md:text-mH2  text-opacity-80 text-center">
            Start Accept mobile money payment on easly way using OOS solutions
          </h3>
          <Link
            to="/register"
            className={`p-2 rounded-full mt-8 md:mt-0 px-3 block shadow-lg font-medium btn-sm max-w-max mx-auto text-qosgray text-opacity-90 m-2 bg-qosorange`}
          >
            Create Account
          </Link>
        </div>
      </Wrapper>
    </>
  );
}

export function BlogSuscribeForm() {
  const [Email, setEmail] = useState("");
  const [Success, setSuccess] = useState(false);

  function handleSuscribe() {
    axios
      .post(`${baseUrl}/suscribe`, { email: Email })
      .then((response) => {
        if (response.statusText === "OK" && response.status === 200) {
          setSuccess(true);
        }
      })
      .catch((response) => console.log(response.response));
  }

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 8000);
  }, []);
  return (
    <div
      id="Landing"
      className="py-10 relative overflow-hidden w-full h-80 flex items-center rounded-lg bg-coolGray-50 shadow-sm mx-auto my-8 max-w-screen-md"
    >
      <div
        className={`min-w-full transform transition-all duration-500 ${
          !Success ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-center block">Suscribe to our newsletter</h2>
        <p className="text-center mt-4">
          Get information about our company and advices to grow your bussiness
        </p>
        <div className="w-10/12 mx-auto mt-4 max-w-md">
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=""
            value={Email}
            placeholder="email"
          />
          <button
            onClick={handleSuscribe}
            className="bg-qosorange w-full text-qosgray font-semibold py-3 mt-5 px-4 rounded-lg"
          >
            Suscribe
          </button>
        </div>
      </div>
      <div
        className={`min-w-full transform transition-all duration-500 ${
          Success ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <h2 className="text-center text-qosgray">
          Thank you for subscribing !
        </h2>
      </div>
    </div>
  );
}
export function PostCard({ title, poster, resume, _id: id, index }) {
  const pos = index * 1 + 1;
  return (
    <Link to={`/blog/post/${id}/${pos}`}>
      <div className="relative h-48 sm:h-56 md:h-72 md:w-72 md:min-w-max rounded-md sm:min-w-max overflow-hidden mr-2 md:mr-4">
        <img src={poster} alt="post" className="h-full relative z-0 w-full" />
        <div className="bg-qosdark bg-opacity-40 h-full w-full absolute top-0 p-2">
          <h4 className="text-qosgray text-opacity-80 uppercase absolute top-10">
            {title}
          </h4>
          <p className="h-1/2 w-11/12  absolute bottom-0 text-qosgray overflow-hidden p-2">
            {resume}
          </p>
        </div>
      </div>
    </Link>
  );
}
export function ArticlesGrid() {
  const [Page, setPage] = useState(1);
  const [Category, setCategory] = useState(undefined);
  const [Posts, setPosts] = useState({
    posts: [],
    number: 0,
  });

  const limit = 4;

  function handleChange(e, value) {
    setPage(parseInt(value, 10));
  }

  function setSkip(page) {
    return (parseInt(page, 10) - 1) * limit;
  }
  useEffect(() => {
    axios
      .get(`${baseUrl}/posts`, {
        params: {
          published: true,
          skip: setSkip(Page),
          limit: limit,
          category: Category,
        },
      })
      .then((response) => setPosts(response.data))
      .catch((reason) => console.log(reason.response));
  }, [Page, Category]);

  return (
    <>
      <header className="w-full px-6 md:px-10 lg:px-8 xl:px-32 py-8 mx-auto my-10 bg-qosgray bg-opacity-60">
        <Pretitle dataName="Topics Category" />
        <div className="mt-4 md:mt-8 p-2">
          <button
            onClick={() => setCategory(undefined)}
            className={`inline-block ${
              Category === undefined
                ? " bg-qosorange shadow-xl text-qosgray p-1"
                : ""
            } text-opacity-80 rounded mr-2.5 uppercase text-msm font-bold md:text-dsm`}
          >
            All
          </button>
          <button
            onClick={() => setCategory("company")}
            className={`inline-block ${
              Category === "company"
                ? "shadow-xl bg-qosorange text-qosgray p-1"
                : ""
            } text-opacity-80 rounded mr-2.5 uppercase text-msm font-bold md:text-dsm`}
          >
            Company
          </button>
          <button
            onClick={() => setCategory("engineering")}
            className={`inline-block ${
              Category === "engineering"
                ? " bg-qosorange text-qosgray shadow-xl p-1"
                : ""
            } text-opacity-80 rounded mr-2.5 uppercase text-msm font-bold md:text-dsm`}
          >
            Engineering
          </button>
          <button
            onClick={() => setCategory("marketing")}
            className={`inline-block ${
              Category === "marketing"
                ? " bg-qosorange text-qosgray shadow-xl p-1"
                : ""
            } text-opacity-80 rounded mr-2.5 uppercase text-msm font-bold md:text-dsm`}
          >
            Marketing
          </button>
        </div>
      </header>
      <Wrapper className="my-10 py-4 md:py-8">
        <div className="grid md:grid-cols-2 content-around w-full justify-center lg:grid-cols-4 gap-y-4 gap-x-4 max-w-scren-md mx-auto p-4 lg:p-0">
          {Posts.posts.map((data, index) => (
            <Article
              key={index}
              {...data}
              index={index}
              page={Page}
              cat={Category}
            />
          ))}
        </div>
        <Pagination
          count={Math.ceil(Posts.number / limit)}
          onChange={handleChange}
          page={Page}
          showFirstButton
          showLastButton
          className="mx-auto block max-w-max mt-10"
        />
      </Wrapper>
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
  page,
  index,
  cat,
}) {
  const { day, month, year, date } = DateFormat(createdAt);
  const dateString = `${day}, ${date} ${month} ${year}`;
  const pos = (index * 1 + 1) * page;
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
        <h4 className="mb-2 lg:text-mST font-medium block h-8 overflow-hidden uppercase ">
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
