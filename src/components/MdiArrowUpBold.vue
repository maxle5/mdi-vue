
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUpBold",
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
