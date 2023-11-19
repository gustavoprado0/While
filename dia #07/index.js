let condicao = true;
while(condicao){
    let idade = Number(prompt("Insira sua idade"))
   if(idade > 17){
       console.log("você poderá entrar no site")
    condicao = false;
   }
}


console.log("saiu do while")
