'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({

        name: 'ReplaceMe',

        components: {},

        props: {},

    });

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("p", null, "I am ReplaceMe.vue!"))
}

script.render = render;
script.__file = "src/ReplaceMe.vue";

exports.ReplaceMe = script;
