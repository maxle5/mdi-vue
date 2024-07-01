
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M10,19.3L14,16.6V20L12,22L10,20V19.3M14,12.7L10,15.4V17.4L9,18V19L15,15.1V14L14,14.7V12.7M7,2V5H17V2H7M9,6V9L10,9.7V13.4L9,14V15L15,11.1V10L14,10.7C14,10.7 14,10.3 14,9.7L15,9V6H9Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiScrewLag",
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
