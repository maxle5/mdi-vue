
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M2 7L1 12V14H2V20H12V14H16V20H18V14H19V12L18 7H2M10 18H4V14H10V18M3.04 12L3.64 9H16.36L16.96 12H3.04M18 6H2V4H18V6M23 7V13H21V7H23M21 15H23V17H21V15Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStoreAlertOutline",
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
