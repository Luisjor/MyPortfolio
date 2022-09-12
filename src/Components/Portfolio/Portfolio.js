import React from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import Tenzies from "./img/Tenzies.jpg"
import TipCalc from "./img/TipCalculator.jpg"
import AdviceGenerator from "./img/AdviceGenerator.jpg"
import GrupoArtico from "./img/GrupoArtico.jpg"
import Friends from "./img/FriendsList.jpg"


export default function Portfolio() {
    return (

      <section className="Portolio--section" >
        <h1 >Portfolio</h1>
        <Swiper
        modules={ [Navigation , EffectFade]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        className="myswiper"
        >


        <SwiperSlide className="swiperslide">
          <a href="https://starlit-tapioca-61b9f1.netlify.app/" target="_blank" rel="noreferrer">
            <img src={Tenzies} alt="TenziesGame" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <a href="https://www.grupoarti.co" target="_blank" rel="noreferrer">
            <img src={GrupoArtico} alt="AdviceGenerator" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <a href="https://jorgechfriends.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={Friends} alt="AdviceGenerator" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <a href="https://luisjor.github.io/TipCalculator/" target="_blank" rel="noreferrer">
            <img src={TipCalc} alt="TipCalculator" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <a href="https://luisjor.github.io/AdviceGenerator/" target="_blank" rel="noreferrer">
            <img src={AdviceGenerator} alt="AdviceGenerator" />
          </a>
        </SwiperSlide>


        </Swiper>
      </section>


    )
}
