function mascara(v){
    console.log(v)
    v=v.replace(/[^0-9]/g, '')
    console.log(v)
    if(v.length > 11){
        v = cnpj(v)
    }else{
        v = cpf(v)
    }
    return v
}


function cpf(v){
    v=v.replace(/^(\d{3})(\d)/,"$1.$2")             //Coloca ponto entre o terceiro e o quarto dígitos
    v=v.replace(/^(\d{3})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
    return v
}

function cnpj(v) {
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o quarto terceiro
    v=v.replace(/(\d{3})(\d)/,"$1.$2")              //Coloca ponto entre o quarto e o quinto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1/$2")              //Coloca barra entre o setimo e o oitavo dígitos
    v=v.replace(/(\d{4})(\d)/,"$1-$2")
    return v
}

$(document).ready(function(){
    var atividadeAtual;
    atividadeAtual = getWKNumState();
    document.getElementById("numAtivity").value = atividadeAtual;
    document.getElementById("numProcess").value = getWKNumProces();
    if(atividadeAtual == "0" || atividadeAtual == "3"){
        $("#cartorio").hide(2000);
        $("#Solicitacao").hide();
    }else{
        $("#Solicitacao").hide();
        chamaHist()
        $("#cartorio").hide();
        $("#cartorio").show(2000);
        if( atividadeAtual == 2 || atividadeAtual == 'null' || atividadeAtual == null){
            numPro = document.getElementById("numProcess").value
            document.getElementById('solicita').innerHTML = '<a href="https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID='+numPro+'"> Solicitação n°'+numPro+'</a>'
            $("#Solicitacao").show();
        }
    }
})

function chamaHist(){
    atividadeAtual = getWKNumState();
    idProcesso = getWKNumProces();
    if( atividadeAtual > 3){
        historicoProcesso(idProcesso)
    }
}