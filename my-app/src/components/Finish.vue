<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs4>
          <v-card class="person" color="#DAE0E0">
            <img src="../assets/img.png">
          </v-card>
        </v-flex>
        <v-flex xs8>
          <v-card class="welcome" color="#DAE0E0">
            <v-card-text>
              <div class="welcome-title">Gratulacje!</div>
              <div class="welcome-subtitle">Właśnie ukończyłeś kurs BHP!</div>
            </v-card-text>
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
  text-align: left;
  margin-top: 60px;
}
.welcome img {
    height: 100%;
    object-fit: contain;
    margin-top: 10%;
}
.welcome-title,
.welcome-subtitle {
  font-weight: bold;
  text-align: left;
}
.welcome-title {
  color: #ed7d31;
  font-size: 60px;
}
.welcome-subtitle {
  color: #4c4c65;
  font-size: 40px;
   margin-top: 10px;
}
</style>
