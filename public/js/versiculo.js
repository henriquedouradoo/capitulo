fetch('../data/versiculos.json')
.then(response => response.json())
.then(data => {
    var infoVersiculo = document.getElementById('versiculoTexto');
    var indiceAleatorio = Math.floor(Math.random() * data.length)
    infoVersiculo.innerHTML = `
        <h3>${data[indiceAleatorio].versiculo}</h3>
        <h4>${data[indiceAleatorio].localizacao}</h4>
    `;
})
.catch(error => {
    console.error('Erro ao carregar o JSON:', error);
});