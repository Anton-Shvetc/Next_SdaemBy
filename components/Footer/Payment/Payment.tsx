import Image from "next/image";
import visa from "@/public/icons/visa.svg";
import webpay from "@/public/icons/webpay.svg";
import verified from "@/public/icons/verifiedByVisa.svg";
import mastercard from "@/public/icons/mastercard.svg";
import securecode from "@/public/icons/securecode.svg";
import belkart from "@/public/icons/belkart.svg";

import classes from "./Payment.module.scss";

const arr = [
  { name: visa },
  { name: webpay },
  { name: verified },
  { name: mastercard },
  { name: securecode },
  { name: belkart },
];

export const Payment = () => {
  return (
    <div className={classes.payment}>
      {arr.map((pay, index) => (
        <div key={index}>
          <Image src={pay.name} alt="Иконка оплаты" />
        </div>
      ))}
    </div>
  );
};
