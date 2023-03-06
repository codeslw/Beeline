import React from 'react'
import LogoDesk from "../public/icons/logo-desk.svg"
import Logo from "../public/icons/logo.svg"


export default function Footer() {
    return (
        <footer className='flex flex-col border-t border-gray-ghost mt-12 md:mt-20'>
            <nav className='px-4 pt-6 md:pt-0 mb-10 md:mb-0 md:h-[9rem] w-full md:w-[98%] lg:w-[95%] xl:w-[88%] md:px-0 mx-auto md:flex md:items-center'>
                <ul className='flex flex-col md:justify-between md:flex-row w-full space-y-4 md:space-y-0'>
                    <li className='hidden md:inline-block'>
                        <LogoDesk />
                    </li>
                    <li className='md:hidden'>
                        <Logo />
                    </li>
                    <li className='md:text-large-bold text-base leading-5 font-bold'> О сервисе</li>
                    <li className='md:text-large-bold text-base leading-5 font-bold'> Контакты</li>
                    <li className='md:text-large-bold text-base leading-5 font-bold'> Обратная связь  </li>
                    <li className='md:hidden text-base leading-5 font-bold'> Политика конфиденциальности </li>
                </ul>

            </nav>
            <div className="h-[5.5rem] md:h-[4rem] bg-black-primary flex items-center w-full">
                <div className="flex w-full px-4 md:px-0 md:w-[98%] lg:w-[95%] xl:w-[88%] justify-between mx-auto">
                    <div className="text-sm leading-4 text-[#EBF2FA]">
                        © 2022  ООО Unitel
                    </div>
                    <div className="hidden md:block text-sm leading-4 text-[#EBF2FA]">
                        Политика конфиденциальности
                    </div>

                </div>
            </div>

        </footer>
    )
}
