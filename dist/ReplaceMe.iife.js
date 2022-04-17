(function (vue) {
    'use strict';

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

    var components = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ReplaceMe: script
    });

    if (typeof Vue !== 'undefined') {
        for (const name in components) {
            Vue.component(name, components[name]);
        }
    }

})(Vue);
