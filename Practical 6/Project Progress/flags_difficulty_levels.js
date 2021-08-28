// ================== Container: Page Banner ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_banner_container',
    data: {
        heading: 'Flags Challenge Difficulty',
  }
});


// ================== Container: Difficulty Level Button ====================================

// Custom Component: Difficulty Level
Vue.component("difficulty-level-component", {
  // Define props
  props: ['difficulty_level'],

  // Define template
  template:
    "<div>" +
      "<button v-on:click=\"load_flags_challenge_page(difficulty_level)\" style=\"width:50vw; height:8vh;\">" +
      "<p>" +
        "{{difficulty_level}}" +
      "</p>" +
      "</button>" +
    "</div>",

  // Define methods
  methods: {
    load_flags_challenge_page: function (difficulty_level) {
      // Test that the specific button is clicked
      console.log('Clicked on button: ' + difficulty_level);

      // Save the name of the button to the local storage, to be retrieved in the Flags Challenge page
      localStorage.setItem("difficulty_level", difficulty_level);

      // Open the Flags Challenge page
      window.location.href = "flags_challenge.html";
    }
  }
})

//Vue object: Difficulty Levels Container
var difficulty_level = new Vue({
	el: "#difficulty_levels_container",
  data:{
      difficulty_levels: [
          { level: 'Beginner' },
          { level: 'Novice' },
          { level: 'Medium' },
          { level: 'Advanced' },
          { level: 'Legendary' },
		],
	}
})



/*============================== Add Responsiveness Features =============================*/

// When page is scrolled, nav bar sticks
window.onscroll = function () { navStick() };

// Get the nav bar
var nav = document.getElementById("nav");

// Get the offset position of the nav bar
var sticky = nav.offsetTop;

// Add sticky to nav bar when user reaches scroll position. Remove sticky when user leaves scroll position
function navStick() {
if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
}
else {
    nav.classList.remove("sticky");
    }
}

//Add class to nav links that causes them to drop down from right
function resizeNav() {
    if (nav.className == "nav") {
        nav.className += " responsive";
    }
    else {
        nav.className = "nav";
    }
}