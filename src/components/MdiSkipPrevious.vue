
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSkipPrevious",
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
