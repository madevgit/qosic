import Wrapper from "../../components/sectionWrapper";
import Pretitle from "../../components/pretitle";
import { media } from "../../libs/media";
import Message from "./translations/webBussiness.json";
import buttonText from "../../translations/button.json";
import { useLangContext } from "../../components/translateContext";
import { Link } from "react-router-dom";
export default function WebBussiness() {
  const { Lang } = useLangContext();
  return (
    <Wrapper childrenClassName="md:flex relative" className="bg-qosgray py-10">
      <div>
        <Pretitle dataName={Message[Lang].PreTitle} />
        <h2 className="w-11/12 mt-2 md:w-7/12"> {Message[Lang].Title} </h2>
        <div className="md:grid grid-flow-col gap-x-6 md:w-7/12 mt-8">
          <p className="mt-4">{Message[Lang]["description0"]}</p>
          <p className="mt-4">{Message[Lang]["description1"]}</p>
        </div>
        <Link
          to="/online-payment"
          className={`hidden md:block p-2 mt-4 rounded-full px-3 shadow-lg font-medium btn-sm max-w-max text-qosgray text-opacity-90 m-2 bg-qosorange`}
        >
          {buttonText[Lang].productPart}
        </Link>
      </div>
      <img
        src={media.Illustrations.LandingPage.secondIllustration}
        alt="hello"
        className="md:w-5/12 md:absolute md:mt-12 rounded-xl overflow-hidden right-0 max-h-full"
      />
      <Link
        to="/online-payment"
        className={`block md:hidden p-2 mt-4 rounded-full px-3 shadow-lg font-medium btn-sm max-w-max text-qosgray text-opacity-90 m-2 bg-qosorange`}
      >
        {buttonText[Lang].productPart}
      </Link>
    </Wrapper>
  );
}
