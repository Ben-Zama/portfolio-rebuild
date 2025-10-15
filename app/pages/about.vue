<template>
  <div class="aboutPage">
    <div class="layout">
      <div class="grid-card-container photo">
        <gridCard :showTitle="false" :showButton="false">
          <img src="~/assets/images/headshot.jpg" alt="" />
          <p>Benzama Musa</p>
        </gridCard>
      </div>

      <div class="grid-card-container about">
        <gridCard :showTitle="false" :showButton="false">
          <div class="text" :class="{ expanded: showMore }">
            <p>
              I’m a passionate Frontend Developer with two years of experience
              transforming design concepts into fast, responsive, and accessible web
              applications. I specialize in modern JavaScript (ES6+), TypeScript, and
              Vue.js, paired with CSS3, Sass, Tailwind, or Bootstrap to create
              pixel-perfect interfaces. My workflow emphasizes clean, maintainable code,
              performance optimization, and cross‑browser compatibility, ensuring every
              site feels native on desktop and mobile alike. I thrive on collaboration:
              working closely with designers, back‑end engineers, and product managers to
              bring visions to life—and I’m always eager to learn new technologies or
              improve existing processes. Whether architecting complex component
              libraries, integrating RESTful APIs, or fine‑tuning animations for a
              seamless user experience, I aim to deliver solutions that delight users and
              drive business results.
            </p>
          </div>
          <button @click="showMore = !showMore">
            {{ showMore ? "Read less" : "Read more" }}
          </button>
        </gridCard>
      </div>

      <a href="/resume.pdf" class="grid-card-container resume">
        <gridCard caption="View my resume" title="Resume">
          <img src="~/assets/images/resume.svg" alt="" />
        </gridCard>
      </a>

      <div class="grid-card-container work">
        <gridCard :showTitle="false" :showButton="false">
          <div class="title">
            <div class="circle">
              <PhBriefcase weight="fill" />
            </div>
            <h3>Work Experience</h3>
          </div>
          <hr />
          <div class="body">
            <div class="container">
              <h3>Greysoft Technologies</h3>
              <p>Intern</p>
            </div>
            <div class="duration">2023 - 2024</div>
          </div>
        </gridCard>
      </div>

      <div class="grid-card-container education">
        <gridCard :showTitle="false" :showButton="false">
          <div class="title">
            <div class="circle">
              <PhGraduationCap weight="fill" />
            </div>
            <h3>Education</h3>
          </div>
          <hr />
          <div class="body">
            <div class="container">
              <h3>Redeemer's University</h3>
              <p>B.Eng Computer Engineering</p>
            </div>
            <div class="duration">2024 - 2029</div>
          </div>
        </gridCard>
      </div>

      <div class="grid-card-container stats">
        <gridCard :showTitle="false" :showButton="false">
          <div class="box">
            <countUp :end-val="2" :duration="5" />
            <p>Years Experience</p>
          </div>
          <div class="box">
            <countUp :end-val="25" :duration="5" :options="counterOptions" />
            <p>Completed Projects</p>
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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhBriefcase, PhGraduationCap } from "@phosphor-icons/vue";

import countUp from "vue-countup-v3";
const counterOptions = {
  suffix: " +",
};

const showMore = ref(false);
</script>
