
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M12.5 2L12 4L10 6.31L5 9H7L9.5 18L12 20L12.5 22H13.5L14 20L16.5 18L19 9H21L16 6.31L14 4L13.5 2M9 9H17L14.78 17H11.22M3 14V22H11.5L11 20H8L5 17V14Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "CoachLampVariant",
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
