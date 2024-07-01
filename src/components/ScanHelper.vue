
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M0 2A2 2 0 0 1 2 0H6V2H2V6H0V2M24 22A2 2 0 0 1 22 24H18V22H22V18H24V22M2 24A2 2 0 0 1 0 22V18H2V22H6V24H2M22 0A2 2 0 0 1 24 2V6H22V2H18V0H22Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "ScanHelper",
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
