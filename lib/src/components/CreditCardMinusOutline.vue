
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M24 18V20H16V18M19 8V6H3V8H19M19 12H3V18H14V20H3C1.89 20 1 19.1 1 18V6C1 4.89 1.89 4 3 4H19C20.11 4 21 4.89 21 6V13H19V12Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "CreditCardMinusOutline",
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
