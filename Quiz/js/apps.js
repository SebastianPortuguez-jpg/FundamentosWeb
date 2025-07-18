var panorama, viewer, container, infospot;

container = document.querySelector('#container_principal');

panorama = new PANOLENS.ImagePanorama('images/consultorio.jpg');


// Infospot 1
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(-265, -37, 500);
infospot1.addHoverText('Nuestro consultorio cuenta con el equipo médico de última generación y de alta calidad, con tecnología a la altura de sus necesidades. Comprendemos poblaciones jóvenes y adultas, tratando distintos padecimientos y situaciones, solucionando sus problemas dentales del día a día.', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(156, 113, 255, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Nuestro consultorio cuenta con el equipo médico de última generación y de alta calidad, con tecnología a la altura de sus necesidades. Comprendemos poblaciones jóvenes y adultas, tratando distintos padecimientos y situaciones, solucionando sus problemas dentales del día a día.</div>';
panorama.add(infospot1);

// Infospot 2
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(-500, -72, -308);
infospot2.addHoverText('Puede encontrarnos en redes sociales o bien visitar nuestro consultorio en San Pablo de Heredia, contiguo al Taller S y S.', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(156, 113, 255, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Puede encontrarnos en redes sociales o bien visitar nuestro consultorio en San Pablo de Heredia, contiguo al Taller S y S.</div>';
panorama.add(infospot2);

// Infospot 3 - Video
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(500, -23, -484);
infospot3.addHoverText('Al visitar nuestro consultorio, puede encontrar personal calificado para atenderle y tratar sus necesidades odontológicas con gran entusiasmo', -60);
infospot3.element.innerHTML = `
    <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/X9J2ea8iNnM?si=TYcU_pA8IMEtyNnt"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
`;
panorama.add(infospot3);

// Infospot 4
var infospot4 = new PANOLENS.Infospot(50, 'images/info.png');
infospot4.position.set(500, -112, 228);
infospot4.addHoverText('Nuestros servicios como cirugías, limpiezas dentales, tratamientos de nervios, extracción y blanqueamiento ayudan a miles de personas mes a mes y estamos felices de que usted desee unirse a nuestros clientes.', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(156, 113, 255, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Nuestros servicios como cirugías, limpiezas dentales, tratamientos de nervios, extracción y blanqueamiento ayudan a miles de personas mes a mes y estamos felices de que usted desee unirse a nuestros clientes.</div>';
panorama.add(infospot4);

// Infospot 5
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(-500, 33, -263);
infospot5.addHoverText('Consulte en nuestros perfiles de redes sociales, contacto vía WhatsApp o correo electrónico para pedir su cita en cualquier momento, nuestros agentes le atenderán con gusto y agendarán una cita tan pronto sea posible.', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(156, 113, 255, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Consulte en nuestros perfiles de redes sociales, contacto vía WhatsApp o correo electrónico para pedir su cita en cualquier momento, nuestros agentes le atenderán con gusto y agendarán una cita tan pronto sea posible.</div>';
panorama.add(infospot5);

// Infospot 6 - Audio
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(298, -161, 500);
infospot6.addHoverText('Audio MP3 de introducción', -60);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot6);

//Infospot 7 - PDF

var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(300, 0, -1000);
infospot7.addHoverText("Haz clic para abrir el PDF", -60);
infospot7.addEventListener('click', function () {
    window.open("documents/archivo.pdf", "_blank");
});
panorama.add(infospot7);


// Viewer
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);
