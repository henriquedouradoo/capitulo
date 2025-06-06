function exibirVersiculo(data) {
    var infoVersiculo = document.getElementById('versiculoTexto');
    var indiceAleatorio = Math.floor(Math.random() * data.length);

    for (let i = 0; i < data.length; i++) {
        if (i === indiceAleatorio) {
            infoVersiculo.innerHTML = `
                <h3>${data[i].versiculo}</h3>
                <h4>${data[i].localizacao}</h4>
            `;
            break;
        }
    }
}

fetch('../data/versiculos.json')
.then(response => response.json())
.then(data => {
    // Exibe um versículo imediatamente
    exibirVersiculo(data);

    // Depois atualiza a cada 10 segundos (10000 milissegundos)
    setInterval(() => {
        exibirVersiculo(data);
    }, 10000);
})
.catch(error => {
    console.error('Erro ao carregar o JSON:', error);
});
