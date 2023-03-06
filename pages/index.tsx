import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ProductCard } from '@/components/ProductCard.component'
import Header from '@/components/Header.component'
import Footer from '@/components/Footer.component'
import { ProductRecomended } from '@/components/ProductRecomended.component'
import Accordion from '@/components/Accordion'
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import More from '../public/icons/more.svg'
import Plus from "../public/icons/plus.svg"
import CompareBlue from "../public/icons/compare-blue.svg"
import ArrowLeft from "../public/icons/arrow-left.svg"
import ArrowRight from "../public/icons/arrow-right.svg"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const IphonesToCompare = useMemo(() => {
    return [
      {
        name: "Название товара в две линии",
        price: 133650,
        rating: 4.9,
        reviewCount: 20,
        proposals: 25,
        code: "6.1",
        imgSrc: "/images/Iphone.png",
        options: "2G (GPRS/EDGE)\n 3G (WCDMA/UMTS/HSPA)\n 4G (LTE)",
        details: 'Камерa TrueDepth (діафрагма ƒ/2.2)/режим "Портрет" з поліпшеним ефектом боке та функцією "Глибина"/портретне освітлення (шість варіантів: денне світло, студійне світло, контурне світло, сценічне світло, сценічне світло - ч/б, світла тональність - ч/б)/Animoji і Memoji/знімання відео 4K з частотою 24, 30 або 60 кадрів/сек/знімання HD-відео 1080p з частотою 30 або 60 кадрів/сек/запис уповільненого відео 1080р з частотою 120 кадрів/сек/функція Smart HDR нового покоління для фото/розширений динамічний діапазон під час знімання відео з частотою 30 кадрів/сек/кінематографічна стабілізація відео (4K, 1080p і 720p)/широкий колірний діапазон для фотографій і Live Photos/спалах Retina Flash/автоматична стабілізація зображення/серійна зйомка',
        id: 1
      },
      {
        name: "Название товара в две линии1",
        price: 133650,
        rating: 4.9,
        reviewCount: 20,
        proposals: 25,
        imgSrc: "/images/Iphone.png",
        code: "6.2",
        options: "2G (GPRS/EDGE)\n3G (WCDMA/UMTS/HSPA)\n4G (LTE)\n5G",
        details: 'Діафрагма ƒ/2.2/Режим «Портрет» з поліпшеним ефектом боке та функцією «Глибина»/Портретне освітлення (шість варіантів: Природне світло, Студійне світло, Контурне світло, Сценічне світло, Сценічне світло - ч/б, Світла тональність - ч/б)/Animoji і Memoji/Нічний режим/Технологія Deep Fusion/Smart HDR 4/Фотографічні стилі/Режим «Кіноефект» для знімання відео з малою глибиною різкості (1080p з частотою 30 кадрів у секунду)/Знімання HDR-відео у стандарті Dolby Vision до 4K з частотою 60 кадрів у секунду/Знімання відео 4K з частотою 24, 25, 30 або 60 кадрів у секунду/Знімання HD-відео 1080p з частотою 25, 30 або 60 кадрів у секунду/Запис уповільненого відео 1080р з частотою 120 кадрів у секунду/Режим «Таймлапс» зі стабілізацією зображення/Відео «Таймлапс» у Нічному режимі/Кінематографічна стабілізація відео (4K, 1080p і 720p)/Функція QuickTake/Широкий колірний діапазон для фотографій і Live Photos/Корекція спотворень об\'єктива/Серійна зйомка',
        id: 2
      },
      {
        name: "Название товара в две линии2",
        price: 133650,
        rating: 4.9,
        reviewCount: 20,
        proposals: 25,
        code: "6.3",
        imgSrc: "/images/Iphone.png",
        options: "2G (GPRS/EDGE)\n3G (WCDMA/UMTS/HSPA)\n4G (LTE)\n5G(1)",
        details: 'Діафрагма ƒ/1.9 / Автофокус із Focus Pixels / Шестиелементна лінза / Retina Flash / Deep Fusion / Портретний режим із розширеним боке та контролем глибини / Портретне освітлення з шістьма ефектами (природне, студійне, контурне, сценічне, сценічне моно, високоякісне моно) / Нічний режим / Широке захоплення кольорів для фотографій і Live Photos / Корекція лінзи / Автоматична стабілізація зображення / Режим серійної зйомки / Запис відео 4K зі швидкістю 24 кадр./с, 25 кадр./с, 30 кадр./с або 60 кадр./с / Запис HD-відео 1080p зі швидкістю 25, 30 або 60 кадрів в секунду / Кінематографічний режим до 4K HDR зі швидкістю 30 кадрів/с / Запис HDR-відео з Dolby Vision до 4K зі швидкістю 60 кадрів в секунду / Підтримка уповільненого відео для 1080p зі швидкістю 120 кадрів в секунду / Покадрове відео зі стабілізацією / Нічний режим / Кінематографічна стабілізація відео (4K, 1080p і 720p)',
        id: 3
      },
      {
        name: "Название товара в две линии3",
        price: 133650,
        rating: 4.9,
        reviewCount: 20,
        proposals: 25,
        code: "6.4",
        imgSrc: "/images/Iphone.png",
        options: "2G (GPRS/EDGE)\n 3G (WCDMA/UMTS/HSPA)\n 4G (LTE)\n(2)",
        details: 'Апертура f/2.45',
        id: 4
      },
    ]
  }, [])

  const [currentlyViewed, setCurrentlyCompared] = useState(IphonesToCompare);
  const [showRecomended, setShowRecomended] = useState(10);

  const contentMapping = useMemo(() => {
    return currentlyViewed.reduce((acc: any, next, idx: number) => {
      acc[`${idx}`] = {
        options: next.options,
        details: next.details,
        code: next.code

      }
      return acc;
    }, {})
  }, [currentlyViewed]);
  const [initialShow, setInitialShow] = useState(10)
  const [compareOptions, setCompareOptions] = useState(contentMapping);

  // const handleNextButtonClick = (current: number) => {

  // }
  // const handlePrevButtonClick = (current: number) => {

  // }


  const [screenSize, setScreenSize] = useState<number>();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767 && window.innerWidth > 641) {
        setShowRecomended(3);
        setInitialShow(3)

      }
      else if (window.innerWidth > 768) {
        setInitialShow(10)
        setShowRecomended(10)
      }
      else if (window.innerWidth < 640) {
        setInitialShow(2)
        setShowRecomended(2)

      }

    }

    window.addEventListener('resize', handleResize);

    handleResize(); // set initial values

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useLayoutEffect(() => {

  // }, [screenSize])


  const handleMoreClicked = () => {
    setShowRecomended(prev => prev + initialShow)

  }


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <header className='flex flex-col px-4 pt-3 md:hidden'>
        <nav className='flex justify-between mobile:justify-strech mobile:space-x-4  h-11 items-center'>
          <Logo />
          <BurgerMobile />
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
      <header className='hidden md:block  py-4'>
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
      </header> */}
      <Header />
      <main>

        <section>
          <div className='app-container'>
            <div className="text-2xl leading-7 lg:text-4xl font-bold max-w-[60%] mt-5 lg:mt-4 ">
              {`Сравниваем мобильные телефоны`}
              <span className='text-base ml-2 leading-5 lg:text-3xl font-bold text-gray-primary'>{currentlyViewed.length}</span>
            </div>
            <div className="flex justify-between mt-4 md:mt-7">
              <div className='flex space-x-2'>
                <div className="text-small-gray hidden md:flex">
                  Показывать:
                </div>
                <div className="flex space-x-4 text-small-blue">
                  <div>только отличия</div>
                  <div>все параметры</div>
                </div>
              </div>
              <div className='flex space-x-4 mobile:space-x-9 md:space-x-10 '>
                <div className="flex space-x-2 items-center">
                  <div className="w-5 h-5">
                    <Plus />
                  </div>
                  <div className="tex-base text-blue-primary font-bold hidden lg:block">
                    Добавить еще модель
                  </div>
                </div>
                <div className="flex space-x-2 items-center">
                  <div className="w-5 h-5">
                    <CompareBlue />
                  </div>
                  <div className="tex-base text-blue-primary font-bold hidden lg:block">
                    Списки сравнения
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-0 sm:grid-cols-3 app-container max-h-[389px] md:max-h-[193px] overflow-hidden grid-flow-row mt-2 md:mt-7">
            {currentlyViewed.map((item, idx, list) => {
              return (
                <ProductCard
                  key={idx}
                  idx={idx}
                  list={[...list]}
                  item={{ ...item }}
                  compareOptions={compareOptions}
                  setCompareOptions={setCompareOptions}
                />
              )
            })
            }
          </div>
        </section>
        <section>
          <Accordion
            title='Опция 1'
            subTitle='Подзаголовок опции'
            contents={compareOptions}
            compareOption='options'
          />
          <Accordion
            title='Опция 2'
            subTitle='Подзаголовок опции'
            contents={compareOptions}
            compareOption='code'
          />
          <Accordion
            title='Опция 3'
            subTitle='Подзаголовок опции'
            contents={compareOptions}
            compareOption='details'
          />

        </section>
        <section>
          <div className='app-container mt-20 lg:mt-24'>
            <div className='text-xl leading-6 md:text-3xl md:leading-8 font-bold break-keep max-w-[70%]'>
              Просмотренные товары
            </div>

          </div>
          <div className='relative app-container'>
            <div onClick={() => {
              document.querySelector("#recomended")?.scrollBy({
                left: -200,
                behavior: 'smooth'
              })
            }} className="w-12 h-12 absolute rounded-full hover:bg-gray-200 flex justify-center items-center cursor-pointer left-0 -translate-x-[100%] top-[50%] -translate-y-[50%]">
              <ArrowLeft />
            </div>
            <div id="recomended" className="w-full pl-4 scroll-smooth pr-3 mt-2 md:mt-6 xl:md-9 md:px-0 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-auto-recomended md:gap-x-3 lg:gap-x-4  md:grid-flow-col  md:overflow-x-scroll scrollbar-hide snap-x snap-always snap-mandatory relative">
              {new Array(10).fill(1).slice(0, showRecomended).map((item, idx) => (
                <ProductRecomended
                  key={idx}
                  rating={4.9}
                  price={133546}
                  reviewCount={20}
                  name={'Название товара в две четкие линии'}
                  imgSrc="/images/Iphone.png"
                />
              ))}
            </div>
            <div onClick={() => {
              document.querySelector("#recomended")?.scrollBy({
                left: 200,
                behavior: 'smooth'
              })
            }} className="w-12 h-12 rounded-full hover:bg-gray-200 flex justify-center items-center cursor-pointer absolute right-0 translate-x-[100%] top-[50%] -translate-y-[50%]">
              <ArrowRight />
            </div>
          </div>

          <div className="app-container">
            {showRecomended < 10 ? <button onClick={handleMoreClicked} className='w-full border border-gray-ghost rounded-md flex justify-center h-10 items-center space-x-2 md:hidden'>
              <div className="text-small-bold-blue">
                Показать еще
              </div>
              <div className="w-4 h-4">
                <More />
              </div>

            </button> : null}
          </div>
        </section>
      </main>
      <Footer />



    </>
  )
}
