<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M8,4A5,5 0 0,0 3,9V18H1V20H21A2,2 0 0,0 23,18V9A5,5 0 0,0 18,4H8M8,6A3,3 0 0,1 11,9V18H5V9A3,3 0 0,1 8,6M14,11H20V15H18V13H14V11Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "MailboxOpen",
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