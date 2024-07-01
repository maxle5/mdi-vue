
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M7,3H16.95V12.96L12.96,20.94H8L11.97,12.96H7V3Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiComma",
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
