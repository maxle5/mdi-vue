<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "ArrowRightThin",
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