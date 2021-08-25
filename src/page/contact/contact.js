import { useState } from "react";
import Wrapper from "../../components/sectionWrapper";
import Address from "../../components/address";
import IntlTelInput from "react-intl-tel-input";
import Messages from "./translations/index.json";
import { useLangContext } from "../../components/translateContext";
import buttonText from "../../translations/button.json";
import inputText from "../../translations/input.json";
export default function ContactPage() {
  const { Lang } = useLangContext();
  const Infos = {
    msg: Messages[Lang],
    input: inputText[Lang],
    button: buttonText[Lang],
  };
  const [OtherReason, setOtherReason] = useState(false);
  return (
    <div style={{ background: "url('./pictures/ac3.jpg')" }}>
      <Wrapper
        id="Landing"
        childrenClassName="transform md:scale-90"
        className="py-24 md:py-4"
      >
        <h2 className="font-medium text-center text-qosgray md:mt-16 md:w-10/12 mx-auto">
          {Infos.msg.Title}
        </h2>
        <p className="mt-4 md:w-7/12 mx-auto text-center text-qosgray text-mlg md:text-dlg font-medium">
          {Infos.msg.description}
        </p>
        <section className="my-10 md:flex">
          <div className=" md:w-60 mx-auto bg-qosgray p-2 mt-2 shadow-lg px-4  mb-4 rounded-md md:rounded-l-3xl md:rounded-none z-10 ralative">
            <h4 className="font-medium opacity-90 text-dlg text-center my-4">
              {" "}
              {Infos.msg.subTitle}
            </h4>
            <Address className="mx-auto h-40" />
          </div>
          <form className="mx-auto max-w-sm md:max-w-3xl md:-ml-0 -mt-2 bg-qosgray shadow-lg md:pl-8 rounded-lg md:flex flex-wrap px-2 py-4 z-0 relative">
            <div className="mx-auto w-full md:w-1/2  px-2">
              <label className="block"> {Infos.input.firstname.label} </label>
              <input
                className=""
                name="firstname"
                required
                autofocus
                placeholder="your firstname"
              />
            </div>
            <div className="mt-6 mx-auto w-full md:w-1/2 md:mt-0 px-2">
              <label className="block">{Infos.input.lastname.label}</label>
              <input
                className=" "
                name="lastname"
                required
                placeholder={Infos.input.lastname.placeholder}
              />
            </div>
            <div className="mt-6 mx-auto w-full md:w-1/2 md:mt-4 px-2">
              <label className="block">{Infos.input.email.label}</label>
              <input
                className=""
                name="firstname"
                required
                autofocus
                placeholder={Infos.input.email.placeholder}
              />
            </div>
            <div className="mt-6 mx-auto w-full md:w-1/2 md:mt-4 px-2">
              <label className="block">{Infos.input.tel.label}</label>
              <IntlTelInput
                onlyCountries={["bj", "tg"]}
                telInputProps={{ required: true }}
                preferredCountries={["bj", "tg"]}
              />
            </div>
            <label className="block mt-4 px-2">
              {Infos.input.object.label}
            </label>
            <div className="md:flex justify-around w-full">
              <div
                onClick={(e) => setOtherReason(false)}
                className="flex items-end mt-1 mx-auto w-full"
              >
                <input
                  id="commercial"
                  value="commercial"
                  type="radio"
                  name="object"
                  required
                />
                <label htmlFor="commercial" className="text-msm font-normal ">
                  {Infos.input.Reasons[1]}
                </label>
              </div>
              <div
                onClick={(e) => setOtherReason(false)}
                className="flex items-end mt-1 mx-auto w-full"
              >
                <input
                  id="TechSupport"
                  value="TechSupport"
                  type="radio"
                  name="object"
                  required
                />
                <label htmlFor="TechSupport" className="text-msm font-normal ">
                  {Infos.input.Reasons[0]}
                </label>
              </div>
              <div
                onClick={(e) => setOtherReason(e.target.checked)}
                className="flex items-end mt-1 mx-auto w-full"
              >
                <input
                  id="other"
                  value="other"
                  type="radio"
                  name="object"
                  required
                />
                <label htmlFor="other" className="text-msm font-normal ">
                  {Infos.input.Reasons[2]}
                </label>
              </div>
            </div>
            <div
              className={`mx-auto w-full px-2 overflow-hidden transform ${
                OtherReason ? "scale-y-100 h-auto my-2" : "h-0"
              } duration-500`}
            >
              <input
                type="text"
                name="object"
                required
                placeholder="Tell us please "
              />
            </div>
            <div
              className={`mx-auto w-full px-2 mt-4 text-qosdark text-opacity-80`}
            >
              <textarea
                name="message"
                placeholder="Tell us more about your plan"
              ></textarea>
            </div>
            <button className="btn block btn-md bg-qosorange bg-opacity-90 rounded-full px-8 btn-primary mt-4 mx-auto">
              {Infos.button.mailSender}
              <span className="fi fi-rr-paper-plane inline-block ml-2"></span>
            </button>
          </form>
        </section>
      </Wrapper>
    </div>
  );
}
