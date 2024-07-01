
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M5 9H19V12H21V5C21 3.9 20.1 3 19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H9V19H5V9M19 5V7H5V5H19M16 17H11V19H16V22L20 18L16 14V17M20 14V22H22V14H20Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCalendarEndOutline",
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
