const editableText = document.getElementById('editable-text');

if (localStorage.getItem('savedText')) {
  editableText.textContent = localStorage.getItem('savedText');
}

editableText.addEventListener('input', function () {
  localStorage.setItem('savedText', this.textContent);
});

function googleSearch() {
  var text = document.getElementById("search").value;
  var cleanQuery = text.replace(" ", "+", text);
  var url = 'http://www.google.com/search?q=' + cleanQuery;
  window.location.href = url;
}