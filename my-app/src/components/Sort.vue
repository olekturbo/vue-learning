<template>
  <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Ustaw w poprawnej kolejności</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>

          <v-list two-line>
            <draggable
              :list="list"
              :disabled="!enabled"
              :sortable="true"
              class="list-group"
              :autoscroll="true"
            >
              <div class="list-group-item" v-for="item in list" :key="item.id">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                <v-list-tile v-else :key="item.title">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </div>
            </draggable>
          </v-list>
        </v-card>
        <v-btn
          class="mt-3 left"
          color="cyan darken-2"
          style="color: white;"
          @click="checkWin"
        >Sprawdź</v-btn>
        <v-btn
          class="mt-3 right"
          color="cyan darken-3"
          style="color: white;"
          @click="reorderList"
        >Podpowiedź</v-btn>
        <v-btn
          class="mt-3 right"
          color="teal lighten-1"
          style="color: white;"
          @click="mixList"
        >Pomieszaj</v-btn>
      </v-flex>
    </v-layout>
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
  </v-app>
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
          name: "Zagadnienie numer 1",
          id: 0,
          successOrder: 0,
          order: undefined
        },
        {
          name: "Zagadnienie numer 2",
          id: 1,
          successOrder: 1,
          order: undefined
        },
        {
          name: "Zagadnienie numer 3",
          id: 2,
          successOrder: 2,
          order: undefined
        },
        {
          name: "Zagadnienie numer 4",
          id: 3,
          successOrder: 3,
          order: undefined
        },
        {
          name: "Zagadnienie numer 5",
          id: 4,
          successOrder: 4,
          order: undefined
        },
        {
          name: "Zagadnienie numer 6",
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

