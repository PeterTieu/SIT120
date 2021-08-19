// ================== Container: Page Title ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_title',
    data: {
        pageTitle: 'Task 2 - Difficulty Levels',
  }

});


// ================== Container: Flag Image-Country Name ====================================

// Custom Component: Difficulty Level
Vue.component("difficulty-level-component", {
  // Define props
  props: ['difficulty_level', 'button_color'],

  // Define template
  template:
    "<div>" +
    "<button v-on:click=\"load_flags_challenge_page(difficulty_level)\" style=\"width:350px; height:80px; background-color:'button_color'\">" +
    "{{difficulty_level}}" +
    "</button>" +
    "</div>",

  methods: {
    load_flags_challenge_page: function (difficulty_level) {
      console.log('Clicked on button: ' + difficulty_level);
      localStorage.setItem("difficulty_level", difficulty_level);
      // window.location.href = "results.html";
    }
  }
})

//Vue object: Countries Container
var difficulty_level = new Vue({
	el: "#difficulty_levels_container",
  data:{
		difficulty_levels: [
      {level:'Beginner', color: '#EF9595'},
      {level: 'Novice', color: '#EFD195'},
      {level:'Medium', color: '#97EF95'},
      {level:'Advanced', color: '#95B9EF'},
      {level:'Legendary', color: '#D895EF'},
		],
	}
})