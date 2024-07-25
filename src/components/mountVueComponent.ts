import {createApp} from "@vue/runtime-dom";
import VueComponent from "@/components/VueComponent.vue";

export const mountVueComponent = (container: HTMLElement) => {
  const vueInstance = createApp(VueComponent);
  vueInstance.mount(container);
}