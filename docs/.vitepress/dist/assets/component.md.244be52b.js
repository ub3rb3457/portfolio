import{_ as n,c as s,o as a,a as t}from"./app.aea0ab1d.js";const y='{"title":"ReplaceMe Component","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"/favicon.ico"}]]},"headers":[{"level":2,"title":"Vue Component Code","slug":"vue-component-code"},{"level":2,"title":"ES Module Code","slug":"es-module-code"},{"level":2,"title":"SSR (CJS) Code","slug":"ssr-cjs-code"},{"level":2,"title":"IIFE (Browser) Code","slug":"iife-browser-code"}],"relativePath":"component.md"}',p={},o=t(`<h1 id="replaceme-component" tabindex="-1">ReplaceMe Component <a class="header-anchor" href="#replaceme-component" aria-hidden="true">#</a></h1><h2 id="vue-component-code" tabindex="-1">Vue Component Code <a class="header-anchor" href="#vue-component-code" aria-hidden="true">#</a></h2><p>Pure Vue.js version</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{ text }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>ReplaceMe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

    <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ReplaceMe&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// components: {},</span>

        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// setup(){},</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="es-module-code" tabindex="-1">ES Module Code <a class="header-anchor" href="#es-module-code" aria-hidden="true">#</a></h2><p>Version used by Rollup and Webpack</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> openBlock<span class="token punctuation">,</span> createElementBlock<span class="token punctuation">,</span> Fragment<span class="token punctuation">,</span> createTextVNode<span class="token punctuation">,</span> toDisplayString<span class="token punctuation">,</span> renderSlot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> script <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ReplaceMe&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// components: {},</span>

        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// setup(){},</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> _hoisted_1 <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span><span class="token string">&quot;ReplaceMe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">_ctx<span class="token punctuation">,</span> _cache<span class="token punctuation">,</span> $props<span class="token punctuation">,</span> $setup<span class="token punctuation">,</span> $data<span class="token punctuation">,</span> $options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">createElementBlock</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
      <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">createElementBlock</span><span class="token punctuation">(</span>Fragment<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
          <span class="token function">createTextVNode</span><span class="token punctuation">(</span><span class="token function">toDisplayString</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* TEXT */</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2112</span> <span class="token comment">/* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token function">renderSlot</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>$slots<span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
          _hoisted_1
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

script<span class="token punctuation">.</span>render <span class="token operator">=</span> render<span class="token punctuation">;</span>
script<span class="token punctuation">.</span>__file <span class="token operator">=</span> <span class="token string">&quot;src/ReplaceMe.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> script <span class="token keyword">as</span> <span class="token keyword">default</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="ssr-cjs-code" tabindex="-1">SSR (CJS) Code <a class="header-anchor" href="#ssr-cjs-code" aria-hidden="true">#</a></h2><p>Version used by Node.js (Common.js)</p><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> <span class="token string">&#39;__esModule&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> script <span class="token operator">=</span> vue<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ReplaceMe&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// components: {},</span>

        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// setup(){},</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> _hoisted_1 <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span>vue<span class="token punctuation">.</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span><span class="token string">&quot;ReplaceMe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">_ctx<span class="token punctuation">,</span> _cache<span class="token punctuation">,</span> $props<span class="token punctuation">,</span> $setup<span class="token punctuation">,</span> $data<span class="token punctuation">,</span> $options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>vue<span class="token punctuation">.</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> vue<span class="token punctuation">.</span><span class="token function">createElementBlock</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
      <span class="token operator">?</span> <span class="token punctuation">(</span>vue<span class="token punctuation">.</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> vue<span class="token punctuation">.</span><span class="token function">createElementBlock</span><span class="token punctuation">(</span>vue<span class="token punctuation">.</span>Fragment<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
          vue<span class="token punctuation">.</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span>vue<span class="token punctuation">.</span><span class="token function">toDisplayString</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* TEXT */</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2112</span> <span class="token comment">/* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> vue<span class="token punctuation">.</span><span class="token function">renderSlot</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>$slots<span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
          _hoisted_1
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

script<span class="token punctuation">.</span>render <span class="token operator">=</span> render<span class="token punctuation">;</span>
script<span class="token punctuation">.</span>__file <span class="token operator">=</span> <span class="token string">&quot;src/ReplaceMe.vue&quot;</span><span class="token punctuation">;</span>

exports<span class="token punctuation">.</span>ReplaceMe <span class="token operator">=</span> script<span class="token punctuation">;</span>
</code></pre></div><h2 id="iife-browser-code" tabindex="-1">IIFE (Browser) Code <a class="header-anchor" href="#iife-browser-code" aria-hidden="true">#</a></h2><p>Version used for browser instances</p><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> script <span class="token operator">=</span> vue<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ReplaceMe&#39;</span><span class="token punctuation">,</span>

            <span class="token comment">// components: {},</span>

            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
                    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token comment">// setup(){},</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> _hoisted_1 <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span>vue<span class="token punctuation">.</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span><span class="token string">&quot;ReplaceMe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">_ctx<span class="token punctuation">,</span> _cache<span class="token punctuation">,</span> $props<span class="token punctuation">,</span> $setup<span class="token punctuation">,</span> $data<span class="token punctuation">,</span> $options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>vue<span class="token punctuation">.</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> vue<span class="token punctuation">.</span><span class="token function">createElementBlock</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
          <span class="token operator">?</span> <span class="token punctuation">(</span>vue<span class="token punctuation">.</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> vue<span class="token punctuation">.</span><span class="token function">createElementBlock</span><span class="token punctuation">(</span>vue<span class="token punctuation">.</span>Fragment<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
              vue<span class="token punctuation">.</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span>vue<span class="token punctuation">.</span><span class="token function">toDisplayString</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* TEXT */</span><span class="token punctuation">)</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2112</span> <span class="token comment">/* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token operator">:</span> vue<span class="token punctuation">.</span><span class="token function">renderSlot</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>$slots<span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
              _hoisted_1
            <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    script<span class="token punctuation">.</span>render <span class="token operator">=</span> render<span class="token punctuation">;</span>
    script<span class="token punctuation">.</span>__file <span class="token operator">=</span> <span class="token string">&quot;src/ReplaceMe.vue&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> components <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span>Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">__proto__</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ReplaceMe</span><span class="token operator">:</span> script
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Vue <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> name <span class="token keyword">in</span> components<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> components<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,13),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{y as __pageData,g as default};
