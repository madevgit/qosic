import { useEffect, useState, useRef } from "react";
import IntlTelInput from "react-intl-tel-input";
import { media } from "../../libs/media";
import Wrapper from "../../components/sectionWrapper";
import Messages from "./translations/index.json";
import InputsText from "../../translations/input.json";
import { useLangContext } from "../../components/translateContext";
export default function RegisterPage() {
  const { Lang } = useLangContext();
  const Infos = { msg: Messages[Lang], input: InputsText[Lang] };
  useEffect(() => {
    let stepForm = document.querySelector("#stepForm");
    let formWidth = stepForm.clientWidth;
    let CurrentScroll = stepForm.scrollLeft;
    let currentPos = 1;

    stepForm.querySelectorAll("input").forEach((input) => {
      input.addEventListener("focus", function (e) {
        stepForm.scrollTo({
          left: formWidth * (this.parentElement.parentElement.id - 1),
          behavior: "smooth",
        });
      });
    });
    document.querySelectorAll(".controls").forEach((buttonControl) => {
      buttonControl.addEventListener("click", function (e) {
        currentPos = +(CurrentScroll / formWidth);

        if (CurrentScroll < formWidth * 2 && this.id === "next") {
          document
            .querySelectorAll(".stepStatus")
            [currentPos].classList.toggle("active");
          document
            .querySelectorAll(".stepStatus")
            [currentPos + 1].classList.add("active");
          document
            .querySelectorAll(".stepStatus")
            [currentPos].classList.add("passed");
          CurrentScroll += formWidth;
          stepForm.scrollTo({ left: CurrentScroll, behavior: "smooth" });
        }

        if (CurrentScroll > 0 && this.id === "prev") {
          document
            .querySelectorAll(".stepStatus")
            [currentPos].classList.toggle("active");
          document
            .querySelectorAll(".stepStatus")
            [currentPos - 1].classList.toggle("passed");
          document
            .querySelectorAll(".stepStatus")
            [currentPos - 1].classList.add("active");

          CurrentScroll -= formWidth;
          stepForm.scrollTo({ left: CurrentScroll, behavior: "smooth" });
        }

        if (CurrentScroll === formWidth * 2) {
          setTimeout(() => {
            document.querySelector("#next").setAttribute("form", "stepForm");
            document
              .querySelector("#next")
              .firstChild.replaceWith(Infos.msg.registerButton);
          });
        } else {
          document.querySelector("#next").removeAttribute("form");
          document
            .querySelector("#next")
            .firstChild.replaceWith(Infos.msg.nextButton);
        }
        if (CurrentScroll > 0) {
          document.querySelector("#prev").hidden = false;
        } else {
          document.querySelector("#prev").hidden = true;
        }
      });
    });
  }, [Infos.msg.registerButton, Infos.msg.nextButton]);
  return (
    <Wrapper
      style={{
        background: "url('./pictures/authpageBackground.png')",
        backgroundSize: "100% 1%",
      }}
    >
      <div className="block w-12/12 max-w-lg px-4 pricingCard py-4 mx-auto my-24 rounded-xl">
        {Lang === "en" ? (
          <h3 className="text-center">
            {" "}
            {Infos.msg.Title0}{" "}
            <span className="text-qosorange text-opacity-95">
              {" "}
              {Infos.msg.Title1}{" "}
            </span>{" "}
            {Infos.msg.Title2}
          </h3>
        ) : (
          <h3 className="text-center">
            {" "}
            {Infos.msg.Title0} {Infos.msg.Title1}
            <span className="text-qosorange text-opacity-95">
              {" "}
              {Infos.msg.Title2}{" "}
            </span>{" "}
          </h3>
        )}
        <div className="my-4 w-5/12 md:w-3/12 mx-auto h-8 flex items-center justify-between">
          <button id="0" className="stepStatus active">
            1
          </button>
          <button id="1" className="stepStatus">
            2
          </button>
          <button id="2" className="stepStatus">
            3
          </button>
        </div>
        <form
          id="stepForm"
          className="overflow-x-hidden hideScroll flex max-w-full"
        >
          <div className="min-w-full md:px-8 max-w-full" id="1">
            <div className="mx-auto w-full px-2">
              <label className="block"> {Infos.input.firstname.label} </label>
              <input
                className=""
                name="firstname"
                required
                placeholder={Infos.input.firstname.placeholder}
              />
            </div>
            <div className="mt-6 mx-auto w-full px-2">
              <label className="block"> {Infos.input.lastname.label}</label>
              <input
                className=" "
                name="lastname"
                required
                placeholder={Infos.input.lastname.placeholder}
              />
            </div>
            <div className="mt-6 mx-auto w-full px-2">
              <label className="block"> {Infos.input.tel.label}</label>
              <IntlTelInput
                onlyCountries={["bj", "tg"]}
                telInputProps={{ required: true }}
                preferredCountries={["bj", "tg"]}
              />
            </div>
          </div>
          <div className="min-w-full md:px-8 max-w-full" id="2">
            <div className="mx-auto w-full px-2">
              <label className="block">{Infos.input.business.label}</label>
              <input
                className=" "
                name="bname"
                type="text"
                required
                placeholder={Infos.input.business.placeholder}
              />
            </div>
            <div className="mt-6 mx-auto w-full px-2">
              <label className="block"></label>
              <textarea
                name="description"
                placeholder={Infos.input.descriptionB.placeholder}
              ></textarea>
            </div>
            <div className="mt-4 mx-auto w-full px-2">
              <label className="block">
                {" "}
                {Infos.input.file.label}{" "}
                <span className="text-small">{Infos.input.file.side}</span>{" "}
              </label>
              <FilesUploader text={Infos.input.file.placeholder} />
            </div>
          </div>
          <div className="min-w-full md:px-8 max-w-full" id="3">
            <div className=" mx-auto w-full px-2">
              <label className="block">{Infos.input.email.label}</label>
              <input
                className=""
                name="bname"
                type="email"
                required
                placeholder={Infos.input.email.placeholder}
              />
            </div>
            <div className="mt-6 mx-auto w-full px-2">
              <label className="block">{Infos.input.password.label}</label>
              <input className="" name="lastname" type="password" required />
            </div>
            <div className="mt-6 mx-auto w-full px-2">
              <label className="block">{Infos.input.passwordC.label}</label>
              <input className="" name="lastname" type="password" required />
            </div>
            <div className="mt-6 mx-auto w-full px-2">
              <input id="privacy" type="checkbox" name="privacy" required />
              <label htmlFor="privacy" className="text-msm font-normal ml-4">
                {Infos.input.checkTerms.label}
              </label>
            </div>
          </div>
        </form>
        <div className="font-bold text-qosblue md:w-8/12 mx-auto flex justify-around  mt-4">
          <button
            hidden
            id="prev"
            className="controls shadow-lg bg-qosgray bg-opacity-80 py-2 px-3 rounded-lg text-mlg"
          >
            <span className="fi fi-rr-arrow-left text-msm"></span>{" "}
            {Infos.msg.backButton}
          </button>
          <button
            id="next"
            type="submit"
            className="controls shadow-lg bg-qosgray bg-opacity-80 py-2 px-3 rounded-lg text-mlg"
          >
            {Infos.msg.nextButton}{" "}
            <span className="fi inline-block align-bottom ml-4 fi-rr-arrow-right text-msm"></span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export function FilesUploader({ text }) {
  const addFileRef = useRef();
  const [Files, setFiles] = useState({
    array: [],
    list: new DataTransfer(),
  });
  function filesToArray(files) {
    let filesArray = [];
    for (let i = 0; i < files.length; i++) {
      filesArray.push(files.item(i));
    }
    return filesArray;
  }

  function handleFileList(e) {
    let files = e.target.files;
    let array = [];
    let previousFiles = Files.list;
    for (let i = 0; i < files.length; i++) {
      previousFiles.items.add(files.item(i));
    }
    e.target.files = previousFiles.files;
    array = filesToArray(previousFiles.files);
    setFiles({ array: array, list: previousFiles });
  }

  function delFile(index, e) {
    let dt = new DataTransfer();
    let files = addFileRef.current.files;
    for (let i = 0; i < files.length; i++) {
      if (index !== i) {
        dt.items.add(files.item(i));
      }
    }
    addFileRef.current.files = dt.files;
    setFiles({ array: filesToArray(dt.files), list: dt });
  }

  return (
    <div className="flex h-24 justify-between">
      <div
        onClick={() => addFileRef.current.click()}
        className="w-4/12 md:w-3/12 cursor-pointer rounded-xl my-2 border-2 overflow-hidden border-dashed border-qosdark border-opacity-40 p-2 text-center"
      >
        <img
          src={media.Icons[0].upload}
          className="opacity-70 md:h-11 mx-auto"
          alt="hello"
        />
        <input
          ref={addFileRef}
          onChange={handleFileList}
          className="hidden"
          type="file"
          multiple
        />
        <span className="text-small text-qosdark text-opacity-70">{text}</span>
      </div>
      <div className="py-2 w-7/12 md:w-8/12 md:grid grid-cols-2 gap-x-4 max-h-full overflow-auto hideScroll">
        {Files.array.map((file, index) => (
          <File key={index} index={index} name={file.name} delFunc={delFile} />
        ))}
      </div>
    </div>
  );
}

export function File({ delFunc, name, index }) {
  return (
    <div className="p-1 my-1 bg-qosgray bg-opacity-80 h-8 shadow-md items-center rounded-md justify-between flex">
      <img
        src={media.Icons[0].file}
        className="opacity-70 h-6 p-1"
        alt="hello"
      />
      <p className="text-msm w-7/12 truncate mx-2">{name}</p>
      <button
        onClick={(e) => delFunc(index, e)}
        type="button"
        className="p-1 h-6 w-6 block"
      >
        <img
          src={media.Icons[0].delete}
          className="h-full w-full opacity-70"
          alt="deleteButton"
        />
      </button>
    </div>
  );
}
