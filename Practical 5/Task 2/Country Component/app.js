// ================== Container: Page Title ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_title',
    data: {
        pageTitle: 'Task 2 - Countries',
  }
});



// ================== Container: Flag Image-Country Name ====================================

// Custom Component: Flag Image-Country Name Pair
Vue.component("country-component", {
  // Declare props
  props: ['flag_image', 'country_name'],

  // Define template
  template:
    "<span v-on:click=\"greet(country_name)\">" +
    "<img v-bind:src='flag_image' style=\"width:200px; height:130px;\">" +
    "<h2>{{country_name}}</h2>" +
    "</span>",
})

//Vue object: Countries Container
var countries_container = new Vue({
	el: "#countries_container",
  data:{
		countries: [
      {name:'Afghanistan', image_src: 'Assets/Flag_Images/Afghanistan.png'},
      {name:'Albania', image_src: "Assets/Flag_Images/Albania.png"},
      {name:'Algeria', image_src: "Assets/Flag_Images/Algeria.png"},
      {name:'Andorra', image_src: "Assets/Flag_Images/Andorra.png"},
      {name:'Angola', image_src: "Assets/Flag_Images/Angola.png" },
      {name:'Antigua and Barbuda', image_src: "Assets/Flag_Images/Antigua and Barbuda.png"},
      {name:'Argentina', image_src: "Assets/Flag_Images/Argentina.png"},
      {name:'Armenia', image_src: "Assets/Flag_Images/Armenia.png"},
      {name:'Australia', image_src: "Assets/Flag_Images/Angola.png" },
      {name:'Austria', image_src: "Assets/Flag_Images/Austria.png"},
      {name:'Azerbaijan', image_src: "Assets/Flag_Images/Azerbaijan.png"},
      {name:'Bahamas', image_src: "Assets/Flag_Images/Bahamas.png"},
      {name:'Bahrain', image_src: "Assets/Flag_Images/Bahrain.png"},
      {name:'Bangladesh', image_src: 'Assets/Flag_Images/Bangladesh.png'},
      {name:'Barbados', image_src: "Assets/Flag_Images/Barbados.png"},
      {name:'Belarus', image_src: "Assets/Flag_Images/Belarus.png"},
      {name:'Belgium', image_src: "Assets/Flag_Images/Belgium.png"},
      {name:'Belize', image_src: "Assets/Flag_Images/Belize.png" },
      {name:'Benin', image_src: "Assets/Flag_Images/Benin.png"},
      {name:'Bhutan', image_src: "Assets/Flag_Images/Bhutan.png"},
      {name:'Bolivia', image_src: "Assets/Flag_Images/Bolivia.png"},
      {name:'Bosnia and Herzegovina', image_src: "Assets/Flag_Images/Bosnia and Herzegovina.png" },
      {name:'Botswana', image_src: "Assets/Flag_Images/Botswana.png"},
      {name:'Brazil', image_src: "Assets/Flag_Images/Brazil.png"},
      {name:'Brunei', image_src: "Assets/Flag_Images/Brunei.png"},
      {name:'Bulgaria', image_src: "Assets/Flag_Images/Bulgaria.png"},
      {name:'Burkina Faso', image_src: 'Assets/Flag_Images/Burkina Faso.png'},
      {name:'Burundi', image_src: "Assets/Flag_Images/Burundi.png"},
      {name:'Cambodia', image_src: "Assets/Flag_Images/Cambodia.png"},
      {name: 'Cameroon', image_src: "Assets/Flag_Images/Cameroon.png" },
      {name:'Canada', image_src: 'Assets/Flag_Images/Canada.png'},
      {name:'Cape Verde', image_src: "Assets/Flag_Images/Cape Verde.png"},
      {name:'Central African Republic', image_src: "Assets/Flag_Images/Central African Republic.png"},
      { name: 'Chad', image_src: "Assets/Flag_Images/Chad.png" },
      {name:'Chile', image_src: 'Assets/Flag_Images/Chile.png'},
      {name:'China', image_src: "Assets/Flag_Images/China.png"},
      {name:'Colombia', image_src: "Assets/Flag_Images/Colombia.png"},
      {name: 'Comoros', image_src: "Assets/Flag_Images/Comoros.png" },
      {name:'Cook Islands', image_src: 'Assets/Flag_Images/Cook Islands.png'},
      {name:'Costa Rica', image_src: "Assets/Flag_Images/Costa Rica.png"},
      {name:'Croatia', image_src: "Assets/Flag_Images/Croatia.png"},
      { name: 'Cuba', image_src: "Assets/Flag_Images/Cuba.png" },
      {name: 'Chad', image_src: "Assets/Flag_Images/Chad.png" },
      {name:'Chile', image_src: 'Assets/Flag_Images/Chile.png'},
      {name:'China', image_src: "Assets/Flag_Images/China.png"},
      {name:'Colombia', image_src: "Assets/Flag_Images/Colombia.png"},
      {name: 'Comoros', image_src: "Assets/Flag_Images/Comoros.png" },
      {name:'Croatia', image_src: "Assets/Flag_Images/Croatia.png"},
      { name: 'Cuba', image_src: "Assets/Flag_Images/Cuba.png" },
      {name: 'Cyprus', image_src: "Assets/Flag_Images/Cyprus.png" },
      {name:'Czechia', image_src: 'Assets/Flag_Images/Czechia.png'},
      {name:'Denmark', image_src: "Assets/Flag_Images/Denmark.png"},
      {name:'Djibouti', image_src: "Assets/Flag_Images/Djibouti.png"},
      {name: 'Dominica', image_src: "Assets/Flag_Images/Dominica.png" },
      {name:'DR Congo', image_src: "Assets/Flag_Images/DR Congo.png"},
      { name: 'Ecuador', image_src: "Assets/Flag_Images/Ecuador.png" },
      {name: 'Egypt', image_src: "Assets/Flag_Images/Egypt.png" },
      {name:'El Salvador', image_src: 'Assets/Flag_Images/El Salvador.png'},
      {name:'England', image_src: "Assets/Flag_Images/England.png"},
      {name:'Equatorial Guinea', image_src: "Assets/Flag_Images/Colombia.png"},
      {name: 'Eritrea', image_src: "Assets/Flag_Images/Eritrea.png" },
      {name:'Estonia', image_src: "Assets/Flag_Images/Estonia.png"},
      { name: 'Ethiopia', image_src: "Assets/Flag_Images/Ethiopia.png" },
      {name: 'Fiji', image_src: "Assets/Flag_Images/Fiji.png" },
      {name:'Finland', image_src: 'Assets/Flag_Images/Finland.png'},
      {name:'France', image_src: "Assets/Flag_Images/France.png"},
      {name:'Gabon', image_src: "Assets/Flag_Images/Gabon.png"},
      {name: 'Gambia', image_src: "Assets/Flag_Images/Gambia.png" },
      {name:'Georgia', image_src: "Assets/Flag_Images/Georgia.png"},
      { name: 'Germany', image_src: "Assets/Flag_Images/Germany.png" },
      {name: 'Ghana', image_src: "Assets/Flag_Images/Ghana.png" },
      {name:'Greece', image_src: 'Assets/Flag_Images/Greece.png'},
      {name:'Grenada', image_src: "Assets/Flag_Images/Grenada.png"},
      {name:'Guatemala', image_src: "Assets/Flag_Images/Guatemala.png"},
      {name: 'Guinea', image_src: "Assets/Flag_Images/Guinea.png" },
      {name:'Guinea-Bissau', image_src: "Assets/Flag_Images/Guinea-Bissau.png"},
      {name: 'Guyana', image_src: "Assets/Flag_Images/Guyana.png" },
      {name: 'Haiti', image_src: "Assets/Flag_Images/Haiti.png" },
      {name:'Honduras', image_src: 'Assets/Flag_Images/Honduras.png'},
      {name:'Hong Kong', image_src: "Assets/Flag_Images/Hong Kong.png"},
      {name:'Hungary', image_src: "Assets/Flag_Images/Hungary.png"},
      {name: 'Iceland', image_src: "Assets/Flag_Images/Iceland.png" },
      {name:'India', image_src: "Assets/Flag_Images/India.png"},
      { name:'Indonesia', image_src: "Assets/Flag_Images/Indonesia.png" },
      {name: 'Iran', image_src: "Assets/Flag_Images/Iran.png" },
      {name:'Iraq', image_src: 'Assets/Flag_Images/Iraq.png'},
      {name:'Ireland', image_src: "Assets/Flag_Images/Ireland.png"},
      {name:'Israel', image_src: "Assets/Flag_Images/Israel.png"},
      {name: 'Italy', image_src: "Assets/Flag_Images/Italy.png" },
      {name:'Ivory Coast', image_src: "Assets/Flag_Images/Ivory Coast.png"},
      { name: 'Jamaica', image_src: "Assets/Flag_Images/Jamaica.png" },
      {name: 'Japan', image_src: "Assets/Flag_Images/Japan.png" },
      {name:'Jordan', image_src: 'Assets/Flag_Images/Jordan.png'},
      {name:'Kazakhstan', image_src: "Assets/Flag_Images/Kazakhstan.png"},
      {name:'Kenya', image_src: "Assets/Flag_Images/Kenya.png"},
      {name: 'Montenegro', image_src: "Assets/Flag_Images/Montenegro.png" },
      {name:'Namibia', image_src: "Assets/Flag_Images/Namibia.png"},
      {name:'Nauru', image_src: "Assets/Flag_Images/Nauru.png"},
      {name:'Nepal', image_src: "Assets/Flag_Images/Nepal.png"},
      {name: 'Netherlands', image_src: "Assets/Flag_Images/Netherlands.png" },
      { name: 'New Zealand', image_src: "Assets/Flag_Images/New Zealand.png" },
      {name:'Nicaragua', image_src: "Assets/Flag_Images/Nicaragua.png"},
      {name:'Niger', image_src: "Assets/Flag_Images/Niger.png"},
      {name: 'Nigeria', image_src: "Assets/Flag_Images/Nigeria.png" },
      {name:'Norway', image_src: "Assets/Flag_Images/Norway.png"},
      {name:'Oman', image_src: "Assets/Flag_Images/Oman.png"},
      {name:'Pakistan', image_src: "Assets/Flag_Images/Pakistan.png"},
      {name: 'Palau', image_src: "Assets/Flag_Images/Palau.png" },
      { name: 'Panama', image_src: "Assets/Flag_Images/Panama.png" },
      {name:'Papua New Guinea', image_src: "Assets/Flag_Images/Papua New Guinea.png"},
		],
	}
})