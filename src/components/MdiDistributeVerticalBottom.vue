
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M7 3H17V8H22V10H2V8H7V3M2 19V21H22V19H19V14H5V19H2Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDistributeVerticalBottom",
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
