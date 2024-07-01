
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M3 20H5V18H11V20H13V18H19V20H21V15H19V16H17V15H15V16H13V15H11V16H9V15H7V16H5V15H3M5 13H19V4H5Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "ShippingPallet",
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
