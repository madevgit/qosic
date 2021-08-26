import { Link } from "react-router-dom";

export function LinkIcon({ target, icon, link, name, description = false }) {
  return (
    <Link className="flex items-center group" target={target} to={link}>
      <img
        className="inline-block h-5 w-5 md:h-7 md:w-7"
        src={icon}
        alt="hello"
      />
      <div className="ml-2 group-hover:bg-qosdark">
        <p className="text-msm font-semibold md:text-dsm group-hover">
          {" "}
          {name}{" "}
        </p>
        {description && <p className="text-msm">{description}</p>}
      </div>
    </Link>
  );
}
