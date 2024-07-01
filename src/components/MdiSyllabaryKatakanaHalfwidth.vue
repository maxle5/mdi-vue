
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M8 4V6H14L13 10.81L15 11.2L16 6.1V4M10 9V12C10 14.86 9.34 17.29 8.08 18.61L9.5 20C11.35 18.08 12 15.15 12 12V9Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSyllabaryKatakanaHalfwidth",
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
