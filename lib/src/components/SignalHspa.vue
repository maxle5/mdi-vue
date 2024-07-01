
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M10.5,10.5H13.5V4.5H16.5V19.5H13.5V13.5H10.5V19.5H7.5V4.5H10.5V10.5Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "SignalHspa",
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
