<template>
    <div>
<home-page></home-page>
    </div>
</template>

<script>
//page made for login button, imports components from HomePage.vue and sends view{home.vue} to app.vue through router
import HomePage from '@/components/HomePage.vue';
    export default {
        name: 'home',
        components: {
        HomePage,
        }
    }
</script>

<style scoped>

</style>