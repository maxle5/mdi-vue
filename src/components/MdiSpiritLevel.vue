
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M22 8H2V16H22V8M18 14V10H20V14H18M11 12H13C14.1 12 15 11.11 15 10H17V14H7V10H9C9 11.11 9.9 12 11 12M4 14V10H6V14H4Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSpiritLevel",
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
