
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M11 4V6H4V10H6V8H18V10H20V6H13V4M8 10V12H13.59L11.59 14H4V16H11V18H10V20H13V16H20V14H14.21L16 12.21V10Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiIdeogramCjk",
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
