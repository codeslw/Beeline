import React from 'react'
import Image from "next/image"
import Star from "../public/icons/star.svg"
import Like from "../public/icons/like.svg"
import Compare from "../public/icons/compare.svg"

interface IProductRecomended {
    imgSrc: string,
    price: number,
    rating: number,
    reviewCount: number,
    name: string
}

export const ProductRecomended: React.FC<IProductRecomended> = (props) => {
    return (
        <div className='flex flex-col  w-full max-w-full py-4 px-3 xs:px-4  md:px-0 space-y-4 snap-always border-r border-gray-ghost sm:gap-x-4 sm:border-none border-l-[#fff] even:border-r-[#fff]  even:pr-0 odd:pl-0'>
            <div className="flex w-full justify-start">
                <div className="w-[120px] md:w-[134px] aspect-[12/14.8] relative">
                    <Image src={props.imgSrc} alt="" fill />
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <div className="text-base leading-[19px] md:text-[18px] font-bold md:leading-5">
                    {`${props.price} сум `}
                </div>
                <div className="flex  space-x-1">
                    <div className="w-4 h-4">
                        <Star />
                    </div>
                    <div className="text-sm leading-5 font-normal">{props.rating}</div>
                    <div className="text-sm text-gray-primary font-normal">{`/${props.reviewCount} отзывов`}</div>
                </div>
                <div className="text-sm text-blue-primary font-normal h-[38px] break-all">{props.name}</div>

            </div>
            <div className="flex space-x-[11px] mt-4 md:mt-2.5 items-center">
                <button className='!ml-0 w-max  px-3 py-2 rounded-md bg-yellow-primary text-xs sm:text-sm font-bold'>
                    В магазин
                </button>
                <div className="flex items-center space-x-1.5 md:space-x-3">
                    <div className="w-5 h-5 md:w-6 md:h-6">
                        <Like />
                    </div>
                    <div className="w-5 h-5 md:w-6 md:h-6">
                        <Compare />
                    </div>
                </div>

            </div>
        </div>
    )
}
