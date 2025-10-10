<template>
  <div class="grid-card">
    <div class="top">
      <slot />
    </div>
    <div class="bottom">
      <div v-if="showTitle" class="title">
        <p class="little">{{ caption }}</p>
        <p class="big">{{ title }}</p>
      </div>
      <div v-if="special" class="special">
        <p>Let's</p>
        <p> work <span>together</span></p>
      </div>
      <button v-if="showButton">
        <PhArrowUpRight v-if="showButton" :size="20" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { PhArrowUpRight } from "@phosphor-icons/vue";

const props = defineProps({
  caption: {
    type: String,
  },
  title: {
    type: String,
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
  showButton: {
    type: Boolean,
    default: true,
  },
  special: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss">
.grid-card {
  padding: 25px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--translucent-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 8px;
  .top {
    height: 80%;
  }
  .bottom {
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .title {
      .little {
        font-family: var(--body-font);
        font-size: 10px;
        opacity: 0.5;
      }
      .big {
        font-family: var(--header-font);
        font-weight: bold;
        font-size: 20px;
      }
    }
    button {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--primary);
      border: 1px solid var(--primary);
      border-radius: 50%;
    }
  }
}
</style>
