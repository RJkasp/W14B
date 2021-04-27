<template>
  <!-- login form for login page -->
  <div>
    <section id="login">
      <form>
        <input type="email" id="email" />
        <input @click="login" type="button" value="login" />
      </form>
      <!-- result of login weather its correct or not -->
      {{ result }}
    </section>
  </div>
</template>

<script>
//import axios
import axios from "axios";
export default {
  name: "login",
  //returns data for email and result
  data() {
    return {
      email: "",
      result: "",
    };
  },
  methods: {
    //login function to login into R,P,S,
    login: function () {
      let vm = this;
      axios
        .get("https://reqres.in/api/users/2")
        .then((response) => {
          vm.email = response.data.data.email;
          //cookie stores token and first_name
          if (document.getElementById("email").value === vm.email) {
            vm.$cookies.set("token", response.data.data.first_name);
            //sends a success message after login
            vm.result = "Success";
          //sets a 3 second wiat after logging in
            setTimeout(function () {
              //automatically sends to game page after login
              location.href = "#/game";
            }, 3000);
            //if email invalid a message is sent sayin invalid email
          } else {
            vm.result = "Invalid Email";
          }
        })
        //if api is not working it will catch the error and log it to the console
        .catch((err) => {
            console.log(err)
          vm.result = 'the API does not work';
        });
    },
  },
};
</script>

<style scoped>
#App {
  margin: 0;
  padding: 0;
}
div {
  color: white;
  width: 100%;
  height: 100vh;
  background: black;
}
form {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
input[type="email"] {
  padding: 6px;
  border: 2px solid red;
}
input[type="button"] {
  padding: 6px;
  background: red;
  border: 2px solid blue;
}
</style>