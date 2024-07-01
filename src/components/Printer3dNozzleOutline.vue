
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M7,2H17V7H19V13H16.5L13,17H11L7.5,13H5V7H7V2M10,22H2V20H10A1,1 0 0,0 11,19V18H13V19A3,3 0 0,1 10,22M7,9V11H8.5L12,15L15.5,11H17V9H15V4H9V9H7Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "Printer3dNozzleOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          },
          viewbox: {
              type: String, 
              default: "0 0 24 24" 
          },
      },
  })
  </script>
