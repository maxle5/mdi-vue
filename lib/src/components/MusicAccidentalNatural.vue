<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M10 8.75V3.5H8V17.5L14 15.25V20.5H16V6.5L10 8.75M14 13.25L10 14.75V10.75L14 9.25V13.25Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "MusicAccidentalNatural",
    props: {
        size: { 
            type: Number, 
            default: 24 
        },
        viewbox: {
            type: String, 
            default: "0 0 24 24" 
        },
    },
}
</script>

<style scoped>
    path {
        fill: currentColor;
    }
</style>