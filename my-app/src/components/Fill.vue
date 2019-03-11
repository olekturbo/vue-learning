<template>
  <div>
    <v-layout align-center>
      <v-item-group v-model="window" class="shrink mr-4 mt-5" mandatory tag="v-flex">
        <v-item v-for="(sentence, index) in sentences" :key="sentence.firstPart">
          <div slot-scope="{ active, toggle }">
            <v-btn color="primary" :input-value="active" icon @click="toggle">{{ index + 1}}</v-btn>
          </div>
        </v-item>
      </v-item-group>

      <v-flex>
        <v-window v-model="window" class="elevation-1 mt-5" vertical>
          <v-window-item v-for="(sentence, index) in sentences" :key="sentence.secondPart">
            <v-card flat>
              <v-card-text>
                <v-layout align-center mb-3>
                  <strong class="title">Wyrażenie nr
                    <v-avatar color="primary" style="color: white;">{{ index + 1 }}</v-avatar>
                  </strong>
                </v-layout>
                <p>
                  {{ sentence.firstPart }}
                  <v-flex class="d-inline-block">
                    <v-text-field
                      :append-icon="solutionIsCompared(sentence) ? 'check' : 'edit'"
                      :color="solutionIsCompared(sentence) ? 'success' : 'primary'"
                      single-line
                      v-model="sentence.answer"
                    ></v-text-field>
                  </v-flex>
                  {{ sentence.secondPart }}
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
    <v-btn class="mt-5 left" color="cyan darken-2" style="color: white;" @click="checkWin">Sprawdź</v-btn>

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
      sentences: [
        {
          firstPart: "Największy ssak na całym świecie to",
          secondPart: ".",
          answer: "",
          solutions: [
            "płetwal błękitny",
            "pletwal blekitny",
            "płetwal blekitny",
            "pletwal błękitny"
          ]
        },
        {
          firstPart: "",
          secondPart: "pochodzi od małpy.",
          answer: "",
          solutions: ["człowiek", "czlowiek"]
        },
        {
          firstPart: "Lorem ipsum lorem ipsum lorem ipsum",
          secondPart: "lorem ipsum lorem ipsum.",
          answer: "",
          solutions: ["test"]
        }
      ],
      snackbar: {
        visibility: false,
        y: "top",
        x: "right",
        mode: "",
        timeout: 3000,
        text: "",
        color: "success"
      },
      window: 0
    };
  },
  methods: {
    solutionIsCompared: function(element) {
      console.log(element);
      let isWin = true;
      let array = element.solutions.map(f => {
        return f.toUpperCase();
      });
      if (!array.includes(element.answer.toUpperCase())) isWin = false;

      return isWin;
    },
    checkWin: function() {
      let isWin = true;
      this.sentences.forEach(element => {
        let array = element.solutions.map(f => {
          return f.toUpperCase();
        });
        if (!array.includes(element.answer.toUpperCase())) isWin = false;
      });

      this.snackbar.visibility = true;
      if (isWin) {
        this.snackbar.color = "success";
        this.snackbar.text = "Wszystkie zdania zostały poprawnie uzupełnione!";
      } else {
        this.snackbar.color = "error";
        this.snackbar.text = "Zdania zostały błędnie uzupełnione!";
      }
    }
  }
};
</script>

<style scope>
.v-input input {
  text-align: center;
}
</style>
