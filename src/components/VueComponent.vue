<template>
  <div class="vue-component">
    <h2>Exposed Vue Component</h2>
    <p>This is a Vue component exposed through Module Federation.</p>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'VueComponent',
  });
</script>

<style scoped>
  .vue-component {
    padding: 20px;
    border: 1px solid #ccc;
    margin: 10px;
    border-radius: 8px;
  }
</style>