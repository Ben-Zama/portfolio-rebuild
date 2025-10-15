<template>
  <button href="#" class="button" style="--clr: #7808d0">
    <span class="button__icon-wrapper">
      <svg
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="button__icon-svg"
        width="10"
      >
        <path
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          fill="currentColor"
        ></path>
      </svg>

      <svg
        viewBox="0 0 14 15"
        fill="none"
        width="10"
        xmlns="http://www.w3.org/2000/svg"
        class="button__icon-svg button__icon-svg--copy"
      >
        <path
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
    {{ name }}
  </button>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
  },
});
</script>

<style scoped>
.button {
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  border: none;
  cursor: pointer;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--primary);
  color: var(--secondary);
  border-radius: 10rem;
  font-family: var(--alternate-font);
  padding: 8px 12px;
  padding-left: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.3s;
}

.button__icon-wrapper {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  position: relative;
  color: var(--primary);
  background-color: var(--secondary);
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.button:hover {
  background-color: var(--accent);
  color: var(--secondary);
}

.button:hover .button__icon-wrapper {
  background: var(--secondary);
  color: var(--accent);
}

.button__icon-svg--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.button:hover .button__icon-svg:first-child {
  transition: transform 0.3s ease-in-out;
  transform: translate(150%, -150%);
}

.button:hover .button__icon-svg--copy {
  transition: transform 0.3s ease-in-out 0.1s;
  transform: translate(0);
}
</style>