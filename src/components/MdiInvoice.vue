
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M21 22L18 20L15 22L12 20L9 22L6 20L3 22V3H21V22Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiInvoice",
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
