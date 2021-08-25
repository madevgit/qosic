import { useEffect, useState } from "react";
import { media } from "../../libs/media";
import buttonText from "../../translations/button.json";
import { useLangContext } from "../../components/translateContext";
import Wrapper from "../../components/sectionWrapper";
import {
  Link,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import CodeBoard from "../../components/codeBoard";
import { Code } from "../../libs/codeSamples";
import SimpleCodeBoard from "../../components/simpleCodeboard";
import Prism from "prismjs";
const { wordpress, github } = media.Logos.other;
const { qosLogoBlack } = media.Logos.qos;

export default function DevelopersPage() {
  const [Open, setOpen] = useState(false);
  const { path } = useRouteMatch();
  return (
    <div className="relative px-6  md:px-0 lg:px-8 xl:px-8 pt-24">
      <HeaderDocs Open={Open} setOpen={setOpen} />
      <ApiDocs Open={Open} setOpen={setOpen} />
    </div>
  );
}

export function NavsTabs({
  options,
  activeStyle,
  notActiveStyle,
  mainStyle,
  components,
}) {
  const [active, setActive] = useState(0);
  const current = options[active];
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <>
      <div className={mainStyle}>
        {options.map((option, index) => (
          <button
            onClick={() => setActive(index)}
            className={`${
              active === index ? activeStyle : notActiveStyle + " opacity-80"
            } p-2 transform transition-all outline-none focus:outline-none duration-500`}
            key={index + "option"}
          >
            {" "}
            {option.name}{" "}
          </button>
        ))}
      </div>
      {current.content}
    </>
  );
}

export function JsLibrary() {
  return (
    <div className="">
      <div className="bg-qosgray py-5 px-4 shadow-md mb-5 items-center w-full rounded-lg flex">
        <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
        <a
          href="#link"
          className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"
        >
          {" "}
          clone the full code repositry here{" "}
        </a>
      </div>
      <ol className="list-decimal w-11/12 font-bold mx-auto">
        <li className="mb-2">
          <p className="font-normal font-msm md:font-dsm text-qosdark text-opacity-70">
            {" "}
            Include the file momo.bundle.js in your project
          </p>
        </li>
        <li className="mb-2">
          <p className="font-normal font-msm md:font-dsm text-qosdark text-opacity-70">
            Create a div tag at the location where you want to use the API (with
            a unique id ex: id= “momo”)
          </p>
        </li>
        <li className="mb-2">
          <p className="font-normal font-msm md:font-dsm text-qosdark text-opacity-70">
            To display the form on page, create the new instance for
            MomoControler class, see example
          </p>
          <p className="font-bold">Ex:</p>
          <CodeBoard
            modes={[
              {
                name: "JS Library sample",
                code: `var instance = new MomoControler(idDiv,clientId,username,passeword,montant,option)`,
                language: "javascript",
              },
            ]}
          />
        </li>
        <li className="mb-2">
          <p className="font-normal font-msm md:font-dsm text-qosdark text-opacity-70">
            {" "}
            The following describes the important element required to be sent
            for display for
          </p>
        </li>
      </ol>
      <table className="my-8 text-msm md:text-dsm border-collapse border-qosdark">
        <thead>
          <th>Element</th>
          <th>Type</th>
          <th>Decription</th>
        </thead>
        <tbody>
          <tr>
            <td className="">idDiv</td>
            <td>
              <CodeBlock value="String:Required" />
            </td>
            <td className=""> div id </td>
          </tr>
          <tr>
            <td>clienId</td>
            <td>
              <CodeBlock value="String:Required" />
            </td>
            <td>client id</td>
          </tr>
          <tr>
            <td>username</td>
            <td className="text-qosred font-normal">
              <CodeBlock value="String:Required" />
            </td>
            <td>username </td>
          </tr>
          <tr>
            <td>password</td>
            <td>
              <CodeBlock value="String:Required" />
            </td>
            <td>client password </td>
          </tr>
          <tr>
            <td>montant</td>
            <td className="text-qosred font-normal">
              <CodeBlock value="Number:Required" />
            </td>
            <td> amount to be send</td>
          </tr>
          <tr>
            <td>option</td>
            <td className="text-qosred font-normal">
              <CodeBlock value="Object:Required" />
            </td>
            <td>
              <SimpleCodeBoard
                code={`{\n    baseDirectory:'String:required', \n    pathImage:'String:optional', \n    textIntro:'string:optional', \n    business:'string:optional' \n  }`}
                language="jq"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <CodeBoard modes={Code.Libs.javascript} />
    </div>
  );
}
export function PhpLibrary() {
  return (
    <div>
      <div className="bg-qosgray py-5 px-4 shadow-md mb-5 items-center w-full rounded-lg flex">
        <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
        <a
          href="#link"
          className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"
        >
          {" "}
          clone the full code repositry here{" "}
        </a>
      </div>
      <CodeBoard modes={Code.Libs.php} />
    </div>
  );
}
export function DjangoLibrary() {
  return (
    <div>
      <div className="bg-qosgray py-5 px-4 shadow-md mb-5 items-center w-full rounded-lg flex">
        <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
        <a
          href="#link"
          className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"
        >
          {" "}
          clone the full code repositry here{" "}
        </a>
      </div>
      <CodeBoard modes={Code.Libs.django} />
    </div>
  );
}
export function LaravelLibrary() {
  return (
    <div>
      <div className="bg-qosgray py-5 px-4 shadow-md mb-5 items-center w-full rounded-lg flex">
        <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
        <a
          href="#link"
          className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"
        >
          {" "}
          clone the full code repositry here{" "}
        </a>
      </div>
      <div className="border-2 p-2 text-qosdark text-opacity-70 max-w-max border-qosred border-opacity-30 rounded-lg mb-5 text-center">
        <span className="fi fi-rr-info text-qosred text-opacity-70  inline-block mr-2"></span>
        <span>
          You need to install <b>Guzzle first</b>{" "}
        </span>
      </div>
      <CodeBoard modes={Code.Libs.laravel} />
    </div>
  );
}

