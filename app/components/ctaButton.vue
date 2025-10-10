<template>
  <button class="cta-button">
    <p>{{ name }}</p>
  </button>
</template>

<script setup>
import { PhArrowRight } from '@phosphor-icons/vue';

const props = defineProps({
  name: {
    type: String,
  },
});
</script>

<style scoped>
button {
  position: relative;
  width: 8em;
  height: 2em;
  border: 2px solid var(--accent);
  font-family: var(--alternate-font);
  color: var(--text);
  font-size: 17.5px;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}

button:before {
  content: "";
  position: absolute;
  z-index: -1;
  background: var(--accent);
  height: 150px;
  width: 200px;
  border-radius: 50%;
}

button:hover {
  color: var(--secondary);
}

button:before {
  top: 100%;
  left: 100%;
  transition: all 0.7s;
}

button:hover:before {
  top: -30px;
  left: -30px;
}

</style>