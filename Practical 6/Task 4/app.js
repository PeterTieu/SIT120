var firstName;
var username;
var age;

var form = new Vue({
    el: "#modifierForm",
    data: {
        inputtedName: '',
        inputtedUsername: '',
        inputtedAge: '',
    },

    methods: {
        storeInputs: function () {
            event.preventDefault();

            // Store the inputted data
            firstName = this.inputtedName;
            username = this.inputtedUsername;
            age = this.inputtedAge;
        }
    }
})