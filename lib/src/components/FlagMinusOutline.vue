<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12.36 6L12.76 8H18V14H14.64L14.24 12H7V6H12.36M14 4H5V21H7V14H12.6L13 16H20V6H14.4M23 18H15V20H23V18Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "FlagMinusOutline",
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