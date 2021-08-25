import Wrapper from "../../components/sectionWrapper";
import Pretitle from "../../components/pretitle";
import { media } from "../../libs/media";
import Messages from "./translations/OfflineBussiness.json";
import buttonText from "../../translations/button.json";
import { useLangContext } from "../../components/translateContext";
import { Link } from "react-router-dom";
export default function OfflineBussiness() {
  const { Lang } = useLangContext();
  return (
    <Wrapper childrenClassName="md:flex relative py-10" className="">
      <div>
        <Pretitle dataName={Messages[Lang].PreTitle} />
        <h2 className="w-11/12 md:w-7/12 mt-2">{Messages[Lang].Title}</h2>
        <p className="mt-8 md:w-6/12">{Messages[Lang].description}</p>
        <Link
          to="/offline-payment"
          className={`hidden md:block p-2 mt-4 rounded-full px-3 shadow-lg font-medium btn-sm max-w-max text-qosgray text-opacity-90 m-2 bg-qosorange`}
        >
          {buttonText[Lang].productPart}
        </Link>
      </div>
      <img
        src={media.Illustrations.LandingPage.altFirstImage}
        alt="hello"
        className="md:w-4/12 md:absolute right-0 max-h-full"
      />
      <Link
        to="/offline-payment"
        className={`p-2 inline-block mt-8 md:hidden rounded-full px-3 shadow-lg font-medium btn-sm max-w-max mx-auto text-qosgray text-opacity-90 m-2 bg-qosorange`}
      >
        {buttonText[Lang].productPart}
      </Link>
    </Wrapper>
  );
}
