(function() {

  ee.addListener('foo', listener);

  function listener() {
    console.log('The bar event has been emitted.');
  }

  function triggerEvent() {
    ee.emitEvent('foo');
  }

  var el = document.getElementsByTagName('button');
  el[0].addEventListener('click', triggerEvent, false);

})();
