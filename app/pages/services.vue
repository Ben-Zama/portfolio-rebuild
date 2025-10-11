<template>
  <div class="servicesPage">
    <div class="services">
      <div class="heading">
        <pageTitle title="Services" />
        <h2><span>Services</span> I offer</h2>
      </div>
      <div class="grid">
        <div class="box">
          <PhCode :size="48" />
          <h3>Web Development</h3>
          <p>
            I build fast, responsive websites using modern technologies (HTML5, CSS3,
            JavaScript, VueJS, etc.) to deliver an engaging user experience.
          </p>
        </div>
        <div class="box">
          <PhDeviceMobile :size="48" />
          <h3>Mobile App Development</h3>
          <p>
            I develop cross‑platform mobile apps with Quasar framework, ensuring smooth
            performance and native‑like UX on iOS and Android.
          </p>
        </div>
        <div class="box">
          <PhGear :size="48" />
          <h3>Web Maintenance</h3>
          <p>
            I provide ongoing support—updates, security patches, backups, and performance
            tweaks—to keep your site running smoothly.
          </p>
        </div>
      </div>
    </div>

    <div class="work-process">
      <div class="heading">
        <pageTitle title="Work Process" />
        <h2>How I <span>work</span></h2>
      </div>
      <div class="grid">
        <div class="container">
          <p class="number">01</p>
          <PhDot :size="100" />
          <h3>Discovery & Planning</h3>
          <p class="text">
            We discuss your goals, audience, and project scope to align on vision,
            features, and timelines.
          </p>
        </div>
        <div class="container">
          <p class="number">02</p>
          <PhDot :size="100" />
          <h3>Design & Structure</h3>
          <p class="text">
            I create a layout and user interface plan to ensure the structure is clean,
            responsive, and user-friendly.
          </p>
        </div>
        <div class="container">
          <p class="number">03</p>
          <PhDot :size="100" />
          <h3>Frontend Development</h3>
          <p class="text">
            Using HTML, CSS, JavaScript, and modern frameworks, I bring the design to life
            with clean and optimized code.
          </p>
        </div>
        <div class="container">
          <p class="number">04</p>
          <PhDot :size="100" />
          <h3>Testing & Delivery</h3>
          <p class="text">
            I test across devices and browsers, fix bugs, and deliver a fast, accessible,
            and fully functional website.
          </p>
        </div>
      </div>
    </div>

    <div class="skills">
      <div class="heading">
        <pageTitle title="Tools" />
        <h2><span>Tools</span> & <span>libraries</span> I use</h2>
      </div>
      <div class="grid">
        <div v-for="item in skills" :key="item.id" class="box">
          <img :src="item.icon" alt="" />
        </div>
      </div>
    </div>

    <div class="marquee">
        <marquee />
    </div>

    <div class="faqs">
      <div class="heading">
        <pageTitle title="FAQs" />
        <h2><span>Frequently</span> asked questions</h2>
      </div>
      <div class="question-container">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          :class="['question', { active: activeIndex === index }]"
        >
          <div class="title" @click="toggle(index)">
            <h2>{{ item.title }}</h2>
              <i
                :class="activeIndex === index ? 'bi bi-dash' : 'bi bi-plus'"
              ></i>
          </div>
          <div class="body">
            <p :class="{ visible: activeIndex === index }">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhCode, PhDeviceMobile, PhDot, PhGear } from "@phosphor-icons/vue";

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

const faqs = ref([
  {
    title: "What tech do you use?",
    body: "HTML5, CSS3 (or SCSS), vanilla JS, and Vue/Nuxt. I can integrate Tailwind or Bootstrap if requested.",
  },
  {
    title: "What do you need from Me?",
    body: "Provide design files (Figma, XD, Sketch), brand assets (logos, colors, fonts), and content. If you lack designs, I can help with basic wireframes.",
  },
  {
    title: "In how many days can you deliver?",
    body: "I can deliver in time ranging from 3 - 10 days depending on the project.",
  },
  {
    title: "Can you handle deployment?",
    body: "Yes. I supply deployment instructions for Netlify, Vercel, or your preferred host. Assisted deployment is available for an extra fee.",
  },
  {
    title: "Is SEO included?",
    body: "I implement SEO basics—semantic HTML, meta tags, and optimized assets to boost ranking and performance.",
  },
]);

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>