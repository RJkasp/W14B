<template>
<!-- page is for the computer selection to get the functions from the store 
and return the value to the game page -->
   <section id="compSlection">
       <h3>The Computer Selection Is: {{getSelection}}</h3>
   </section>
</template>

<script>
    export default {
        name: 'computer-selection',
        computed:{
            getSelection: function(){
                return this.$store.getters.getComputer
            }
        }
    }
</script>

<style scoped>

</style>