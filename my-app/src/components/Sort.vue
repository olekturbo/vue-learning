<template>
  <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="cyan" dark>
            <v-toolbar-title>Ustaw w poprawnej kolejności</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>

          <v-list two-line>
            <draggable
              :list="list"
              :disabled="!enabled"
              class="list-group"
              ghost-class="ghost"
              @start="dragging = true"
              @end="dragging = false"
            >
              <div class="list-group-item" v-for="item in list" :key="item.name">
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
      </v-flex>
    </v-layout>
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
        { name: "Test", id: 0 },
        { name: "Test 2", id: 1 },
        { name: "Test 3", id: 2 }
      ],
      dragging: false
    };
  }
};
</script>
