/*Define a função*/
function CalcularMedia(notas){
	let somanota = 0;
  for(c = 0; c < notas.length; c++){
  	somanota += notas[c];
  } 
  media = somanota / notas.length;
  return media;
}

/*Função para verificar aprovação*/
function Aprovacao(notas){
  let media = CalcularMedia(notas)
	if(media >= 7){
  	resultado = "aprovado";
  } else if(media >= 5){
  	resultado = "em recuperação";
 	} else {
    resultado = "reprovado";
	}  
  return "A média do aluno é " + media + ", estando ele " + resultado + ".";
}

/*Lê os números inseridos*/
document.addEventListener('submit', function(evento){
    
    evento.preventDefault(); //Intesepta o evio do formulário no HTML
    evento.stopPropagation(); //Impede que o evento seja chamado de outras formas
    
    let formulario = document.getElementById('formulario-01');
    let dados = new FormData(formulario);
    let objeto = {};
    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);
        //Adicionar itens no array
        notas.push(parseInt(dados.get(key)));
    }

    console.log(notas);
    console.log(objeto);
    texto = Aprovacao(notas);
    document.getElementById('resultado').innerHTML = texto; //Envia o resultado para o HTML 

});