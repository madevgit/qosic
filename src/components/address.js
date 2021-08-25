import { useState } from "react";
import { media } from "../libs/media";
const { Benin, Nigeria, Togo } = media.Flags;
const { check } = media.Icons[2];

const CountryAddress = [
  {
    name: "Benin",
    mail: "info@qosic.com",
    Location: `LOT: 902 – Maison Houedanou Leonard, Quartier Sikecodji, Cotonou        `,
  },
  {
    name: "Nigeria",
    mail: "info@qosic.com",
    Location: `4th floor, Polystar Building, Second Roundabout, Lekki, Lagos`,
  },
  {
    name: "Togo",
    mail: "info@qosic.com",
    Location: `BE Ahligo, Rue KONDA, Maison AGOSSOU Amouzouvi, Lome`,
  },
];

export default function Address({ className, textColor = false }) {
  const [CountryNumber, setNumber] = useState(0);
  return (
    <div className={className}>
      <div className="flex justify-around items-center">
        <button
          onClick={() => setNumber(0)}
          className="relative inline-block h-8 w-10 overflow-hidden rounded-full m-2 focus:outline-none"
          type="button"
        >
          <div
            className={`bg-qosblue bg-opacity-50 ${
              CountryNumber !== 0 ? "scale-x-0" : "scale-x-100"
            } transform duration-500 origin-left h-full w-full rounded-full absolute`}
          >
            <img
              src={check}
              alt="check-icon"
              className="h-1/2 w-1/2 mt-2 opacity-80"
            />
          </div>
          <img src={Benin} className="h-full w-full rounded-md" alt="benin" />
        </button>
        <button
          onClick={() => setNumber(1)}
          className="relative inline-block h-8 w-10 overflow-hidden rounded-full m-2 focus:outline-none"
          type="button"
        >
          <div
            className={`bg-qosblue bg-opacity-50 ${
              CountryNumber !== 1 ? "scale-x-0" : "scale-x-100"
            } transform duration-500 origin-left h-full w-full rounded-full absolute`}
          >
            <img
              src={check}
              alt="check-icon"
              className="h-1/2 w-1/2 mt-2 opacity-80"
            />
          </div>
          <img src={Nigeria} className="h-full w-full rounded-md" alt="benin" />
        </button>
        <button
          onClick={() => setNumber(2)}
          className="relative inline-block h-8 w-10 overflow-hidden rounded-full m-2 focus:outline-none"
          type="button"
        >
          <div
            className={`bg-qosblue bg-opacity-50 ${
              CountryNumber !== 2 ? "scale-x-0" : "scale-x-100"
            } transform duration-500 origin-left h-full w-full rounded-full absolute`}
          >
            <img
              src={check}
              alt="check-icon"
              className="h-1/2 w-1/2 mt-2 opacity-80"
            />
          </div>
          <img src={Togo} className="h-full w-full rounded-md" alt="benin" />
        </button>
      </div>
      <div className="mt-4 grid grid-flow-row gap-y-4">
        <div>
          <p className={`${textColor}`}>
            <span className="fi text-mlg fi-rr-envelope inline-block"></span>
            <span className="ml-4 text-msm">
              {CountryAddress[CountryNumber].mail}{" "}
            </span>
          </p>
        </div>
        <p className={`${textColor}`}>
          <span className="fi text-mlg fi-rr-location-alt inline-block"></span>
          <span className="ml-4 text-msm">
            {CountryAddress[CountryNumber].Location}{" "}
          </span>
        </p>
      </div>
    </div>
  );
}
