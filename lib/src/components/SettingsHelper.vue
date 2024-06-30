<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "SettingsHelper",
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