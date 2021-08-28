var form = new Vue({
    el: "#page_title",
    data: {
      pageTitle: 'Task 3',
    }
})


var form = new Vue({
    el: "#dropdown_list",
    data: {
      selected: 'None',
      options: [
        { text: 'Feedback', value: 'A - Feedback' },
        { text: 'Careers', value: 'B - Careers' },
        { text: 'Technical', value: 'C - Technical' }
      ]
  },

  methods: {
    selectListener: function () {
      console.log(this.selected);
    }
  }
})