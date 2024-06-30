<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M20,4A2,2 0 0,0 18,2H10L4,8V20A2,2 0 0,0 6,22H18C19.11,22 20,21.1 20,20V4M9,19H7V17H9V19M17,19H15V17H17V19M9,15H7V11H9V15M13,19H11V15H13V19M13,13H11V11H13V13M17,15H15V11H17V15Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "Sim",
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