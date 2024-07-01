
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFloorLamp",
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
