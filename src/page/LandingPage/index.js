import LandingSection from "./LandingSection"
import Partners from "./PartnersSection"
import OfflineBussiness from "./OffBussinessSection"
import WebBussiness from "./WebBussinessSection"
import DevsSection from "./DevPart"
import QualitySection from "./QualitySection"
import StatsSection from "./StatsSection"

export default function LandingPage() {
    return (
        <>
            <div style={{background:"url(./pictures/authpageBackground.png)"}}>
                <LandingSection />
            </div>
            <Partners />
            <WebBussiness />
            <OfflineBussiness />
            <div id="webDev" className="bg-qosdark bg-opacity-90">
                <DevsSection />
            </div>
            <QualitySection />
            <StatsSection />
        </>
    )
}
