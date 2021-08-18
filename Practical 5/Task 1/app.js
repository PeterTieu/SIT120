// ================== Container: Page Title ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_title',
    data: {
        pageTitle: 'Composing with Components',
  }

});



// ================== Container: List Item ====================================

// Custom Component: List Item
Vue.component("list-item", {
	props: ['list_item_prop'],
	template: "<li>{{list_item_prop}}</li>",
})


//Vue object: List Container
var anExample = new Vue({
	el: "#list_container",
	data:{
		message:"This is a test message. It should not be rendered",
		list: [
			{key:1, description: "Learn Vue concepts in-depth"},
			{key:2, description: "Practice programming with Vue"},
      {key:3, description: "Implement Vue framework in the Project" },
      {key:4, description: "Run Project in Vue" },
      {key:5, description: "Upload Project to GitHub" },
      {key:6, description: "Write reflection in Portfolio" },
		],

	}
})



// ================== Container: Word Scrambler ===============================

// Custom Component: Word Unscramble Button
Vue.component("word-unscramble-button", {
  props: ['original_word'],
  template: "<div>" +
    "<button v-on:click='scrambled_word=original_word.toUpperCase()'> {{scrambled_word}} </button>" + "</div>",

  data: function () {
    return {
      scrambled_word: shuffle(this.original_word),
    }
  }
})


//Vue object: List Container
var anExample = new Vue({
	el: "#word_scrambler_container",
})


//Function to scramble a string
function shuffle(str) {
  var newArr = [];
  var neww = '';
  var text = str.replace(/[\r\n]/g, '').split(' ');

  text.map(function(v) {
    v.split('').map(function() {
      var hash = Math.floor(Math.random() * v.length);
      neww += v[hash];
      v = v.replace(v.charAt(hash), '');
    });
    newArr.push(neww);
    neww = '';
  });
  var x = newArr.map(v => v.split('').join(' ')).join('\n');
  return str.value = x.split('').map(v => v.toUpperCase()).join('');
}