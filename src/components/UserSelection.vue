<template>
<!-- buttons for game -->
  <section id="userSelection">
     <div id="rock"><button @click="select('rock')">ROCK</button></div>
    <div id="paper"><button @click="select('paper')">PAPER</button></div>
    <div id="scissors"><button @click="select('scissors')">SCISSORS</button></div>
   </section>
</template>

<script>
export default {
  name: "user-selection",
// user select function for user to select rock paper or scissors from above in html in @click
  methods: {
    select: function (option) {
      this.$store.state.userSelection = option;
      this.updateComputerSelect();
    },
//computer function is a random function where we use math to create a random number between 0 and 1 and than multiply it by 3 to have a random number between 0 and 3
    updateComputerSelect: function () {
      this.$emit("changeIt", "paper");
      let options = ["paper", "scissors", "rock"];
      let random = Math.floor(Math.random() * 3);

      this.$store.state.compSelection = options[random];

      this.startGame();
    },
    //function stores the score board points using conditional atatements let user connects to user selection let computer connects to compselection 
    // the conditonal statement in short are the game rules.
    startGame: function () {
      let user = this.$store.state.userSelection;
      let computer = this.$store.state.compSelection;

      if (user === "paper") {
        if (computer === "rock") {
          this.$store.state.winsTotal += 1;
        } else if (computer === "scissors") {
          this.$store.state.lossTotal += 1;
        }
      }
      if (user === "rock") {
        if (computer === "scissors") {
          this.$store.state.winsTotal += 1;
        } else if (computer === "paper") {
          this.$store.state.lossTotal += 1;
        }
      }
      if (user === "scissors") {
        if (computer === "paper") {
          this.$store.state.winsTotal += 1;
        } else if (computer === "rock") {
          this.$store.state.lossTotal += 1;
        }
      }
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
}
button {
  margin: 30px;
}
img {
  width: 100px;
}
div{
    width: 100%;
    height: 60vh;
    background-repeat: no-repeat;
    background-position: center center;
}
div#rock{
    background-image: url("http://publicdomainpictures.net/pictures/10000/velka/stacked-rocks-11281261754V8ah.jpg") ;
}
div#paper{
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Toilet_paper_orientation_over.jpg/1200px-Toilet_paper_orientation_over.jpg") ;
}
div#scissors{
    background-image: url("https://www.eboshealthcare.com.au/globalassets/product-images/s/sy3300.jpg?mode=max&width=800&height=800") ;
}
button{
    background: black;
    color: white;
    padding: 6px;
    font-weight: bold;
}
</style>