<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M11.67,4A1.33,1.33 0 0,1 13,5.33V20.67C13,21.4 12.4,22 11.67,22H2.33C1.6,22 1,21.4 1,20.67V5.33A1.33,1.33 0 0,1 2.33,4H4V2H10V4H11.67M15,12H23V14H15V12M3,13H11V6H3V13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "BatteryNegative",
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