<template>
  <div class="main">

      <MobileMenu class="mobileMenuWrapper" :class="{ active: isMenuOpen }" @close="isMenuOpen = false" />

    <header>
      <div class="logo">
        <h2>Benzama</h2>
      </div>
      <div class="nav"></div>
      <div class="actions">
        <themeToggle />
        <CtaButton class="cta-button" />
        <hamburger v-model="isMenuOpen" />
      </div>
    </header>

    <NuxtPage />

    <footer></footer>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false)
</script>