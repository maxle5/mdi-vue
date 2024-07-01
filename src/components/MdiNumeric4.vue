
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M9,7V13H13V17H15V7H13V11H11V7H9Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNumeric4",
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
