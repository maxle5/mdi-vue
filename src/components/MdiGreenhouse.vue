
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M12 3L4 9V21H20V9L12 3M10 10H14V19H10V10M16 10H18V13H16V10M15.33 8H8.67L12 5.5L15.33 8M8 10V13H6V10H8M6 15H8V19H6V15M16 19V15H18V19H16Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiGreenhouse",
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
