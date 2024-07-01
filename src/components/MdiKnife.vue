
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M20.62,2C23.97,7.61 12.47,20.15 12.47,20.15L9.6,17.28L4.91,22L2.77,19.86L20.62,2Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiKnife",
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
