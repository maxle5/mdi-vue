
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M22.5,20.5L17,21.96L18.53,19.35L12,15.58L2.61,21L1.61,19.27L11,13.85V3H13V13.85L19.53,17.61L21,15.03L22.5,20.5Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAxisYArrow",
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
