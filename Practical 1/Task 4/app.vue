new Vue({
    el: "#app",
    data: {
        todos: [
            { text: "SIT120 - Practical 1", done: true },
            { text: "SIT120 - Assignment 1 (Draft)", done: false },
            { text: "SIT120 - Practical 2", done: false },
            { text: "SIT120 - Assignment 1 (Improved)", done: false },
            { text: "SIT120 - Assignment 2", done: false },
        ]
    },
    methods: {
        toggle: function (todo) {
            todo.done = !todo.done
        }
    }
})