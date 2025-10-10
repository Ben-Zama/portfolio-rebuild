<template>
    <div class="title">
        <i>&mdash;</i>
        <p>{{ title }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String
    }
})
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    align-items: center;
    gap: 5px;
    p {
        font-family: var(--header-font);
        font-style: italic;
    }
    i {
        opacity: 0.75;
        font-weight: bold;
        color: var(--accent);
    }
}
</style>