import Wrapper from "../../components/sectionWrapper";
import { media } from "../../libs/media";

export default function Partners() {
  return (
    <Wrapper
      id="Name"
      className="overflow-hidden py-8 lg:pt-14 -mt-8 md:-mt-4 z-10 bg-qosgray relative"
    >
      <svg width="0" height="0" className="fixed">
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
									L 0,.25
                                    C .35 0, .65 0 1 .25
									L 1,0
									L 1,1
									Z"
            />
          </clipPath>
        </defs>
      </svg>
      <svg width="0" height="0" className="fixed">
        <defs>
          <clipPath id="myCurveMob" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
									L 0,.02
                                    C .35 0, .70 0 1 .05
									L 1,0
									L 1,1
									Z"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 my-8 mx-auto items-center justify-center content-center">
        {media.Logos.LandingCustomers.map((Partner, index) => (
          <img
            key={`customer-${index}`}
            className="mx-auto p-2 bg-opacity-80"
            src={Partner}
            alt="hello part"
          />
        ))}
      </div>
    </Wrapper>
  );
}
