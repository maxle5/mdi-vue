<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M23 15V17H22C22 18.11 21.11 19 20 19S18 18.11 18 17H6C6 18.11 5.11 19 4 19S2 18.11 2 17H1V15H23Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "TrainCarFlatbed",
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