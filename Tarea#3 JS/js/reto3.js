document.addEventListener("DOMContentLoaded", function() {
  const marcaSelect = document.getElementById('marcaSelect');

  marcaSelect.addEventListener('change', function() {
    const selectedURL = marcaSelect.value;
    window.location.href = selectedURL;
  });
});
