
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlert",
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
