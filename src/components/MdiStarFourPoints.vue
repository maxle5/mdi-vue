
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStarFourPoints",
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
