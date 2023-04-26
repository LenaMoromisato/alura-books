async function buscaEndereco() {
    try {
    var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/');
    var consultaCEPConvertida = await consultaCEP.json();

    if(consultaCEPConvertida.erro) {
        throw Error('CEP não existente!');
    }
    console.log(consultaCEPConvertida);
    } catch (erro) {
        console.log(erro);
    }
}

buscaEndereco();