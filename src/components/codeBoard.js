import { useState, useEffect } from 'react'
import Prism from 'prismjs'

export default function CodeBoard({ modes = false }) {
    const [currentMode, setCurrentMode] = useState(0)
    useEffect(() => {
        Prism.highlightAll()
    }, [currentMode])

    return (
        <div className="relative text-small bg-qosdark shadow-xl md:text-msm max-w-md  mx-auto rounded-lg my-4 p-2">
            <header className="md:h-8 h-6 py-2 flex items-center justify-between">
                <div className="w-3/12 flex ml-1">
                    <span className="inline-block p-0.5 md:h-2  md:w-2 h-1.5 w-1.5 bg-qosred rounded-full m-0.5"></span>
                    <span className="inline-block p-0.5 md:h-2  md:w-2 h-1.5 w-1.5 bg-qosorange rounded-full m-0.5"></span>
                    <span className="inline-block p-0.5 md:h-2  md:w-2 h-1.5 w-1.5 bg-qosgreen rounded-full m-0.5"></span>
                </div>
                <div className="min-w-max">
                    {modes ? modes.map((mode, index) => <button key={index} className={`text-qosgray text-opacity-70 bg-opacity-80 inline-block mx-1 py-1.5 px-2 min-w-min rounded outline-none focus:outline-none ${currentMode === index && `${mode.name === 'Success' ? 'bg-qosgreen' : `${mode.name === "Error" ? 'bg-qosred' : 'bg-qosblue'}`}`}`} onClick={() => setCurrentMode(index)}> {mode.name}</button>) : ''}
                </div>
                <div className="w-3/12"></div>
            </header>
            <div className="Code flex my-2">
                <pre className="p-2 h-64 md:h-48 max-h-80 min-w-full hideScroll overflow-hidden rounded">
                    <code className={`language-${modes[currentMode].language} max-w-min`}>{modes[currentMode].code}</code>
                </pre>
            </div>
        </div>
    )
}