//Nome
const nome = document.getElementById('nome')
nome.addEventListener('keyup', gerarLogin);
//Sobrenome
const sobrenome = document.getElementById('sobrenome')
sobrenome.addEventListener('keyup', gerarLogin);
//Formulario
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', submeter);
//Endereco
const endereco = document.getElementById('endereco')
//Cep
const  cep = document.getElementById('cep');
cep.addEventListener('blur',pesquisarCep);
//Professor
const selectProf = document.getElementById('professor');
selectProf.addEventListener('blur', validarProfessor);
//Academia
const selectAcademia =  document.getElementById('academia');
selectAcademia.addEventListener('blur', validarAcademia);
//Tabela
const tabela = document.getElementById('tabela-dados');

// Função Pesquisar Cep
async function pesquisarCep() {
    
    const cepDigitado = cep.value;

    if (cepDigitado.length != 8){
        alert("Cep inválido")
    }
    else{
    const url = `http://viacep.com.br/ws/${cepDigitado}/json/`;
    const retornoUrl = await fetch(url);
    const endereco = await retornoUrl.json();
  
        if(endereco.erro == "true")
        {
            alert("Cep não encontrado")
            
            
        }
        else{
        document.getElementById('endereco').value = (endereco.logradouro);
        document.getElementById('complemento').value = (endereco.complemento);
        document.getElementById('bairro').value = (endereco.bairro);
        document.getElementById('cidade').value = (endereco.localidade);
        document.getElementById('estado').value = (endereco.uf);
        }

    }
    
}
    
function submeter(e){

    e.preventDefault();

        if(validarProfessor() == 0){
            alert("Selecione o professor");
        }
        else if (validarAcademia() == 0){

            alert("Selecione o academia");

        }
        else{

            tabela.classList.remove('d-none');
            preencherTabela();
            formulario.reset();
            nome.focus();

        }

}

// VALIDAR SOBRENOME 
function gerarLogin(){
    const nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    const primeiroNome = nome.trim().split(" ",1);
    const login = primeiroNome +"." + sobrenome.trim();
    document.getElementById('login').value = login.toLowerCase();
}

function validarProfessor(){

    const selecionado = selectProf.selectedIndex;

    return selecionado;

}

function validarAcademia(){
    
    const selecionado = selectAcademia.selectedIndex;
    return selecionado;

}

function preencherTabela(){

    document.getElementById('t-nome').innerHTML = nome.value;
    document.getElementById('t-sobrenome').innerHTML = sobrenome.value;
    document.getElementById('t-email').innerHTML = document.getElementById('email').value; 
    document.getElementById('t-login').innerHTML = document.getElementById('login').value;
    document.getElementById('t-senha').innerHTML = document.getElementById('senha').value;
    document.getElementById('t-cep').innerHTML = cep.value;
    document.getElementById('t-endereco').innerHTML = endereco.value;
    document.getElementById('t-complemento').innerHTML = document.getElementById('complemento').value;
    document.getElementById('t-bairro').innerHTML = document.getElementById('bairro').value;
    document.getElementById('t-cidade').innerHTML = document.getElementById('cidade').value;
    document.getElementById('t-estado').innerHTML = document.getElementById('estado').value;
    document.getElementById('t-github').innerHTML = document.getElementById('github').value;

    console.log(document.getElementById('academia').value)
    //Academia escolhida
    if(document.getElementById('academia').value == 1){
        document.getElementById('t-academia').innerHTML =".Net";
    }
    else{
        document.getElementById('t-academia').innerHTML = "Java";
    }
    
    //Professor escolhido
    if(document.getElementById('professor').value == 1){
        document.getElementById('t-professor').innerHTML ="Deivison Pasa";
    }
    else if(document.getElementById('professor').value == 2){
        document.getElementById('t-professor').innerHTML = "Alexandre Zamberlan";
    }
    else if (document.getElementById('professor').value == 3){
        document.getElementById('t-professor').innerHTML = "Ricardo Frohlich";
    }

    //Termos
    if(document.getElementById('termos').checked){
        document.getElementById('t-termos').innerHTML = "Aceito";
    }

    if(document.getElementById('info').checked){

        document.getElementById('t-info').innerHTML = "Aceito informações";

    }
    else{
        document.getElementById('t-info').innerHTML = "Não aceito nformações";
    }

}
function AceitoTermos(){

    if(document.getElementById('termos').checked){

        return false;

    }
    else{
        return true;
}
}
    
