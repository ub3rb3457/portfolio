<!--
    ./src/app/App.vue
-->

<template>
    
    <div class="pb-20 pt-8">
        <Workspace/>
    </div>

    <HelpContent/>

</template>


<script setup>

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

    import Workspace from './Workspace.vue'
    import HelpContent from './HelpContent.vue'

</script>
