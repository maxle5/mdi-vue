
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M22 16V18H6V2H8V13.57L13.71 4.57L16.87 6.68L19.29 4.26L20.71 5.68L17.13 9.29L14.29 7.4L8.82 16M4 20V4H2V22H22V20Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "ChartMultiple",
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
