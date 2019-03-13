<template>
  <div id="app">
    <v-app id="inspire">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step @click="step = 1" :complete="step > 1" step="1">Quiz</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step @click="step = 2" :complete="step > 2" step="2">Kolejność</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step @click="step = 3" :complete="step > 3" step="3">Uzupełnij wyrażenie</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step @click="step = 4" step="4">Łączenie sentencji</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-5 text-center" color="white lighten-1" min-height="60vh">
              <Quiz></Quiz>
            </v-card>

            <v-btn class="right" color="primary" @click="step = 2">Kontynuuj</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-5" color="white lighten-1" min-height="60vh">
              <Sort></Sort>
            </v-card>

            <v-btn class="right" color="primary" @click="step = 3">Kontynuuj</v-btn>

            <v-btn class="left" flat @click="step = 1">Cofnij</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-5" color="white lighten-1" min-height="60vh">
              <Fill></Fill>
            </v-card>

            <v-btn class="right" color="primary" @click="step = 4">Kontynuuj</v-btn>

            <v-btn class="left" @click="step = 2" flat>Cofnij</v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-card class="mb-5" color="white lighten-1" min-height="60vh">
              <Connect @content="handleNewContent"></Connect>
            </v-card>

            <v-btn class="left" flat @click="step = 3">Cofnij</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-app>
    <span v-html="content"></span>
  </div>
</template>

<script>
import Quiz from "@/components/Quiz";
import Sort from "@/components/Sort";
import Fill from "@/components/Fill";
import Connect from "@/components/Connect";
export default {
  name: "App",
  components: {
    Quiz,
    Sort,
    Fill,
    Connect
  },
  data() {
    return {
      step: 0,
      content: ""
    };
  },
  methods: {
    handleNewContent: function(value) {
      this.content = value;
    }
  }
};
</script>

<style>
.v-stepper__step {
  cursor: pointer;
}
</style>