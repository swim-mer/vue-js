// Create new app
var app = new Vue({
  // connects to div id 'vue-app'
  el: '#vue-app',
  data: {
    // given to 'message' variable in HTML
    message: 'displayed text'
  }
})
var hover = new Vue({
  el: '#hover-app',
  data: {
    message: 'hovering text'
  }
})

