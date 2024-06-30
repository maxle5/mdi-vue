<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12 15A2 2 0 1 1 10 17A2 2 0 0 1 12 15M12 13A4 4 0 1 0 16 17A4 4 0 0 0 12 13Z" xmlns="http://www.w3.org/2000/svg" />
    </svg>
</template>

<script>
export default {
    name: "MusicNoteWhole",
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