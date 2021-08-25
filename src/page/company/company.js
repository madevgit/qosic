import { Link } from 'react-router-dom'
import Wrapper from '../../components/sectionWrapper'
import { media } from '../../libs/media'
import Messages from './translations/index.json'
import { useLangContext } from '../../components/translateContext'

export default function EntreprisePage() {
    const { Lang } = useLangContext()
    const Infos = Messages[Lang]
    return (
        <Wrapper className="pt-24" style={{ background: "url('./pictures/authpageBackground.png') 1% 50% rgba(255,255,255,0.1)" }}>
            <h2 className="text-center md:w-10/12 mx-auto"> {Infos.Title} </h2>
            <p className="mt-8 md:w-7/12 mx-auto md:text-center">
                {Infos.description}
            </p>
            <div className="md:flex justify-between">
                <div className="mt-8 md:w-6/12">
                    <h3>
                        {Infos['value'].Title}
                    </h3>
                    <p className="mt-4 md:mt-6 h-20">
                        {Infos['value'].description}
                    </p>
                    <div className="my-8 bg-qosgray bg-opacity-90 grid grid-flow-row gap-y-2 max-w-sm lg:max-w-lg lg:mx-0 mx-auto h-96 rounded-xl shadow-2xl p-4">
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-trophy inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium"> {Infos['value'].Lists[0]}</p>
                        </div>
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-users inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium"> {Infos['value'].Lists[1]}</p>
                        </div>
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-opacity inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium"> {Infos['value'].Lists[2]}</p>
                        </div>
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-following inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium"> {Infos['value'].Lists[3]}</p>
                        </div>
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-diploma inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium"> {Infos['value'].Lists[4]}</p>
                        </div>
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-e-learning inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium"> {Infos['value'].Lists[5]}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:w-6/12">
                    <h3>
                        {Infos['products'].Title}
                    </h3>
                    <p className="mt-4 md:mt-6 h-20">
                        {Infos['products'].description}
                    </p>
                    <div className="my-8 bg-qosdark bg-opacity-90 grid grid-flow-row gap-y-2 max-w-sm lg:max-w-lg lg:mx-0 mx-auto h-96 rounded-xl shadow-sm p-4">
                        <div className="flex items-center rounded-lg px-2">
                            <span className="fi fi-rr-globe inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <div className="">
                                <p className="text-qosgray text-opacity-70">{Infos['products'].Lists[0].name}</p>
                                <span className="text-msm text-qosgray text-opacity-70">
                                    {Infos['products'].Lists[0].description}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center rounded-lg px-2">
                            <span className="fi fi-rr-cloud-disabled inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <div className="">
                                <p className="text-qosgray text-opacity-70">{Infos['products'].Lists[1].name}</p>
                                <span className="text-msm text-qosgray text-opacity-70">
                                    {Infos['products'].Lists[1].description}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center rounded-lg px-2">
                            <span className="fi fi-rr-share inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <div className="">
                                <p className="text-qosgray text-opacity-70">{Infos['products'].Lists[2].name}</p>
                                <span className="text-msm text-qosgray text-opacity-70">
                                    {Infos['products'].Lists[2].description}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center rounded-lg px-2">
                            <span className="fi fi-rr-bank inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <div className="">
                                <p className="text-qosgray text-opacity-70">{Infos['products'].Lists[3].name}</p>
                                <span className="text-msm text-qosgray text-opacity-70">
                                    {Infos['products'].Lists[3].description}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="mt-8"> {Infos['Customers'].Title} </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-y-4 my-8 mx-auto">
                {media.Logos.customers.map((Partner, index) => <div key={index} className="p-2 bg-coolGray-100 bg-opacity-80 shadow-lg w-11/12 rounded-lg mx-auto"> <img key={`customer-${index}`} className="mx-auto" src={Partner} alt="hello part" /></div> )}
            </div>
            <h3 className="my-8 mt-20 text-center"> {Infos['Invitation'].Title} </h3>
            <Link to="/contact-us"><button className="btn btn-primary bg-qosorange rounded-full btn-md my-8 block mx-auto">{Infos['Invitation'].buttonText}<span className="fi fi-rr-arrow-small-right "></span></button></Link>

        </Wrapper>
    )
}