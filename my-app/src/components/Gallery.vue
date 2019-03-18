<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 offset-xs1>
        <v-card dark :color="currentSentence % 2 == 0 ? 'rgba(237, 125, 49, 0.7)' : 'rgba(76,76,101, 0.7)'">
          <v-card-text>
            {{ list[currentSentence].name }}
            <br>
            <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit magna, pellentesque vel libero at, efficitur rhoncus urna. Donec vestibulum ante ipsum, eu varius ipsum aliquam eu. Ut facilisis orci sed vestibulum facilisis. Donec sed malesuada diam. Proin pharetra tincidunt lectus, et efficitur ligula sollicitudin ac.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentSentence: 0,
      list: [
        {
          name: "Pracuj ciężko",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit magna, pellentesque vel libero at, efficitur rhoncus urna. Donec vestibulum ante ipsum, eu varius ipsum aliquam eu. Ut facilisis orci sed vestibulum facilisis. Donec sed malesuada diam. Proin pharetra tincidunt lectus, et efficitur ligula sollicitudin ac.",
        },
        {
          name: "BHP to podstawa",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit magna, pellentesque vel libero at, efficitur rhoncus urna. Donec vestibulum ante ipsum, eu varius ipsum aliquam eu. Ut facilisis orci sed vestibulum facilisis. Donec sed malesuada diam. Proin pharetra tincidunt lectus, et efficitur ligula sollicitudin ac.",
        },
        {
          name: "Uważaj na siebie",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit magna, pellentesque vel libero at, efficitur rhoncus urna. Donec vestibulum ante ipsum, eu varius ipsum aliquam eu. Ut facilisis orci sed vestibulum facilisis. Donec sed malesuada diam. Proin pharetra tincidunt lectus, et efficitur ligula sollicitudin ac.",
        }
      ]
    };
  },
  mounted() {
    let vm = this;
    setInterval(function() {
        vm.currentSentence < vm.list.length - 1 ? vm.currentSentence++ : vm.currentSentence = 0;
    }, 5000);
  }
};
</script>


<style scoped>
.v-stepper {
  background: black !important;
}
.v-card {
  z-index: 100;
  min-height: 50%;
  margin-top: 10px;
  width: 500px;
}
.v-btn {
  z-index: 100;
}
.v-card__text {
  font-size: 26px;
  padding: 50px;
  text-align: left;
  color: #fff;
}
</style>