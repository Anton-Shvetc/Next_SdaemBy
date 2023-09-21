"use client";
import { FC } from "react";
import Link from "next/link";

// import { Navigation } from '../Navigation/Navigation'
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
// import { IconSvg } from '../IconSvg/IconSvg'

// import { MyLoader } from '../../Spinner/preloader'
// import { useRequest } from "@/utils/hooks/useRequest";

import classes from "./Header.module.scss";
// import { api } from "@/utils/constants/api";
import { Navigation } from "../Navigation/Navigation";

// import IHeaderNavData from "@/utils/interfaces"

export const Header: FC = () => {
  // const { data, loading, error } = useRequest(api.navigation);


  const urlData = [
    { id: 0, item: "Главная", path: "/" },
    { id: 1, item: "Новости", path: "/news" },
    { id: 2, item: "Размещение и тарифы", path: "/rate" },
    { id: 3, item: "Объявления на карте", path: "/advert", isIcon: true },
    { id: 4, item: "Контакты", path: "/contacts" },
  ];

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Navigation
          data={urlData}
          className={[classes.navList, classes.navListItem]}
        />
        <div className={classes.buttons}>
          <Link href={"/bookmarks"} className={classes.bookmark}>
            Закладки
            {/* <IconSvg id={"#heart"} className={classes.heart} /> */}
          </Link>
          <Link href={"/login"} className={classes.login}>
            Вход и регистрация
          </Link>
        </div>
      </div>

      <HeaderMenu />
    </header>
  );
};
