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
            I build modern, high-performing websites using cutting-edge tech
            like Vue.js, Nuxt, and Tailwind. Every line of code is optimized for
            speed, responsiveness, and that smooth, “this-just-works” feel.
          </p>
        </div>
        <div class="box">
          <PhDeviceMobile :size="48" />
          <h3>Mobile App Development</h3>
          <p>
            I develop cross‑platform mobile apps with Quasar framework, ensuring
            smooth performance and native‑like UX on iOS and Android.
          </p>
        </div>
        <div class="box">
          <PhGear :size="48" />
          <h3>Web Maintenance</h3>
          <p>
            Websites need care. I handle updates, backups, performance tuning,
            and bug fixes — so you can focus on your business while your site
            stays secure and lightning-fast.
          </p>
        </div>
      </div>
    </div>

    <div class="benefits">
      <div class="heading">
        <PageTitle title="Benefits" />
        <h2><span>Benefits</span> of my services</h2>
      </div>
      <div class="grid">
        <div class="container">
          <PhSpeedometer :size="36" />
          <h3>Fast Performance</h3>
          <p>
            Enjoy lightning-fast load times and seamless interactions, ensuring
            an optimal user experience.
          </p>
        </div>
        <div class="container">
          <PhDevices :size="36" />
          <h3>Fully Responsive</h3>
          <p>
            From widescreens to smartphones, your website adapts effortlessly —
            pixel-perfect and consistent everywhere.
          </p>
        </div>
        <div class="container">
          <PhFileMagnifyingGlass :size="36" />
          <h3>SEO Optimization</h3>
          <p>
            Built with SEO best practices to help your website rank higher in
            search engine results.
          </p>
        </div>
        <div class="container">
          <PhCertificate :size="36" />
          <h3>W3 Validated</h3>
          <p>
            Code that meets W3C standards — clean, compliant, and reliable
            across browsers and devices.
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
        <div v-for="item in workProcess" :key="item" class="container">
          <p class="number">{{ item.number }}</p>
          <PhDot :size="100" />
          <h3>{{ item.title }}</h3>
          <p class="text">
            {{ item.text }}
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
        <div v-for="item in skills" :key="item.id" class="container">
          <div class="box">
            <img
              :key="isDark"
              :src="isDark ? item.iconDark : item.icon"
              alt=""
            />
          </div>
          <p>{{ item.name }}</p>
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
            <i :class="activeIndex === index ? 'bi bi-dash' : 'bi bi-plus'"></i>
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
import {
  PhCertificate,
  PhCode,
  PhDeviceMobile,
  PhDevices,
  PhDot,
  PhFileMagnifyingGlass,
  PhGear,
  PhSpeedometer,
} from "@phosphor-icons/vue";

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

const { isDark } = useTheme();

const workProcess = [
  {
    number: "01",
    title: "Discovery & Planning",
    text: "We kick things off by understanding your goals, audience, and brand. This helps define a clear roadmap before a single line of code is written.",
  },
  {
    number: "02",
    title: "Design & Structure",
    text: "Wireframes, layouts, and structure come to life — clean, intuitive, and focused on a seamless user journey.",
  },
  {
    number: "03",
    title: "Frontend Development",
    text: "I translate designs into reality using Vue, Nuxt, and modern web tools — delivering fast, accessible, and scalable interfaces.",
  },
  {
    number: "04",
    title: "Testing & Delivery",
    text: "Every project is tested across browsers and devices. Once polished, optimized, and approved — it’s launch time.",
  },
];

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

const faqs = ref([
  {
    title: "What tech do you use?",
    body: "I primarily use HTML5, CSS3 (or SCSS), JavaScript, and Vue/Nuxt/Quasar",
  },
  {
    title: "What do you need from Me?",
    body: "Design files (Figma, XD, or Sketch), brand assets (logos, colors, fonts), and project content. No design yet? No worries — I can help with wireframes.",
  },
  {
    title: "In how many days can you deliver?",
    body: "Depending on scope, most projects take between 3 to 15 days. I’ll give you a clear timeline before we start.",
  },
  {
    title: "Can you handle deployment?",
    body: "Absolutely. I can guide or handle deployment to platforms like Netlify, Vercel, or custom hosts.",
  },
  {
    title: "Is SEO included?",
    body: "Yes — I handle core SEO optimizations: semantic HTML, meta tags, and optimized images for better performance and rankings.",
  },
]);

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
