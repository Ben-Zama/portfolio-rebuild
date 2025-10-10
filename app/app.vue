<template>
  <div class="main">
    <MobileMenu
      class="mobileMenuWrapper"
      :class="{ active: isMenuOpen }"
      @close="isMenuOpen = false"
    />

    <header>
      <div class="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 14.25 430 32"
          data-asc="0.925"
          width="100%"
        >
          <defs />
          <g fill="#000000">
            <g transform="translate(0, 0)">
              <path
                d="M0 46.25L0 14.25L31.50 14.25Q41.20 14.25 45.80 16.15Q50.40 18.05 50.40 22.75Q50.40 25.75 48.43 27.35Q46.45 28.95 42.78 29.57Q39.10 30.20 33.95 30.35L34.35 29.95Q38.10 29.95 41.30 30.15Q44.50 30.35 46.90 31.05Q49.30 31.75 50.65 33.20Q52 34.65 52 37.20Q52 40.30 49.80 42.30Q47.60 44.30 43.55 45.27Q39.50 46.25 34 46.25L0 46.25M12.50 36.85L34 36.85Q36.65 36.85 37.83 36.35Q39 35.85 39 34.75Q39 34 38.48 33.55Q37.95 33.10 36.85 32.88Q35.75 32.65 34 32.65L12.50 32.65L12.50 36.85M12.50 27.85L31.90 27.85Q34.55 27.85 35.73 27.35Q36.90 26.85 36.90 25.75Q36.90 24.60 35.73 24.13Q34.55 23.65 31.90 23.65L12.50 23.65L12.50 27.85ZM69.50 32.75L69.50 36.75L107.50 36.75L107.50 46.25L57 46.25L57 14.25L107.40 14.25L107.40 23.75L69.50 23.75L69.50 27.75L100.50 27.75L100.50 32.75L69.50 32.75ZM164.15 36.45L159.50 39.10L159.50 14.25L172 14.25L172 46.25L159.50 46.25L121.85 24.45L126.50 21.75L126.50 46.25L114 46.25L114 14.25L126.50 14.25L164.15 36.45ZM179 14.25L232 14.25L232 23.75L195.60 38.80L195.20 36.75L232 36.75L232 46.25L179 46.25L179 36.75L215.55 21.70L215.95 23.75L179 23.75L179 14.25ZM247.20 41.40L247.20 33.90L281.40 33.90L281.40 41.40L247.20 41.40M236 46.25L257.45 14.25L271.35 14.25L293 46.25L279.25 46.25L260.70 17.60L268.15 17.60L249.75 46.25L236 46.25ZM336.70 42.45L329.20 42.45L356.50 14.25L369 14.25L369 46.25L356.50 46.25L356.50 24.45L360.25 26L340.50 46.25L325.50 46.25L305.70 26.05L309.50 24.50L309.50 46.25L297 46.25L297 14.25L309.50 14.25L336.70 42.45ZM384.20 41.40L384.20 33.90L418.40 33.90L418.40 41.40L384.20 41.40M373 46.25L394.45 14.25L408.35 14.25L430 46.25L416.25 46.25L397.70 17.60L405.15 17.60L386.75 46.25L373 46.25Z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div class="nav">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/services">Services</nuxt-link>
        <nuxt-link to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
      <div class="actions">
        <themeToggle />
        <CtaButton name="Let's talk" class="cta-button" />
        <hamburger v-model="isMenuOpen" />
      </div>
    </header>

    <NuxtPage />

    <footer>
      <div class="top">
        <div class="span">
          <p>
            Let's work <br />
            <span>together</span>
          </p>
          <div class="container">
            <div class="box">
              <p>looking to collaborate?</p>
              <a>
                <p>benzamasimon@gmail.com</p>
                <div class="icons">
                  <PhArrowUpRight />
                  <PhArrowUpRight />
                </div>
              </a>
            </div>
            <div class="box">
              <p>Give me a call</p>
              <a>
                <p>+234 704 2195 431</p>
                <div class="icons">
                  <PhArrowUpRight />
                  <PhArrowUpRight />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 14.25 430 32"
            data-asc="0.925"
            width="100%"
          >
            <defs />
            <g fill="#000000">
              <g transform="translate(0, 0)">
                <path
                  d="M0 46.25L0 14.25L31.50 14.25Q41.20 14.25 45.80 16.15Q50.40 18.05 50.40 22.75Q50.40 25.75 48.43 27.35Q46.45 28.95 42.78 29.57Q39.10 30.20 33.95 30.35L34.35 29.95Q38.10 29.95 41.30 30.15Q44.50 30.35 46.90 31.05Q49.30 31.75 50.65 33.20Q52 34.65 52 37.20Q52 40.30 49.80 42.30Q47.60 44.30 43.55 45.27Q39.50 46.25 34 46.25L0 46.25M12.50 36.85L34 36.85Q36.65 36.85 37.83 36.35Q39 35.85 39 34.75Q39 34 38.48 33.55Q37.95 33.10 36.85 32.88Q35.75 32.65 34 32.65L12.50 32.65L12.50 36.85M12.50 27.85L31.90 27.85Q34.55 27.85 35.73 27.35Q36.90 26.85 36.90 25.75Q36.90 24.60 35.73 24.13Q34.55 23.65 31.90 23.65L12.50 23.65L12.50 27.85ZM69.50 32.75L69.50 36.75L107.50 36.75L107.50 46.25L57 46.25L57 14.25L107.40 14.25L107.40 23.75L69.50 23.75L69.50 27.75L100.50 27.75L100.50 32.75L69.50 32.75ZM164.15 36.45L159.50 39.10L159.50 14.25L172 14.25L172 46.25L159.50 46.25L121.85 24.45L126.50 21.75L126.50 46.25L114 46.25L114 14.25L126.50 14.25L164.15 36.45ZM179 14.25L232 14.25L232 23.75L195.60 38.80L195.20 36.75L232 36.75L232 46.25L179 46.25L179 36.75L215.55 21.70L215.95 23.75L179 23.75L179 14.25ZM247.20 41.40L247.20 33.90L281.40 33.90L281.40 41.40L247.20 41.40M236 46.25L257.45 14.25L271.35 14.25L293 46.25L279.25 46.25L260.70 17.60L268.15 17.60L249.75 46.25L236 46.25ZM336.70 42.45L329.20 42.45L356.50 14.25L369 14.25L369 46.25L356.50 46.25L356.50 24.45L360.25 26L340.50 46.25L325.50 46.25L305.70 26.05L309.50 24.50L309.50 46.25L297 46.25L297 14.25L309.50 14.25L336.70 42.45ZM384.20 41.40L384.20 33.90L418.40 33.90L418.40 41.40L384.20 41.40M373 46.25L394.45 14.25L408.35 14.25L430 46.25L416.25 46.25L397.70 17.60L405.15 17.60L386.75 46.25L373 46.25Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <hr />

      <div class="bottom">
        <p>All rights reserved. Designed and developed by <a href="">BENZAMA</a></p>
        <div class="socials">
          <a target="_blank" href="#">
            <i class="bi bi-linkedin"></i>
          </a>
          <a target="_blank" href="#">
            <i class="bi bi-github"></i>
          </a>
          <a target="_blank" href="#">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a target="_blank" href="#">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhArrowUpRight } from "@phosphor-icons/vue";

const isMenuOpen = ref(false);
</script>
