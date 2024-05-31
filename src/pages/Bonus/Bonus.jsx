import React, { useEffect } from 'react'

import black from "../img/black.png";
import q1 from "../img/q1.png";
import q2 from "../img/q2.png";
import q3 from "../img/q3.png";
import q4 from "../img/q4.png";
import Соцсети from "../img/Соцсети.png";
import Aos from 'aos';

const Bonus = () => {
  

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
              
            <h1 className='text-[gray]'>Главная  /  Как покупать</h1><br />
              <h1 className='text-[40px] text-[white] font-[600]'>Научим покупать вВеликобритании!</h1> <br />
              <h1 className='text-[20px] text-[white] font-[600]'>и экономить до 70%</h1><br />
              <button className='w-[250px] h-[70px] xl:w-auto  bg-[#00C97B] text-[white] rounded-[40px]'>Получить адрес в UK</button>
            </div>
      </div>
    </div>

      
        <div className=' dark:bg-black dark:text-[white]'>
          <h1 className='text-[40px] font-[600] ml-[100px] '>Покупать в Великобритании очень просто</h1>
          <h1 className='w-[720px] xl:hidden ml-[100px]'>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.</h1>
        </div>

        <div className='pt-[100px]  dark:bg-black dark:text-[white]'>
      <div className=' xl:w-auto flex flex-wrap justify-center gap-20 items-center'>
      
      <div>
            <img src={black} alt="" />

          </div>

        <div>
        <div className='flex flex-wrap gap-10 items-center pb-[20px]'>
          <span className='text-[50px] text-[#01CD7D] border-r-[black] border-[1px]'>01</span>
            <h1 className='text-[20px] font-[600] w-[300px]'>Получаем адрес для покупок в магазинах Великобритании </h1>
            
          </div>
          <h1 className='text-[gray] w-[980px] xl:w-auto text-[20px]'>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</h1>
         
        </div>
          
      </div>
        </div>

        <div className='pt-[100px]  dark:bg-black dark:text-[white]'>
      <div className=' xl:w-auto flex flex-wrap justify-center gap-20 items-center'>
      
      <div>
            <img src={q1} alt="" />

          </div>

        <div>
        <div className='flex flex-wrap gap-10 items-center pb-[20px]'>
          <span className='text-[50px] text-[#01CD7D] border-r-[black] border-[1px]'>02</span>
            <h1 className='text-[20px] font-[600] w-[300px]'>Идём за покупками в онлайн-магазины</h1>
            
          </div>
          <h1 className='text-[gray] w-[980px] xl:w-auto text-[20px]'>Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, что покупать нельзя.</h1>
         
        </div>
          
      </div>
        </div>

        <div className='pt-[100px]  dark:bg-black dark:text-[white]'>
      <div className=' xl:w-auto flex flex-wrap justify-center gap-20 items-center'>
      
      <div>
            <img src={q2} alt="" />

          </div>

        <div>
        <div className='flex flex-wrap gap-10 items-center pb-[20px]'>
          <span className='text-[50px] text-[#01CD7D] border-r-[black] border-[1px]'>03</span>
            <h1 className='text-[20px] font-[600] w-[300px]'>Следим за перемещением посылки до склада </h1>
            
          </div>
          <h1 className='text-[gray] w-[980px] xl:w-auto text-[20px]'>После оформление заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.</h1>
         
        </div>
          
      </div>
        </div>

        <div className='pt-[100px]  dark:bg-black dark:text-[white]'>
      <div className=' xl:w-auto flex flex-wrap justify-center gap-20 items-center'>
      
      <div>
            <img src={q3} alt="" />

          </div>

        <div>
        <div className='flex flex-wrap gap-10 items-center pb-[20px]'>
          <span className='text-[50px] text-[#01CD7D] border-r-[black] border-[1px]'>04</span>
            <h1 className='text-[20px] font-[600] w-[300px]'>Оплачиваем доставку и покупки отправляются домой</h1>
            
          </div>
          <h1 className='text-[gray] w-[980px] xl:w-auto text-[20px]'>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</h1>
         
        </div>
          
      </div>
        </div>

        <div className='pt-[100px]  dark:bg-black dark:text-[white]'>
      <div className=' xl:w-auto flex flex-wrap justify-center gap-20 items-center'>
      
      <div>
            <img src={q4} alt="" />

          </div>

        <div>
        <div className='flex flex-wrap gap-10 items-center pb-[20px]'>
          <span className='text-[50px] text-[#01CD7D] border-r-[black] border-[1px]'>05</span>
            <h1 className='text-[20px] font-[600] w-[300px]'>Получаем посылку и спешим сделать новый заказ</h1>
            
          </div>
          <h1 className='text-[gray] w-[980px] xl:w-auto text-[20px]'>Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся :)</h1>
         
        </div>
          
      </div>
        </div>

        <div className='flex flex-wrap justify-center items-center pt-[100px] pb-[50px]  dark:bg-black dark:text-[white]'>
    <div
        data-aos="fade-up"
        data-aos-duration="3000"
   
        className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[300px] xl:h-auto w-[90%] rounded-3xl xl:w-auto flex flex-wrap justify-around items-center'>

              <h1 className='text-[40px] text-[white] font-[600]'>Остались вопросы? Спросите нас в соцсетях!</h1> <br />
              <img src={Соцсети} alt="" />
            
      </div>
    </div>

    </div>
  )
}

export default Bonus