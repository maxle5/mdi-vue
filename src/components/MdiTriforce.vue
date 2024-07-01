
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M1.5,21L12,3.5L22.5,21H1.5M12,21L17,12H7L12,21Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTriforce",
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
