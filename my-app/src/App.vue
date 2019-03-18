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

            <v-btn class="next-btn" dark color="#4c4c65" @click="step = 2">Sprawdź krótki instruktaż
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-5 text-center" color="#DAE0E0">
              <Video :current-step="step"></Video>
            </v-card>

            <v-btn class="next-btn" dark color="#4c4c65" @click="step = 3">Zobacz zagrożenia
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content class="image-step" step="3">
            <v-card class="mb-5 text-center" min-height="70vh">
              <Gallery></Gallery>
            </v-card>

            <video v-if="step === 3" class="myframe" preload autoplay muted>
              <source src="./assets/video.mp4">
            </video>

            <v-btn class="next-btn" dark color="#4c4c65" @click="step = 4">Pokaż co już wiesz
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-card class="mb-5 text-center" color="#DAE0E0">
              <Quiz></Quiz>
            </v-card>

            <v-btn class="next-btn" dark color="#4c4c65" @click="step = 5">Sprawdź swoją wiedzę
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="5">
            <v-card class="mb-5" color="#DAE0E0">
              <Fill></Fill>
            </v-card>

            <v-btn class="next-btn" dark color="#4c4c65" @click="step = 6">Uczymy się dalej
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="6">
            <v-card class="mb-5" color="#DAE0E0">
              <Law></Law>
            </v-card>

            <v-btn class="next-btn" dark color="#4c4c65" @click="step = 7">Sprawdź wiedzę
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="7">
            <v-card class="mb-5" color="#DAE0E0">
              <Connect @content="handleNewContent"></Connect>
            </v-card>

            <v-btn class="next-btn" dark color="#4c4c65" @click="step = 8">Sprawdź kolejny test
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="8">
            <v-card class="mb-5" color="#DAE0E0">
              <Sort></Sort>
            </v-card>

            <v-btn class="next-btn" dark color="#4c4c65" @click="step = 9">Przejdź do końca
              <v-icon right dark>arrow_right_alt</v-icon>
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="9">
            <v-card class="mb-5" color="#DAE0E0">
            <Finish></Finish>
            </v-card>

          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-app>
    <span v-if="step == 7" v-html="content"></span>
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
import Law from "@/components/Law";
import Finish from "@/components/Finish"
export default {
  name: "App",
  components: {
    Introduction,
    Quiz,
    Sort,
    Fill,
    Connect,
    Video,
    Gallery,
    Law,
    Finish
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
.person img {
  width: 100%;
}
@import url("https://fonts.googleapis.com/css?family=Oswald:400,500,600,700&subset=latin-ext");
/* APP */
.application--wrap {
  background: #dae0e0 !important;
  font-family: "Oswald", sans-serif !important;
  min-height: 100vh;
}
.container:not(.v-input*) * {
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
}
.v-btn i {
  font-size: 28px;
}

.next-btn {
 float: right;
 margin-right: 10%;
 margin-bottom: 3%;
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
