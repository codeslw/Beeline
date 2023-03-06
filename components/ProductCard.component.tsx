import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import XIcon from "../public/icons/x-icon.svg"
import Star from "../public/icons/star.svg"
import Like from "../public/icons/like.svg"
import ArrowLeft from "../public/icons/arrow-left.svg"
import ArrowRight from "../public/icons/arrow-right.svg"


interface IProductCard {
    list: any,
    item: any,
    idx: number,
    compareOptions: any,
    setCompareOptions: any,
}


export const ProductCard: React.FC<IProductCard> = (props) => {

    const [activeItem, setActiveItem] = useState(props.item);

    const currentIndex: number = useMemo(() => props.list.findIndex((item: any) => item.id === activeItem.id), [activeItem, props.list])

    const handleNextButton = () => {
        if (currentIndex < props.list.length - 1) {
            setActiveItem(props.list[currentIndex + 1])

        }

    }

    useEffect(() => {
        let formatedActiveToChange = {
            options: activeItem.options,
            code: activeItem.code,
            details: activeItem.details
        }
        let copy = { ...props.compareOptions, [`${props.idx}`]: formatedActiveToChange };
        props.setCompareOptions(copy)
    }, [activeItem])

    const handlePrevButton = () => {
        if (currentIndex > 0) {
            setActiveItem(props.list[currentIndex - 1])

        }
    }

    const handleSetActive = (idx: number) => {
        setActiveItem(props.list[idx])
    }

    return (
        <div className={`product flex flex-col px-4 py-2 w-full md:w-full md:flex-row md:space-x-2 md:items-start md:p-4 border-l-[#fff] border border-gray-ghost even:border-r-[#fff] md:even:border-r-gray-ghost  md:border-t-[#fff]`}>
            <div className="flex items-start space-x-1">
                <div className="flex flex-col items-center relative">

                    <div className="w-[120px] h-[148px] md:w-14 md:h-[60px] relative flex flex-col items-center">
                        <div onClick={handlePrevButton} className="w-9 h-9 rounded-full bg-[#fff] opacity-30 flex items-center justify-center absolute top-[50%] -translate-y-[50%] -left-[15%] z-10 cursor-pointer md:hidden">
                            <ArrowLeft />
                        </div>
                        <Image fill src={"/images/Iphone.png"} alt="" />
                        <div onClick={handleNextButton} className="w-9 h-9 rounded-full flex items-center justify-center absolute top-[50%] -translate-y-[50%] -right-[25%] z-10 opacity-30 cursor-pointer md:hidden">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className='text-x-small-gray md:hidden'>
                        {currentIndex + 1}/{props.list.length}
                    </div>

                </div>

                <div className="w-4 h-4 md:hidden cursor-pointer">
                    <XIcon />
                </div>

            </div>
            <div className="flex flex-col mt-6 md:mt-0">
                <div className="w-full flex border-b border-gray-ghost md:hidden">
                    {props.list.map((item: any, idx: number) => {
                        return <div key={item.id} onClick={() => handleSetActive(idx)} className={`flex h-[3px] rounded-[3px] ${idx + 1 === activeItem.id ? "bg-gray-tertiary" : ""} grow cursor-pointer relative top-0.5`}></div>

                    })}
                </div>
                <div className="mt-4 h-9 break-keep sm:max-lg:text-xs text-small-medium-blue md:mt-0 md:max-w-[12rem] md:leading-5">
                    {activeItem.name}
                </div>
                <div className="mt-2 flex space-x-1 items-center">
                    <div className="w-4 h-4">
                        <Star />
                    </div>
                    <div className="text-x-small">
                        {activeItem.rating}
                    </div>
                    <div className="text-x-small-gray">
                        {`/${activeItem.reviewCount} отзывов`}
                    </div>

                </div>
                <div className="text-small-bold mt-2">
                    {`${activeItem.price} сум`}
                </div>
                <div className="h-9 text-x-small-blue">
                    {`${activeItem.proposals} предложений`}
                </div>
                <div className="flex space-x-3 items-center">
                    <button className="h-8 rounded-md bg-yellow-primary px-3 py-1.5 text-x-small-bold w-max">
                        В магазин
                    </button>
                    <div className='hidden md:block w-6 h-6 cursor-pointer'>
                        <Like />
                    </div>
                </div>

            </div>
            <div className="hidden md:block w-[25px] h-[25px] cursor-pointer">
                <XIcon />
            </div>


        </div>
    )
}

