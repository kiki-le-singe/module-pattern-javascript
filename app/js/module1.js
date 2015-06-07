// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var myNamespace = (function() {

  var myPrivateVar;

  // A private counter variable
  myPrivateVar = 0;

  // A private function which logs any arguments
  function myPrivateMethod(foo) {
    console.log(foo);
  }

  return {

    // A public variable
    myPublicVar: 'foo',

    // A public function utilizing privates
    myPublicFunction: function(bar) {

      // Increment our private counter
      myPrivateVar++;

      // Call our private method using bar
      myPrivateMethod(bar);

    }
  };

})();
