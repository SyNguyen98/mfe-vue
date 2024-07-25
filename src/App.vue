<template>
  <div class="container">
    <VueComponent />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import VueComponent from "@/components/VueComponent.vue";

  export default defineComponent({
    components: {VueComponent}
  });
</script>
