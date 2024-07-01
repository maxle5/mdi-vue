<template>
    <svg :width="size" :height="size" :viewBox="viewbox">
        <path d="M12,12L14.33,16H9.68L12,12M12,8L6.21,18H17.8L12,8M12,2L1,21H23L12,2M12,6L19.53,19H4.47L12,6Z" style="fill: currentColor" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
})
</script>