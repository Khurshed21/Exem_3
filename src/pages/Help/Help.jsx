import Aos from 'aos'
import React, { useEffect } from 'react'

import Соцсети from "../img/Соцсети.png";
import { t } from 'i18next';

const Help = () => {

 

    useEffect(() => {
        Aos.init()
    })

  return (
    <div>

<div className='flex flex-wrap justify-center items-center pt-[50px] pb-[100px]  dark:bg-black dark:text-[black]'>
    <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
       
   
        className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[300px] xl:h-auto w-[90%] rounded-3xl xl:w-auto flex flex-wrap justify-start items-center'>

            <div className='ml-[200px] xl:m-0'>
              
            <h1 className='text-[gray]'>Главная  /  Часто задаваемые вопросы</h1><br />
              <h1 className='text-[40px] text-[white] font-[600]'>Отвечаем на вопросы доставки</h1> <br />
            </div>
      </div>
    </div>

    <div className='flex flex-wrap justify-center items-center pb-[100px]  dark:bg-black dark:text-[black]'>
     <div className='w-[1400px] h-[180px] border-[black] border-[1px]  flex flex-wrap justify-center items-center'>
    <div className='w-[100%]'>
    <h1 className=''>Поиск в вопросах и ответах:</h1>
      <input type="text"  placeholder='Введите свой вопрос...' className='border-b-[black] border-[1px] w-[90%]' />
    </div>
     </div>
    </div>

    <div className='flex flex-wrap  items-center pb-[200px]  dark:bg-black dark:text-[black]'>
    <h1 className='text-[40px] font-[600] pb-[30px] ml-[200px] xl:m-0 dark:text-[white]'>{t("virt")}</h1>
     <div className='flex flex-wrap justify-center items-center'>
     
      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt1")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt3")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt4")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt3")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt1")}</option>
      </select>
     </div>

     
    </div>

    <div className='flex flex-wrap  items-center pb-[200px]  dark:bg-black dark:text-[black]'>
    <h1 className='text-[40px] font-[600] pb-[30px] ml-[200px] xl:m-0 dark:text-[white]'></h1>{t("virto")}
     <div className='flex flex-wrap justify-center items-center'>
     
      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>
     </div>

     
    </div>

    <div className='flex flex-wrap  items-center pb-[200px]  dark:bg-black dark:text-[black]'>``
    <h1 className='text-[40px] font-[600] pb-[30px] ml-[200px] xl:m-0 dark:text-[white]'>Доставка из Англии</h1>
     <div className='flex flex-wrap justify-center items-center'>
     
      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Как часто вы отправляете посылки в россию?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt4")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>{t("virt2")}</option>
      </select>
     </div>

     
    </div>


    <div className='flex flex-wrap  items-center pb-[200px]  dark:bg-black dark:text-[black]'>
    <h1 className='text-[40px] font-[600] pb-[30px] ml-[200px] xl:m-0 dark:text-[white]'>Виртуальный адрес в заказ </h1>
     <div className='flex flex-wrap justify-center items-center'>
     
      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Что делать, если Вы забыли внести трек номер на сайт, а уже пришел?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Как я узнаю что заказ пришел на склад?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Покупки на Eбeй / Ebay</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Как купить на виртуальный адрес?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Сколько стоит виртуальный адрес?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Как купить на виртуальный адрес?</option>
      </select>
     </div>

     
    </div>

    <div className='flex flex-wrap  items-center pb-[200px]  dark:bg-black dark:text-[black]'>
    <h1 className='text-[40px] font-[600] pb-[30px] ml-[200px] xl:m-0 dark:text-[white]'> Великобритании</h1>
     <div className='flex flex-wrap justify-center items-center'>
     
      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Как я узнаю что заказ пришел на склад?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?</option>
      </select>
     </div>

     
    </div>

    <div className='flex flex-wrap  items-center pb-[200px]  dark:bg-black dark:text-[black]'>
    <h1 className='text-[40px] font-[600] pb-[30px] ml-[200px] xl:m-0 dark:text-[white]'>Виртуальный адрес в Великобритании</h1>
     <div className='flex flex-wrap justify-center items-center'>
     
      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Как я узнаю что заказ пришел на склад?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Покупки на Eбeй / Ebay</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Как купить на виртуальный адрес?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Сколько стоит виртуальный адрес?</option>
      </select>

      <select name="" id="" className='w-[1400px] h-[90px] rounded-3xl shadow-xl text-start p-[20px] border-[black] mb-[20px] border-[1px]'>
        <option value="" className='font-[600]'>Как купить на виртуальный адрес?</option>
      </select>
     </div>

     
    </div>

    <div className='flex flex-wrap justify-center items-center pt-[100px] pb-[50px]  dark:bg-black dark:text-[black]'>
    <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
   
        className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[300px] xl:h-auto w-[90%] rounded-3xl xl:w-auto flex flex-wrap justify-around items-center'>

              <h1 className='text-[40px] text-[white] font-[600]'>Остались вопросы? Спросите нас в соцсетях!</h1> <br />
              <img src={Соцсети} alt="" />
            
      </div>
    </div>

    </div>
  )
}

export default Help