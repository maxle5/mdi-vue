
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M18 4V20H6V8.8L10.8 4H18M18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2M9.5 19H7.5V17H9.5V19M16.5 19H14.5V17H16.5V19M9.5 15H7.5V11H9.5V15M13 19H11V15H13V19M13 13H11V11H13V13M16.5 15H14.5V11H16.5V15Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSimOutline",
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
