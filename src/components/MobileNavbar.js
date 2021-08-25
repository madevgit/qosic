import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { media } from '../libs/media'
import { LinkIcon } from './LinkIcon'
import { LinkGroup } from './LinkGroup'
import { useLangContext } from './translateContext'
import Messages from './translations/Navbar.json'
const { online, offline, digitalFinance, shareLink, lowFees } = media.Icons[1]

export function MobileNavbar() {
    const [Open, setOpen] = useState(false)
    const { pathname } = useLocation()
    const { Lang } = useLangContext()
    const Infos = Messages[Lang]
    useEffect(() => {
        setOpen(false)
    }, [pathname])
    return (
        <div>
            <button onClick={() => { setOpen(prev => !prev) }} id="menuToggler" className="text-mH3 lg:hidden relative h-8 w-8 p-2 rounded-full focus:outline-none overflow-hidden">
                <span className={`fi transform transition-all duration-500 absolute mx-auto block top-1 left-1.5 fi-rr-menu-burger ${Open ? 'scale-y-0 rotate-45' : 'scale-y-100 rotate-0'}`} ></span>
                <span className={`fi transform transition-all duration-500 absolute mx-auto block top-1 left-1.5 fi-rr-cross ${Open ? 'rotate-0 scale-x-100' : 'scale-x-0 rotate-45'}`} ></span>
            </button>
            <div id="mobileNav" className={`bg-coolGray-50 left-1/2 ${Open ? '-translate-x-1/2 opacity-100 ml-auto scale-100' : 'translate-x-1/2 ml-10 scale-0 opacity-0'} top-16 transform w-11/12 max-w-sm lg:hidden transition-all duration-500 fixed rounded-md p-4`}>
                <div className="mb-8">
                    <p className="text-mmd font-bold mb-2 text-opacity-50 text-qosdark">{Infos.Links.products.name}</p>
                    <LinkGroup>
                        <LinkIcon name={Infos.Links.products.items[0].title} icon={online} link="/online-payment" />
                        <LinkIcon name={Infos.Links.products.items[1].title} icon={offline} link="/offline-payment" />
                        <LinkIcon name={Infos.Links.products.items[2].title} icon={digitalFinance} link="/shareLink-payment" />
                        <LinkIcon name={Infos.Links.products.items[3].title} icon={shareLink} link="/digital-finance" />
                    </LinkGroup>
                </div>
                <div className="mb-8">
                    <p className="text-mmd font-bold mb-2 text-opacity-50 text-qosdark">{Infos.Links.price}</p>
                    <LinkIcon name={Infos.Links.price} icon={lowFees} link="/pricing" />
                </div>
                <div className="mb-8">
                    <p className="text-mmd font-bold mb-2 text-opacity-50 text-qosdark">{Infos.Links.company.name}</p>
                    <LinkGroup>
                        <LinkIcon name={Infos.Links.company.items[0]} icon={offline} link="/company" />
                        <LinkIcon name={Infos.Links.company.items[1]} icon={offline} link="/contact-us" />
                        <LinkIcon name={"Blog"} icon={offline} link="/blog" />
                    </LinkGroup>
                </div>
                <div className="mb-8">
                    <p className="text-mmd font-bold mb-2 text-opacity-50 text-qosdark">{Infos.Links.developers}</p>
                    <LinkIcon name="Documentation" target="_blank" icon={offline} link="/docs" />
                </div>
                <div className="col-span-2">
                    <Link to="/register" className="p-2 block rounded-full px-3 bg-opacity-90 btn-primary btn-sm max-w-max mx-auto m-2" >
                        {Infos.Links.registerButton}
                    </Link>
                    <Link to="/login" className="p-2 block btn-sm max-w-max mx-auto text-qosdark text-opacity-70 m-2 font-medium" >
                        {Infos.Links.logInButton} <span className="fi fi-rr-angle-small-right text-msm"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
