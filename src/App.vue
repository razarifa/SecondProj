<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
/* main {
/* background-image: url('./assets/backgorund.jpg'); */
/* background-color:rgb(186, 153, 192); */
/* background-color: rgb(157, 197, 184); */
/* background-color: rgba(116, 148, 234, 0.76);} */
</style>