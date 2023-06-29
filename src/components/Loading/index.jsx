import React, { useEffect, useRef, useState } from 'react';
import Lottie from "lottie-react";
import AILoading from "./ai-loading.json";


const loadingData = ["3000萬+ 公司資料…", "930萬+ 求職者資料…", "1000萬+ 模擬資料…"]

const Loading = () => {
  const [state, setState] = useState(0);
  const wording = useRef(null);

  useEffect(() => {
    const timer =  setInterval(() => {
      if (wording.current) {
        wording.current.classList.add('animate__fadeOutUp');
        setTimeout(() => {
          wording.current.classList.remove('animate__fadeOutUp');
          wording.current.classList.add('animate__fadeInUp');
          setState((prev) => prev < loadingData.length - 1 ? prev + 1 : 0);
        }, 500);
      }
    }, 3000)
    return () => clearInterval(timer);
  },[])

    return (
        <div className='flex flex-col pt-5 pb-10'>
          <h1 className='text-2xl font-bold text-center'>Rooch AI Loading….</h1>
          <Lottie className='w-1/2 mx-auto -my-10 md:-my-28' animationData={AILoading} />
          <div ref={wording} className='text-center p-2 text-lg font-bold leading-7_5 animate__animated animate__faster'>{loadingData[state]}</div>
        </div>
    );
  
};

export default Loading;