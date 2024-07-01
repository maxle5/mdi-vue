
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M12 1L3 5V11C3 16.5 6.8 21.7 12 23V1Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiShieldHalf",
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
