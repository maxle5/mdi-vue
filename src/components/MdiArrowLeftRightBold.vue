
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M8,14V18L2,12L8,6V10H16V6L22,12L16,18V14H8Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowLeftRightBold",
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
