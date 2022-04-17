<!--
    ./src/app/HelpContent.vue
-->


<style scoped>

    a {
        color: #42b983;
    }

</style>


<template>

    <div class="w-full flex flex-col sm:flex-row justify-center text-center gap-8 pb-10 px-8">
        <img :class="imgClasses" alt="Vue logo" src="../assets/logo.png"/>
        <img :class="imgClasses" alt="OBE:WDS logo" src="../assets/OBE-MARK-200x200.png"/>
    </div>

    <h1 class="text-3xl pb-8">OBE:WDS Vite/Vue Compo Starter</h1>

    <div :class="flexColSect">

        <h2 :class="h2Classes">Doing the Things</h2>
    
        <ul>
            <li>
                1. Find/Replace <code :class="codeClasses">vite-vue-compo-pkg-starter</code> in all repo code
            </li>
            <li>
                2. Find/Replace <code :class="codeClasses">ReplaceMe</code> in all repo filenames and code
            </li>
            <li>
                3. Use file formerly known as <code :class="codeClasses">ReplaceMe</code> to create a new component
            </li>
            <li>
                4. Use <a href="https://vitest.dev/" target="_blank" :style="linkStyle">Vitest</a> to create a <code :class="codeClasses">xxxx.test.js</code> file and fully test the new component
            </li>
            <li>
                5. Use the npm script command <code :class="codeClasses">npm run publish:prep</code> to generate/check your component package files
            </li>
            <li>
                6. Double check your <code :class="codeClasses">package.json</code> file to ensure the package files can be consumed
            </li>
            <li>
                7. Use <a href="https://desktop.github.com/" target="_blank" :style="linkStyle">GitHub Desktop</a> to make a PR from your branch and merge it into the <code :class="codeClasses">main</code> branch
            </li>
            <li>
                8. Use the npm script command <code :class="codeClasses">npm run publish:package</code> and follow the prompts to publish your new package files.
            </li>
        </ul>

    </div>

    <div :class="[flexColSect, 'pb-20']">

        <h2 :class="h2Classes">Read the Things</h2>
    
        <ul>
            <li>
                <a href="https://vitejs.dev/guide/features.html" target="_blank" :style="linkStyle">Vite Docs</a>
            </li>
            <li>
                <a href="https://v3.vuejs.org/" target="_blank" :style="linkStyle">Vue 3 Docs</a>
            </li>
            <li>
                <a href="https://tailwindcss.com/docs/" target="_blank" :style="linkStyle">Tailwind CSS Docs</a>
            </li>
            <li>
                <a href="https://rollupjs.org/guide/en/" target="_blank" :style="linkStyle">Rollup Docs</a>
            </li>
            <li>
                <a href="https://vitest.dev/" target="_blank" :style="linkStyle">Vitest Docs</a>
            </li>
        </ul>

        <p>Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" :style="linkStyle">VS Code</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" :style="linkStyle">Volar</a></p>

        <h2 :class="[h2Classes, 'pt-6']">Reactive Thing</h2>

        <p class="pt-2">
            <button type="button" @click="count++" class="inline bg-blue-500 text-white rounded px-2 py-1">count is: {{ count }}</button>
        </p> 
    
    </div>

</template>


<script setup>

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

    import { ref } from 'vue'

    const count = ref(0)
    const linkStyle = 'color:#42b983;'
    const codeClasses = 'bg-gray-200 px-1'
    const imgClasses = 'w-24 mx-auto sm:mx-0'
    const flexColSect = 'flex flex-col space-y-2 pt-8'
    const h2Classes = 'text-2xl font-bold'

</script>
