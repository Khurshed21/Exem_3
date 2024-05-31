import React, { useEffect, useState } from 'react'


import okimg from "../img/okimg.png";
import Иконка from "../img/Иконка.png";
import tv from "../img/tv.png";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import фон from "../img/фон.png";
import Куртка from "../img/Куртка.png";
import uk from "../img/uk.png";
import vec from "../img/vec.png";
import Футболка from "../img/Футболка.png";
import vec1 from "../img/vec1.png";
import Джинсы from "../img/Джинсы.png";
import ic from "../img/ic.png";
import ic1 from "../img/ic1.png";
import ic2 from "../img/ic2.png";
import ic3 from "../img/ic3.png";
import cash from "../img/cash.png";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import world from "../img/world.png";
import Buildings from "../img/Buildings.png";
import Notebook from "../img/Notebook.png";
import Barbell from "../img/Barbell.png";
import FileText from "../img/FileText.png";
import Инфо from "../img/Инфо.png";
import bas from "../img/bas.png";
import bas1 from "../img/bas1.png";
import bas2 from "../img/bas2.png";
import bas3 from "../img/bas3.png";
import pc from "../img/pc.png";
import dolar from "../img/dolar.png";
import m1 from "../img/m1.png";
import m2 from "../img/m2.png";
import m3 from "../img/m3.png";
import m4 from "../img/m4.png";
import рейтинг from "../img/рейтинг.png";
import ok_1 from "../img/ok_1.png";
import ok_2 from "../img/ok_2.png";
import ok_3 from "../img/ok_3.png";

