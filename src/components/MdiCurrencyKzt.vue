
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M5,3H19V5H5V3M5,6H19V8H13V21H11V8H5V6Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCurrencyKzt",
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
