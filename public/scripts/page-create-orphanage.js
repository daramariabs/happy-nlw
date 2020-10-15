//create map
const map = L.map('mapid').setView([-10.1931962,-48.3423408], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon ({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //inserindo dados de latitude e longitude
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker) //verifica se tem algo no marker, se houver alguma coisa será removida

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//adicionar o campo de fotos
function addPhotoField(){
    console.log("está adicionando")

    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    //pegar o container para duplicar a .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo estpa vazio, se sim não adicionar ao container de images
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //adicionar o clone ao container de #image
    container.appendChild(newFieldContainer)
}

//remover container

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}