
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M3,3H5V13H9V7H13V11H17V15H21V21H3V3Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiChartHistogram",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
      computed: {
        viewBox() {
          return `0 0 ${this.size} ${this.size}`;
        }
      }
  })
  </script>
