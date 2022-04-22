let url = ' https://significado.herokuapp.com/';

let inputTxt = document.querySelector('#container_inputtxt');
let btnTxt = document.querySelector('#container_btn');
let resultado = document.querySelector('#container_result');

btnTxt.addEventListener('click', () => {
  let palavra = inputTxt.value;
  if (palavra === '') {
    resultado.innerHTML = `<p id="container_significado">Escreva alguma palavra no campo de busca!! </p> `
  } else {
    fetch(`${url}${palavra}`)
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data)
        resultado.innerHTML =
          `<h3 id="container_palavra">${palavra}</h3>
        <p id="container_significado"><span>1º</span> ${data[0].meanings[0]}</p>
        <p id="container_significado"><span>2º</span> ${data[0].meanings[1]}</p>`
      }).catch(() => {
        resultado.innerHTML = `<p id="container_significado"><span>Não</span> foi possível encontrar essa palavra!! </p> `
      })

  }

})