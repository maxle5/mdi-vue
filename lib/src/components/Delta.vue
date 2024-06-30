<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,7.77L18.39,18H5.61L12,7.77M12,4L2,20H22" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Delta",
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