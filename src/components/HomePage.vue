<template>
<!-- page created to add a button on app.vue to send us to login page -->
  <section>
    <img
      src="https://tse4.mm.bing.net/th?id=OIP.uImomYY7RKPl579Xf6XUgwHaE8&pid=Api&P=0&w=283&h=189"
      alt="picture of rock paper scissors"
    />
    <a href="#/login">login</a>
    <div></div>
  </section>
</template>

<script>
export default {
  name: "home-page",
};
</script>

<style scoped>
img {
  width: 100%;
  height: 60vh;
  position: relative;
  
}
a{
    position: absolute;
    top: 30%;
    left: 50%;
    color: white;
    text-decoration: none;
    z-index: 100;
    font-weight: bold;
    font-size: 2em;
    transform: translate(-50%, -50%);

}
div{
    width: 100%;
    height: 60vh;
    background: black;
    opacity: .3;
    position: absolute;
    top: 0;

}
</style>