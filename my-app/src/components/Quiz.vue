<template>
  <div>
    <template v-for="(question, index) in questions">
      <template v-if="questionsCounter == index">
        <v-subheader class="center" :key="question.name">{{ question.name }}</v-subheader>
        <div
          :key="answer.name"
          v-for="answer in question.answers"
          class="flip mt-3"
          :class="[{clicked:answer.name == selected.name}, {'clicked': showAllAnswers}]"
          @click="handleRotate(answer)"
        >
          <div class="front" :style="{backgroundImage: 'url(images/' + answer.image + ')'}">
            <h1 class="text-shadow">{{ answer.name }}</h1>
          </div>
          <div class="back">
            <template>
              <h2
                v-if="answer.correct"
                :class="{ 'light-green--text': answer.correct }"
              >Prawidłowa odpowiedź!</h2>
              <h2 v-else :class="{ 'red--text': !answer.correct}">Nieprawidłowa odpowiedź!</h2>
            </template>
            <p>{{ answer.description }}</p>
          </div>
        </div>
      </template>
    </template>
    <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
    <v-btn
      v-if="showAllAnswers"
      color="primary"
      class="left"
      @click="previousQuestion"
    >Poprzednie pytanie</v-btn>
    <v-btn
      v-if="showAllAnswers"
      color="primary"
      class="right"
      @click="nextQuestion"
    >Następne pytanie</v-btn>
    <v-snackbar
      v-model="snackbar.visibility"
      :color="snackbar.color"
      :bottom="snackbar.y === 'bottom'"
      :left="snackbar.x === 'left'"
      :multi-line="snackbar.mode === 'multi-line'"
      :right="snackbar.x === 'right'"
      :timeout="snackbar.timeout"
      :top="snackbar.y === 'top'"
      :vertical="snackbar.mode === 'vertical'"
      :error="error"
    >
      {{ snackbar.text }}
      <v-btn color="white" flat @click="snackbar.visibility = false">&times;</v-btn>
    </v-snackbar>
  </div>
</template>


<script>
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
      valueDeterminate: 0,
      questionsCounter: 0
    };
  },
  computed: {
    questions: function() {
      return [
        {
          name: "W jakie miejsce najchętniej byś się udał?",
          answers: [
            {
              name: "góry",
              correct: false,
              description: "Góry to moje ulubione miejsce na ziemii.",
              image: "mountain.jpg"
            },
            {
              name: "morze",
              correct: false,
              description: "Polskie morze jest najpiękniejsze.",
              image: "sea.jpg"
            },
            {
              name: "las",
              correct: true,
              description: "Udało ci się zgadnąć.",
              image: "forest.jpg"
            }
          ]
        },
        {
          name: "Pytanie testowe",
          answers: [
            {
              name: "test 1",
              correct: false,
              description: "Góry to moje ulubione miejsce na ziemii.",
              image: "mountain.jpg"
            },
            {
              name: "test 2",
              correct: false,
              description: "Polskie morze jest najpiękniejsze.",
              image: "sea.jpg"
            },
            {
              name: "test 3",
              correct: true,
              description: "Udało ci się zgadnąć.",
              image: "forest.jpg"
            }
          ]
        }
      ];
    }
  },
  methods: {
    handleRotate: function(answer) {
      if (!this.isRotated) {
        this.isRotated = true;
        this.selected = answer;
        this.showAll();
        this.handleDeterminate(this.questionsCounter + 1);
      }
    },
    showAll: function() {
      var vm = this;
      setTimeout(function() {
        vm.showAllAnswers = true;
      }, 1000);
    },
    nextQuestion: function() {
      if (this.questionsCounter >= this.questions.length - 1) {
        this.handleSnackbar("Brak możliwości przejścia do kolejnego pytania.");
      } else {
        var vm = this;
        setTimeout(function() {
          vm.showAllAnswers = false;
          vm.questionsCounter++;
          vm.isRotated = false;
          vm.handleDeterminate(vm.questionsCounter);
        });
      }
    },
    previousQuestion: function() {
      if (this.questionsCounter < 1) {
        this.handleSnackbar("Brak możliwości cofnięcia.");
      } else {
        var vm = this;
        setTimeout(function() {
          vm.showAllAnswers = false;
          vm.questionsCounter--;
          vm.isRotated = false;
          vm.handleDeterminate(vm.questionsCounter);
        });
      }
    },
    handleSnackbar: function(text) {
      this.snackbar.text = text;
      this.snackbar.visibility = true;
    },
    handleDeterminate: function(value) {
      this.valueDeterminate = (value / this.questions.length) * 100;
    }
  }
};
</script>