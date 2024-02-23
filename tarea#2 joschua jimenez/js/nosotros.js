document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
  
    cards.forEach(card => {
      card.addEventListener('click', function () {
        const imgSrc = this.querySelector('img').src;
        lightboxContent.src = imgSrc;
        lightbox.style.display = 'block';
      });
    });
  
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function () {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', function (event) {
      if (event.target === this) {
        lightbox.style.display = 'none';
      }
    });
  });

  //BOTONES PARA PASAR LAS IMAGENES CON LAS FLECHAS DEL TECLADO

  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
  
    let currentIndex = 0;
    let images = [];
  
    cards.forEach((card, index) => {
      card.addEventListener('click', function () {
        currentIndex = index;
        const imgSrc = this.querySelector('img').src;
        lightboxContent.src = imgSrc;
        lightbox.style.display = 'block';
      });
      images.push(card.querySelector('img').src);
    });
  
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function () {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', function (event) {
      if (event.target === this || event.target === prevBtn || event.target === nextBtn) {
        lightbox.style.display = 'none';
      }
    });
  
    function showImage(index) {
      if (index < 0) {
        index = images.length - 1;
      } else if (index >= images.length) {
        index = 0;
      }
      lightboxContent.src = images[index];
      currentIndex = index;
    }
  
    prevBtn.addEventListener('click', function () {
      showImage(currentIndex - 1);
    });
  
    nextBtn.addEventListener('click', function () {
      showImage(currentIndex + 1);
    });
  
    document.addEventListener('keydown', function (e) {
      if (lightbox.style.display === 'block') {
        if (e.keyCode === 37) {
          // Left arrow key
          showImage(currentIndex - 1);
        } else if (e.keyCode === 39) {
          // Right arrow key
          showImage(currentIndex + 1);
        }
      }
    });
  });
  


  document.addEventListener('DOMContentLoaded', function () {
    const inicioBtn = document.getElementById('inicio-btn');
  
    inicioBtn.addEventListener('click', function (event) {
      window.location.href = this.href; 
    });
  });
  