window.addEventListener('load', start);

function start() {
  activateInput();
}

function activateInput() {
  var quadrado = document.querySelector('#q');
  var triangulo = document.querySelector('#t');
  var circulo = document.querySelector('#c');

  quadrado.addEventListener('click', calculoQuadrado);
  triangulo.addEventListener('click', calculoTriangulo);
  circulo.addEventListener('click', calculoCirculo);
}

function calculoQuadrado() {
  formQuadrado();
  var button = document.querySelector('#button');
  function onlick(event) {
    var input1 = document.querySelector('#inputNumber1').value;
    var input2 = document.querySelector('#inputNumber2').value;

    var valorCorreto1 = parseInt(input1);
    var valorCorreto2 = parseInt(input2);

    var span = document.querySelector('#spanResultado');
    var resultado = valorCorreto1 * valorCorreto2;

    if (isNaN(resultado)) {
      span.textContent = '0';
    } else {
      span.textContent = resultado;
    }
  }
  button.addEventListener('click', onlick);
}

function calculoTriangulo() {
  formTriangulo();
  var button = document.querySelector('#button');
  function onlick(event) {
    var input1 = document.querySelector('#inputNumber1').value;
    var input2 = document.querySelector('#inputNumber2').value;

    var valorCorreto1 = parseInt(input1);
    var valorCorreto2 = parseInt(input2);

    var span = document.querySelector('#spanResultado');
    var resultado = (valorCorreto1 * valorCorreto2) / 2;

    if (isNaN(resultado)) {
      span.textContent = '0';
    } else {
      span.textContent = resultado;
    }
  }
  button.addEventListener('click', onlick);
}

function calculoCirculo() {
  formCirculo();
  var button = document.querySelector('#button');
  function onlick() {
    var input1 = document.querySelector('#inputNumber1').value;

    var span = document.querySelector('#spanResultado');
    var resultado = Math.PI * input1;

    span.textContent = resultado;
  }
  button.addEventListener('click', onlick);
}

function formQuadrado() {
  var formCalculo = document.querySelector('#formCalculo');
  formCalculo.innerHTML = '';
  formCalculo.classList.add('formEditado');

  var form = document.createElement('form');

  var p = document.createElement('p');
  p.textContent = 'Quadrado';

  /*
  Construcao das div de input de entrada
  */
  var divInput1 = document.createElement('div');
  var divInput2 = document.createElement('div');
  var labelBase = document.createElement('label');
  var labelAltura = document.createElement('label');

  labelBase.textContent = 'Base: ';
  labelBase.setAttribute('for', 'inputNumber1');
  labelAltura.textContent = 'Altura: ';
  labelAltura.setAttribute('for', 'inputNumber2');

  var inputBase = document.createElement('input');
  inputBase.setAttribute('type', 'number');
  inputBase.setAttribute('id', 'inputNumber1');
  inputBase.setAttribute('placeholder', 'Digite a Base');

  divInput1.classList.add('input1');

  var inputAltura = document.createElement('input');
  inputAltura.setAttribute('type', 'number');
  inputAltura.setAttribute('id', 'inputNumber2');
  inputAltura.setAttribute('placeholder', 'Digite a Altura');

  divInput2.classList.add('input2');
  /*
  Fim das div de input de entrada
  */

  // Criando o submit
  var inputSubmit = document.createElement('input');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('id', 'button');
  inputSubmit.setAttribute('value', 'Calcular');
  // Fim da criacao do submit

  // Div resultado
  var divResultado = document.createElement('div');
  var pResultado = document.createElement('p');
  var spanResultado = document.createElement('span');
  pResultado.textContent = 'Resultado: ';
  divResultado.setAttribute('id', 'resultado');
  spanResultado.setAttribute('id', 'spanResultado');
  // Fim div Resultado

  formCalculo.appendChild(p);
  formCalculo.appendChild(divInput1);
  formCalculo.appendChild(divInput2);
  formCalculo.appendChild(form);
  divInput1.appendChild(labelBase);
  divInput1.appendChild(inputBase);
  divInput2.appendChild(labelAltura);
  divInput2.appendChild(inputAltura);
  divResultado.appendChild(pResultado);
  pResultado.appendChild(spanResultado);

  form.appendChild(p);
  form.appendChild(divInput1);
  form.appendChild(divInput2);
  form.appendChild(inputSubmit);
  form.appendChild(divResultado);
}

