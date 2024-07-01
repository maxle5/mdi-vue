
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M16,13H13V3H11V13H8L12,17L16,13M4,19V21H20V19H4Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatVerticalAlignBottom",
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
