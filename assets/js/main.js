const form = document.querySelector('#form'); //Serve para obter o formulário

form.addEventListener('submit', function (e) { //Captura o evento de submit do formulário
    e.preventDefault(); //Previne o modo padrão de envio do formulário
    const inputPeso = e.target.querySelector('#peso');  //Dado do input peso capturado
    const inputAltura = e.target.querySelector('#altura'); //Dado do input altura capturado
    
    const peso = Number(inputPeso.value); //Converte o input em number
    const altura = Number(inputAltura.value); //Converte o input em number

    if (!peso) {  //Se o input não for avaliado como verdadeiro, for um NaN, essa mensagem será executada
        setResultado('Peso inválido', false);
        return; //O return para a execução do código 
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return; //O return para a execução do código 
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});


function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivel =  ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc > 40) return nivel[5];
    
    if (imc >= 35) return nivel[4];
    
    if (imc >= 30) return nivel[3];
    
    if (imc >= 25) return nivel[2];
    
    if (imc >= 18.5) return nivel[1]; 
    
    if (imc < 18.5) return nivel[0];
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}
