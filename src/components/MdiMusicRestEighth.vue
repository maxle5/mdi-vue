
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M14 6A5.56 5.56 0 0 1 10.95 7.86A1.5 1.5 0 1 0 9.5 9H9.74A6.32 6.32 0 0 0 13.25 7.93L10 18H12L16 6Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMusicRestEighth",
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
