<template>
  <v-app>
     <v-container  fluid class="x">
    <v-row>
       <v-card raised class="mx-auto mt-12 d-flex flex-wrap" color="#fff" light  max-width="500" min-height="300">
         <v-card-title>
           <v-list-item three-line>
             <v-list-item-content>
                   <div class=" mb-4">About the Project : </div>
                    <v-list-item-title class="headline mb-1 body-1" ><b class="orange--text">CalendarApp</b> has been designed by <router-link to="/zarifarasullu" class="black--text">Zarifa Rasullu</router-link> for <br>
                     retriving the holiday days on the calendar due to the <br>selected country. Vuex and Vuetify has been used <br> in the project. </v-list-item-title>
                     <v-list-item-subtitle class="mt-12">
                      <v-chip color="orange" dark class="body-2 font-weight-light">Date : April-25-2020</v-chip>
                       </v-list-item-subtitle>
                       <div>
                         
                       </div>
             </v-list-item-content>

           </v-list-item>
         </v-card-title>
       </v-card>
    </v-row>
   </v-container>
  </v-app>
</template>
<style scoped>
.x {
    background-color:#73AAA5;
    height:100%;
    
}
</style>