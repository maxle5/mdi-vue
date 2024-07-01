
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M15.75 5H14.25L9.5 16H11.6L12.5 13.8H17.5L18.4 16H20.5L15.75 5M13.13 12L15 7L16.87 12H13.13M6 19.75L9 16.75H7V4.25H5V16.75H3L6 19.75Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatTextRotationVertical",
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
