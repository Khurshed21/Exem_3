import React, { useState } from 'react'
import Switcher from "../Components/Switcher";

import okey from "../img/okey.png";
import User from "../img/User.png";
import Соцсети from "../img/Соцсети.png";



import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Layout = () => {

        let [age, setAge] = useState(localStorage.getItem('i18nextLng'));
        let { t, i18n } = useTranslation();
        
        console.log(age);
        function handleClick(event) {
          setAge(event.target.value)
          i18n.changeLanguage(event.target.value)
        }
  return (
    <div>
        <div className='flex flex-wrap justify-around items-center pt-[20px] w-[100%]  dark:bg-black dark:text-[white]'>
           <Switcher></Switcher>
            <ul className='sm:hidden flex flex-wrap justify-around items-center gap-10 text-[20px] font-[500]  dark:bg-black dark:text-[white]'>
                <Link to={"/"}><img src={okey} alt="" /></Link>
                <Link to={"/Bonus"}>{t("how")}</Link>
                <Link to={"/Contact"}>{t("aksi")}</Link>
                <Link to={"/Price"}>{t("paid")}</Link>
                <Link to={"/Help"}>{t("help")}</Link>
                <Link>{t("bonus")}</Link>
                <Link>{t("blog")}</Link>
                <Link>{t("contact")}</Link>
            </ul>

                <div className='flex flex-wrap justify-around items-center gap-3'>
                <img src={User} alt="" />
                <h1>Вход</h1>
                </div>
                <select value={age} className=" border-[1px] w-[150px] h-[50px]  border-[black]  dark:bg-black dark:text-[white]" onChange={handleClick}>
             <option value="en">English</option>
             <option value="ru">Russian</option>
             <option value="tj">Tajik</option>
                </select>
                <button className='w-[200px] h-[50px] bg-[#00C97B] text-[white] rounded-3xl'>Связаться с нами</button>

        </div>
        <Outlet></Outlet>

        <footer className='flex flex-wrap justify-around items-center pt-[100px]  dark:bg-black dark:text-[white]'>
          <ul >
            <li><img src={okey} alt="" /></li><br /><br />
            <li><img src={Соцсети} alt="" /></li>
            <li></li>
          </ul>

          <ul>
            <h1 className='text-[20px] font-[600] pb-[10px]'>О компании</h1>
            <li className='text-[gray] pb-[10px]'>Услуги</li>
            <li className='text-[gray] pb-[10px]'>Цены</li>
            <li className='text-[gray] pb-[10px]'>Отзывы</li>
            <li className='text-[gray] pb-[10px]'>Контакты</li>
            <li className='text-[gray] pb-[10px]'>Вакансии</li>
            <li className='text-[gray] pb-[10px]'>Соглашение о персональных данных</li>
            <li className='text-[gray] pb-[10px]'>Условия использования</li>
          </ul>

          <ul>
            <h1 className='text-[20px] font-[600] pb-[10px]'>Полезное</h1>
            <li className='text-[gray] pb-[10px]'>Как работает наш сервис</li>
            <li className='text-[gray] pb-[10px]'>Как покупать с оператором</li>
            <li className='text-[gray] pb-[10px]'>Ответы на частые вопросы</li>
            <li className='text-[gray] pb-[10px]'>Популярные магазины</li>
            <li className='text-[gray] pb-[10px]'>Черный список магазинов</li>
            <li className='text-[gray] pb-[10px]'>Актуальные распродажи</li>
          </ul>

          <ul>
            <h1 className='text-[20px] font-[600] pb-[10px]'>Спецпроекты</h1>
            <li className='text-[gray] pb-[10px]'>50% на первую доставку</li>
            <li className='text-[gray] pb-[10px]'>Скидки для постоянных клиентов</li>
            <li className='text-[gray] pb-[10px]'>Реферальная программа</li>
            <li className='text-[gray] pb-[10px]'>Кэшбек Mr. Rebates и Rakuten</li>
            <li className='text-[gray] pb-[10px]'>Stop Fraud</li>
          </ul>

        </footer>

        <footer className='border-t-[black] border-[1px] p-[20px]  dark:bg-black dark:text-[white]'>
          <h1 className='text-[15px] text-[gray] text-center'>© 2021 Okeypost . Все права защищены.</h1>
        </footer>
  

    </div>
  )
}

export default Layout