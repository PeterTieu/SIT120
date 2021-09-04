// Vue Instance - Page Title
var pageTitle = new Vue({
    el: "#page_title",
    data: {
        pageTitle: 'Tasks 1 and 2',
    }
})


// Component #1 (Local Registration)
var countryNameAndMap = {
    // Props:
        // Type: Objects
        // Transience: Static
    data: {
        countryName: '',
        countryMap: '',
    },
    props: ['country-name', 'country-map'],
    template: "<div>"
        + "<h1 style=\"text-decoration:underline\">{{countryName}}</h1>"
        + "<img v-bind:src='countryMap'>"
        + "</div>"
}


// Component #2 (Local Registration)
var countryInformation = {
    // Props:
        // Type: Objects
        // Transience: Dynamic
    props: {
        capitalcity: String,
        population: Number,
        landsize: Number,
    },
    template: "<div>" +
        "<h2 style=\"color:red\">Capital City:</h2> <h2>{{capitalcity}}</h2>" + "<br>" +
        "<h2 style=\"color:red\">Population:</h2> <h2>{{population}}</h2>" + "<br>" +
        "<h2 style=\"color:red\">Land Size:</h2> <h2>{{landsize}} million sq. kilometers</h2>" + "<br>" +
        "</div>"
}


// Component #3 (Global Registration)
Vue.component('country-link-buttons', {
    // Props:
    // Type: Array of Strings
    // Transience: Static
    props: ['wikipedia_link', 'national_website_link'],
    template: "<div>" +
        "<h2 style=\"color:red \">Links</h2>" +
        "<button style=\"color:blue\">Wikipedia Page: <a v-bind:href=wikipedia_link>Link</a></button>" +
        "<br>" +
         "<button style=\"color:blue\">National Website: <a v-bind:href=national_website_link>Link</a></button>" +
        "</div>"
});


// Vue Instance - Components
var app = new Vue({
    el: "#app",
    data: {
        capitalcity: 'Toronto',
        population: 37.5889,
        landsize: 9.985,
    },

    components: {
        'country-name-and-map': countryNameAndMap,
        'country-information': countryInformation,
    }
})