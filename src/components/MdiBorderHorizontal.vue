
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M19,21H21V19H19M15,21H17V19H15M11,17H13V15H11M19,9H21V7H19M19,5H21V3H19M3,13H21V11H3M11,21H13V19H11M19,17H21V15H19M13,3H11V5H13M13,7H11V9H13M17,3H15V5H17M9,3H7V5H9M5,3H3V5H5M7,21H9V19H7M3,17H5V15H3M5,7H3V9H5M3,21H5V19H3V21Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBorderHorizontal",
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
