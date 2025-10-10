<template>
  <div class="indexPage">
    <div class="layout">
      <div class="grid-card-container intro">
        <gridCard :showTitle="false" :showButton="false">
          <img src="~assets/images/headshot.jpg" alt="" />
          <div class="text">
            <p class="caption">Frontend Web Developer</p>
            <h2>Benzama Musa</h2>
            <p>
              Creative web developer crafting fast, responsive and user-friendly websites
              with modern technologies
            </p>
          </div>
        </gridCard>
      </div>

      <NuxtLink to="/about" class="grid-card-container about">
        <gridCard caption="More about me" title="About">
          <p>Benzama</p>
        </gridCard>
      </NuxtLink>

      <NuxtLink to="/portfolio" class="grid-card-container project">
        <gridCard caption="What I've worked on" title="Projects">
          <img src="~/assets/images/project.svg" alt="" />
        </gridCard>
      </NuxtLink>

      <NuxtLink to="/services" class="grid-card-container services">
        <gridCard caption="What I do" title="Services">
          <div class="icons">
            <PhDeviceMobile :size="32" />
            <PhGlobe :size="32" />
            <PhLaptop :size="32" />
          </div>
        </gridCard>
      </NuxtLink>

      <div class="grid-card-container skills">
        <gridCard :showTitle="false" :showButton="false">
          <div class="slider">
            <Swiper
              :modules="[Autoplay]"
              :slides-per-view="1"
              effect="fade"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              loop
              :observer="true"
              :observe-parents="true"
              class="mySwiper"
              :breakpoints="{
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  effect: 'slide',
                },
              }"
            >
              <SwiperSlide v-for="skill in skills" :key="skill.id">
                <img :src="skill.icon" />
              </SwiperSlide>
            </Swiper>
          </div>
        </gridCard>
      </div>

      <div class="grid-card-container links">
        <gridCard caption="Connect with me" title="Profiles" :showButton="false">
          <div class="icons">
            <a href="">
              <i class="bi bi-github"></i>
            </a>
            <a href="">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="">
              <i class="bi bi-twitter-x"></i>
            </a>
          </div>
        </gridCard>
      </div>

      <div class="grid-card-container stats">
        <gridCard :showButton="false" :showTitle="false">
          <div class="box">
            <countUp :end-val="2" :duration="5"/>
            <p>Years Experience</p>
          </div>
          <div class="box">
            <countUp :end-val="25" :duration="5" :options="counterOptions" />
            <p>Completed Projects</p>
          </div>
        </gridCard>
      </div>

      <NuxtLink to="/contact" class="grid-card-container contact">
        <gridCard :showTitle="false" :special="true">
          <i class="bi bi-stars"></i>
        </gridCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { PhDeviceMobile, PhGlobe, PhLaptop } from "@phosphor-icons/vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import countUp from 'vue-countup-v3'
const counterOptions = {
  suffix: ' +'
}

import Html from "~/assets/icons/html.png";
import Css from "~/assets/icons/css.png";
import Js from "~/assets/icons/js.png";
import Sass from "~/assets/icons/sass.png";
import Tailwind from "~/assets/icons/tailwind.png";
import Ts from "~/assets/icons/typescript.png";
import Vue from "~/assets/icons/vue.png";
import Nuxt from "~/assets/icons/nuxt.png";
import Quasar from "~/assets/icons/quasar.png";
import Pinia from "~/assets/icons/pinia.svg";
import MongoDB from "~/assets/icons/mongo.png";
import Gsap from "~/assets/icons/gsap.svg";

const skills = [
  { id: 1, icon: Html },
  { id: 2, icon: Css },
  { id: 3, icon: Js },
  { id: 4, icon: Sass },
  { id: 5, icon: Tailwind },
  { id: 6, icon: Ts },
  { id: 7, icon: Vue },
  { id: 8, icon: Nuxt },
  { id: 9, icon: Quasar },
  { id: 10, icon: Pinia },
  { id: 11, icon: MongoDB },
  { id: 12, icon: Gsap },
];
</script>
