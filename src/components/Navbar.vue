<template>
  <row>
    <v-app-bar light app flat color="#EEEEEE" class="" id="text">
  <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="rgb(92, 10, 74)">
    
  </v-app-bar-nav-icon>
    <v-toolbar-title>Menu</v-toolbar-title>
    <v-spacer></v-spacer>
    <span class="display-1 font-weight-thin " id="calendar">Calendar </span><span class="display-1 font-weight-medium">App</span>
 </v-app-bar>
   <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      color="orange"
      dark
       
    >
      <v-list nav light>
        <v-list-item-group
          v-model="group"
          active-class="rgb(92, 10, 74)"
        >
          <v-list-item primary v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-icon><v-icon color="white">{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </row>
 
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      links: [{text: 'Home', icon: 'home', route: '/'}, {text: 'About', icon: 'info',route: '/about'}, {text: 'Calendar', icon: 'today', route: '/calendar'}, {text: 'Zarifa Rasullu', icon: 'face', route: '/zarifarasullu'}]
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
<style scoped>
#text {
  color:rgb(92, 10, 74);
}
#calendar {
  font-family:'Times New Roman', Times, serif;
  color: #8C8F94;
}
</style>