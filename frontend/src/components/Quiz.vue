<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs4>
        <v-card class="person" color="#DAE0E0">
          <img src="../assets/img.png">
        </v-card>
      </v-flex>
      <v-flex xs8>
        <v-card class="welcome" color="#DAE0E0">
          <template>
            <div class="welcome-title" :key="question.name">{{question.name}}</div>
            <div
              :key="answer.name"
              v-for="answer in question.answers"
              class="flip mt-3"
              :class="[{clicked:answer.name == selected.name}, {'clicked': showAllAnswers}]"
              @click="handleRotate(answer)"
            >
              <div class="front">
                <h1 class="text-shadow">{{ answer.name }}</h1>
              </div>
              <div class="back" :class="{'green': answer.is_correct, 'error': !answer.is_correct}">
                <template>
                  <h2 v-if="answer.is_correct">Prawidłowa odpowiedź!</h2>
                  <h2 v-else>Nieprawidłowa odpowiedź!</h2>
                </template>
              </div>
            </div>
          </template>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { MyApiClient } from '../main.js'
export default {
  data() {
    return {
      selected: {
        name: undefined,
        correct: undefined
      },
      error: undefined,
      showAllAnswers: false,
      isRotated: false,
      snackbar: {
        visibility: false,
        y: "top",
        x: "right",
        mode: "",
        timeout: 3000,
        text: "",
        color: "error"
      },
      question: "",
    };
  },
  mounted() {
    MyApiClient
      .get("question/1")
      .then(response => (this.question = response.data))
      .catch(e => { console.log(e); });
  },
  methods: {
    handleRotate: function(answer) {
      if (!this.isRotated) {
        this.isRotated = true;
        this.selected = answer;
        this.showAll();
      }
    },
    showAll: function() {
      var vm = this;
      setTimeout(function() {
        vm.showAllAnswers = true;
      }, 1000);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: normal;
}

.text-center {
  text-align: center;
}

.center {
  margin: 0 auto;
  display: block !important;
}

h1 {
  font-size: 2.2em;
}

.red {
  color: #a94442;
}

.green {
  color: #3c763d;
}

.flip {
  position: relative;
  cursor: pointer;
}

.v-subheader {
  display: block;
}

.flip > .front,
.flip > .back {
  display: block;
  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
}

.flip > .front {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.flip > .back {
  position: absolute;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.flip.clicked > .front {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.flip.clicked > .back {
  opacity: 1;
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.flip.flip-vertical > .back {
  -webkit-transform: rotateX(-180deg);
  transform: rotateX(-180deg);
}

.flip.flip-vertical.clicked > .front {
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
}

.flip.flip-vertical.clicked > .back {
  -webkit-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

.front {
  background: #4c4c65;
}

.front,
.back {
  text-align: center;
}

.front h1,
.back h2 {
  margin-top: 85px;
}

.flip {
  position: relative;
  display: inline-block;
  margin-bottom: 1em;
  width: 300px;
}

.flip > .front,
.flip > .back {
  display: block;
  color: white;
  width: inherit;
  background-size: cover !important;
  background-position: center !important;
  height: 270px;
  width: 90%;
  padding: 1em 2em;
}

.flip > .front p,
.flip > .back p {
  font-size: 0.9125rem;
  line-height: 160%;
  color: white;
}

.list-group-item {
  cursor: grab;
}

.person img {
  height: 80vh;
  object-fit: contain;
}

.welcome {
  text-align: left;
  position: absolute;
  top: 10%;
}
.welcome-title {
  font-weight: bold;
}
.welcome-title {
  color: #ed7d31;
  font-size: 60px;
}
</style>