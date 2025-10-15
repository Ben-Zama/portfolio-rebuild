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
              Building sleek, fast, and user-first websites that don’t just work — they wow.
            </p>
          </div>
        </gridCard>
      </div>

      <NuxtLink to="/about" class="grid-card-container about">
        <gridCard caption="Get to know me better" title="About me">
          <p>Benzama</p>
        </gridCard>
      </NuxtLink>

      <NuxtLink to="/portfolio" class="grid-card-container project">
        <gridCard caption="Explore my works" title="Projects">
          <img src="~/assets/images/project.svg" alt="" />
        </gridCard>
      </NuxtLink>

      <NuxtLink to="/services" class="grid-card-container services">
        <gridCard caption="Here's what I can do for you" title="Services">
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
                <img :src="isDark ? skill.iconDark : skill.icon" />
              </SwiperSlide>
            </Swiper>
          </div>
        </gridCard>
      </div>

      <div class="grid-card-container links">
        <gridCard caption="Find me around the web" title="Profiles" :showButton="false">
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
            <countUp :end-val="3" :duration="5"/>
            <p>Years crafting code</p>
          </div>
          <div class="box">
            <countUp :end-val="25" :duration="5" :options="counterOptions" />
            <p>Projects completed (and counting)</p>
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

const { isDark } = useTheme()

import Html from "~/assets/icons/html.png";
import Css from "~/assets/icons/css.png";
import Js from "~/assets/icons/js.png";
import Sass from "~/assets/icons/sass.png";
import Tailwind from "~/assets/icons/tailwind.png";
import Ts from "~/assets/icons/typescript.png";
import Vue from "~/assets/icons/vue.png";
import Nuxt from "~/assets/icons/nuxt.png";
import Quasar from "~/assets/icons/quasar.svg";
import quasarDark from "~/assets/icons/quasar-dark.svg";
import Pinia from "~/assets/icons/pinia.svg";
import Appwrite from "~/assets/icons/appwrite.png";
import Gsap from "~/assets/icons/gsap.svg";

const skills = [
  { id: 1, name: "HTML", icon: Html, iconDark: Html },
  { id: 2, name: "CSS", icon: Css, iconDark: Css },
  { id: 3, name: "Javascript", icon: Js, iconDark: Js },
  { id: 4, name: "Sass", icon: Sass, iconDark: Sass },
  { id: 5, name: "TailwindCSS", icon: Tailwind, iconDark: Tailwind },
  { id: 6, name: "Typescript", icon: Ts, iconDark: Ts },
  { id: 7, name: "VueJS", icon: Vue, iconDark: Vue },
  { id: 8, name: "NuxtJS", icon: Nuxt, iconDark: Nuxt },
  { id: 9, name: "Quasar", icon: Quasar, iconDark: quasarDark },
  { id: 10, name: "Pinia", icon: Pinia, iconDark: Pinia },
  { id: 11, name: "Appwrite", icon: Appwrite, iconDark: Appwrite },
  { id: 12, name: "GSAP", icon: Gsap, iconDark: Gsap },
];
</script>