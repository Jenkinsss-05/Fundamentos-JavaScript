document.addEventListener('DOMContentLoaded', function () {
  var panoramaImg = document.getElementById('panorama-image');
  var leftButton = document.getElementById('left-button');
  var rightButton = document.getElementById('right-button');
  var currentRotation = 0;

  leftButton.addEventListener('click', function () {
      currentRotation += 45;
      panoramaImg.style.transform = 'rotateY(' + currentRotation + 'deg)';
  });

  rightButton.addEventListener('click', function () {
      currentRotation -= 45;
      panoramaImg.style.transform = 'rotateY(' + currentRotation + 'deg)';
  });
});
