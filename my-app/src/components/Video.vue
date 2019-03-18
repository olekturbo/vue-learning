<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs4>
          <v-card class="person" color="#DAE0E0">
            <img src="../assets/img.png">
          </v-card>
        </v-flex>
        <v-flex xs8>
          <v-card class="welcome" color="#DAE0E0">
            <video preload controls>
              <source src="../assets/szkolenie.mp4">
            </video>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
</script>

<style scoped>
.welcome {
  border: 1px solid black;
  padding-left: 5%;
  width: 100%;
  height: auto;
  position: relative;
  border: 30px solid black;
}
.welcome video {
  width: 80vh;
  height: auto;
  position: absolute;
  background: #4c4c65;
  padding: 70px;
}
</style>
