import Wrapper from "../../components/sectionWrapper"
import { useLangContext } from "../../components/translateContext"
import Messages from './translations/statsSection.json'

export default function StatsSection() {
    const { Lang } = useLangContext()
    const Infos = Messages[Lang]
    return (<Wrapper className="py-5 md:py-10 bg-qosgray">
        <h2 className="text-center"> {Infos.Title} </h2>
        <div className="md:grid grid-flow-col gap-x-10 mt-4">
            <div>
                <h3 className="mt-8"> {Infos["subTitle0"]} </h3>
                <p className="mt-2">
                {Infos["description0"]}
                </p>
            </div>
            <div>
                <h3 className="mt-8">{Infos["subTitle1"]} </h3>
                <p className="mt-2">
                {Infos["description1"]}
                </p>
            </div>
        </div>
    </Wrapper>)
}