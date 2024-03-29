//VARIABLES
var panorama, viewer, container, infospot;

container = document.querySelector('#container_principal');

//FOTO PANORAMICA
panorama = new PANOLENS.ImagePanorama('img/panoramica.png.jpeg');

//  primer infospot
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(0, 0, -500);
infospot1.addHoverText('Descripción del primer infospot', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Avistamientos de familia de osos perezosos</div>';
panorama.add(infospot1);

//  segundo infospot
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(1000, -100, 1000);
infospot2.addHoverText('Descripción del segundo infospot', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Residencia del dueño</div>';
panorama.add(infospot2);

// tercer infospot
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(-430, 50, -1000);
infospot3.addHoverText('Descripción del tercer infospot', -60);
infospot3.element.innerHTML = `
    <div class="" style="">
     '<div style="background-color: rgba(69, 148, 208, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Salida al terminar el recorrido, 200 mts del local, sobre carretera</div>';
    </div>
`;
panorama.add(infospot3);

//  cuarto infospot
var infospot4 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
infospot4.position.set(-4500, -650, -3500);
infospot4.addHoverText('Descripción del cuarto infospot', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(69, 148, 208, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Rótulo de los tours en cuadraciclo</div>';
panorama.add(infospot4);

//  quinto infospot
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(265, 30, 800);
infospot5.addHoverText('Descripción del quinto infospot', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(127, 17, 224, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Garaje de cuadraciclos</div>';
panorama.add(infospot5);


//  sexto infospot
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(1, 1, 940);
infospot6.addHoverText('Descripción del sexto infospot', -60);
infospot6.element.innerHTML = '<div style="background-color: rgba(127, 17, 224, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Taller y lugar de mantenimiento</div>';
panorama.add(infospot6);


// séptimo infospot
var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(-500, 100, 800); // Nueva posición (x, y, z)
infospot7.addHoverText('Descripción del séptimo infospot', -60);
infospot7.element.innerHTML = '<div style="background-color: rgba(255, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Rótulo</div>';
panorama.add(infospot7);


viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);
