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
var disappear = new Vue({
  el: '#disappear-app',
  data: {
    // change value to false to disappear text
    // can be done in console with disappear.seen = false
    seen: true
  }
})
var loop = new Vue({
  el: '#loop-app',
  data: {
    list: [
      { text: 'one' },
      { text: 'two' },
      { text: 'three' }
      // append more objects with loop.list.push({text: 'text here'})
    ]
  }
})
