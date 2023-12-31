import { FC } from 'react'
// import { Link } from 'react-router-dom'
import { Logo } from '../../Logo/Logo'
// import { Dropdown } from '../../Dropdown/Dropdown'
// import { MyLoader } from '../../../Spinner/preloader'
// import { useRequest } from '../../../hooks/useRequest'

import classes from './HeaderMenu.module.scss'
// import { Dropdown } from '@/components/Dropdown/Dropdown';
// import { api } from '../../../constants/api'

// const urlMenuData = [
//   {
//     title: "Квартиры на сутки",
//     isIcon: true,
//     list: [
//       {
//         id: 0,
//         label: "Квартиры на сутки в Минске",
//         value: "Квартиры на сутки в Минске",
//         city: "Минск",
//         path: "catalog/flats",
//       },
//       {
//         id: 1,
//         label: "Квартиры на сутки в Гомеле",
//         value: "Квартиры на сутки в Гомеле",
//         city: "Гомель",
//         path: "catalog/flats",
//       },
//       {
//         id: 2,
//         label: "Квартиры на сутки в Бресте",
//         value: "Квартиры на сутки в Бресте",
//         city: "Брест",
//         path: "catalog/flats",
//       },
//       {
//         id: 3,
//         label: "Квартиры на сутки в Витебске",
//         value: "Квартиры на сутки в Витебске",
//         city: "Витебск",
//         path: "catalog/flats",
//       },
//       {
//         id: 4,
//         label: "Квартиры на сутки в Гродно",
//         value: "Квартиры на сутки в Гродно",
//         city: "Гродно",
//         path: "catalog/flats",
//       },
//       {
//         id: 5,
//         label: "Квартиры на сутки в Могилеве",
//         value: "Квартиры на сутки в Могилеве",
//         city: "Могилев",
//         path: "catalog/flats",
//       },
//     ],
//   },
//   {
//     title: "Коттеджи и усадьбы",
//     list: [
//       {
//         id: 0,
//         value: "Коттеджы и усадьбы в Минске",
//         label: "Коттеджы и усадьбы в Минске",
//         city: "Минск",
//         path: "catalog/cottages",
//       },
//       {
//         id: 1,
//         label: "Коттеджы и усадьбы в Гомеле",
//         value: "Коттеджы и усадьбы в Гомеле",
//         city: "Гомель",
//         path: "catalog/cottages",
//       },
//       {
//         id: 2,
//         label: "Коттеджы и усадьбы в Бресте",
//         value: "Коттеджы и усадьбы в Бресте",
//         city: "Брест",
//         path: "catalog/cottages",
//       },
//       {
//         id: 3,
//         label: "Коттеджы и усадьбы в Витебске",
//         value: "Коттеджы и усадьбы в Витебске",
//         city: "Витебск",
//         path: "catalog/cottages",
//       },
//       {
//         id: 4,
//         label: "Коттеджы и усадьбы в Гродно",
//         value: "Коттеджы и усадьбы в Гродно",
//         city: "Гродно",
//         path: "catalog/cottages",
//       },
//       {
//         id: 5,
//         label: "Коттеджы и усадьбы в Могилеве",
//         value: "Коттеджы и усадьбы в Могилеве",
//         city: "Могилев",
//         path: "catalog/cottages",
//       },
//     ],
//   },
//   {
//     title: "Бани и cауны",
//     list: [
//       {
//         id: 0,
//         value: "Бани и сауны в Минске",
//         label: "Бани и сауны в Минске",
//         city: "Минск",
//         path: "catalog/baths",
//       },
//       {
//         id: 1,
//         value: "Бани и сауны в Гомеле",
//         label: "Бани и сауны в Гомеле",
//         city: "Гомель",
//         path: "catalog/baths",
//       },
//       {
//         id: 2,
//         value: "Бани и сауны в Бресте",
//         label: "Бани и сауны в Бресте",
//         city: "Брест",
//         path: "catalog/baths",
//       },
//       {
//         id: 3,
//         value: "Бани и сауны в Витебске",
//         label: "Бани и сауны в Витебске",
//         city: "Витебск",
//         path: "catalog/baths",
//       },
//       {
//         id: 4,
//         value: "Бани и сауны в Гродно",
//         label: "Бани и сауны в Гродно",
//         city: "Гродно",
//         path: "catalog/baths",
//       },
//       {
//         id: 5,
//         value: "Бани и сауны в Могилеве",
//         label: "Бани и сауны в Могилеве",
//         city: "Могилев",
//         path: "catalog/baths",
//       },
//     ],
//   },
//   {
//     title: "Авто на прокат",
//     list: [
//       {
//         id: 0,
//         value: "Авто на прокат в Минске",
//         label: "Авто на прокат в Минске",
//         city: "Минск",
//         path: "catalog/cars",
//       },
//       {
//         id: 1,
//         value: "Авто на прокат в Гомеле",
//         label: "Авто на прокат в Гомеле",
//         city: "Гомель",
//         path: "catalog/cars",
//       },
//       {
//         id: 2,
//         value: "Авто на прокат в Бресте",
//         label: "Авто на прокат в Бресте",
//         city: "Брест",
//         path: "catalog/cars",
//       },
//       {
//         id: 3,
//         value: "Авто на прокат в Витебске",
//         label: "Авто на прокат в Витебске",
//         city: "Витебск",
//         path: "catalog/cars",
//       },
//       {
//         id: 4,
//         value: "Авто на прокат в Гродно",
//         label: "Авто на прокат в Гродно",
//         city: "Гродно",
//         path: "catalog/cars",
//       },
//       {
//         id: 5,
//         value: "Авто на прокат в Могилеве",
//         label: "Авто на прокат в Могилеве",
//         city: "Могилев",
//         path: "catalog/cars",
//       },
//     ],
//   },
// ];


export const HeaderMenu: FC = () => {



  // const { data, loading, error } = useRequest(api.dropdown)

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Logo />
        {/*
        {loading && <MyLoader count={4} />}
        {error ?
          <span className={classes.error}>Ошибка сервера, попробуйте обновить страницу</span>
          :
          <Dropdown data={urlMenuData} />
        }
        <Link
          to={"/404"}
          className={classes.link}
        >
          + Разместить объявление
        </Link> */}
{/* 
        <Dropdown data={urlMenuData} /> */}
      </div>
    </div>
  );
}