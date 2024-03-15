document.getElementById('ver').addEventListener('click', function() {
    var modelo = document.getElementById('modelo').value;
    var version = document.getElementById('version').value;
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; 
    var imagenUrl = '';

    if (modelo === 'XR' && version === '400R') {
        imagenUrl = 'https://motos.espirituracer.com/archivos/2021/04/honda-xr-400-r-2004.jpg';
    } else if (modelo === 'CBR' && version === '600RR') {
        imagenUrl = 'https://www.totalmotorcycle.com/wp-content/uploads/2018/09/2019-Honda-CBR600RR1.jpg';
    } else if (modelo === 'CRF' && version === '450L') {
        imagenUrl = 'https://farm2.staticflickr.com/1725/42301937812_e090efc304_h.jpg';
    }

    if (imagenUrl !== '') {
        var img = document.createElement('img');
        img.src = imagenUrl;
        img.className = 'img-thumbnail m-2';
        resultadoDiv.appendChild(img);
        resultadoDiv.style.display = 'block';
    }
});

document.getElementById('calcular').addEventListener('click', function() {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; 

    var imgCalcular = document.createElement('img');
    
    imgCalcular.src = 'img/Captura de pantalla 2024-03-13 175018.png'; 
   
    imgCalcular.className = 'img-thumbnail m-2';
    resultadoDiv.appendChild(imgCalcular);
    resultadoDiv.style.display = 'block';
});