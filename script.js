let mapaInicializado = false;

function abrirModal() {
    const caixa = document.querySelector('.caixa-modal'); 
    const mascara = document.querySelector('.caixa-modal .mascara-modal'); 
    caixa.style.display = 'flex';
    mascara.style.visibility = 'visible';

    if (!mapaInicializado) {
        initMap();
        mapaInicializado = true;
    }
}

function esconderModal() {
    const caixa = document.querySelector('.caixa-modal'); 
    const mascara = document.querySelector('.caixa-modal .mascara-modal'); 
    caixa.style.display = 'none'; 
    mascara.style.visibility = 'hidden'; 
}

function initMap() { 
    const uninove = { lat: -23.529497805796957, lng: -46.670847717745275 };
    const map = new google.maps.Map(document.getElementById("map"), { 
        zoom: 15, 
        center: uninove,
    });
    const marker = new google.maps.Marker({ 
        position: uninove, 
        map: map, 
        title: "UNINOVE - Campus Memorial", 
    }); 
}
