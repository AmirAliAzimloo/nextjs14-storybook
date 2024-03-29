"use client";

import LottiePakage from "lottie-react";
import coffeecup from "../lottie/coffeecup.json";
import { useEffect, useRef, useState } from "react";

const Lottie = () => {

  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handelLottie = () => {
    lottieRef.current.play();
    const timerRef = setTimeout(() => {
        lottieRef.current.stop();
    }, 700);
  };



  return (
    <>
   <LottiePakage lottieRef={lottieRef}  style={{height:"500px",width:"500px"}}  animationData={coffeecup} />


      <button className="bg-white text-black size-28" onClick={handelLottie}>toggle</button>
    </>
  );
};

export default Lottie;
