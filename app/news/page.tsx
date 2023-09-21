import classes from "./news.module.scss";
import cn from "classnames";
export default function News() {
  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div>
   
          <div className={classes.flex}>
            <h3>Новости</h3>
      
          </div>
        </div>


      </div>
    </section>
  );
}
