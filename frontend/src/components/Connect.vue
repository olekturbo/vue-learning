<template>
  <div id="fill">
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex d-flex xs2 offset-xs1>
          <v-card class="person" color="#DAE0E0">
            <img src="../assets/img.png">
          </v-card>
        </v-flex>
        <v-flex d-flex xs8>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <div class="welcome-title mb-4">Połącz zwierzęta z ich gatunkami</div>
            </v-flex>
            <v-flex d-flex xs6>
              <v-layout align-start row wrap class="connect">
                <v-flex d-flex>
                  <v-layout row wrap>
                    <v-flex
                      v-for="sentence in leftSentences"
                      :key="sentence.id"
                      d-flex
                      xs4
                      offset-xs4
                    >
                      <v-card
                        @click="handleLeftClick(sentence)"
                        :class="{'active': sentence.isActive, 'success': sentence.matched, 'not-success': !sentence.matched}"
                        dark
                        :id="'left'+sentence.id"
                      >
                        <v-card-text>{{ sentence.name }}</v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex d-flex xs6>
              <v-layout align-start row wrap class="connect">
                <v-flex d-flex>
                  <v-layout row wrap>
                    <v-flex
                      v-for="sentence in rightSentences"
                      :key="sentence.id"
                      d-flex
                      xs4
                      offset-xs4
                    >
                      <v-card
                        @click="handleRightClick(sentence)"
                        :class="{'active': sentence.isActive, 'success': sentence.matched, 'not-success': !sentence.matched}"
                        dark
                        :id="'right'+sentence.id"
                      >
                        <v-card-text>{{ sentence.name }}</v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      leftSentences: [
        {
          id: 1,
          name: "pies",
          isActive: false,
          matched: false
        },
        {
          id: 2,
          name: "pająk",
          isActive: false,
          matched: false
        },
        {
          id: 3,
          name: "okoń",
          isActive: false,
          matched: false
        },
        {
          id: 4,
          name: "krokodyl",
          isActive: false,
          matched: false
        },
        {
          id: 5,
          name: "żaba",
          isActive: false,
          matched: false
        }
      ],
      rightSentences: [
        {
          id: 1,
          name: "ssak",
          isActive: false,
          matched: false
        },
        {
          id: 2,
          name: "stawonóg",
          isActive: false,
          matched: false
        },
        {
          id: 3,
          name: "ryba",
          isActive: false,
          matched: false
        },
        {
          id: 4,
          name: "gad",
          isActive: false,
          matched: false
        },
        {
          id: 5,
          name: "płaz",
          isActive: false,
          matched: false
        }
      ]
    };
  },
  created() {
    this.shuffle(this.leftSentences);
    this.shuffle(this.rightSentences);
  },
  methods: {
    replay: function() {
      this.clear(this.leftSentences);
      this.clear(this.rightSentences);
      this.sort(this.leftSentences);
      this.sort(this.rightSentences);
      this.shuffle(this.leftSentences);
      this.shuffle(this.rightSentences);
      this.content = "";
      this.$emit("content", this.content);
    },
    clear: function(array) {
      array.forEach(element => {
        element.isActive = false;
        element.matched = false;
      });
    },
    sort: function(array) {
      array.sort(function(objA, objB) {
        return objA.id - objB.id;
      });
    },
    shuffle: function(array) {
      let counter = array.length;
      while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    },
    handleLeftClick: function(sentence) {
      sentence.matched ? "" : this.handleClick(sentence, this.leftSentences);
    },
    handleRightClick: function(sentence) {
      sentence.matched ? "" : this.handleClick(sentence, this.rightSentences);
    },
    handleClick: function(sentence, sentences) {
      let previousSentence = this.getActiveSentences(sentences).shift();
      previousSentence ? (previousSentence.isActive = false) : "";
      sentence.isActive = true;
      this.checkMatch();
    },
    checkMatch: function() {
      let leftActiveSentence = this.getActiveSentences(
        this.leftSentences
      ).shift();
      let rightActiveSentence = this.getActiveSentences(
        this.rightSentences
      ).shift();
      if (leftActiveSentence && rightActiveSentence) {
        if (leftActiveSentence.id == rightActiveSentence.id) {
          leftActiveSentence.matched = true;
          rightActiveSentence.matched = true;
          leftActiveSentence.isActive = false;
          rightActiveSentence.isActive = false;
          this.draw(leftActiveSentence.id, rightActiveSentence.id);
        }
      }
    },
    getActiveSentences: function(sentences) {
      return sentences.filter(s => s.isActive == true);
    },
    draw: function(leftId, rightId) {
      var div1 = document.getElementById("left" + leftId);
      var div2 = document.getElementById("right" + rightId);
      this.connect(div1, div2, "#4caf50", 5);
    },
    getOffset: function(el) {
      var rect = el.getBoundingClientRect();

      return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        width: rect.width || el.offsetWidth,
        height: rect.height || el.offsetHeight
      };
    },
    connect: function(div1, div2, color, thickness) {
      var off1 = this.getOffset(div1);
      var off2 = this.getOffset(div2);

      var x1 = off1.left + off1.width;
      var y1 = off1.top + off1.height - 25;

      var x2 = off2.left;
      var y2 = off2.top + 25;

      var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

      var cx = (x1 + x2) / 2 - length / 2;
      var cy = (y1 + y2) / 2 - thickness / 2;

      var angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);

      var htmlLine =
        "<div style='padding:0px; margin:0px; height:" +
        thickness +
        "px; background-color:" +
        color +
        "; line-height:1px; position:absolute; left:" +
        cx +
        "px; top:" +
        cy +
        "px; width:" +
        length +
        "px; -moz-transform:rotate(" +
        angle +
        "deg); -webkit-transform:rotate(" +
        angle +
        "deg); -o-transform:rotate(" +
        angle +
        "deg); -ms-transform:rotate(" +
        angle +
        "deg); transform:rotate(" +
        angle +
        "deg);'></div>";

      this.content += htmlLine;
      this.$emit("content", this.content);
    }
  }
};
</script>

<style scoped>
.connect {
  height: 500px;
}
.v-card {
  height: 60px;
}
.not-success {
  background: #4c4c65;
}
.v-card__text {
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  user-select: none;
}

.v-card.active {
  filter: brightness(70%);
}

.person {
  height: 100%;
  object-fit: contain;
}
.welcome-title {
  z-index: 100;
}
</style>
