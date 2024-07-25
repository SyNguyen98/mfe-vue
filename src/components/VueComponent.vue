<template>
  <div class="vue-component">
    <h2>
      Vue Component
    </h2>
    <div class="description">
      This is a Vue component exposed through Module Federation.
    </div>
    <div>Received Message: {{ message }}</div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'VueComponent',
    data() {
      return {
        message: 0
      };
    },
    mounted() {
      const channel = new BroadcastChannel('counter');
      channel.onmessage = (event) => {
        this.message = event.data;
      };
    }
  });
</script>

<style scoped>
  .vue-component {
    padding: 8px;
    border: 2px solid #1B5E20;
    border-radius: 8px;
  }

  .vue-component h2 {
    margin: 8px 0;
    color: #4CAF50;
  }

  .vue-component .description {
    margin: 8px 0;
    font-size: 18px;
    color: #9E9E9E;
  }
</style>