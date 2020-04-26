<template>
  <!-- I am a user Page with: {{ $route.params.id }} -->

  <v-row justify="center" class="yellow general">
    <v-card
      width="500"
      max-height="250"
      class="d-flex flex-column indigo font-weight-light mt-12"
      dark
    >
      <v-card-text class="mt-4">
        Name: {{holidays[$route.params.id].name}}
        <v-divider></v-divider>
        <span>Year: {{ holidays[$route.params.id].date.datetime.year}}</span>
        <br />
        <span>Month: {{ holidays[$route.params.id].date.datetime.month}}</span>
        <br />
        <span>Day: {{ holidays[$route.params.id].date.datetime.day}}</span>
        <br />
        <v-divider></v-divider>
        <span>Short Description: {{ holidays[$route.params.id].description}}</span>
      </v-card-text>
      <v-spacer></v-spacer>

      <v-btn fab text dark outlined class="ma-1">
        <router-link to="/calendar">
          <i class="fa fa-chevron-circle-left white--text fa-3x"></i>
        </router-link>
      </v-btn>
    </v-card>
  </v-row>
</template>
<script>
import { mapState } from "vuex";
export default {
  mounted() {},

  computed: {
    ...mapState(["holidays"])
  }
};
</script>
<style scoped>
.general {
  height: 100%;
}
</style>