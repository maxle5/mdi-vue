
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M7 2H17V8H19V13H16.5L13 17H11L7.5 13H5V8H7V2M10 22H2V20H10C10.6 20 11 19.5 11 19V18H13V19C13 20.7 11.7 22 10 22M21 13V7H23V13H21M21 17V15H23V17H21Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPrinter3dNozzleAlert",
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
