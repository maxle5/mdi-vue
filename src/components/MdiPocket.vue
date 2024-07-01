
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M4 3H20V17.63L12 22.25L4 17.63V3M18 9H6V16.5L12 19.94L18 16.5V9M18 5H6V7H18V5Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPocket",
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
