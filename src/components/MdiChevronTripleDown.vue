
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M7.41,14.58L12,19.17L16.59,14.58L18,16L12,22L6,16L7.41,14.58M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58M7.41,2.58L12,7.17L16.59,2.58L18,4L12,10L6,4L7.41,2.58Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiChevronTripleDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
      computed: {
        viewBox() {
          return `0 0 ${this.size} ${this.size}`;
        }
      }
  })
  </script>
