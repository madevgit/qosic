import Wrapper from "../../components/sectionWrapper";
import Pretitle from "../../components/pretitle";
import { media } from "../../libs/media";
import { Code } from "../../libs/codeSamples";
import CodeBoard from "../../components/codeBoard";
import Messages from "./translations/DevPart.json";
import buttonText from "../../translations/button.json";
import { useLangContext } from "../../components/translateContext";
import { Link } from "react-router-dom";
const { integration, crossOverTech } = media.Icons[0];

export default function DevsSection() {
  const { Lang } = useLangContext();
  const Infos = Messages[Lang];
  return (
    <Wrapper id="webDev" className="bg-qosdark bg-opacity-50 py-20">
      <Pretitle
        titleStyle={`text-qosblue text-opacity-80`}
        iconStyle={`text-qosgray text-opacity-70`}
        dataName={Infos.PreTitle}
      />
      <h2 className="w-11/12 md:w-6/12 lg:w-8/12 text-qosgray mt-2 lg:pr-14 text-opacity-80">
        {" "}
        {Infos.Title}{" "}
      </h2>
      <section className="md:flex justify-between">
        <div className="md:w-6/12">
          <p className="mt-4 md:w-12/12 text-qosgray text-opacity-70">
            {Infos["description0"]}
          </p>
          <div className="mt-8 lg:flex items-center">
            <img
              className="h-12 w-20 mb-2 inline-block"
              src={crossOverTech}
              alt="cross over technologies"
            />
            <h4 className="text-qosgray text-opacity-80">
              {Infos["subTitle0"]}
            </h4>
          </div>
          <p className="mt-2 lg:w-12/12 text-qosgray text-opacity-70">
            {Infos["description1"]}
            <Link
              to="/docs"
              className={`p-2 hidden mt-8 md:block rounded-full px-3 shadow-lg font-medium btn-sm max-w-max mx-auto text-qosgray text-opacity-90 bg-opacity-90 m-2 bg-qosorange`}
            >
              {buttonText[Lang].callTodocs}
            </Link>
          </p>
        </div>
        <div className="md:w-5/12">
          <div className="mt-8 md:mt-0 md:flex items-center">
            <img
              className="h-12 w-20 mb-2 inline-block"
              src={integration}
              alt="cross over technologies"
            />
            <h4 className="text-qosgray text-opacity-80">
              {Infos["subTitle1"]}
            </h4>
          </div>
          <div className="mt-4">
            <CodeBoard modes={Code.LibsOverview()} />
          </div>
        </div>
      </section>
      <Link
        to="/docs"
        className={`p-2 inline-block mt-8 md:hidden rounded-full px-3 shadow-lg font-medium btn-sm max-w-max mx-auto text-qosgray text-opacity-90 m-2 bg-qosorange`}
      >
        {buttonText[Lang].callTodocs}
      </Link>
    </Wrapper>
  );
}
