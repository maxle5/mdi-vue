
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M20 2H22V22H20V2M2 10H18V7H2V10M8 17H18V14H8V17Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "AlignHorizontalRight",
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
