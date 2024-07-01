
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlayOutline",
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
