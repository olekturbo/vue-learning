<template>
  <div id="app">
    <v-app id="inspire">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" step="1">Quiz</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="step > 2" step="2">Kolejność</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="step > 3" step="3">Uzupełnij wyrażenie</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="4">Name of step 4</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-5 text-center" color="white lighten-1" height="50vh">
              <Quiz></Quiz>
            </v-card>

            <v-btn color="primary" @click="step = 2">Kontynuuj</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-5" color="white lighten-1" height="50vh">
              <Sort></Sort>
            </v-card>

            <v-btn color="primary" @click="step = 3">Kontynuuj</v-btn>

            <v-btn flat @click="step = 1">Cofnij</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-5" color="white lighten-1" height="50vh">
              <Fill></Fill>
            </v-card>

            <v-btn color="primary" @click="step = 4">Kontynuuj</v-btn>

            <v-btn @click="step = 2" flat>Cofnij</v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

            <v-btn flat @click="step = 3">Cofnij</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-app>
  </div>
</template>

<script>
import Quiz from "@/components/Quiz";
import Sort from "@/components/Sort";
import Fill from "@/components/Fill";
export default {
  name: "App",
  components: {
    Quiz,
    Sort,
    Fill
  },
  data() {
    return {
      step: 0
    };
  }
};
</script>

<style></style>