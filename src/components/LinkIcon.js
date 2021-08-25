import { Link } from "react-router-dom"

export function LinkIcon({ target, icon, link, name, description = false }) {
    return (
        <Link className="flex items-center" target={target} to={link}>
            <img className="inline-block h-5 w-5 md:h-7 md:w-7" src={icon} alt="hello" />
            <div className="ml-2" >
                <p className="text-msm md:text-dsm font-medium"> {name} </p>
                {description && (<p className="text-msm">
                    {description}
                </p>)}
            </div>
        </Link>
    )
}