import Wrapper from "../../components/sectionWrapper"
import { media } from "../../libs/media"
import { useLangContext } from "../../components/translateContext"
import Messages from './translations/QualitySection.json'
const { security, lowFees, easyHandling } = media.Icons[1]
export default function QualitySection() {
    const { Lang } = useLangContext()
    const Infos = Messages[Lang]
    return (<Wrapper className="py-8 bg-qosgray -mt-12 pt-16">
        <div className="md:grid grid-flow-col gap-x-6">
            <div>
                <div className="my-4">
                    <img className="opacity-80 h-8 w-8 mb-4 block md:mx-auto" src={security} alt="cross over technologies" />
                    <h4 className="md:text-center"> {Infos["security"].Title} </h4>
                </div>
                <p className="mt-2">
                    {Infos["security"].description}
                </p>
            </div>
            <div>
                <div className="my-4">
                    <img className="opacity-80 h-8 w-8 mb-4 block md:mx-auto" src={easyHandling} alt="cross over technologies" />
                    <h4 className="md:text-center"> {Infos["handle"].Title} </h4>
                </div>
                <p className="mt-2">
                    {Infos["handle"].description}
                </p>
            </div>
            <div>
                <div className="my-4">
                    <img className="opacity-80 h-8 w-8 mb-4 block md:mx-auto" src={lowFees} alt="cross over technologies" />
                    <h4 className="md:text-center"> {Infos["fees"].Title} </h4>
                </div>
                <p className="mt-2">
                    {Infos["fees"].description}
                </p>
            </div>
        </div>
    </Wrapper>)
}