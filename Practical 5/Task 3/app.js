// ================== Container: Page Title ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_title',
    data: {
        pageTitle: 'Task 3 - Handling User Inputs',
  }

});



// ================== Container: Convert Decimal to Binary ===================================

var convert_decimal_to_binary_container = new Vue({
  el: '#convert_decimal_to_binary_container',
  data: {
    binary: '',
    decimal: '',
  },
  methods: {
    convert_decimal_to_binary: function () {

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



// ================== Container: Score Tracker Container ===================================

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

    // Increment the Score of Player 1
    player1_increment_score: function () {

      // If the game is stil ongoing
      if (!this.isGameOver) {

        this.player1_score++;
        this.gameStatus = 'Game is in Progress'

        // If Player 1 wins
        if (this.player1_score >= WINNING_SCORE) {
          this.gameStatus = 'Player 1 Victory!'
          this.isGameOver = true;
          this.player1_score = WINNING_SCORE;
        }
      }

    },

    // Increment the Score of Player 2
    player2_increment_score: function () {

      // If the game is stil ongoing
      if (!this.isGameOver) {

        this.player2_score++;
        this.gameStatus = 'Game is in Progress'

        // If Player 2 wins
        if (this.player2_score >= WINNING_SCORE) {
          this.gameStatus = 'Player 2 Victory!'
          this.isGameOver = true;
          this.player2_score = WINNING_SCORE;
        }
      }
    },

    // Restart the Game
    restart_game: function () {
      this.isGameOver = false;
      this.player1_score = 0;
      this.player2_score = 0;
      this.gameStatus = 'Game has been restarted'
    }
  }
})