function formTriangulo() {
  var formCalculo = document.querySelector('#formCalculo');
  formCalculo.innerHTML = '';
  formCalculo.classList.add('formEditado');

  var form = document.createElement('form');

  var p = document.createElement('p');
  p.textContent = 'Triângulo';

  /*
  Construcao das div de input de entrada
  */
  var divInput1 = document.createElement('div');
  var divInput2 = document.createElement('div');
  var labelBase = document.createElement('label');
  var labelAltura = document.createElement('label');

  labelBase.textContent = 'Base: ';
  labelBase.setAttribute('for', 'inputNumber1');
  labelAltura.textContent = 'Altura: ';
  labelAltura.setAttribute('for', 'inputNumber2');

  var inputBase = document.createElement('input');
  inputBase.setAttribute('type', 'number');
  inputBase.setAttribute('id', 'inputNumber1');
  inputBase.setAttribute('placeholder', 'Digite a Base');

  divInput1.classList.add('input1');

  var inputAltura = document.createElement('input');
  inputAltura.setAttribute('type', 'number');
  inputAltura.setAttribute('id', 'inputNumber2');
  inputAltura.setAttribute('placeholder', 'Digite a Altura');

  divInput2.classList.add('input2');
  /*
  Fim das div de input de entrada
  */

  // Criando o submit
  var inputSubmit = document.createElement('input');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('id', 'button');
  inputSubmit.setAttribute('value', 'Calcular');
  // Fim da criacao do submit

  // Div resultado
  var divResultado = document.createElement('div');
  var pResultado = document.createElement('p');
  var spanResultado = document.createElement('span');
  pResultado.textContent = 'Resultado: ';
  divResultado.setAttribute('id', 'resultado');
  spanResultado.setAttribute('id', 'spanResultado');
  // Fim div Resultado

  formCalculo.appendChild(p);
  formCalculo.appendChild(divInput1);
  formCalculo.appendChild(divInput2);
  formCalculo.appendChild(form);
  divInput1.appendChild(labelBase);
  divInput1.appendChild(inputBase);
  divInput2.appendChild(labelAltura);
  divInput2.appendChild(inputAltura);
  divResultado.appendChild(pResultado);
  pResultado.appendChild(spanResultado);

  form.appendChild(p);
  form.appendChild(divInput1);
  form.appendChild(divInput2);
  form.appendChild(inputSubmit);
  form.appendChild(divResultado);
}

function formCirculo() {
  var formCalculo = document.querySelector('#formCalculo');
  formCalculo.innerHTML = '';
  formCalculo.classList.add('formEditado');

  var form = document.createElement('form');

  var p = document.createElement('p');
  p.textContent = 'Circulo';

  /*
  Construcao das div de input de entrada
  */
  var divInput1 = document.createElement('div');
  var labelBase = document.createElement('label');

  labelBase.textContent = 'Raio: ';
  labelBase.setAttribute('for', 'inputNumber1');

  var inputBase = document.createElement('input');
  inputBase.setAttribute('type', 'number');
  inputBase.setAttribute('id', 'inputNumber1');
  inputBase.setAttribute('placeholder', 'Digite a Base');

  divInput1.classList.add('input1');

  /*
  Fim das div de input de entrada
  */

  // Criando o submit
  var inputSubmit = document.createElement('input');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('id', 'button');
  inputSubmit.setAttribute('value', 'Calcular');
  // Fim da criacao do submit

  // Div resultado
  var divResultado = document.createElement('div');
  var pResultado = document.createElement('p');
  var spanResultado = document.createElement('span');
  pResultado.textContent = 'Resultado: ';
  divResultado.setAttribute('id', 'resultado');
  spanResultado.setAttribute('id', 'spanResultado');
  // Fim div Resultado

  formCalculo.appendChild(p);
  formCalculo.appendChild(divInput1);

  formCalculo.appendChild(form);
  divInput1.appendChild(labelBase);
  divInput1.appendChild(inputBase);

  divResultado.appendChild(pResultado);
  pResultado.appendChild(spanResultado);

  form.appendChild(p);
  form.appendChild(divInput1);
  form.appendChild(inputSubmit);
  form.appendChild(divResultado);
}
