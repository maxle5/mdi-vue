
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFlag",
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
