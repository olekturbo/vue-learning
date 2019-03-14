<template>
  <div id="app">
    <v-app id="inspire">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step @click="step = 1" :complete="step > 1" step="1"></v-stepper-step>

          <v-divider :class="{'active': step > 1}"></v-divider>

          <v-stepper-step @click="step = 2" :complete="step > 2" step="2"></v-stepper-step>

          <v-divider :class="{'active': step > 2}"></v-divider>

          <v-stepper-step @click="step = 3" :complete="step > 3" step="3"></v-stepper-step>

          <v-divider :class="{'active': step > 3}"></v-divider>

          <v-stepper-step @click="step = 4" :complete="step > 4" step="4"></v-stepper-step>

          <v-divider :class="{'active': step > 4}"></v-divider>

          <v-stepper-step @click="step = 5" :complete="step > 5" step="5"></v-stepper-step>

          <v-divider :class="{'active': step > 5}"></v-divider>

          <v-stepper-step @click="step = 6" :complete="step > 6" step="6"></v-stepper-step>

          <v-divider :class="{'active': step > 6}"></v-divider>

          <v-stepper-step @click="step = 7" :complete="step > 7" step="7"></v-stepper-step>

          <v-divider :class="{'active': step > 7}"></v-divider>

          <v-stepper-step @click="step = 8" :complete="step > 8" step="8"></v-stepper-step>

          <v-divider :class="{'active': step > 8}"></v-divider>

          <v-stepper-step @click="step = 9" :complete="step > 9" step="9"></v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-5 text-center" color="#DAE0E0">
              <Introduction></Introduction>
            </v-card>

            <v-btn class="right" dark color="#4c4c65" @click="step = 2">Sprawdź krótki instruktaż
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-5 text-center" color="#DAE0E0">
              <Video></Video>
            </v-card>

            <v-btn class="right" dark color="#4c4c65" @click="step = 3">Zobacz zagrożenia
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content class="image-step" step="3">
            <v-card class="mb-5 text-center" min-height="70vh">
              <Gallery></Gallery>
            </v-card>

            <video class="myframe" preload autoplay>
              <source src="./assets/video.mp4">
            </video>

            <v-btn class="right" dark color="#4c4c65" @click="step = 4">Pokaż co już wiesz
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-card class="mb-5 text-center" color="#DAE0E0">
              <Quiz></Quiz>
            </v-card>

            <v-btn class="right" dark color="#4c4c65" @click="step = 5">Kontynuuj</v-btn>
          </v-stepper-content>

          <v-stepper-content step="5">
            <v-card class="mb-5" color="#DAE0E0">
              <Sort></Sort>
            </v-card>

            <v-btn class="right" color="primary" @click="step = 6">Kontynuuj</v-btn>

            <v-btn class="left" flat @click="step = 4">Cofnij</v-btn>
          </v-stepper-content>

          <v-stepper-content step="6">
            <v-card class="mb-5" color="#DAE0E0">
              <Fill></Fill>
            </v-card>

            <v-btn class="right" color="primary" @click="step = 7">Kontynuuj</v-btn>

            <v-btn class="left" @click="step = 5" flat>Cofnij</v-btn>
          </v-stepper-content>

          <v-stepper-content step="7">
            <v-card class="mb-5" color="#DAE0E0">
              <Connect @content="handleNewContent"></Connect>
            </v-card>

            <v-btn class="right" color="primary" @click="step = 8">Kontynuuj</v-btn>

            <v-btn class="left" flat @click="step = 6">Cofnij</v-btn>
          </v-stepper-content>

          <v-stepper-content step="8">
            <v-card class="mb-5" color="#DAE0E0"></v-card>

            <v-btn class="right" color="primary" @click="step = 9">Kontynuuj</v-btn>

            <v-btn class="left" flat @click="step = 7">Cofnij</v-btn>
          </v-stepper-content>

          <v-stepper-content step="9">
            <v-card class="mb-5" color="#DAE0E0"></v-card>

            <v-btn class="left" flat @click="step = 8">Cofnij</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-app>
    <span v-if="step == 8" v-html="content"></span>
  </div>
</template>

<script>
import Introduction from "@/components/Introduction";
import Gallery from "@/components/Gallery";
import Quiz from "@/components/Quiz";
import Sort from "@/components/Sort";
import Fill from "@/components/Fill";
import Connect from "@/components/Connect";
import Video from "@/components/Video";
export default {
  name: "App",
  components: {
    Introduction,
    Quiz,
    Sort,
    Fill,
    Connect,
    Video,
    Gallery
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
@import url("https://fonts.googleapis.com/css?family=Oswald:400,500,600,700&subset=latin-ext");
/* APP */
.application--wrap {
  background: #dae0e0 !important;
  font-family: "Oswald", sans-serif !important;
  height: 100vh;
}
.container * {
  font-family: "Oswald", sans-serif !important;
}
/* STEPPER */
.v-stepper__header {
  padding: 0 10%;
  margin: 2% 0;
  box-shadow: none;
  position: relative;
  z-index: 100;
}
.v-divider {
  border-color: #4c4c65 !important;
  border-width: 2px;
  margin: 0 -32px !important;
}
.v-stepper__step {
  cursor: pointer;
}
.v-stepper {
  background: #dae0e0 !important;
  box-shadow: none;
}
.v-stepper__step__step {
  background: #4c4c65 !important;
  height: 48px;
  width: 48px;
  font-size: 22px;
}
.v-stepper__step--active .v-stepper__step__step,
.v-stepper__step--complete .v-stepper__step__step {
  background: #ed7d31 !important;
}

/* CARD */
.v-card {
  box-shadow: none;
  margin-bottom: 0 !important;
}

/* BTN */
.v-btn {
  padding: 15px 36px;
  height: initial;
  text-transform: none;
  font-size: 16px;
  margin-top: -7%;
  margin-right: 7%;
}
.v-btn i {
  font-size: 28px;
}

/* DIVIDER */
.v-divider.active {
  border-color: #ed7d31 !important;
}

/* VIDEO */
.myframe {
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
}
</style>
