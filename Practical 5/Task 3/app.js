// ================== Container: Page Title ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_title',
    data: {
        pageTitle: 'Task 3 - Handling User Inputs',
  }

});

var convert_decimal_to_binary_container = new Vue({
  el: '#convert_decimal_to_binary_container',
  data: {
    binary: '',
    decimal: '',
  },
  methods: {
    conver_decimal_to_binary: function () {

      var decimal_int = parseInt(this.decimal)

      if (decimal_int >= 0) {
        this.binary = decimal_int.toString(2);
      }
      else {
        this.binary = (~decimal_int).toString(2);
      }
    }
  }
})


const WINNING_SCORE = 5;

var score_tracker_container = new Vue({
  el: '#score_tracker_container',
  data: {
    player1_score: 0,
    player2_score: 0,
    gameStatus: 'Game has not started',
    isGameOver: false,
  },
  methods: {
    player1_increment_score: function () {

      if (!this.isGameOver) {

        this.player1_score++;
        this.gameStatus = 'Game is in Progress'

        if (this.player1_score >= WINNING_SCORE) {
          this.gameStatus = 'Player 1 Victory!'
          this.isGameOver = true;
          this.player1_score = WINNING_SCORE;
        }
      }

    },

    player2_increment_score: function () {

      if (!this.isGameOver) {

        this.player2_score++;
        this.gameStatus = 'Game is in Progress'

        if (this.player2_score >= WINNING_SCORE) {
          this.gameStatus = 'Player 2 Victory!'
          this.isGameOver = true;
          this.player2_score = WINNING_SCORE;
        }
      }
    },

    restart_game: function () {
      this.isGameOver = false;
      this.player1_score = 0;
      this.player2_score = 0;
      this.gameStatus = 'Game has been restarted'
    }
  }
})