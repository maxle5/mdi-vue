
  <template>
      <svg :width="size" :height="size" :viewBox="viewBox">
          <path d="M15,14V8H17.17L12,2.83L6.83,8H9V14H15M12,0L22,10H17V16H7V10H2L12,0M7,18H17V24H7V18M15,20H9V22H15V20Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAppleKeyboardCaps",
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
