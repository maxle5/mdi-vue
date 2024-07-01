
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M11 15H6L13 1V9H18L11 23V15Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "LightningBolt",
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
