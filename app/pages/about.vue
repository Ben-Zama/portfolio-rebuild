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
              I’m Benzama Musa — a frontend developer who loves bringing ideas
              to life through clean code and captivating interfaces. For the
              past 3 years, I’ve been turning design concepts into fast,
              responsive, and accessible web experiences that feel just as
              smooth on mobile as they do on desktop. <br /> <br>
              My toolkit includes modern JavaScript (ES6+), TypeScript, and
              Vue.js — with a flair for crafting pixel-perfect UIs using CSS,
              Sass & Tailwind. I obsess over performance, maintainability, and
              the kind of small details that make users go “wow.” <br /> <br>
              Collaboration fuels my process — I love teaming up with designers,
              engineers, and product minds to push ideas beyond mockups. Whether
              it’s architecting reusable component libraries, integrating APIs,
              or polishing animations until they flow, I’m all about creating
              web experiences that look sharp and perform even sharper. <br /> <br>
              And when I’m not deep in code? I’m probably experimenting with new
              tech, improving my workflow, or just sketching out my next
              creative project.
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
            <countUp :end-val="3" :duration="5" />
            <p>Years crafting code</p>
          </div>
          <div class="box">
            <countUp :end-val="25" :duration="5" :options="counterOptions" />
            <p>Projects completed and counting</p>
          </div>
        </gridCard>
      </div>

      <div class="grid-card-container links">
        <gridCard
          caption="Find me around the web"
          title="Profiles"
          :showButton="false"
        >
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
