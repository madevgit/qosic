import { Link } from "react-router-dom";
import Wrapper from "../../components/sectionWrapper";
import { media } from "../../libs/media";
import { useLangContext } from "../../components/translateContext";
import Messages from "./translations/index.json";
import buttonText from "../../translations/button.json";

const { lowFees } = media.Icons[1];

export default function ShareLinkPage() {
  const { Lang } = useLangContext();
  const Infos = Messages[Lang];
  const btnMsg = buttonText[Lang];
  return (
    <Wrapper childrenClassName="mt-24">
      <div className="md:flex">
        <div>
          <h1 className="">{Infos.Title}</h1>
          <p className="md:w-10/12 lg:w-9/12 mt-8 md:mt-10">
            {Infos.description}
          </p>
        </div>
        <img
          src={media.Illustrations.onlinePaymentPage.firstIllustration}
          className="block rounded-3xl mt-4 opacity-70 h-44 lg:h-72 mx-auto blur-lg"
          alt="illustration"
        />
      </div>
      <div className="mt-6 max-w-max mx-auto md:mx-0 md:mt-10">
        <Link
          to="/register"
          className="p-2 inline-block px-2.5 md:px-3 rounded-md bg-opacity-90 shadow-lg bg-qosorange text-qosgray text-opacity-70 font-medium btn-sm max-w-max mx-auto"
        >
          {btnMsg.registerButton}
        </Link>
        <Link
          to="/contact-us"
          className="rounded-full ml-1.5 md:ml-4 bg-qosdark bg-opacity-10 inline-block p-2 backdrop-blur-3xl"
        >
          <p className="text-qosdark text-opacity-70 inline-block md:ml-1">
            {btnMsg.saleButton}
          </p>
          <span className="fi fi-rr-angle-small-right text-msm"></span>
        </Link>
      </div>
      <h2 className="mt-8"> {Infos.subTitle}</h2>
      <div className="grid md:grid-flow-col items-center gap-y-4 gap-x-6 my-4">
        <div className="rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
          <div className="my-4 md:flex items-center">
            <span className="fi fi-rr-user md:mr-4 block bg-gradient-to-bl from-qosblue to-qosorange bg-clip-text text-transparent text-mH3 md:text-dH3">
              {" "}
            </span>
            <h4 className="md:text-center"> {Infos.steps[0].name} </h4>
          </div>
          <p className="mt-2">{Infos.steps[0].description}</p>
        </div>
        <div className="rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
          <div className="my-4 md:flex items-center">
            <span className="fi fi-rr-shopping-cart md:mr-4 block bg-gradient-to-bl from-qosblue to-qosorange bg-clip-text text-transparent text-mH3 md:text-dH3"></span>
            <h4 className="md:text-center"> {Infos.steps[1].name} </h4>
          </div>
          <p className="mt-2">{Infos.steps[1].description}</p>
        </div>
        <div className="rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
          <div className="my-4 md:flex items-center">
            <span className="fi fi-rr-share md:mr-4 block bg-gradient-to-bl from-qosblue to-qosorange bg-clip-text text-transparent text-mH3 md:text-dH3"></span>
            <h4 className="md:text-center"> {Infos.steps[2].name} </h4>
          </div>
          <p className="mt-2">{Infos.steps[2].description}</p>
        </div>
      </div>
      <h2 className="mt-8"> {Infos.subTitle1} </h2>
      <div className="my-8 grid gap-x-4 grid-flow-col overflow-auto hideScroll">
        {Infos.testimonials.map((testify, index) => (
          <TestiMon
            key={index}
            name={testify.name}
            poste={testify.poste}
            text={testify.text}
          />
        ))}
      </div>
    </Wrapper>
  );
}
export function TestiMon({ name, poste, text }) {
  return (
    <div className="p-2 px-4 w-60 md:w-72  transform border-2 mx-auto border-qosdark border-opacity-5 border-dotted bg-qosgray bg-opacity-70 rounded-xl shadow-lg">
      <img
        className="h-16 w-16 rounded-full block mx-auto"
        src={lowFees}
        alt="fees"
      />
      <div>
        <span className="font-bold text-center block mt-4 text-qosdark text-opacity-80">
          {name}
        </span>
        <p className="text-center text-msm lg:text-dsm">{poste}</p>
      </div>
      <p className="mt-4 mx-auto">{text}</p>
    </div>
  );
}
