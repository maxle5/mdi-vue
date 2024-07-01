
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M7 2L10 9H14L17 2H7M13 20H16V22H8V20H11V10H13V20Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFloorLampTorchiere",
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
