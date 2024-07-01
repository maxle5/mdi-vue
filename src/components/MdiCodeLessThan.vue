
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M13.59,7.41L9,12L13.59,16.6L15,15.18L11.82,12L15,8.82M19,3C20.11,3 21,3.9 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCodeLessThan",
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