import Aos from 'aos';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const Home = () => {

    useEffect(() => {
        Aos.init()
    })

    let [age, setAge] = useState(localStorage.getItem('i18nextLng'));
    let { t, i18n } = useTranslation();
    
    console.log(age);
    function handleClick(event) {
      setAge(event.target.value)
      i18n.changeLanguage(event.target.value)
    }
    <select value={age} className=" border-[1px] w-[150px] h-[50px]  border-[black]" onChange={handleClick}></select>

  return (
    <div>
              <div className='pt-[50px] pb-[50px] dark:bg-black dark:text-[white]'>
            <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[600px] w-[90%] rounded-3xl m-auto xl:h-auto flex flex-wrap justify-around items-center'>
                <div className='w-[580px] xl xl:w-0 sm:w-0 xl:text-[20px]'>
                    <h1 className='text-[60px] xl:text-[20px] text-[white] font-[700]'>{t("dost")}</h1> <br />
                    <h1 className='text-[white] text-[18px] font-[200] xl:hidden'>{t("eko")}</h1> <br />
                    <button className='w-[250px] h-[70px] bg-[#00C97B] text-[white] rounded-[40px]'>Получить адрес в UK</button>
                </div>
                <img src={okimg} className=' xl:w-[300px]' alt="" />
            </div>
        </div>

    <div className='h-[300px]  dark:bg-black dark:text-[white]'>
        <div className='ml-[200px] text-[50px] font-[500] w-[500px] xl:m-0'>
            <h1>{t("naz")}</h1>
        </div>
        
            <div className='flex flex-wrap justify-center items-center pt-[50px] '>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className=' ml-[100px] sm:ml-[250px] font-[600] text-[20px] flex flex-wrap items-center gap-5'>
                    <img src={Иконка} alt="" />
                    <h1>{t("od")}</h1>
                </div></SwiperSlide>
      <SwiperSlide><div className='ml-[100px] sm:ml-[250px] xl:m-auto font-[600] text-[20px] flex flex-wrap items-center gap-5'>
                    <img src={tv} alt="" />
                    <h1>{t("od1")}</h1>
                </div></SwiperSlide>
      <SwiperSlide><div className='ml-[100px] sm:ml-[250px] xl:m-0 font-[600] text-[20px] flex flex-wrap items-center gap-5'>
                    <img src={icon1} alt="" />
                    <h1>{t("od2")}</h1>
                </div></SwiperSlide>
      <SwiperSlide><div className='ml-[100px] sm:ml-[250px] xl:m-0 font-[600] text-[20px] flex flex-wrap items-center gap-5'>
                    <img src={icon2} alt="" />
                    <h1>{t("od3")}</h1>
                </div></SwiperSlide>
      <SwiperSlide><div className='ml-[100px] sm:ml-[250px] xl:m-0 font-[600] text-[20px] flex flex-wrap items-center gap-5'>
                    <img src={icon3} alt="" />
                    <h1>{t("od4")}</h1>
                </div></SwiperSlide>
      <SwiperSlide><div className='ml-[100px] sm:ml-[250px] xl:m-0 font-[600] text-[20px] flex flex-wrap items-center gap-5'>
                    <img src={icon4} alt="" />
                    <h1>{t("od5")}</h1>
                </div></SwiperSlide>

    </Swiper>
            </div>

          

    </div>

    <div className='flex flex-wrap justify-around items-center  dark:bg-black dark:text-[white]'>
              <div>
                <h1 className='text-[30px] font-[600] w-[370px]'>Columbia Barlow Pass 550 Turbodown Jacket</h1><br /><br />
                <div className='w-[400px] h-[120px] bg-[#F2F6FC] rounded-3xl flex flex-wrap justify-center items-center gap-6'>
                      <img src={фон} alt="" />
                      <div className='w-[120px]'><h1>Цена в России</h1>
                        <span className='text-[20px] font-[600]'>7891,46₽</span>
                      </div>
                </div>
              </div>

              <div>
                <img src={Куртка} alt="" />
              </div>
              
              <div>
                <h1 className='text-[30px] font-[600] w-[370px]'>{t("uk")}</h1><br /><br />
                <div className='w-[400px] h-[120px] bg-[#F2F6FC] rounded-3xl flex flex-wrap justify-center items-center gap-6'>
                      <img src={uk} alt="" />
                      <div className='w-[120px]'><h1>Цена в UK</h1>
                        <span className='text-[20px] font-[600]'>7891,46₽</span>
                      </div>
                </div>
              </div>

            </div>

        <div className='flex flex-wrap justify-around items-center  dark:bg-black dark:text-[white]'>
          <div className='flex flex-wrap  items-center gap-5'>
            <img src={Футболка} alt="" />
            <img src={vec} alt="" />
          </div>
          <div>
            <p className='text-[gray]'>Срок доставки примерно 10 дней</p>
            <h1 className='text-[20px] font-[600]'>{t("seko")}</h1>
          </div>
          <div className='flex flex-wrap  items-center gap-5'>
            <img src={vec1} alt="" />
            <img src={Джинсы} alt="" />
          </div>
        </div>

        <div className='pt-[150px] pb-[200px]  dark:bg-black dark:text-[white]'>
          <div className='border-[#C0C9D7] border-[1px] h-[150px] flex flex-wrap justify-around items-center'>
          <div className=' ml-[100px] sm:ml-[250px] font-[600] text-[20px] xl:h-auto xl:mb-[40px] h-[80%] flex flex-wrap justify-center pr-[50px] items-center gap-5 border-r-[1px] border-[black]'>
                    <img src={ic} alt="" />
                    <h1 className='w-[100px]'>{t("sev")}</h1>
                </div>

                <div className=' ml-[100px] sm:ml-[250px] font-[600] h-[80%] xl:h-auto xl:mb-[40px] text-[20px] flex flex-wrap justify-center pr-[50px] items-center gap-5 border-r-[1px] border-[black]'>
                    <img src={ic1} alt="" />
                    <h1 className='w-[100px]'>{t("sev1")}</h1>
                </div>

                <div className=' ml-[100px] sm:ml-[250px] font-[600] h-[80%] xl:h-auto xl:mb-[40px] text-[20px] flex flex-wrap justify-center pr-[50px] items-center gap-5 border-r-[1px] border-[black]'>
                    <img src={ic2} alt="" />
                    <h1 className='w-[100px]'>{t("sev2")}</h1>
                </div>

                <div className=' ml-[100px] sm:ml-[250px] font-[600] h-[80%] xl:h-auto xl:mb-[40px] text-[20px] flex flex-wrap justify-center pr-[50px] items-center gap-5 '>
                    <img src={ic3} alt="" />
                    <h1 className='w-[100px]'>{t("sev3")}</h1>
                </div>
          </div>
        </div>

        <div className=' dark:bg-black dark:text-[white]'>
        <div
        data-aos="fade-up"
        data-aos-duration="3000"
   
        className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[400px] xl:w-auto w-[90%] rounded-3xl m-auto xl:h-auto flex flex-wrap justify-around items-center'>
          <img src={cash} className=' xl:w-[300px]' alt="" />
                <div className='w-[580px] xl xl:w-0 sm:w-0 xl:text-[20px]'>
                    <h1 className='text-[30px] xl:text-[20px] text-[white] font-[700] xl:hidden'>{t("master")}</h1> <br />
                    <h1 className='text-[white] text-[18px] font-[200] xl:hidden'>{t("master1")}</h1> <br />
                    <button className='w-[250px] h-[70px] xl:w-auto  bg-[#00C97B] text-[white] xl:ml-[-300px] xl:mt-[300px] rounded-[40px]'>Попробовать</button>
                </div>
                
            </div>
        </div>

      
<section className="py-[80px]  dark:bg-black dark:text-[white]">
          <h1 className="text-[40px] dark:text-[white] max-w-[55%] font-[800] pl-[100px] md:pl-0 md:m-auto md:text-[30px] sm:text-[25px] text-[#1F2428]">
          {t("okey")}
          </h1>
          <p className="text-[20px] dark:text-[#ffffffd3] max-w-[45%] pl-[100px] md:pl-0 md:m-auto md:text-[18px] sm:text-[16px] pt-[20px] font-[300] text-[#1F2428]">
          {t("okey1")}
          </p>
        </section>

        <section className="flex items-center pb-[50px]  dark:bg-black dark:text-[white] flex-wrap pt-[50px] justify-center gap-[50px]">
          <div className="w-[200px] border-b-[2px] border-black dark:border-white ">
            <h1 className='pb-[10px]'>{t("count")}</h1>
            <figure className="flex  items-center gap-4">
              <img className="dark:invert" src={world} alt="" />
              <p> {t("rus")} </p>
            </figure>
          </div>
          <div className="w-[200px] border-b-[2px] border-black dark:border-white ">
            <h1 className='pb-[10px]'> {t("city")} </h1>
            <figure className="flex py-[10px] items-center gap-4">
              <img className="dark:invert" src={Buildings} alt="" />
              <p> {t("rus1")} </p>
            </figure>
          </div>
          <div className="w-[200px] border-b-[2px] border-black dark:border-white ">
            <h1 className='pb-[10px]'> {t("index")} </h1>
            <figure className="flex py-[10px] items-center gap-4">
              <img className="dark:invert" src={Notebook} alt="" />
              <p> {t("rus2")} </p>
            </figure>
          </div>
          <div className="w-[200px] border-b-[2px] border-black dark:border-white ">
            <h1 className='pb-[10px]'>{t("Вес посылки")} </h1>
            <figure className="flex py-[10px] items-center gap-4">
              <img className="dark:invert" src={Barbell} alt="" />
              <p>0,5</p>
            </figure>
          </div>
          <div className="w-[200px] border-b-[2px] border-black dark:border-white ">
            <h1 className='pb-[10px]'>{t("Дополнительные услуги")}  </h1>
            <figure className="flex py-[10px] items-center gap-4">
              <img className="dark:invert" src={FileText} alt="" />
              <p>{t("rus3")} </p>
            </figure>
          </div>
        </section>

        <div className="ml-[160px] pb-[100px]  dark:bg-black dark:text-[white]">
        <button className='w-[250px] h-[70px] bg-[#00C97B] text-[white] rounded-[40px]'>Рассчитать</button>
        </div>

        <div className="ml-[160px] pb-[70px]  dark:bg-black dark:text-[white]">
          <h1 className="text-[36px] text-[#1F2428] dark:text-white font-[800]">
          Варианты доставки:
          </h1>
        </div>

        <section className="pb-[100px]  dark:bg-black dark:text-[white]">
          <div className="flex items-center w-[90%] m-auto rounded-[16px] bg-[#e2e0e0] justify-between">
            <div className="flex items-center p-[30px] gap-4">
              <img src={p1} alt="" />
              <p className="text-[18px]  font-[700] text-[#1F2428] uppercase">
              Почта России
              </p>
            </div>

<article className="flex items-center gap-[50px]">
              <div className="border-r-[2px] border-l-[2px] border-black">
                <p className="text-[14px] font-[400] px-[20px] text-[#222222] ">
                Стоимость доставки:
                </p>
                <h1 className="text-[#222222]  text-[20px] font-[700] px-[20px]">
                от £27.00
                </h1>
              </div>
              <div className="border-r-[2px] border-l-[2px] border-black">
                <p className="text-[14px] font-[400] px-[20px] text-[#222222]">
                Сроки:
                
                </p>
                <h1 className="text-[#222222]  text-[20px] font-[700] flex items-center gap-2 px-[20px]">
                10-14 дней
                   <img src={Инфо} alt="" />{" "}
                </h1>
              </div>
              <div className=" border-l-[2px] border-black ">
                <p className="text-[14px] font-[400] px-[20px] text-[#222222] ">
                Итого:
                </p>
                <h1 className="text-[#222222]  text-[20px] font-[700] px-[20px]">
                  £41.99
                </h1>
              </div>
            </article>
          </div>
          <div className="flex items-center w-[90%] m-auto my-[30px] rounded-[16px] bg-[#e2e0e0] justify-between">
            <div className="flex items-center p-[30px] gap-4">
              <img src={p2} alt="" />
              <p className="text-[18px]  font-[700] text-[#1F2428] uppercase">
              EMS ПОЧТА РОССИЯ
              </p>
            </div>

            <article className="flex items-center gap-[50px]">
              <div className="border-r-[2px] border-l-[2px] border-black">
                <p className="text-[14px] font-[400] px-[20px] text-[#222222] ">
                Стоимость доставки:
                </p>
                <h1 className="text-[#222222]  text-[20px] font-[700] px-[20px]">
                от £40.00
                </h1>
              </div>
              <div className="border-r-[2px] border-l-[2px] border-black">
                <p className="text-[14px] font-[400] px-[20px] text-[#222222]">
                 
                </p>
                <h1 className="text-[#222222]  text-[20px] font-[700] flex items-center gap-2 px-[20px]">
                  <img src="" alt="" />{" "}
                </h1>
              </div>
              <div className=" border-l-[2px] border-black ">
                <p className="text-[14px] font-[400] px-[20px] text-[#222222] ">
                 
                </p>
                <h1 className="text-[#222222]  text-[20px] font-[700] px-[20px]">
                  £54.55
                </h1>
              </div>
            </article>
          </div>
          <div className="flex items-center w-[90%] m-auto rounded-[16px] bg-[#e2e0e0] justify-between">
            <div className="flex items-center p-[30px] gap-4">
              <img src={p3} alt="" />
              <p className="text-[18px]  font-[700] text-[#1F2428] uppercase">
              ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ
              </p>
            </div>


<article className="flex items-center gap-[50px]">
              <div className="border-r-[2px] border-l-[2px] border-black">
                <p className="text-[14px] font-[400] px-[20px] text-[#222222] ">
                Сроки:
                </p>
                <h1 className="text-[#222222]  text-[20px] font-[700] px-[20px]">
                10-14 дней
                </h1>
              </div>
              <div className="border-r-[2px] border-l-[2px] border-black">
                <p className="text-[14px] font-[400] px-[20px] text-[#222222]">
                  
                </p>
                <h1 className="text-[#222222]  text-[20px] font-[700] flex items-center gap-2 px-[20px]">
                  от £13.00 <img src={Инфо} alt="" />{" "}
                </h1>
              </div>
              <div className=" border-l-[2px] border-black ">
                <p className="text-[14px] font-[400] px-[20px] text-[#222222] ">
                  
                </p>
                <h1 className="text-[#222222]  text-[20px] font-[700] px-[20px]">
                  £90.50
                </h1>
              </div>
            </article>
          </div>
        </section>


      <div className=' dark:bg-black dark:text-[white]'>
      <h1 className="text-[40px] dark:text-[white] max-w-[55%] font-[800] pl-[100px] md:pl-0 md:m-auto md:text-[30px] sm:text-[25px] text-[#1F2428]">
      {t("four")}
          </h1>
      </div>

      <div className='flex flex-wrap justify-around items-center  dark:bg-black dark:text-[white]'>
        <div className='w-[300px]'>
          <img src={bas} alt="" />
          <h1 className='text-[20px] w-[200px] font-[600]'>{t("tov")}</h1>
          <p>{t("tov1")}</p>
        </div>

        <div className='w-[300px]'>
          <img src={bas1} alt="" />
          <h1 className='text-[20px] w-[200px] font-[600]'>{t("tov")}</h1>
          <p>{t("tov1")}</p>
        </div>

        <div className='w-[300px]'>
          <img src={bas2} alt="" />
          <h1 className='text-[20px] w-[200px] font-[600]'>{t("tov")}</h1>
          <p>{t("tov1")}</p>
        </div>

        <div className='w-[300px]'>
          <img src={bas3} alt="" />
          <h1 className='text-[20px] w-[200px] font-[600]'>{t("tov")}</h1>
          <p>{t("tov1")}</p>
        </div>
      </div>

        <div className='pt-[100px] pb-[100px] ml-[200px]  dark:bg-black dark:text-[white]'>
          <h1 className='text-[20px] text-[gray]'>Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас.</h1><br /><br />
          <button className='w-[250px] h-[70px] bg-[#00C97B] text-[white] rounded-[40px]'>Быстрая покупка</button>
        </div>

        
        <div className=' dark:bg-black dark:text-[white]'>
        <div
        data-aos="fade-up"
        data-aos-duration="3000"
   
        className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[400px] xl:w-auto w-[90%] rounded-3xl m-auto xl:h-auto flex flex-wrap justify-around items-center'>
          <img src={pc} className=' xl:w-[300px]' alt="" />
                <div className='w-[580px] xl xl:w-0 sm:w-0 xl:text-[20px]'>
                    <h1 className='text-[30px] xl:text-[20px] text-[white] font-[700] xl:hidden'>Виртуальный тур по нашему складу в реальном времени</h1> <br />
                    <h1 className='text-[white] text-[18px] font-[200] xl:hidden'>Вы можете всегда посмотреть на нашу слаженую работу на складе</h1> <br />
                    <button className='w-[250px] h-[70px] xl:w-auto  bg-[#00C97B] text-[white] xl:ml-[-300px] xl:mt-[300px] rounded-[40px]'>Попробовать</button>
                </div>
                
            </div>
        </div>


        <section className="pb-[100px] pt-[50px]  dark:bg-black dark:text-[white]" >
          <h1 className="text-[40px] dark:text-[white] font-[800] text-[#1F2428] md:pl-0 md:m-auto md:text-[30px] sm:text-[25px] ms:text-[22px] mn:text-[20px] pl-[100px] max-w-[50%] ">
            {t('er')} {" "}
          </h1>
          <p className="text-[20px] font-[300] text-[#1F2428] max-w-[40%] md:pl-0 md:m-auto md:text-[18.5px] pl-[100px] py-[20px] dark:text-white">
            {t('re')}
          </p>

          <div className="flex items-center flex-wrap justify-center gap-[50px] pt-[40px]">
            <div className="bg-[eceaea#] shadow-lg rounded-[16px] w-[400px]">
              <img className="pl-[30px] pt-[30px]" src={ok_1} alt="" />
              <h1 className="text-[20px] pl-[30px] dark:text-[white] py-[20px] font-[700] text-[#1F2428]">
                {t('Больше не значит дороже')}
              </h1>
              <p className="text-[#1F2428] pl-[30px] pb-[30px] dark:text-white text-[16px] font-[300] w-[360px]">
                {t('ii')}
                <span className="text-[#01CD7D]"> {t('адрес склада')} </span> OkeyPost
              </p>
            </div>
            <div className="bg-[eceaea#] shadow-lg rounded-[16px] w-[400px]">
              <img className="pl-[30px] pt-[30px]" src={ok_2} alt="" />
              <h1 className="text-[20px] pl-[30px] dark:text-[white] py-[20px] font-[700] text-[#1F2428]">
                {t('Быстрая обработка посылок')}
              </h1>
              <p className="text-[#1F2428] pl-[30px] pb-[30px] dark:text-white text-[16px] font-[300] w-[360px]">
                {t('ds')}
                <span className="text-[#01CD7D]"> {t('адрес склада')} </span> OkeyPost
              </p>
            </div>
            <div className="bg-[eceaea#] shadow-lg rounded-[16px] w-[400px]">
              <img className="pl-[30px] pt-[30px]" src={ok_3} alt="" />
              <h1 className="text-[20px] pl-[30px] dark:text-[white] py-[20px] font-[700] text-[#1F2428]">
                {t('SMS-уведомления')}
              </h1>
              <p className="text-[#1F2428] pl-[30px] pb-[30px] dark:text-white text-[16px] font-[300] w-[360px]">
                {t('ii')}
                <span className="text-[#01CD7D]"> {t('адрес склада')} </span> OkeyPost
              </p>
            </div>
          </div>
        </section>

       
<section className="pb-[100px] pt-[50px]  dark:bg-black dark:text-[white]">
          <h1 className="text-[36px] font-[800] dark:text-white text-[#1F2428] pl-[100px] md:pl-0 md:text-center">
            {t('Отзывы и цитаты блогеров:')}
          </h1>

          <article className="flex items-center flex-wrap justify-center py-[50px] gap-[80px]">
            <div className="flex items-center gap-[20px]">
              <img src={m1} alt="" />

              <figure>
                <h1>NIKOLAY S</h1>
                <img className="py-[20px]" src={рейтинг} alt="" />
                <p className="md:w-[200px]">
                  {t('das')}
                </p>
                <p className="pt-[50px] font-[700]">
                  {t('Дата')} {" "}
                  <span className="font-[300] pl-[35px]"> {t('pp')} </span>{" "}
                </p>
                <p className="font-[700]">
                  {t('Город')} {" "}
                  <span className="font-[300] pl-[30px]"> {t('fr')} </span>{" "}
                </p>
              </figure>
            </div>
            <div className="flex items-center gap-[20px]">
              <img src={m2} alt="" />

              <figure>
                <h1>DMITRIY D</h1>
                <img className="py-[20px]" src={рейтинг} alt="" />
                <p className="md:w-[200px]">
                  {t('das')}
                </p>
                <p className="pt-[50px] font-[700]">
                   {t('Дата')} {" "}
                  <span className="font-[300] pl-[35px]"> {t('pp')} </span>{" "}
                </p>
                <p className="font-[700]">
                   {t('Город')} {" "}
                  <span className="font-[300] pl-[30px]"> {t('fr')} </span>{" "}
                </p>
              </figure>
            </div>
            <div className="flex items-center gap-[20px]">
              <img src={m3} alt="" />

              <figure>
                <h1>VLADIMIR E</h1>
                <img className="py-[20px]" src={рейтинг} alt="" />
                <p className="md:w-[200px]">
                  {t('das')}
                </p>
                <p className="pt-[50px] font-[700]">
                  {t('Дата')} {" "}
                  <span className="font-[300] pl-[35px]"> {t('pp')} </span>{" "}
                </p>
                <p className="font-[700]">
                  {t('Город')} {" "}
                  <span className="font-[300] pl-[30px]"> {t('fr')} </span>{" "}
                </p>
              </figure>
            </div>
            <div className="flex items-center gap-[20px]">
              <img src={m4} alt="" />

              <figure>
                <h1> {t('Оксана')} </h1>
                <img className="py-[20px]" src={рейтинг} alt="" />
                <p className="md:w-[200px]">
                  {t('das')}
                </p>
                <p className="pt-[50px] font-[700]">
                  {t("Дата")} {" "}
                  <span className="font-[300] pl-[35px]"> {t('pp')} </span>{" "}
                </p>
                <p className="font-[700]">
                  {t('Город')} {" "}
                  <span className="font-[300] pl-[30px]"> {t('fr')} </span>{" "}
                </p>
              </figure>
            </div>
          </article>

         
        </section>


        <section className="m-auto pt-[50px] pb-[100px]  dark:bg-black dark:text-[white]">
          <h1 className="text-[40px] dark:text-white text-center md:text-[30px] md:w-[70%] md:m-auto pb-[20px] font-[800] text-[#1F2428]">
            {t('we')}
          </h1>
          <p className="text-[18px] m-auto dark:text-white py-[15px] text-[#1F2428] max-w-[83%] font-[300]" >
            {t('ok')}
          </p>
          <p className="text-[18px] m-auto dark:text-white py-[15px] text-[#1F2428] max-w-[83%] font-[300]" >
           {t('ko')}
          </p>
          <p className="text-[18px] m-auto dark:text-white py-[15px] text-[#1F2428] max-w-[83%] font-[300]" >
           {t('hey')}
          </p>
          <p className="text-[18px] m-auto dark:text-white py-[15px] text-[#1F2428] max-w-[83%] font-[300]" >
            {t('lok')}
          </p>
        </section>

    </div>
  )
}

export default Home