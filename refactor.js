function Operations(numero, op) {
  const number = Math.round(Math.random() * 100);
  const sum = number + numero; 
  const sub = number - numero;
  const mul = number * numero;
  const div = number / numero;
  console.log("Numero gerado: "+ number +", Numero digitado: " + numero);
 switch(op){
    case 1: 
      return "Resultado: " + {number+numero};
      break;
    case 2: 
      return "Resultado: " +  sub;
      break;
    case 3: 
      return "Resultado: " +  mul;
      break;
    case 4: 
      return "Resultado: " +  div;
      break;
 }

}

console.log(Operations(10, 3));