import React, { useState } from 'react'
import Logo from "../public/icons/logo.svg"
import BurgerMobile from "../public/icons/burger-mobile.svg"
import Flag from "../public/icons/flag.svg"
import ArrowDown from "../public/icons/arrow-down.svg"
import Like from "../public/icons/like.svg"
import Compare from "../public/icons/compare.svg"
import Search from "../public/icons/search.svg"
import LogoDesktop from "../public/icons/logo-desk.svg"
import Burger from "../public/icons/burger.svg"
import User from "../public/icons/user.svg"
import Cart from "../public/icons/cart.svg"
import FlagDesk from "../public/icons/flag-desk.svg"
import XIcon from "../public/icons/x-icon.svg"

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className='flex flex-col px-4 pt-3 md:hidden'>
                <nav className='flex justify-between mobile:justify-strech mobile:space-x-4  h-11 items-center'>
                    <Logo />
                    <div onClick={() => setOpen(true)}>
                        <BurgerMobile />
                    </div>
                    <div className="w-max flex items-center border-r border-gray-ghost pr-2">
                        <div className="w-8 flex justify-center">
                            <Flag />
                        </div>
                        <ArrowDown />
                    </div>
                    <div className="w-6 h-6">
                        <Like />
                    </div>
                    <div className="w-6 h-6 relative">
                        <Compare />
                    </div>
                    <div className="hidden mobile:block w-6 h-6 ">
                        <User />
                    </div>
                    <div className="hidden mobile:block w-6 h-6 ">
                        <Cart />
                    </div>
                </nav>
                <div className="h-12 py-1 relative">
                    <input type="text" className="h-10 border border-yellow-primary w-full rounded-[4px] p-3" placeholder="Искать товары" />
                    <div className="absolute right-[3%] top-[50%] -translate-y-[50%]">
                        <Search />
                    </div>
                </div>
            </header>
            <header className='hidden md:block  py-4 border-b border-gray-ghost'>
                <div className='flex w-full flex-col lg:flex-row items-center space-y-1.5 lg:space-y-0'>
                    <div className='flex md:w-[98%] xl:w-[88%] lg:w-[95%] mx-auto space-x-4 lg:space-x-6 xl:space-x-8'>
                        <div className="flex items-center space-x-1 md:justify-between lg:justify-start lg:space-x-4 lg:w-[60%] md:w-[45%]">
                            <div>
                                <LogoDesktop />
                            </div>

                            <button className='h-11 rounded-md px-5 py-2 bg-yellow-primary flex space-x-2 items-center'>
                                <Burger />
                                <div className="text-lg font-semibold">Каталог</div>
                            </button>
                            <div className="grow relative hidden lg:flex">
                                <input type="text" placeholder='Искать товары' className='w-full border border-yellow-primary rounded-md px-4 py-[12px] h-full ' />
                                <div className="absolute w-6 h-6 right-[12px] top-[50%] -translate-y-[50%]">
                                    <Search />
                                </div>
                            </div>
                        </div>
                        <div className="flex grow  md:space-x-1 md:justify-between lg:justify-start lg:space-x-8">
                            <div className='flex pl-4 pr-1 py-3 rounded-md border border-gray-ghost'>
                                <div className="w-6 h-6 relative">
                                    <FlagDesk />
                                </div>
                                <div className="text-base font-normal">
                                    O’zbekcha
                                </div>
                                <div className="w-6 h-6 cursor-pointer">
                                    <ArrowDown />
                                </div>
                            </div>
                            <div className="flex space-x-3 lg:space-x-4 items-center">
                                <div className="flex flex-col items-center cursor-pointer">
                                    <div className="w-6 h-6">
                                        <Like />
                                    </div>
                                    <div className="h-5 text-x-small">
                                        Избранное
                                    </div>
                                </div>
                                <div className="flex flex-col items-center cursor-pointer">
                                    <div className="w-6 h-6">
                                        <Compare />
                                    </div>
                                    <div className="h-5 text-x-small">
                                        Сравнение
                                    </div>
                                </div>
                                <div className="flex flex-col items-center cursor-pointer">
                                    <div className="w-6 h-6">
                                        <User />
                                    </div>
                                    <div className="h-5 text-x-small">
                                        Войти
                                    </div>
                                </div>
                                <div className="flex flex-col items-center cursor-pointer">
                                    <div className="w-6 h-6">
                                        <Cart />
                                    </div>
                                    <div className="h-5 text-x-small">
                                        Корзина
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex w-[98%] relative lg:hidden">
                        <input type="text" placeholder='Искать товары' className='w-full border border-yellow-primary rounded-md px-4 py-[12px] h-full ' />
                        <div className="absolute w-6 h-6 right-[12px] top-[50%] -translate-y-[50%]">
                            <Search />
                        </div>
                    </div>
                </div>

            </header>
            {open && <div className="sm:hidden fixed w-screen top-0 left-0 bg-[#fff] h-screen flex flex-col space-y-5 px-4 py-4 z-20">
                <div onClick={() => setOpen(false)} className="w-6 h-6 absolute right-4 top-4">
                    <XIcon />
                </div>
                <div className='text-sm md:text-base  font-bold cursor-pointer '>
                    Каталог
                </div>
                <div className='text-sm md:text-base  font-bold cursor-pointer sm:hidden'>
                    Войти
                </div>
                <div className='text-sm md:text-base  font-bold cursor-pointer sm:hidden'>
                    Корзина
                </div>
            </div>}

        </>
    )
}
