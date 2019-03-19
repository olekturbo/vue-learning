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
          <div class="welcome">
            <div class="welcome-title">Witamy na naszym szkoleniu</div>
            <div class="mt-5">
              <div v-for="sentence in sentences" :key="sentence.secondPart">
                <p>
                  {{ sentence.firstPart }}
                  <v-flex class="d-inline-block">
                    <v-text-field
                      :append-icon="solutionIsCompared(sentence) ? 'check' : 'edit'"
                      :color="solutionIsCompared(sentence) ? 'success' : 'error'"
                      single-line
                      v-model="sentence.answer"
                    ></v-text-field>
                  </v-flex>
                  {{ sentence.secondPart }}
                </p>
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      sentences: [
        {
          firstPart: "Jeden, dwa, trzy, ",
          secondPart: "pięć.",
          answer: "",
          solutions: [
            "cztery"
          ]
        },
        {
          firstPart: "Według teorii Darwina",
          secondPart: "pochodzi od małpy.",
          answer: "",
          solutions: ["człowiek", "czlowiek"]
        },
        {
          firstPart: "Narzędzie służące do wbijania gwoździ to",
          secondPart: "",
          answer: "",
          solutions: ["mlotek", "młotek"]
        }
      ],
      window: 0
    };
  },
  methods: {
    solutionIsCompared: function(element) {
      let isWin = true;
      let array = element.solutions.map(f => {
        return f.toUpperCase();
      });
      if (!array.includes(element.answer.toUpperCase())) isWin = false;

      return isWin;
    }
  }
};
</script>

<style scoped>
.v-input input {
  text-align: center;
}
.welcome p {
  color: #4c4c65;
  font-size: 20px;
}
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
