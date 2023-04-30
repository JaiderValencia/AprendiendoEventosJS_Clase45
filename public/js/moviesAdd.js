window.onload = function () {
    const input = document.getElementById('titulo')
    let estadoSecreto = 0
    let formTitulo = document.getElementById('titulo')
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', () => {
        if (titulo.style.color != 'red') {
            titulo.style.color = 'red'
        } else {
            titulo.style.color = 'black'
        }
    })

    formTitulo.addEventListener('keydown', (event) => {
        let palabra = 'secreto';

        if (palabra[estadoSecreto] != event.key) {
            if (event.key != 'Backspace') {
                alert('NO!!!')
            }
            estadoSecreto = 0
            input.value = null
            return console.log(estadoSecreto);
        }

        estadoSecreto = estadoSecreto + 1

        console.log(estadoSecreto);

        if (estadoSecreto == palabra.length) {
            alert("Secreto mágico")
        }
    })
}