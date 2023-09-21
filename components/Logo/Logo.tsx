"use client"
import { FC } from "react"
// import { useLocation } from "react-router-dom"
import { usePathname } from "next/navigation";
import Link from "next/link";


import { path } from "@/utils/constants/pages"
import classes from "./Logo.module.scss"
import {IPropsLogo} from "@/utils/interfaces/interfaces"

export const Logo: FC<IPropsLogo> = ({ isText }) => {
  const pathname = usePathname();


  return (
    pathname !== path.home ?
      <Link href="/" className={classes.logo}>
        <div className={classes.image}>
          {/* <img src={require("../../assets/images/logo.png")} alt="Логотип" /> */}
        </div>
        <span className={classes.logoText}>Сдаем бай</span>
      </Link>
      :
      <div className={classes.logo}>
        <div className={classes.image}>
          {/* <img src={require("../../assets/images/logo.png")} alt="Логотип" /> */}
        </div>
        {isText && <span className={classes.logoText}>Сдаем бай</span>}
      </div>
  )

}