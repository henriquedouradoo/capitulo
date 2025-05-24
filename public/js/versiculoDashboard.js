fetch('../data/versiculos.json')
.then(response => response.json())
.then(data => {
    var versiculoDashboard = document.getElementById('versiculo');
    var indiceAleatorio = Math.floor(Math.random() * data.length);
    console.log(data)
    versiculoDashboard.innerHTML = `
    <h3> "${data[indiceAleatorio].versiculo}"</h3>
    <h4>${data[indiceAleatorio].localizacao}</h4>`
})
.catch(error => {
    console.error('Erro ao carregar o JSON:', error);
});

 function logout() {
        sessionStorage.clear();
        localStorage.clear();
        window.location = "../index.html";
    }