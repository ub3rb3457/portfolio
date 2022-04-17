import { defineComponent, openBlock, createElementBlock } from 'vue';

var script = defineComponent({

        name: 'ReplaceMe',

        components: {},

        props: {},

    });

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("p", null, "I am ReplaceMe.vue!"))
}

script.render = render;
script.__file = "src/ReplaceMe.vue";

export { script as default };
