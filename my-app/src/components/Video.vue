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
              <source src="">
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
.person img {
  height: 80vh;
  object-fit: contain;
}
.welcome {
  border: 1px solid black;
  padding-left: 5%;
  margin-top: 10%;
}
.welcome video {
    position: absolute;
    display: block;
    height: 440px;
    width: 740px;
    margin: 30px 0 0 30px;
}
.welcome::after {
  height: 500px;
  display: block;
  width: 800px;
  border: 30px solid #4c4c65;
  content: "";
}
</style>
