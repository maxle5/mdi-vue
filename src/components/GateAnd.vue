
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M2,4V20H14A8,8 0 0,0 22,12A8,8 0 0,0 14,4H2M4,6H14A6,6 0 0,1 20,12A6,6 0 0,1 14,18H4V6Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "GateAnd",
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
