
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M5,3H19V5H5V3M5,6H19V8H13V21H11V8H5V6Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCurrencyKzt",
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
