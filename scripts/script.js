

onload = function () {

    //Evento disparado quando um usuário estiver pressionando uma tecla
 //dentro do input
 document.getElementById("inputItem").addEventListener("keydown", (e) => {   
     // aqui eu verifico a tecla que foi pressionada se foi enter
     // caso seja enter eu executo a função inserir

         if (e.key === 'Enter' || e.which == 13 || e.keyCode == 13 ) {            
             inserir();  
             //console.log("Inserido com Enter");        
         }else{
             //console.log("Enter Falhou"); 
         }        
     });


 let it = localStorage.getItem("itens");

 // se existir algum valor dentro de tf significa        
 // que há dados para persistirem

 if (it) {

     //  como há dados eu pego eles e coloco diretamente na variável itens substituindo o array vazio
     itens = JSON.parse(it);

 }

 let listaCompras = document.getElementById("lista")

 //Laço para fazer a listagem do conteudo do array
 for (let i = 0; i < this.JSON.parse(it).length; i++) {

    listaCompras.innerHTML += `<li class='itemLista'>          
    ${itens[i].conteudo}         
    <img id='${itens[i].id}'
   src='./icons/delete.svg' class='iconDel' onclick='apagarItem(this)' > </li> `  


 }


}

//Array que irá armazenar as tarefas digitadas no input html
var itens = [];

function inserir(e) {

 if (document.getElementById("inputItem").value != "") {

     //Pegando o valor do input html
     let tr = document.getElementById("inputItem").value;

     /* Criação de objeto com id */
     let obj_tarefa = { id: parseInt(Math.random()*100), conteudo: tr };

     /* console.log(obj_tarefa); */

     //adicionando os valores no array 
     itens.push(obj_tarefa)

     //teste de funcionamento
     /* console.log(itens); */

     document.getElementById("inputItem").value = "";

     preencherLista();

     /* limpaErroCampoVazio(); */

 }
 else {
     /* erroCampoVazio(); */
 }

}



function preencherLista() {

 let listaCompras = document.getElementById("lista")

 listaCompras.innerText = "";//Não deixa duplicar intem na lista

 //Laço para fazer a listagem do conteudo do array
 for (let i = 0; i < this.itens.length; i++) {

     listaCompras.innerHTML += `<li class='itemLista'>          
     ${itens[i].conteudo}         
     <img id='${itens[i].id}'
    src='./icons/delete.svg' class='iconDel' onclick='apagarItem(this)' > </li> `  

 }

 //Armazena no Local Storage
 localStorage.setItem("itens", JSON.stringify(itens));

}

function erroCampoVazio() {
 let erro = document.getElementById("erroCampoVazio");
 erro.style.display = "block";
}

function limpaErroCampoVazio() {
 let erro = document.getElementById("erroCampoVazio");
 erro.style.display = "none";
}

function apagarTodosItens(e) {

 let listaCompra = document.getElementById("lista");
 listaCompra.innerHTML = "";

 /* limpaErroCampoVazio(); */

 //Limpa a memória do navegador
 localStorage.clear();

 //limpa o array
 itens = [];

 //teste
 console.log(itens);

  //teste
 console.log(localStorage);

}


function apagarItem (e) {

 let id_elemento_clicado = e.id;

 let nova_lista = [];

 for (let i = 0; i < itens.length; i++) {  

     //se id for diferente do clicado, adicionar a nova lista
     if (itens[i].id != id_elemento_clicado) {      
         nova_lista.push(itens[i]);    
     }

 }

 itens = nova_lista;

 preencherLista();

}

function gerarPDF (e) {

    //pega a div que queremos imprimir
    let lista = document.getElementById("lista").innerHTML;

    //console.log(lista);

    //cria e abre uma nova janela
    let janelaPrint = window.open('','','width=500, heigth=500');

    janelaPrint.document.write('<html> <head>');
    janelaPrint.document.write('<title> Lista de Compras Online </title>');
    janelaPrint.document.write('</head>');
    janelaPrint.document.write(`<body> '${lista}' </body>`);
    janelaPrint.document.write('</html>');
    //fecha a gravação de dados
    janelaPrint.document.close();

    janelaPrint.print();

    //fecha a janela
    janelaPrint.window.close();

    //console.log("pegou");
}





