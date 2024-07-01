
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M6 6H18V8H6V6M6 10.5H18V12.5H6V10.5M6 15H18V17H6V15M9 19H15L12 22L9 19M9 2H15L12 5L9 2Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "QueueFirstInLastOut",
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
