var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello ',
    name: ""
  },
  methods: {
    greet: function (event) {
      this.name = "Vue!";
      multipl(5, 9)
    },
    clrearGreet: function (event) {
      this.name = "";
    }
  }
})


function multipl(a, b) {

  var c = a * b;
  console.log(c);
}
