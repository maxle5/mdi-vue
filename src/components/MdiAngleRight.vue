
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M5,4H7V11H13V17H20V19H5V4M7,17H11V13H7V17Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAngleRight",
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
