
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M14 13V11L12 12L10 11V13L8 14L10 15V17L12 16L14 17V15L16 14M14 2H7A2 2 0 0 0 5 4V18A2 2 0 0 0 7 20H8V18H7V4H13V8H17V18H16V20H17A2 2 0 0 0 19 18V7M14 13V11L12 12L10 11V13L8 14L10 15V17L12 16L14 17V15L16 14M10 23L12 22L14 23V18H10M14 13V11L12 12L10 11V13L8 14L10 15V17L12 16L14 17V15L16 14Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFileCertificateOutline",
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
