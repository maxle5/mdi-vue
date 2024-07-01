
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M6 7H18V9H6V7M6 11H18V13H6V11M13 17H6V15H13V17M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStickerText",
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
