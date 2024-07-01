
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M17 7V9H22V7H17M2 9V15H7V9H2M12 9V11H9V13H12V15L15 12L12 9M17 11V13H22V11H17M17 15V17H22V15H17Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSetSplit",
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
