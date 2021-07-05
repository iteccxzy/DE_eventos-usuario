<template>
  <div id="app">
    <headerComponent></headerComponent>
    <router-view></router-view>
    <footerComponent></footerComponent>
  </div>
</template>


<script>
import headerComponent from "./components/headerComponent.vue";
import footerComponent from "./components/footerComponent.vue";

export default {
  name: "App",
  components: {
    headerComponent,
    footerComponent
  }
};
</script>


<style>
/* @import "./assets/css/style.css";
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"); */
/* @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"); */
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500&display=swap');
body{
font-family: 'Tajawal', sans-serif;
}

</style>
