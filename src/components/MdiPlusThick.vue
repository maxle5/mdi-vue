
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlusThick",
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
