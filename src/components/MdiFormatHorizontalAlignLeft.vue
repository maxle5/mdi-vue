
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M11,16V13H21V11H11V8L7,12L11,16M3,20H5V4H3V20Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatHorizontalAlignLeft",
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
