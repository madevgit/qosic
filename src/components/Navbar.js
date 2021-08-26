import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { media } from "../libs/media";
import Wrapper from "./sectionWrapper";
import { MobileNavbar } from "./MobileNavbar";
import { LinkGroup } from "./LinkGroup";
import { LinkIcon } from "./LinkIcon";
import { useLangContext } from "./translateContext";
import Messages from "./translations/Navbar.json";
const { online, offline, digitalFinance, shareLink } = media.Icons[1];

export default function Navbar() {
  const [hide, setHide] = useState(false);
  const { pathname } = useLocation();
  const [dark, setDark] = useState(false);
  const [background, setbackground] = useState(false);
  const { Lang } = useLangContext();
  const Infos = Messages[Lang];
  useEffect(() => {
    if (/\/docs/.test(pathname) || "/publish" === pathname) {
      setHide(true);
    } else {
      setHide(false);
    }
    if (pathname !== "/" && pathname !== "/contact-us") {
      setDark(true);
    } else {
      setDark(false);
    }
    function handleScroll(e) {
      if (this.scrollY) {
        setbackground(true);
        setDark(false);
      } else {
        setbackground(false);
        if (pathname !== "/" && pathname !== "/contact-us") {
          setDark(true);
        } else {
          setDark(false);
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <Wrapper
      childrenClassName={`flex justify-between h-8 md:h-10 ${
        dark ? "text-qosdark" : "text-qosgray"
      } text-opacity-70 items-center justify-between`}
      className={`z-50 top-0 py-5 ${background && "navBack shadow-lg"} ${
        hide && "hidden"
      } rounded-none py-4 fixed w-full`}
    >
      <Link to="/">
        <div className="h-full w-16 md:w-20 lg:w-20">
          <img
            src={
              dark ? media.Logos.qos.qosLogoBlack : media.Logos.qos.qosLogoWhite
            }
            className="h-full w-full"
            alt="QOS_LOGO"
          />
        </div>
      </Link>
      <nav id="navbarLink" className="max-h-full w-8/12">
        <ul className="hidden w-full text-mmd items-center justify-end text-opacity-80 font-medium lg:flex">
          <li className="relative group block mx-1.5 lg:mx-2.5 xl:mx-5 ">
            <Link id="product" to="#" className="font-bold hover:text-qosdark">
              {Infos.Links.products.name}
              <span className="fi fi-rr-angle-small-down align-bottom inline-block text-msm ml-1"></span>
            </Link>
            <nav
              id="products"
              className="bg-qosgray z-0 -ml-10 scale-y-0 origin-bottom -mt-24 group-hover:mt-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 transform ease-out  duration-200 rounded-md px-4 absolute p-2 pt-5 min-w-max text-qosdark"
            >
              <LinkGroup>
                <LinkIcon
                  icon={online}
                  name={Infos.Links.products.items[0].title}
                  description={Infos.Links.products.items[0].description}
                  link="/online-payment"
                />
                <LinkIcon
                  icon={offline}
                  name={Infos.Links.products.items[1].title}
                  description={Infos.Links.products.items[1].description}
                  link="/offline-payment"
                />
                <LinkIcon
                  icon={shareLink}
                  name={Infos.Links.products.items[2].title}
                  description={Infos.Links.products.items[2].description}
                  link="/shareLink-payment"
                />
                <LinkIcon
                  icon={digitalFinance}
                  name={Infos.Links.products.items[3].title}
                  description={Infos.Links.products.items[3].description}
                  link="/digital-finance"
                />
              </LinkGroup>
            </nav>
          </li>
          <li className="relative group block mx-1.5 lg:mx-2.5 xl:mx-5 ">
            <Link to="#" className="font-bold hover:text-qosdark">
              {Infos.Links.company.name}
              <span className="fi fi-rr-angle-small-down align-bottom inline-block text-msm ml-1"></span>
            </Link>
            <nav className="bg-qosgray z-0 -ml-10 scale-y-0 origin-bottom -mt-12 group-hover:mt-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 transform ease-out  duration-200 rounded-md px-4 absolute p-2 pt-5 min-w-max text-qosdark">
              <LinkGroup>
                <LinkIcon
                  icon={offline}
                  name={Infos.Links.company.items[0]}
                  link="/company"
                />
                <LinkIcon
                  icon={offline}
                  name={Infos.Links.company.items[1]}
                  link="/contact-us"
                />
                <LinkIcon icon={offline} name={"Blog"} link="/blog" />
              </LinkGroup>
            </nav>
          </li>
          <li className="block mx-1.5 lg:mx-2.5 xl:mx-5">
            <Link
              id="developer"
              target="_blank"
              className="font-bold hover:text-qosdark"
              to="/docs"
            >
              {Infos.Links.developers}
            </Link>
          </li>
          <li className="block mx-1.5 lg:mx-2.5 xl:mx-5">
            <Link className="font-bold hover:text-qosdark" to="/pricing">
              {Infos.Links.price}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden lg:block justify-between w-4/12 xl:w-3/12">
        <Link
          to="/login"
          className="p-2 font-bold inline-block btn-sm max-w-max mx-auto mr-4 hover:text-qosdark m-2"
        >
          {Infos.Links.logInButton}{" "}
          <span className="fi fi-rr-angle-small-right text-msm"></span>
        </Link>
        <Link
          to="/register"
          className={`p-2 font-bold inline-block rounded-full px-3 shadow-lg btn-sm max-w-max mx-auto text-qosgray text-opacity-90 m-2 bg-qosorange`}
        >
          {Infos.Links.registerButton}
        </Link>
      </div>
      <MobileNavbar />
    </Wrapper>
  );
}
