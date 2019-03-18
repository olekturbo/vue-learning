<template>
  <div>
    <v-container grid-list-xs>
      <v-layout row>
        <v-flex xs8 offset-xs1>
          <div class="display-3 left head">Prawa pracownika:</div>
          <div class="mt-10">
            <div class="sentence">
              <span class="number">1</span>
              <div class="text">
                <p>Prawo do odmowy wykonania polecenia służbowego łamiącego przepisy BHP.</p>
              </div>
            </div>
            <div class="sentence">
              <span class="number">2</span>
              <div class="text">
                <p>Oddalenie ze stanowiska pracy lub opuszczenie zakładu w sytuacji zagrażającej zdrowiu lub życiu</p>
              </div>
            </div>
            <div class="sentence">
              <span class="number">3</span>
              <div class="text">
                <p>Odmowa wykonania pracy w przypadku obniżonej sprawności psychofizyczne</p>
              </div>
            </div>
            <div class="sentence">
              <span class="number">4</span>
              <div class="text">
                <p>
                  Przeczytaj cały dokument <br/>
                  <a href="../download/instrukcje.pdf" target="_blank">
                    <v-icon>picture_as_pdf</v-icon>(pobierz)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex xs4>
          <v-card class="person" color="#DAE0E0">
            <img src="../assets/img-right.png">
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.head {
  color: #4c4c65;
  font-family: inherit !important;
}
.sentence {
  display: flex;
}
.mt-10 {
  margin-top: 100px;
}
.text {
  margin-top: 20px;
  width: 70%;
}
div > span.number {
  font-size: 80px;
  color: #ed7d31;
  font-weight: bold;
  margin-right: 10px;
  margin-left: 20px;
}
div > p {
  display: initial;
  color: #4c4c65;
  font-size: 30px;
}
i {
  font-size: 40px;
  color: #4c4c65 !important;
}
</style>
