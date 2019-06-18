var barrages = document.getElementById();

barrages.addEventListener('DOMNodeInserted', function (e) {
  alert(e.target);
  window.postMessage({"test": 'new barrage!'}, '*');
});
