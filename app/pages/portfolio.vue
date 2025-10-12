<template>
  <div class="portfolioPage">
    <div class="projects">
      <div class="heading">
        <pageTitle title="Portfolio" />
        <h2>My <span>projects</span> showcase</h2>
      </div>
      <div class="projects-container">
        <div v-for="n in 3" :key="n" class="project">
          <div class="image">
            <img src="~/assets/images/demo.png" alt="" />
          </div>
          <div class="info">
            <h2 class="title">Nexus AI Event</h2>
            <p class="about">
              Developed an online learning platform with course management, quizzes and
              progress tracking.
            </p>
            <div class="container">
              <h3>Project Info</h3>
              <hr />
              <div class="span">
                <h4>Client</h4>
                <p>Me</p>
              </div>
              <hr />
              <div class="span">
                <h4>Completion Time</h4>
                <p>1 month</p>
              </div>
              <hr />
              <div class="span">
                <h4>Technolgies</h4>
                <p>Vue, Sass, MongoDB</p>
              </div>
              <hr />
              <div class="actions">
                <a href="">
                  <PhArrowUpRight />
                  <p>Live Demo</p>
                </a>
                <a href="">
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
import { PhArrowUpRight, PhGithubLogo } from '@phosphor-icons/vue';
</script>

<style lang="scss" scoped></style>
