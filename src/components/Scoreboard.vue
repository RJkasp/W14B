<template>
  <section>
      <!-- score board displays shore board in page using mustache syntax -->
    <p>Loss Total: {{ getLoss }}</p>
    <p>Win Total: {{ getWin }}</p>
  </section>
</template>

<script>
export default {
  name: "scoreboard",
  //grabs the functions out of getters in the store and returns the value
  computed: {
    getLoss() {
      return this.$store.getters.getLosses;
    },
    getWin() {
      return this.$store.getters.getWins;
    },
  },
};
</script>

<style scoped>
</style>