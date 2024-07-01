
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M6 7.24L15.53 12L6 16.76V7.24M4 4V20L20 12L4 4Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiGateBuffer",
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
