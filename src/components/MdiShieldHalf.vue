
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M12 1L3 5V11C3 16.5 6.8 21.7 12 23V1Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiShieldHalf",
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
