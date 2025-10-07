<template>
  <div class="mobile-menu">

    <nav>
      <nuxt-link @click="$emit('close')" to="">
        <div>
          <p>Home</p>
          <div class="icons">
            <PhArrowUpRight />
            <PhArrowUpRight />
          </div>
        </div>
      </nuxt-link>
      <hr>
      <nuxt-link @click="$emit('close')" to="">
        <div>
          <p>About</p>
          <div class="icons">
            <PhArrowUpRight />
            <PhArrowUpRight />
          </div>
        </div>
      </nuxt-link>
      <hr>
      <nuxt-link @click="$emit('close')" to="">
        <div>
          <p>Services</p>
          <div class="icons">
            <PhArrowUpRight />
            <PhArrowUpRight />
          </div>
        </div>
      </nuxt-link>
      <hr>
      <nuxt-link @click="$emit('close')" to="">
        <div>
          <p>Projects</p>
          <div class="icons">
            <PhArrowUpRight />
            <PhArrowUpRight />
          </div>
        </div>
      </nuxt-link>
      <hr>
      <nuxt-link @click="$emit('close')" to="">
        <div>
          <p>Contact</p>
          <div class="icons">
            <PhArrowUpRight />
            <PhArrowUpRight />
          </div>
        </div>
      </nuxt-link>
    </nav>

    <hr />

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
</template>

<script setup>
import { PhArrowUpRight } from "@phosphor-icons/vue";
</script>