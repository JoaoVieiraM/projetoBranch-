// Estrutura de repetição  
//  For 
for(let i = 0; i <= 10;i++){
    //console.log(i)
}
//  while 

let f = 0 
while (f < 10 ){
    // console.log(f)
    f++;
}
//  do while 
let w = 0 

do{
    // console.log(w)
    w++
}
while(w < 5);

// funções 

function ola(nome){
    // ``( strings literal ou template strings ${} chama a var)
    // console.log(`seja bem vindo a ${nome}`)
    alert(`seja bem vindo a ${nome}`)
    document.write(`seja bem vindo a ${nome}`)

}
// executando a função ola passando valor 
ola("fiap")