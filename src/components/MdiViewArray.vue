
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M8,18H17V5H8M18,5V18H21V5M4,18H7V5H4V18Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewArray",
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
