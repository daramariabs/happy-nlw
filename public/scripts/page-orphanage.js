//deixando o mapa estatico
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-10.1931962,-48.3423408], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon ({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
L.marker([-10.1931962,-48.3423408], {icon} )
.addTo(map)

/*Image gallery*/
function selectImage(event){
    const button = event.currentTarget //botão clicado

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container da imagem
    imageContainer.src = image.src
    
    //adicionar a classe .active para este botao
    button.classList.add('active')
}