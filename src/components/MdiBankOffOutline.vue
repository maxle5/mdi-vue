
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M20.8 22.7L19.1 21H2V19H17.1L12.5 14.4V17H10.5V12.4L6.1 8H2V6L3.4 5.3L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M4.5 10V17H6.5V10H4.5M11.5 3.3L16.7 6H9.2L11.2 8H21V6L11.5 1L6.7 3.5L8.2 5L11.5 3.3M18.5 15.3V10H16.5V13.3L18.5 15.3Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBankOffOutline",
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
