import React, { useEffect, useState } from 'react'
import ArrowDown from "../public/icons/arrow-down.svg"
interface IAccordion {
    title: string,
    contents: any,
    subTitle: string,
    compareOption: string
}

export default function Accordion(props: IAccordion) {

    const [open, setOpen] = useState(false);




    return (
        <div className='app-container'>
            <div onClick={() => {
                setOpen(!open)
            }} className="w-full border-b border-gray-ghost h-[3.5rem] cursor-pointer md:h-[60px] flex items-center justify-between">
                <div className="text-xl leading-6 md:text-2xl md:leading-7 font-bold">{props.title}</div>
                <div className={`w-6 h-6 transition-all duration-500 ${open ? "rotate-180" : "rotate-0"}`}>
                    <ArrowDown />
                </div>
            </div>
            <div className={`${open ? "flex" : "hidden"} transition-all duration-500 relative flex flex-col w-full`}>


                <div className={`w-full h-8 flex items-end text-base md:text-xl md:leading-6 font-bold mb-5`}>{props.subTitle}</div>

                <div className={`grid grid-cols-2  grid-flow-col overflow-scroll sm:hidden`} style={{
                    //   gridTemplateColumns: `repeat(${props.contents.length}, 1fr)`
                }}>
                    {Object.keys(props.contents)?.slice(0, 2)?.map((item) => <div className='max-w-[90%]'>{props.contents[item][`${props.compareOption}`]}</div>)}
                </div>
                <div className={`hidden sm:grid sm:grid-cols-3  grid-flow-col overflow-scroll xl:hidden`} style={{
                    //   gridTemplateColumns: `repeat(${props.contents.length}, 1fr)`
                }}>
                    {Object.keys(props.contents)?.slice(0, 3)?.map((item: any) => <div className='max-w-[90%]'>{props.contents[item][`${props.compareOption}`]}</div>)}
                </div>
                <div className={`hidden xl:grid xl:grid-cols-4  xl:grid-flow-col xl:overflow-scroll`} style={{
                    //   gridTemplateColumns: `repeat(${props.contents.length}, 1fr)`
                }}>
                    {Object.keys(props.contents)?.slice(0, 4)?.map((item: any) => <div className='max-w-[90%]'>{props.contents[item][`${props.compareOption}`]}</div>)}
                </div>

            </div>


        </div>
    )
}
