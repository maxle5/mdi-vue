
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M9,7V17H11V13.67L13,17H15L12,12L15,7H13L11,10.33V7H9Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaK",
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
