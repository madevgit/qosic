import { Link } from "react-router-dom";
import Wrapper from "../../components/sectionWrapper";
import Messages from "../../components/translations/Navbar.json";
import { useLangContext } from "../../components/translateContext";
import siteMapMsg from './translations/index.json'
export default function Sitemap() {
  const { Lang } = useLangContext();
  const Infos = Messages[Lang];
  const siteMap = siteMapMsg[Lang];
  return (
    <Wrapper
      childrenClassName="grid grid-flow-row content-center gap-y-6"
      className="py-20 text-qosdark relative z-30 text-opacity-70 mx-auto"
    >
      <h2 className="text-center mt-8">
        {" "}
        <span className="text-qosorange text-opacity-95">QOS</span> Sitemap{" "}
      </h2>
      <nav className="grid grid-flow-row gap-y-12 pb-4 items-start font-medium md:font-normal md:mt-5">
        <ul className="grid grid-flow-row gap-y-2 mb-6 md:mb-0">
          <span className="font-bold uppercase text-mlg md:text-dlg mb-2">
            {" "}
            {Infos.Links.products.name}{" "}
          </span>
          <li className="text-opacity-60 mb-1">
            <Link to="/online-payment">
              {" "}
              {Infos.Links.products.items[0].title}
            </Link>
          </li>
          <li className="text-opacity-60 mb-1">
            <Link to="/offline-payment">
              {" "}
              {Infos.Links.products.items[1].title}
            </Link>
          </li>
          <li className="text-opacity-60 mb-1">
            <Link to="/shareLink-payment">
              {" "}
              {Infos.Links.products.items[2].title}
            </Link>
          </li>
          <li className="text-opacity-60 mb-1">
            <Link to="/digital-finance">
              {" "}
              {Infos.Links.products.items[3].title}
            </Link>
          </li>
        </ul>
        <ul className="grid grid-flow-row gap-y-2 mb-6 md:mb-0">
          <span className="font-bold uppercase text-mlg md:text-dlg mb-2">
            {Infos.Links.developers}
          </span>
          <li className="text-opacity-60 mb-1">
            <Link to="/docs">Documentation</Link>
          </li>
        </ul>
        <ul className="grid grid-flow-row gap-y-2 mb-6 md:mb-0">
          <span className="font-bold uppercase text-mlg md:text-dlg mb-2">
            {Infos.Links.company.name}
          </span>
          <li className="text-opacity-60 mb-1">
            <Link to="/company">{Infos.Links.company.items[0]}</Link>
          </li>
          <li className="text-opacity-60 mb-1">
            <Link to="/contact-us">{Infos.Links.company.items[1]}</Link>
          </li>
          <li className="text-opacity-60 mb-1">
            <Link to="/blog">{"Blog"}</Link>
          </li>
        </ul>  
        <ul className="grid grid-flow-row gap-y-2 mb-6 md:mb-0">
            <span className="font-bold uppercase text-mlg md:text-dlg mb-2">
              {siteMap.links[0]}
            </span>
            <li className="text-opacity-60">
              <Link to="/"> {siteMap.links[1]}</Link>
            </li>
            <li className="text-opacity-60">
              <Link to="/pricing">{Infos.Links.price}</Link>
            </li>
            <li className="text-opacity-60">
              <Link to="/sitemap"> {siteMap.links[3]}</Link>
            </li>
            <li className="text-opacity-60">
              <Link to="/login"> {siteMap.links[4]}</Link>
            </li>
            <li className="text-opacity-60">
              <Link to="/register"> {siteMap.links[5]}</Link>
            </li>
          </ul>
          <ul className="grid grid-flow-row gap-y-2 mb-6 md:mb-0">
            <span className="font-bold uppercase text-mlg md:text-dlg mb-2">
            {siteMap.legal[0]}
            </span>
            <li className="text-opacity-60">
              <Link to="/terms-and-conditions">{siteMap.legal[1]}</Link>
            </li>
            <li className="text-opacity-60">
              <Link to="/terms-and-conditions">{siteMap.legal[2]}</Link>
            </li>
          </ul>
      </nav>
    </Wrapper>
  );
}
