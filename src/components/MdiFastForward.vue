
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFastForward",
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
