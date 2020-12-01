
function clicou (){
  
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://web.digitalinnovation.one/browse");
    //window.location.href = "https://web.digitalinnovation.one/browse";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   // alert("trocar texto");
   elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";


}

function load() {
    alert("Página carreganda");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function soma (n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true 
    }else{
        validar = false
    }

    return validar;
}

var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));
*/
//alert(soma(5,10));

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
} 
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


/*
var d = new Date ();

alert(d.getHours());
alert(d.getMinutes());
alert(d.getDay());
alert (d.getMonth()+1);
*/


/*
var count;
for(count = 0; count <=5; count++){
    alert(count);
}
*/

/*

var count = 0;
while (count <= 5){

console.log (count);
alert(count);
count++;
};
*/

/*count = count +1;
};

*/


/*
var idade = prompt ("Qual sua idade?");

if (idade >= 18) {
    alert ("Maior de idade");
}else{
    alert("Menor de idade");
};
*/


/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas.nome);
alert(frutas[1].nome);
*/


/*
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maça", "pêra", "laranja"];
//lista.pop();
//lista.push("uva");
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));




//*var nome = "Guilherme Akinyele";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade+idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));

