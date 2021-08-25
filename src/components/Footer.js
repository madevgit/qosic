import { Link, useLocation } from "react-router-dom";
import Address from "./address";
import Dropdown from "./dropdown";
import Wrapper from "./sectionWrapper";
import Messages from "./translations/Navbar.json";
import { useLangContext } from "./translateContext";
import { media } from "../libs/media";
import siteMapMsg from "../page/sitemap/translations/index.json";
import { useEffect, useState } from "react";

export default function Footer() {
  const { pathname } = useLocation();
  const [hide, setHide] = useState(false);
  const { Lang } = useLangContext();
  const Infos = Messages[Lang];
  const siteMap = siteMapMsg[Lang];
  const Trad = {
    fr: "© Copyright 2021 | Thème par QoS Integrated Center | Tous droits réservés",
    en: "© Copyright 2021 | Theme by QoS Integrated Center | All Rights Reserved",
  };
  useEffect(() => {
    if (/\/docs/.test(pathname) || /\/blog/.test(pathname)) {
      window.scrollTo(0, 0);
      setHide(true);
    } else {
      setHide(false);
    }
  }, [pathname]);
  return (
    <footer
      className={`text-msm navBack bg-opacity-80 md:text-dsm relative ${
        hide && "hidden"
      }`}
    >
      <div className="bg-qosdark bg-opacity-40 absolute h-full w-full z-20"></div>
      <Wrapper
        childrenClassName="grid grid-flow-row content-center gap-y-6"
        className="py-6 border-b-2 border-qosgray border-opacity-50 text-qosgray relative z-30 text-opacity-70 mx-auto"
      >
        <div className="flex justify-between">
          <Link to="/">
            <div className="h-8 w-16 md:w-32 md:h-16 lg:w-32 lg:h-16 md:self-center">
              <img
                src={media.Logos.qos.qosLogoWhite}
                alt="QOS_logo"
                className="h-full w-full"
              />
            </div>
          </Link>
          <Dropdown />
        </div>
        <nav className="md:flex justify-between border-b border-qosgray border-opacity-50 pb-4 items-start font-medium md:font-normal md:mt-5">
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
        <nav className="md:mt-5">
          <Address
            className="max-w-xs w-64 mx-auto md:mx-0"
            textColor={`text-qosgray text-opacity-70`}
          />
        </nav>
      </Wrapper>
      <Wrapper className="bg-qosdark bg-opacity-70 h-16 text-qosgray text-opacity-70 text-msm md:text-dsm text-center py-4">
        <span> {Trad[Lang]} </span>
      </Wrapper>
    </footer>
  );
}
