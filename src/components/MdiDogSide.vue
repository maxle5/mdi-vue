
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M19,3L15,7L18,10L19,9L20,10L22,8L19,5V3M3,7L2,8L5,11V14L4,15V21H6V18L8,15H15V21H17V11L14,8L13,9H5L3,7Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDogSide",
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
