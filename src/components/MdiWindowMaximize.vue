
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M4,4H20V20H4V4M6,8V18H18V8H6Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWindowMaximize",
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
