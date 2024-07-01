
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M12,2L22,8C22,12 20,14 16,15L13,10L9,6L12,2M4.11,19.84L2.12,18.33L9.19,9L11,10.81L4.11,19.84Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAxe",
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
