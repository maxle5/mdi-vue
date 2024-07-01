
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M2 2V12H4V4H11V22H22V12H20V20H13V2H2Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSquareWave",
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
