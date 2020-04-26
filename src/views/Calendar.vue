<template>
<v-app>
    <v-container fluid class="general x">
    <v-container class="col-7" v-if="holidays.length>0">
      <v-timeline >
        <v-timeline-item
          small
          v-for="(holiday, x) in holidays"
          :key="x"
          class="mb-2 overflow-hidden"
          color="indigo"
        >
          <template v-slot:opposite>
            <span class="font-weight-medium indigo--text" v-text="holiday.date.iso.slice(0,10)"></span>
          </template>
          <v-card max-width="300" min-width="300" class="mb-2 overflow-hidden" color="orange py-4">
            <v-card-text>
              <h2 class="white--text mb-4">{{ holiday.name }}</h2>
              <div class width></div>
            </v-card-text>
            <v-card-actions>
              <v-btn text outlined dark>
                <router-link :to="{ name: 'Info', params: {id: x}}">
                  <i class="fa fa-info white--text"></i>
                </router-link>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <v-container v-else>
     <v-row justify="center">
    <v-col class="d-flex justify-center align-center ma-12" >
    <v-progress-circular color="purple" size="70"
      indeterminate
     
    ></v-progress-circular>

    </v-col>       
     </v-row>
    </v-container>
  </v-container>
</v-app>
 
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("fetchHolidays");
  },
  computed: {
    ...mapState(["holidays"])
  },
  methods: {}
};
</script>
<style scoped>
.x {
  background-color: #73aaa5;
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
}

</style>