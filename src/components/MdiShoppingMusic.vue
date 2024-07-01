
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M12,3A3,3 0 0,0 9,6H15A3,3 0 0,0 12,3M19,6A2,2 0 0,1 21,8V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V8C3,6.89 3.89,6 5,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6H19M9,19L16.5,14L9,10V19Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiShoppingMusic",
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
