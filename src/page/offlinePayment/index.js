import Wrapper from '../../components/sectionWrapper'
import { Link } from 'react-router-dom'
import { media } from '../../libs/media'
import { useLangContext } from '../../components/translateContext'
import Messages from './translations/index.json'
import buttonText from '../../translations/button.json'
const { lowFees } = media.Icons[1]

export default function OfflinePaymentPage() {
  const { Lang } = useLangContext()
  const Infos = Messages[Lang]
  const btnMsg = buttonText[Lang]
  return (<Wrapper childrenClassName="mt-24 md:mt-32">
    <div className="md:flex">
      <div>
        <h1 className="">
          {Infos.Title}
        </h1>
        <p className="md:w-10/12 lg:w-9/12 mt-8 md:mt-10">
          {Infos.description}
        </p>
      </div>
      <div className="block rounded-3xl mt-4 opacity-70 h-56  xl:h-72 max-w-xs xl:max-w-sm overflow-hidden lg:-mr-10 md:h-60 lg:h-72 mx-auto blur-lg">
        <img src={media.Illustrations.offlinePaymentPage.firstIllustration} className="h-full w-full" alt="illustration" />
      </div>
    </div>
    <div className="mt-6 max-w-max mx-auto md:mx-0 md:mt-10">
      <Link to="/register" className="p-2 inline-block px-2.5 md:px-3 rounded-md bg-opacity-90 shadow-lg bg-qosorange text-qosgray text-opacity-70 font-medium btn-sm max-w-max mx-auto">
        {btnMsg.registerButton}
      </Link>
      <Link to="/devolopers/api" className="rounded-full ml-1.5 md:ml-4 bg-qosdark bg-opacity-10 inline-block p-2 backdrop-blur-3xl">
        <p className="text-qosdark text-opacity-70 inline-block md:ml-1">
        {btnMsg.callTodocs}
        </p>
        <span className="fi fi-rr-angle-small-right text-msm"></span>
      </Link>
    </div>
    <h3 className="mb-4 mt-8 md:mt-12"> {Infos.subTitle0} </h3>
    <div className="grid md:grid-flow-col gap-y-4 gap-x-6 my-4">
      <CardE title="Access to Dashboard" description="Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce." icon="fi-rr-dashboard" />
      <CardE title="Easy reconciliation" description="Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce." icon="fi-rr-spa" />
      <CardE title="Customizable USSD menu" description="Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce." icon="fi-rr-vector-alt" />
    </div>
    <h3 className="mt-8"> {Infos.subTitle1} </h3>
    <div className="md:flex">
      <p className="mt-4 md:w-6/12">
        {Infos.description0}
        <Link to="/contact-us" className="p-2 mb-4 md:mb-0 block px-2.5 md:px-3 mt-4 rounded-md bg-opacity-90 shadow-lg bg-qosorange text-qosgray text-opacity-70 font-medium btn-sm max-w-max mx-auto">
        {btnMsg.saleButton}
        </Link>
      </p>
      <div className="max-w-sm lg:max-w-lg mx-auto">
        <img src={media.Illustrations.offlinePaymentPage.secondIllustration} className="w-full h-full" alt="hello" />
      </div>
    </div>
    <h3 className="text-center mt-8"> {Infos.subTitle2} </h3>
    <div className="my-8 grid gap-x-4 grid-flow-col overflow-auto hideScroll">
      {Infos.testimonials.map((testify, index) => (<TestiMon key={index} name={testify.name} poste={testify.poste} text={testify.text} />))}
    </div>
  </Wrapper>)
}
export function TestiMon({ name, poste, text }) {
  return (<div className="p-2 px-4 w-60 md:w-72  transform border-2 mx-auto border-qosdark border-opacity-5 border-dotted bg-qosgray bg-opacity-70 rounded-xl shadow-lg">
    <img className="h-16 w-16 rounded-full block mx-auto" src={lowFees} alt="fees" />
    <div>
      <span className="font-bold text-center block mt-4 text-qosdark text-opacity-80">{name}</span>
      <p className="text-center text-msm lg:text-dsm">
        {poste}
      </p>
    </div>
    <p className="mt-4 mx-auto">
      {text}
    </p>
  </div>
  )
}


export function CardE({ title, icon, description }) {
  return (
    <div className="border blur-lg py-2 rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
      <div className="my-4">
        <span className={`fi ${icon} block bg-gradient-to-bl from-qosblue to-qosred opacity-80 md:mx-auto max-w-min bg-clip-text text-transparent text-mH1`} ></span>
        <h4 className="md:text-center">{title}</h4>
      </div>
      <p className="mt-2">
        {description}
      </p>
    </div>)
}