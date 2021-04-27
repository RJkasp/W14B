<template>
  <div>
    <computer-selection></computer-selection>
    <scoreboard></scoreboard>
    <user-selection></user-selection>
  </div>
</template>

<script>
//imports components below to view{game.vue} and routes this page and components to app.vue
import ComputerSelection from '@/components/ComputerSelection.vue';
import Scoreboard from '@/components/Scoreboard.vue';
import UserSelection from '@/components/UserSelection.vue';
    export default {
        components: {
            ComputerSelection,
            Scoreboard,
            UserSelection,
        },
        
    }
</script>

<style scoped>
div{
    width: 100%;
    height: 100vh;
    background: purple;
    color: white;
}
</style>