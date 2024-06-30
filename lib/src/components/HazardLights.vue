<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,12L14.33,16H9.68L12,12M12,8L6.21,18H17.8L12,8M12,2L1,21H23L12,2M12,6L19.53,19H4.47L12,6Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "HazardLights",
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