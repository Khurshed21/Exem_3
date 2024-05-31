import React, { useEffect } from 'react'

import aber from "../img/aber.png";
import sapog from "../img/sapog.png";
import polo from "../img/polo.png";
import hol from "../img/hol.png";
import sumka from "../img/sumka.png";
import off from "../img/off.png";
import vika from "../img/vika.png";
import co from "../img/co.png";
import ugg from "../img/ugg.png";
import newb from "../img/newb.png";
import Соцсети from "../img/Соцсети.png";
import Aos from 'aos';

const Contact = () => {


    useEffect(() => {
        Aos.init()
    })
  return (
    <div>

       <div className='flex flex-wrap justify-center items-center pt-[50px] pb-[100px]  dark:bg-black dark:text-[white]'>
    <div
        data-aos="fade-up"
        data-aos-duration="3000"
   
        className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[300px] xl:h-auto w-[90%] rounded-3xl xl:w-auto flex flex-wrap justify-start items-center'>

            <div className='ml-[200px] xl:m-0'>
              
            <h1 className='text-[gray]'>Главная  /  Распродажи</h1><br />
              <h1 className='text-[40px] text-[white] font-[600]'>Распродажи</h1> <br />
              <h1 className='text-[20px] text-[white] font-[600]'>ранний доступ к распродажам в магазинах</h1><br />
              <button className='w-[250px] h-[70px] xl:w-auto  bg-[#00C97B] text-[white] rounded-[40px]'>Получить адрес в UK</button>
            </div>
      </div>
    </div>

<div className=' dark:bg-black dark:text-[white]'>
   <div className='w-[590px] xl:w-autodark:w-[100%] dark:bg-black dark:text-[white]'>
      <h1 className='text-[40px] font-[600]'>Black Friday Early Access
ранний доступ к распродажам
в магазинах Великобритании!</h1>
    </div>

</div>
   
    <div className='flex flex-wrap justify-around items-center  dark:bg-black dark:text-[white]'>

    <div className="max-w-2xl mx-auto p-4  bg-white rounded-lg shadow-md flex  mb-[100px] gap-10 justify-around lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={aber} alt="" />
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-2">Abercrombie & Fitch</h2>
        <p className="mb-2">цены от <span className="font-bold">£7.99 (3365Р)</span> разделе:</p>
        <p className="mb-2">
          мужские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          женские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          качественные детские вещи на <span className="text-green-600">Abercrombie kids</span>
        </p>
        <p className="text-green-600 font-bold mt-4">
          Только выкуп с оператором →
        </p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md flex mb-[100px]  gap-10 justify-around lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={sapog} alt="" />
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-2">Timberland</h2>
        <h2 className="text-2xl font-bold mb-2">NEW!</h2>
        <p className="mb-2">
        Коллаб <span className="text-green-600">Tommy Hilfiger x Timberland!</span>
        </p>
        <p className="mb-2">
        Ботинки от £7.99 (3365₽)
Зимние шапки за £7.99 (3365₽)
        </p>
        <p className="mb-2">
          качественные детские вещи на <span className="text-green-600">Abercrombie kids</span>
        </p>
        <p className="text-green-600 font-bold mt-4">
          Только выкуп с оператором →
        </p>
      </div>
    </div> 

    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md flex mb-[100px]  gap-10 justify-around lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={polo} alt="" />
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-2">Polo Ralph Lauren</h2>
        <p className="mb-2">
          Рубашка  <span className="text-green-600">за £7.99 (3365₽)</span>
        </p>
        <p className="mb-2">
        Худи 
 <span className="text-green-600">Худи за £7.99 (3365₽)
</span>
        </p>
        <p className="mb-2">
        До - 40% в разделе SALE
        </p>
        <p className="text-green-600 font-bold mt-4">
          Только выкуп с оператором →
        </p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md flex mb-[100px]   gap-10 justify-around lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={hol} alt="" />
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-2">Hollister Co.</h2>
        <p className="mb-2">цены от <span className="font-bold">£7.99 (3365Р)</span> разделе:</p>
        <p className="mb-2">
          мужские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          женские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
   
        <p className="text-green-600 font-bold mt-4">
          Только выкуп с оператором →
        </p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md flex  mb-[100px] gap-10 justify-around lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={sumka} alt="" />
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-2">Michael Kors</h2>
        <p className="mb-2">цены от <span className="font-bold">£7.99 (3365Р)</span> разделе:</p>
        <p className="mb-2">
          мужские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          женские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          качественные детские вещи на <span className="text-green-600">Abercrombie kids</span>
        </p>
        <p className="text-green-600 font-bold mt-4">
          Только выкуп с оператором →
        </p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md flex  mb-[100px] gap-10 justify-around lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={off} alt="" />
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-2">Аутлет Saks OFF 5THh</h2>
        <p className="mb-2">цены от <span className="font-bold">£7.99 (3365Р)</span> разделе:</p>
        <p className="mb-2">
          мужские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          женские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          качественные детские вещи на <span className="text-green-600">Abercrombie kids</span>
        </p>
        <p className="text-green-600 font-bold mt-4">
          Только выкуп с оператором →
        </p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md flex  mb-[100px] gap-10 justify-around lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={vika} alt="" />
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-2">Victoria's Secret</h2>
        <p className="mb-2">цены от <span className="font-bold">£7.99 (3365Р)</span> разделе:</p>
        <p className="mb-2">
          мужские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          женские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          качественные детские вещи на <span className="text-green-600">Abercrombie kids</span>
        </p>
        <p className="text-green-600 font-bold mt-4">
          Только выкуп с оператором →
        </p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md flex  mb-[100px] gap-10 justify-around lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={co} alt="" />
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-2">levi.com</h2>
        <p className="mb-2">цены от <span className="font-bold">£7.99 (3365Р)</span> разделе:</p>
        <p className="mb-2">
          мужские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          женские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          качественные детские вещи на <span className="text-green-600">Abercrombie kids</span>
        </p>
        <p className="text-green-600 font-bold mt-4">
          Только выкуп с оператором →
        </p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md flex  mb-[100px] gap-10 justify-around lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={ugg} alt="" />
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-2">UGG® - вход с VPN</h2>
        <p className="mb-2">цены от <span className="font-bold">£7.99 (3365Р)</span> разделе:</p>
        <p className="mb-2">
          мужские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          женские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          качественные детские вещи на <span className="text-green-600">Abercrombie kids</span>
        </p>
        <p className="text-green-600 font-bold mt-4">
          Только выкуп с оператором →
        </p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md flex  mb-[100px] gap-10 justify-around lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={newb} alt="" />
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-2">New Balance</h2>
        <p className="mb-2">цены от <span className="font-bold">£7.99 (3365Р)</span> разделе:</p>
        <p className="mb-2">
          мужские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          женские вещи: <span className="text-green-600">CLEARANCE</span>
        </p>
        <p className="mb-2">
          качественные детские вещи на <span className="text-green-600">Abercrombie kids</span>
        </p>
        <p className="text-green-600 font-bold mt-4">
          Только выкуп с оператором →
        </p>
      </div>
    </div>

    </div>

    <div className='flex flex-wrap justify-center items-center pt-[100px] pb-[50px]  dark:bg-black dark:text-[white]'>
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

export default Contact