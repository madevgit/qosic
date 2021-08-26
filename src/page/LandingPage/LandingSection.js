import { Link } from "react-router-dom";
import Wrapper from "../../components/sectionWrapper";
import { media } from "../../libs/media";
import Messages from "./translations/LandingSection.json";
import { useLangContext } from "../../components/translateContext";
import buttonText from "../../translations/button.json";

export default function LandingSection() {
  const { Lang } = useLangContext();
  const Infos = { msg: Messages[Lang], button: buttonText[Lang] };
  return (
    <Wrapper
      id="Landing"
      childrenClassName="md:flex pt-5 flex-row-reverse relative"
      className="pb-10 bg-qosblu bg-opacity-80 md:pb-20 z-10 overflow-hidden relative"
    >
      <div
        id="Landing1"
        className="md:w-6/12 z-0 -mt-5 absolute md:mt-10 block mx-auto md:h-full md:-right-8 lg:-right-10  md:absolute"
      ></div>
      <div
        id="Landing1"
        className="md:w-6/12 z-0 -mt-5 absolute md:mt-5 block mx-auto md:h-full md:-right-8 lg:-right-10  md:absolute"
      ></div>
      <img
        src={media.Illustrations.LandingPage.firstIllustration}
        alt=""
        className="md:w-6/12 h-80 z-0 -mt-5 md:mt-16 block mx-auto md:h-full md:-right-8 lg:-right-10 md:absolute"
      />
      <div className="z-10 relative">
        <h1 className="md:pt-32 md:w-8/12 lg:w-10/12 xl:w-9/12">
          {Infos.msg.HelloText}
        </h1>
        <p className="w-11/12 md:w-6/12 lg:w-5/12 mt-8 md:mt-10">
          {Infos.msg.description}
        </p>
        <div className="mt-6 md:mt-10">
          <Link
            to="/register"
            className="p-2 inline-block rounded-full bg-opacity-80 px-3 shadow-lg bg-qosorange text-qosgray text-opacity-90 font-medium btn-sm max-w-max mx-auto m-2"
          >
            <p className="text-qosgray text-opacity-70 inline-block md:ml-1">
              {Infos.button.registerButton}
            </p>
          </Link>
          <Link
            to="/contact-us"
            className="rounded-full px-3 ml-4 bg-qosdark bg-opacity-10 inline-block p-2 backdrop-blur-3xl text-qosgray text-opacity-70"
          >
            <p className="text-qosgray text-opacity-70 inline-block md:ml-1">
              {Infos.button.saleButton}
            </p>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
