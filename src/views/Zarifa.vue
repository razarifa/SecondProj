<template>
  <v-app>
    <v-container fluid class="accent-3 x">
    <v-row justify="space-around">
      <v-card max-width="504" class="mx-auto text-center light-pink">
        <div class="orange">
          <v-list-item class="justify-center">
            <v-list-item-avatar color="accent-4" size="150" weight="200">
              <v-img src="../assets/deathnote.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </div>

        <v-card-text class="body-1">
          Hello. I am Zarifa.
          I have studied Computer Science at Baku State University.
          <br />You can find me in the following adressess:
        </v-card-text>

        <v-row justify="center">
          <v-card-actions class="d-flex text-center" justify="center">
            <v-btn
              outlined
              fab
              color="orange accent-4"
              dark
              href="https://www.linkedin.com/in/zarifa-rasullu-229110176/"
              target="_blank"
              small
            >
              <i class="fa fa-linkedin"></i>
            </v-btn>
            <v-btn
              outlined
              fab
              color="orange accent-4"
              dark
              href="https://github.com/razarifa"
              target="_blank"
              small
            >
              <i class="fa fa-github"></i>
            </v-btn>
            <v-btn
              fab
              color="orange accent-4"
              dark
              href="https://www.facebook.com/zarifa.rasullu/"
              target="_blank"
              small
              outlined
            >
              <i class="fa fa-facebook"></i>
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
  </v-app>
</template>
<style scoped>
.x {
  background-color: rgb(103, 188, 195);
  height: 100%;
  color: blue;
}
</style>