var area = document.getElementById('area')

function entrar(){
   var nome = prompt("digite seu nome");

   if (nome === '' || nome === null){
    alert("algo deu errado")
    area.innerHTML = "Clique no botão para acessar";
   }else{
    area.innerHTML= "Bem Vindo " + nome + " ";

    let botaoSair= document.createElement("button");
    botaoSair.innerText = "Sair da Conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair)
   }


}

function sair(){
    alert("até mais");
    area.innerHTML = "você saiu"
}

function mediaAluno(nota1, nota2){
    var media = (nota1+nota2) / 2;

    if (media >= 7){
        console.log("Aluno aprovado com média: " + media)
    }else if(media < 7){
        console.log("Aluno reprovado com média: " + media)
    }
}

function aluno(nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;

    console.log(mensagem)
}