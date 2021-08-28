var pageTitle = new Vue({
    el: "#page_title",
    data: {
        pageTitle: 'Task 1',
    }
})

var form = new Vue({
    el: "#userForm",
    data: {
        inputedUsername: '',
        inputedPassword: '',
        inputedEmail: '',
    },

    methods: {
        checkInput: function () {
            var str = ''
            if (this.inputedUsername) {
                str = str + "Username: " + this.inputedUsername + '\n';
            }

            if (this.inputedPassword) {
                str = str + "Password: " + this.inputedPassword + '\n';
            }

            if (this.inputedEmail) {
                str = str + "Email: " + this.inputedEmail;
            }

            if (this.inputedUsername === '' || this.inputedPassword === '' || this.inputedEmail === '' ) {
                alert("Please input in all the fields");
            }
            else {
                alert(str);
            }
        }
    }
})