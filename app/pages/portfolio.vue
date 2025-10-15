<template>
  <div class="portfolioPage">
    <div class="projects">
      <div class="heading">
        <pageTitle title="Portfolio" />
        <h2>My <span>projects</span> showcase</h2>
      </div>
      <div class="projects-container">
        <div v-for="item in projects" :key="item" class="project">
          <div class="image">
            <img :src="item.image" alt="" />
          </div>
          <div class="info">
            <h2 class="title">{{ item.title }}</h2>
            <p class="about">
              {{ item.about }}
            </p>
            <div class="container">
              <h3>Project Info</h3>
              <hr />
              <div v-if="item.client" class="span">
                <h4>Client</h4>
                <p>{{ item.client }}</p>
              </div>
              <hr v-if="item.client" />
              <div class="span">
                <h4>Completion Time</h4>
                <p>{{ item.time }}</p>
              </div>
              <hr />
              <div class="span">
                <h4>Technolgies</h4>
                <p>{{ item.tech }}</p>
              </div>
              <hr />
              <div class="actions">
                <a target="_blank" :href="item.liveDemo">
                  <PhArrowUpRight />
                  <p>Live Demo</p>
                </a>
                <a target="_blank" :href="item.githubLink">
                  <PhGithubLogo />
                  <p>View on Github</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhArrowUpRight, PhGithubLogo } from "@phosphor-icons/vue";

const projects = [
  {
    image: 'https://i.ibb.co/4ZxC2WsJ/halo.webp',
    title: "Halo Oil",
    about: "Developed an online learning platform with course management, quizzes and progress tracking.",
    time: '1 month',
    tech: 'Nuxt & Scss',
    githubLink: 'https://github.com/Ben-Zama/Halo-oil.git',
    liveDemo: 'https://halo-oil.vercel.app/'
  },
  {
    image: 'https://i.ibb.co/MWYmdGj/nexus.webp',
    title: "Nexus AI Event",
    about: "Developed an online learning platform with course management, quizzes and progress tracking.",
    time: '1 month',
    tech: 'Nuxt & Scss',
    githubLink: 'https://github.com/Ben-Zama/Nexus-Ai-Event.git',
    liveDemo: 'https://nexus-ai-event.vercel.app/'
  },
  {
    image: 'https://i.ibb.co/PGfBX2zy/laurelwood.webp',
    title: "Laurelwood",
    about: "Developed an online learning platform with course management, quizzes and progress tracking.",
    time: '1 month',
    tech: 'Nuxt & Scss',
    githubLink: 'https://github.com/Ben-Zama/Laurelwood.git',
    liveDemo: 'https://laurelwood.vercel.app/'
  },
];
</script>