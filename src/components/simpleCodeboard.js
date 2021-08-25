import { useEffect } from "react"
import Prism from 'prismjs'

export default function SimpleCodeBoard({ code, language }) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
    return (
        <div className={`${language==="code"?'':'bg-qosdark'} inline-block rounded-sm max-w-min text-small md:text-msm`}>
            <pre className="rounded-sm p-1 px-2 inline-block">
                <code className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        </div>
    )
}