<template>
    <button class="cta-button">
        <p>Get in touch</p>
        <PhArrowCircleRight weight="fill" :size="32" />
    </button>
</template>

<script setup>
import { PhArrowCircleRight } from '@phosphor-icons/vue';

</script>

<style lang="scss" scoped>
.cta-button {
    padding: 4px 12px;
    display: flex;
    gap: 10px;
    align-items: center;
    background: var(--primary);
    color: var(--secondary);
    border-radius: 32px;
    cursor: pointer;
    p {
        font-family: var(--alternate-font);
        text-transform: uppercase;
        font-size: 12.5px;
    }
}
</style>