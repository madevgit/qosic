import Wrapper from '../../components/sectionWrapper'
import Messages from './translations/index.json'
import InputsText from '../../translations/input.json'
import { useLangContext } from '../../components/translateContext'
import buttonText from '../../translations/button.json'

export default function LoginPage() {
    const { Lang } = useLangContext()
    const Infos = { msg: Messages[Lang], input: InputsText[Lang] }
    const btnMsg= buttonText[Lang]
    return (
        <Wrapper style={{ background: "url('./pictures/authpageBackground.png')", backgroundSize: "80% 1%" }}>
            <div className="w-12/12 max-w-lg px-4 pricingCard py-8 mx-auto my-32 rounded-xl">
               {Lang==="en"?<h3 className="text-center"> {Infos.msg.Title0} <span className="text-qosorange text-opacity-95">{Infos.msg.Title1} </span> {Infos.msg.Title2}</h3>:<h3 className="text-center">{Infos.msg.Title0} {Infos.msg.Title1} <span className="text-qosorange text-opacity-95">{Infos.msg.Title2} </span></h3>}
                <form className="">
                    <div className="mx-auto w-full md:max-w-sm mt-10">
                        <label className="block">{Infos.input.email.label}</label>
                        <input className="" name="bname" type='email' required placeholder={Infos.input.email.placeholder} />
                    </div>
                    <div className="mx-auto w-full md:max-w-sm mt-10">
                        <div className="flex items-center justify-between"> <label className="block">{Infos.input.password.label}</label> <a className="text-qosblue underline text-msm md:text-dsm" href="#div3">{Infos.msg.passwordForgot}</a></div>
                        <input className="" name="lastname" type="password" required />
                    </div>
                    <button className="w-8/12 h-12 rounded-md text-qosgray text-opacity-80 font-medium bg-qosorange bg-opacity-80 btn-sm md:max-w-sm mx-auto mt-10 block">
                       {btnMsg.logInButton}
                    </button>
                </form>
            </div>
        </Wrapper>
    )
}