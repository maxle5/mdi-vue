
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "Details",
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
