document.addEventListener('DOMContentLoaded', function() {
  let code = document.getElementById('code');
  let form = document.getElementById('form');
	chrome.storage.sync.get(stored => {
		code.value = stored.content
	})
	form.addEventListener('submit', function(e){
		e.preventDefault();
		let value = e.target.children.code.value
		console.log(code)
	})
}, false);
