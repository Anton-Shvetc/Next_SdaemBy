import { FC } from 'react'
import Link from 'next/link'
import { path } from '@/utils/constants/pages'

import classes from "./TypeProducts.module.scss"
const typeProducts = [
  { id: 0, name: "Коттеджы и усадьбы", path: path.cottages },
  { id: 1, name: "Бани и сауны", path: path.baths },
  { id: 2, name: "Авто на прокат", path: path.cars },
]

export const TypeProducts: FC = () => {
  return (
    <div className={classes.flex}>
      {typeProducts.map(item =>
        <Link
          key={item.id}
          href={item.path}
          className={classes.link}>
          {item.name}
        </Link>
      )}
    </div>
  )
}
