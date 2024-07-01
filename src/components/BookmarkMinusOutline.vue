
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M9,11V9H15V11H9M19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17C18.11,3 19,3.9 19,5M17,5H7V18L12,15.82L17,18V5Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "BookmarkMinusOutline",
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
