<template>
  <div class="container">
    <div>Name: mfe-vue</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>

  <VueComponent />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import VueComponent from "@/components/VueComponent.vue";

  export default defineComponent({
    components: {VueComponent}
  });
</script>
