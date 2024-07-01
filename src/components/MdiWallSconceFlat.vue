
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M5,5V11H19V5H5M5.27,13.32L3.5,15.09L4.91,16.5L6.68,14.73L5.27,13.32M18.73,13.32L17.32,14.73L19.09,16.5L20.5,15.09L18.73,13.32M11,16V19H13V16H11Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWallSconceFlat",
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
