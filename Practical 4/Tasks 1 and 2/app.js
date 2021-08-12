var app = new Vue({
    el: '#page_title',
    data: {
        pageTitle: 'Australian Landmarks',
    }
});

var app = new Vue({
    el: '#page_heading',
    data: {
        pageHeading: 'Explore Australia',
    }
});


var app = new Vue({
    el: '#time_and_date',
    data: {
        timeAndDate: 'Current AEST Time: ' + new Date(). toLocaleString(),
    }
});

var app = new Vue({
    el: '#link_component',
    data: {
        message: 'Check out ',
        websiteLink: 'https://www.australia.com/en'
    }
});

var app = new Vue({
    el: '#list_of_australian_landmarks_heading',
    data: {
        ListOfAustralianLandmarksHeading: 'List of Landmarks in Australia',
        message: 'Hover your mouse over each landmark name to reveal their picture'
    }
});

var app = new Vue({
    el: '#list_of_australian_landmarks_component',
    data: {

        ListOfAustralianLandmarksHeading: 'List of Landmarks in Australia',
        message: 'Hover your mouse over each landmark name to reveal their picture',
        landmarks: [
            {
                landmarkName: 'Great Barrier Reef',
                landmarkPicture: 'https://images.unsplash.com/photo-1600583696773-472aafd3dd6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80'
            },
            {
                landmarkName: 'Syney Opera House',
                landmarkPicture: 'https://images.unsplash.com/photo-1524820197278-540916411e20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80'
            },
            {
                landmarkName: 'Ayers Rock',
                landmarkPicture: 'https://images.unsplash.com/photo-1557214997-7eae7e0e7aaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80'
            },

            {
                landmarkName: 'Seven Apostles',
                landmarkPicture: 'https://images.unsplash.com/photo-1496482475496-a91f31e0386c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            },

            {
                landmarkName: 'Sydney Harbour Bridge',
                landmarkPicture: 'https://images.unsplash.com/photo-1589610833901-8e91851e2291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80'
            }
        ],
        pictureOfLandmark: 'https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    methods: {
        revealLandmark(landmark_picture_src) {
            this.pictureOfLandmark = landmark_picture_src;
        }
    }
})

var app = new Vue({
    el: '#hover_for_secret_message_text',
    data: {
        message: 'Hover your mouse over this text for a hidden message from Explore Australia',
        hiddenMessage: 'Congratulations! You have made it! Welcome to Australia!'
    }
});

var app = new Vue({
    el: '#rate_your_visit_component',
    data: {
        buttonText: 'Rate Your Visit in Australia out of 5',
        rating: 0,
        isMaxRatingReached: false,
        warningMessage: 'NOTE: Maximum allowable rating is 5',
        errorMessage: 'Oops! You cannot rate higher than 5! Try again.'
    },
    methods: {
        increaseRating: function () {
            this.rating++;
            this.isMaxRatingReached = false;

            if (this.rating > 5) {
                this.isMaxRatingReached = true;
                this.rating = 0;
            }
        }
    }
});

var app = new Vue({
    el: '#information_component',
    data: {
        informationHeading: 'Information',
        details: 'hello',
        information: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nam iste incidunt excepturi itaque at quod ipsam eligendi temporibus nisi optio necessitatibus assumenda minima dolorem magni veniam impedit, quaerat aspernatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nam iste incidunt excepturi itaque at quod ipsam eligendi temporibus nisi optio necessitatibus assumenda minima dolorem magni veniam impedit, quaerat aspernatur.'
    }
});