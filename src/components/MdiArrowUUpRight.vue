
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M21.5 9.5L20.09 10.92L17 7.83V13.5C17 17.09 14.09 20 10.5 20S4 17.09 4 13.5V6H6V13.5C6 16 8 18 10.5 18S15 16 15 13.5V7.83L11.91 10.91L10.5 9.5L16 4L21.5 9.5Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUUpRight",
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
