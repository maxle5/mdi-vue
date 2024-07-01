
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHome",
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