export function HeaderDocs({ Open, setOpen }) {
  const { Lang } = useLangContext();
  const { pathname } = useLocation();
  const [stickyDocsHeader, setSticky] = useState(false);
  useEffect(() => {
    if (pathname !== "/docs") {
      setSticky(true);
    } else {
      setSticky(false);
    }
    function Sticky() {
      if (window.scrollY) {
        setSticky(true);
      } else {
        if (pathname !== "/docs") {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    }
    window.addEventListener("scroll", Sticky);
    return () => {
      window.removeEventListener("scroll", Sticky);
    };
  }, [pathname]);
  return (
    <header
      id="docsHeader"
      className={`${
        stickyDocsHeader ? "z-50 scale-y-100" : "scale-y-100"
      } w-full origin-top bg-qosgray md:bg-opacity-100 px-3 md:px-0 lg:px-8 transform duration-500 transition-all z-50 fixed top-0 py-4 left-0`}
    >
      <div className="flex justify-between mx-auto md:mx-4">
        <Link to="/docs" className="max-h-full h-full md:flex items-center">
          <img
            src={qosLogoBlack}
            alt="qos_logo"
            className="block h-full w-10 md:w-14"
          />
          <h4 className="text-qosorange md:font-normal mx-auto block">Docs</h4>
        </Link>
        <div className="flex -mt-2 relative w-8/12 max-w-md h-full mr-2">
          <input
            type="text"
            name="qossearch"
            className="border-none bg-qosdark bg-opacity-10 rounded-full pr-12 h-9"
          />
          <button className="w-8 h-8 absolute bg-qosdark bg-opacity-40 shadow text-qosgray right-0.5 top-2.5 rounded-full pt-1">
            <span className="fi fi-rr-search"></span>
          </button>
        </div>
        <div className="hidden lg:block justify-between w-4/12 xl:w-3/12">
          <Link
            to="/login"
            className="p-2 inline-block btn-sm max-w-max mx-auto m-2 font-medium"
          >
            {buttonText[Lang].logInButton}
            <span className="fi fi-rr-angle-small-right text-msm"></span>
          </Link>
          <Link
            to="/register"
            className={`p-2 inline-block rounded-full px-3 shadow-lg font-medium btn-sm max-w-max mx-auto text-qosgray text-opacity-90 m-2 bg-qosorange`}
          >
            {buttonText[Lang].registerButton}
          </Link>
        </div>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          id="menuToggler"
          className="text-mH3 md:hidden relative h-8 w-8 p-2 rounded-full focus:outline-none overflow-hidden"
        >
          <span
            className={`fi transform transition-all duration-500 absolute mx-auto block top-1 left-1.5 fi-rr-menu-burger ${
              Open ? "scale-y-0 rotate-45" : "scale-y-100 rotate-0"
            }`}
          ></span>
          <span
            className={`fi transform transition-all duration-500 absolute mx-auto block top-1 left-1.5 fi-rr-cross ${
              Open ? "rotate-0 scale-x-100" : "scale-x-0 rotate-45"
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
}

export function ApiDocs({ Open, setOpen }) {
  const [stickyDocsHeader, setSticky] = useState(false);
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    document.querySelectorAll(".docslinks").forEach(
      (link) => {
        if (link.href === `${window.location.href}`) {
          link.classList.add("text-qosblue");
        } else {
          link.classList.remove("text-qosblue");
        }
      },
      [pathname]
    );
  });
  return (
    <section className="md:flex w-ful">
      <nav
        id="docsNavs"
        className={`w-50 grid items-center justify-center md:justify-start md:w-72 md:rounded-none transform transition-all md:transform-none duration-500 md:duration-75 fixed md:top-0 md:left-0 px-6 bg-qosgray rounded-md -mt-6 md:-mt-0 right-0 z-20 ${
          Open ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <ul className="w-full">
          <Link
            onClick={() => setOpen(false)}
            to={`${path}`}
            className="py-2 md:text-dlg text-left ml-2 font-bold block docslinks"
          >
            Overview
          </Link>
          <li>
            <div className="flex h-8 py-2">
              <h4 className="md:text-dlg self-center">API Documentation</h4>
              <span className="fi fi-rr-angle-small-right"></span>
            </div>
            <p className="flex flex-col">
              <Link
                onClick={() => setOpen(false)}
                to={`${path}/api`}
                className="py-1 docslinks"
              >
                Introduction
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to={`${path}/api/test`}
                className="py-1 docslinks"
              >
                Test
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to={`${path}/api/auth`}
                className="py-1 docslinks"
              >
                Authentication
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to={`${path}/api/security`}
                className="py-1 docslinks"
              >
                Security
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to={`${path}/api/payment`}
                className="py-1 docslinks"
              >
                Payment
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to={`${path}/api/refund`}
                className="py-1 docslinks"
              >
                Refund
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to={`${path}/api/transaction`}
                className="py-1 docslinks"
              >
                Transaction
              </Link>
            </p>
          </li>
          <li>
            <div className="flex h-8 py-2">
              <h4 className="md:text-dlg self-center">
                Plugins and Libraries{" "}
              </h4>
              <span className="fi fi-rr-angle-small-right"></span>
            </div>
            <p className="flex flex-col">
              <Link
                onClick={() => setOpen(false)}
                to={`${path}/plugins`}
                className="py-1"
              >
                Plugins
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to={`${path}/libraries`}
                className="py-1"
              >
                Libraries
              </Link>
            </p>
          </li>
          <li>
            <div className="flex h-8 py-2">
              <h4 className="md:text-dlg self-center">Tutorials</h4>
              <span className="fi fi-rr-angle-small-right"></span>
            </div>
            <p className="flex flex-col">
              <Link onClick={() => setOpen(false)} className="py-1">
                Create payment link
              </Link>
            </p>
          </li>
          <li className></li>
        </ul>
      </nav>
      <div className="md:absolute right-4 lg:right-32 md:w-7/12 lg:w-8/12">
        <Route exact path={`${path}`}>
          <h2>Documentation</h2>
          <div>
            <p className="pt-4">
              This document describes how a third party will connect to Mobile
              Payment interface from QOS-IC. Note that all all data formats and
              response definitions are in conformance with the REST standard.
            </p>
            <img src="#none" className="hidden" alt="docsillustrtion" />
          </div>
        </Route>
        <Route exact path={`${path}/api`}>
          <h2>Introduction</h2>
          <div className="">
            <div>
              <p className="">
                A MobilePayment© transaction provides Mobile Money capability
                application programming interfaces (APIs) for third-party
                applications (App for short) to connect to it and use its Mobile
                Money capability for Bill Payment, Depositing Money in
                Subscribers account & Querying Subscriber’s account in a
                third-party system. The subsequent sections show the message
                structure for Mobile Payment
              </p>
            </div>
            <div className="mt-4">
              <div className="max-w-max">
                <span className="font-mono font-bold block text-mmd">
                  API baseUrl:
                </span>
                <SimpleCodeBoard
                  code={`http://74.208.84.251:8221/QosicBridge/user`}
                  language="http"
                />
              </div>
            </div>
          </div>
        </Route>
        <Route exact path={`${path}/api/test`}>
          <h3 className="my-4">API Test informations</h3>
          <p className="">
            Before you go to production you need to test your QOS API
            integration without risk. So OOS give possibility to test
            integration safly way.
          </p>
          <div>
            <h4 className="text-mdm font-normal text-opacity-80 mt-8 text-qosdark">
              Authentification informations
            </h4>
            <div className="">
              <div className="md:w-6/12">
                <p className="flex items-center mt-2">
                  <span className="font-medium text-qosdark text-opacity-80 inline-block mr-4">
                    username:
                  </span>
                  <CodeBlock value="USR06" />
                </p>
                <p className="flex items-center mt-2">
                  <span className="font-medium text-qosdark text-opacity-80 inline-block mr-4">
                    password:
                  </span>
                  <CodeBlock value="YG739G5XFVPYYV4ADJVW" />
                </p>
              </div>
              <div>
                <NavsTabs
                  options={[
                    {
                      name: "MTN Benin API",
                      content: <MtnTestAuth index="0" />,
                    },
                    {
                      name: "MOOV Africa API",
                      content: <MtnTestAuth index="1" />,
                    },
                  ]}
                  activeStyle="btn-primary scale-120 bg-opacity-80"
                  mainStyle={`p-2 flex mt-4 w-full left-0 mb-5 text-mmd md:text-dmd`}
                />
              </div>
            </div>
          </div>
        </Route>
        <Route exact path={`${path}/api/auth`}>
          <div id="auth">
            <h2>Authentication</h2>
            <p className="mb-4">
              Basic authentication is a simple authentication scheme built into
              the HTTP protocol. The client sends HTTP requests with the
              Authorization header that contains the word Basic word followed by
              a space and a base64-encoded string username:password. For
              example, to authorize as demo / p@55w0rd the client would send
            </p>
            <CodeBlock value="Authorization: Basic ZGVtbzpwQDU1dzByZA==" />
          </div>
        </Route>
        <Route exact path={`${path}/api/security`}>
          <div id="security">
            <p className="">
              Requests will be sent over <CodeBlock value="HTTPS" /> only. Each
              request is also sent using a Basic Authentication. With Basic
              Authentication, clients send its Base64 encoded credentials with
              each request, using HTTP [Authorization] header. That means each
              request is independent of other request and server may/does not
              maintain any state information for the client.
            </p>
          </div>
        </Route>
        <Route exact path={`${path}/api/payment`}>
          <div id="payment">
            <div className="">
              <h2 className="font-medium">Payment</h2>
              <p className="my-4 lg:mb-12">
                The RequestPayment is a request to debit mobile money from
                subscribers account. Partners must code the App based on the API
                field requirements so that the App can send correct requests
                accordingly.
              </p>
              <div className="max-w-max">
                <span className="font-mono font-bold block text-mmd">
                  Endpoint URI:
                </span>
                <SimpleCodeBoard
                  code={Code.Endpoints.payment.uri}
                  language="uri"
                />
              </div>
              <div className="lg:flex justify-between items-center w-full">
                <div className="">
                  <table className="docs mt-4 ml-0 text-msm md:text-dsm border-collapse mb-8">
                    <thead>
                      <th>Element</th>
                      <th>Type</th>
                      <th>Decription</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="">msisdn</td>
                        <td className="text-qosred font-normal">
                          <CodeBlock value="string:required" language="code" />
                        </td>
                        <td className=""> transaction reference </td>
                      </tr>
                      <tr>
                        <td>amount</td>
                        <td className="text-qosred font-normal">
                          <CodeBlock value="string:required" language="code" />
                        </td>
                        <td> id of client </td>
                      </tr>
                      <tr>
                        <td>firstname</td>
                        <td className="text-qosred font-normal">
                          <CodeBlock value="string:required" language="code" />
                        </td>
                        <td> id of client </td>
                      </tr>
                      <tr>
                        <td>lastname</td>
                        <td className="text-qosred font-normal">
                          <CodeBlock value="string:required" language="code" />
                        </td>
                        <td> id of client </td>
                      </tr>
                      <tr>
                        <td>transref</td>
                        <td className="text-qosred font-normal">
                          <CodeBlock value="string:required" language="code" />
                        </td>
                        <td> id of client </td>
                      </tr>
                      <tr>
                        <td>clientid</td>
                        <td className="text-qosred font-normal">
                          <CodeBlock value="string:required" language="code" />
                        </td>
                        <td> id of client </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="lg:-mt-20">
                  <div className="lg:flex justify-between">
                    <div className="max-w-max flex  items-center">
                      <span className="fi text-qosgreen md:font-normal text-dmd inline-block mt-4  fi-rr-check"></span>
                      <div className="ml-4">
                        <span className="font-mono font-bold block text-mmd">
                          Succes Code
                        </span>
                        <SimpleCodeBoard
                          code={Code.Endpoints.SuccessCode}
                          language="http"
                        />
                      </div>
                    </div>
                    <div className="max-w-max flex  items-center mb-3">
                      <span className="fi text-qosred md:font-normal text-dmd inline-block mt-4 fi-rr-cross"></span>
                      <div className="ml-4">
                        <span className="font-mono font-bold block text-mmd">
                          Failded Code
                        </span>
                        <SimpleCodeBoard
                          code={Code.Endpoints.FailedCode}
                          language="http"
                        />
                      </div>
                    </div>
                  </div>
                  <CodeBoard modes={Code.Endpoints.payment.states} />
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route exact path={`${path}/api/refund`}>
          <div id="refund">
            <div className="">
              <h2 className="mb-4 font-medium">Refund</h2>
              <p className="mb-4">
                The Refund is a request to reverse mobile money back to the
                Subscriber’s mobile money account. Partners must code the App
                based on the API field requirements so that the App can send
                correct requests accordingly.
              </p>
              <div>
                <span className="font-mono font-bold block text-mmd">
                  Endpoint URI:
                </span>
                <SimpleCodeBoard
                  code={Code.Endpoints.refund.uri}
                  language="URI"
                />
              </div>
              <div className="justify-between items-center lg:flex">
                <div>
                  <table className="docs text-msm md:text-dsm table-fixed border-collapse mt-2 mb-8">
                    <thead>
                      <th>Element</th>
                      <th>Type</th>
                      <th>Decription</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="">transref</td>
                        <td className="text-qosred font-normal">
                          <CodeBlock value="string:required" language="vim" />
                        </td>
                        <td className=""> transaction reference </td>
                      </tr>
                      <tr>
                        <td>clientid</td>
                        <td className="text-qosred font-normal">
                          <CodeBlock value="string:required" language="vim" />
                        </td>
                        <td> id of client </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="">
                  <div className="justify-between max-w-max lg:flex">
                    <div className="max-w-max flex  items-center mr-4">
                      <span className="fi text-qosgreen md:font-normal text-dmd inline-block mt-4 fi-rr-check"></span>
                      <div className="ml-4">
                        <span className="font-mono font-bold block text-mmd">
                          Succes Code
                        </span>
                        <SimpleCodeBoard
                          code={Code.Endpoints.SuccessCode}
                          language="http"
                        />
                      </div>
                    </div>
                    <div className="max-w-max flex items-center">
                      <span className="fi text-qosred md:font-normal text-dmd inline-block mt-4 fi-rr-cross"></span>
                      <div className="ml-4">
                        <span className="font-mono font-bold block text-mmd">
                          Failded Code
                        </span>
                        <SimpleCodeBoard
                          code={Code.Endpoints.FailedCode}
                          language="http"
                        />
                      </div>
                    </div>
                  </div>
                  <CodeBoard modes={Code.Endpoints.refund.states} />
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route exact path={`${path}/api/transaction`}>
          <div id="transaction">
            <div className="">
              <h2 className="mb-4 font-medium">Transaction</h2>
              <p>
                A Get Transaction Status message is a request to get the details
                of an already processed transaction.
              </p>
              <div className="mt-4">
                <span className="font-mono font-bold block text-mmd">
                  Endpoint URI:
                </span>
                <SimpleCodeBoard
                  code={Code.Endpoints.transaction.uri}
                  language="URI"
                />
              </div>
              <div className="justify-between items-center lg:flex">
                <div>
                  <table className="docs text-msm md:text-dsm table-fixed border-collapse mt-2 mb-8">
                    <thead>
                      <th>Element</th>
                      <th>Type</th>
                      <th>Decription</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="">transref</td>
                        <td className="text-qosred font-normal">
                          <CodeBlock value="string:required" language="vim" />
                        </td>
                        <td className=""> transaction reference </td>
                      </tr>
                      <tr>
                        <td>clientid</td>
                        <td className="text-qosred font-normal">
                          <CodeBlock value="string:required" language="vim" />
                        </td>
                        <td> id of client </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="">
                  <div className="justify-between lg:flex max-w-max">
                    <div className="max-w-max flex  items-center">
                      <span className="fi text-qosgreen md:font-normal text-dmd inline-block mt-4  fi-rr-check"></span>
                      <div className="ml-4">
                        <span className="font-mono font-bold block text-mmd">
                          Succes Code
                        </span>
                        <SimpleCodeBoard
                          code={Code.Endpoints.SuccessCode}
                          language="http"
                        />
                      </div>
                    </div>
                    <div className="max-w-max flex  items-center ml-4">
                      <span className="fi text-qosred md:font-normal text-dmd inline-block mt-4 fi-rr-cross"></span>
                      <div className="ml-4">
                        <span className="font-mono font-bold block text-mmd">
                          Failded Code
                        </span>
                        <SimpleCodeBoard
                          code={Code.Endpoints.FailedCode}
                          language="http"
                        />
                      </div>
                    </div>
                  </div>
                  <CodeBoard modes={Code.Endpoints.transaction.states} />
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route exact path={`${path}/plugins`}>
          <section className="">
            <h2 className="font-medium opacity-80 mt-5">Plugins</h2>
            <a
              className="flex bg-qosgray w-64 md:w-65 rounded-lg shadow-md mt-4 p-2 h-16 justify-between items-center"
              href="https://fr.wordpress.org/plugins/qos-payment-gateway/"
            >
              <img
                src={wordpress}
                className="h-11 w-2/12"
                alt="pluginswordpress"
              />
              <div className="w-10/12 pl-4">
                <span className="font-medium inline-block ">
                  Wordpress plugin
                </span>
                <span className="text-small md:text-msm opacity-60 block">
                  Allow you receive money form your wordpress website
                </span>
              </div>
            </a>
            <h3 className="my-8">Integration procedure</h3>
            <ol className="list-decimal font-normal">
              <li>
                {" "}
                <h4 className="font-normal text-mH3">
                  Navigate to the <strong> plug-in</strong> section on your
                  dashbaord
                </h4>{" "}
                
              </li>
            </ol>
          </section>
        </Route>
        <Route exact path={`${path}/libraries`}>
          <section className="min-h-screen">
            <h2 className="mt-5 mb-8">Libraries</h2>
            <NavsTabs
              options={[
                { name: "PHP", content: <PhpLibrary /> },
                { name: "JAVASCRIPT", content: <JsLibrary /> },
                { name: "DJANGO", content: <DjangoLibrary /> },
                { name: "LARAVEL", content: <LaravelLibrary /> },
              ]}
              activeStyle="btn-primary scale-120 shadow-md rounded-md bg-opacity-80"
              mainStyle={`p-2 flex ${
                stickyDocsHeader &&
                "fixed md:static md:bg-opacity-0 bg-qosgray z-50 top-16"
              } w-full left-0 justify-around mb-5 text-mmd md:text-dmd mb-8`}
            />
          </section>
        </Route>
      </div>
    </section>
  );
}

export function CodeBlock({ value }) {
  return (
    <div className="text-msm">
      <pre className="font-mono max-w-full overflow-auto text-qosred text-opacity-80 inline-block p-0.5 bg-qosdark bg-opacity-10 rounded">
        {value}
      </pre>
    </div>
  );
}

export function DevOverview() {
  return (
    <div className="py-4 grid grid-cols-2 gap-x-5 md:w-6/12">
      <Link
        className="text-msm text-center bg-qosgray bg-opacity-90 shadow block h-24 w-full mx-auto mt-4 rounded-md"
        to="/docs/api"
      >
        <div className="h-8 w-8"></div>
        API documention
      </Link>
      <Link
        className="text-msm text-center bg-qosgray bg-opacity-90 shadow block h-24 w-full mx-auto mt-4 rounded-md"
        to="/docs/plugins-and-libraries"
      >
        <div className="h-8 w-8"></div>
        plugins and libraries
      </Link>
    </div>
  );
}

export function MtnTestAuth({ index }) {
  const infos = [
    {
      clientID: "UBHQ",
      Requestpayment:
        "http://74.208.84.251:8221/QosicBridge/user/requestpayment",
      GetTransactionStatus:
        "http://74.208.84.251:8221/QosicBridge/user/gettransactionstatus",
      numeroTest: "+229 67222918",
    },
    {
      clientID: "MOOVTEST",
      Requestpayment:
        "http://74.208.84.251:8221/QosicBridge/user/requestpaymentmv",
      GetTransactionStatus:
        "http://74.208.84.251:8221/QosicBridge/user/gettransactionstatus",
      numeroTest: "+229 99914337",
    },
  ];
  return (
    <div>
      <p className="mt-2 flex items-center">
        <span className="font-medium text-qosdark text-opacity-80 mr-4">
          clientID:
        </span>
        <CodeBlock value={infos[index].clientID} />
      </p>
      <p className=" mt-2">
        <span className="font-medium text-qosdark text-opacity-80 block mr-4">
          Requestpayment endpoint0:
        </span>
        <SimpleCodeBoard code={infos[index].Requestpayment} language="http" />
      </p>
      <p className="mt-2">
        <span className="font-medium text-qosdark text-opacity-80 block mr-4">
          GetTransactionStatus endpoint:
        </span>
        <SimpleCodeBoard
          code={infos[index].GetTransactionStatus}
          language="http"
        />
      </p>
      <p className="mt-2 flex items-center">
        <span className="font-medium text-qosdark text-opacity-80 block mr-4">
          Numéro de test:
        </span>
        <CodeBlock value={infos[index].numeroTest} />
      </p>
    </div>
  );
}
