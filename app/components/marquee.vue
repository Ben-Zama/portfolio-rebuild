<template>
  <div class="marquee">
    <client-only>
      <Vue3Marquee>
        <p v-for="item in infiniteScroller" :key="item">{{ item }} <span>/</span></p>
      </Vue3Marquee>
    </client-only>
  </div>
</template>

<script setup>
const infiniteScroller = [
  "Landing Page",
  "E-commerce Sites",
  "Portfolios",
  "Web Apps",
  "Mobile App Development",
  "Landing Page",
  "E-commerce Sites",
  "Portfolios",
  "Web Apps",
  "Mobile App Development",
];
</script>

<style lang="scss" scoped>
.marquee {
  padding: 25px 0;
  width: 100%;
  background: var(--primary);
  p {
    font-family: var(--alternate-font);
    font-size: 20px;
    color: var(--secondary);
    span {
      margin: 0 25px;
      color: var(--reverse-accent);
    }
  }
}
</style>
