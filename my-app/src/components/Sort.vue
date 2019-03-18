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
          <v-card class="welcome" color="#DAE0E0">
            <v-card-text>
              <div class="welcome-title">Poukładaj swój dzień pracy</div>
            </v-card-text>
            <v-layout align-start row wrap justify-start>
              <v-flex d-flex xs8>
                <draggable
                  :list="list"
                  :disabled="!enabled"
                  :sortable="true"
                  class="list-group"
                  :autoscroll="true"
                >
                  <v-flex v-for="item in list" :key="item.id" d-flex xs10 offset-xs1>
                    <v-card
                      @click="handleLeftClick(item)"
                      dark
                      :id="'left'+item.id"
                      color="#4c4c65"
                    >
                      <v-card-text>{{ item.name }}</v-card-text>
                    </v-card>
                  </v-flex>
                </draggable>
                <v-flex d-flex xs2>
                  <v-icon>compare_arrows</v-icon>
                </v-flex>
              </v-flex>
            </v-layout>
            <v-btn style="margin-left: 35px;" class="mt-3 left" color="#ed7d31" dark @click="checkWin">Sprawdź</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      enabled: true,
      list: [
        {
          name: "Przyjdź do pracy",
          id: 0,
          successOrder: 0,
          order: undefined
        },
        {
          name: "Pracuj rano",
          id: 1,
          successOrder: 1,
          order: undefined
        },
        {
          name: "Pracuj przed południem",
          id: 2,
          successOrder: 2,
          order: undefined
        },
        {
          name: "Pracuj w południe",
          id: 3,
          successOrder: 3,
          order: undefined
        },
        {
          name: "Pracuj po południu",
          id: 4,
          successOrder: 4,
          order: undefined
        },
        {
          name: "Wyjdź z pracy",
          id: 5,
          successOrder: 5,
          order: undefined
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
      }
    };
  },
  created() {
    this.shuffle();
    this.callOrder();
  },
  methods: {
    checkWin: function() {
      let isOrdered = true;
      this.list.forEach((element, value) => {
        if (value !== element.successOrder) isOrdered = false;
      });

      this.snackbar.visibility = true;
      if (isOrdered) {
        this.snackbar.color = "success";
        this.snackbar.text = "Ustawiono w poprawnej kolejności!";
      } else {
        this.snackbar.color = "error";
        this.snackbar.text = "Nieprawidłowa kolejność!";
      }

      return isOrdered;
    },
    shuffle: function() {
      let array = this.list;
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
    callOrder: function() {
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].order = i;
      }
    },
    reorderList() {
      this.list.sort(function(objA, objB) {
        return objA.successOrder - objB.successOrder;
      });
    },
    mixList() {
      this.reorderList();
      this.shuffle();
    }
  }
};
</script>

<style>
.v-card__text {
  text-align: center;
  cursor: grab;
}
</style>

<style scoped>
.v-icon {
  transform: rotate(90deg);
  font-size: 100px;
  color: #ed7d31;
}
</style>


