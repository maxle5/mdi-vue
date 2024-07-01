
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M12,7.77L18.39,18H5.61L12,7.77M12,4L2,20H22" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDelta",
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
