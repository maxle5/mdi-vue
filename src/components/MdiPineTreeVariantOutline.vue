
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M19 12L12 2L5 12H6.86L3 18H10V22H14V18H21L17.14 12H19M15.16 10H13.5L17.34 16H6.67L10.53 10H8.84L12 5.5L15.16 10Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPineTreeVariantOutline",
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
