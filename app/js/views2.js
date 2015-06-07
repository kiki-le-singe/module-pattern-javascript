(function() {

  function listener() {
    console.log('The foo event has been emitted.');
    ee.emit('bar');
  }

  ee.addListener('foo', listener);

})();
