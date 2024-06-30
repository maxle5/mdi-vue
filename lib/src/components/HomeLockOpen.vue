<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8A3,3 0 0,1 15,11H13A1,1 0 0,0 12,10A1,1 0 0,0 11,11V13H16V17H8V13H9V11A3,3 0 0,1 12,8Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "HomeLockOpen",
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