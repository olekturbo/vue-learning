new Vue({
  el: '#app',
  data: {
    selected: {
        'name': undefined,
        'correct': undefined
    },
    error: undefined,
    showAllAnswers: false,
    isRotated: false,
    snackbar: {
        'visibility': false,
        'y': 'top',
        'x': 'right',
        'mode': '',
        'timeout': 3000,
        'text': '',
        'color': 'error'
    },
    valueDeterminate: 0,
    questionsCounter: 0,
    step: 0,
},
computed: {
    questions: function() {

            return [
            {
                'name': 'W jakie miejsce najchętniej byś się udał?',
                'answers': [
                    {
                        'name':'góry',
                        'correct':false,
                        'description': 'Góry to moje ulubione miejsce na ziemii.',
                        'image': 'mountain.jpg'
                    },
                    {
                        'name':'morze',
                        'correct':false,
                        'description': 'Polskie morze jest najpiękniejsze.',
                        'image': 'sea.jpg'
                    },
                    {
                        'name':'las',
                        'correct':true,
                        'description': 'Udało ci się zgadnąć.',
                        'image': 'forest.jpg'
                    }
                ]
            },
            {
                'name': 'abcd',
                'answers': [
                    {
                        'name':'qwe',
                        'correct':false,
                        'description': 'Góry to moje ulubione miejsce na ziemii.',
                        'image': 'mountain.jpg'
                    },
                    {
                        'name':'rrr',
                        'correct':false,
                        'description': 'Polskie morze jest najpiękniejsze.',
                        'image': 'sea.jpg'
                    },
                    {
                        'name':'aa',
                        'correct':true,
                        'description': 'Udało ci się zgadnąć.',
                        'image': 'forest.jpg'
                    }
                ]
            },
        ]
    }
},
methods: {
    handleRotate: function(answer) {
        if(!this.isRotated) {
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
        if(this.questionsCounter >= this.questions.length - 1) {
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
        if(this.questionsCounter < 1) {
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
},
});