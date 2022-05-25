let tamanoArreglo:number = Number(prompt("ingrese el tamano del arreglo"));
let arregloNumeros:number[] = new Array(tamanoArreglo);
let indice:number;

let positivos:number=0;
let negativos:number=0;
let ceros:number=0;

for (indice = 0; indice < tamanoArreglo; indice++){
  arregloNumeros[indice] = Number(prompt(`Ingrese el valor del elemento en la posicion ${indice}`));
  if (arregloNumeros[indice]>0){
    positivos+=1;
  } else if (arregloNumeros[indice]<0){
    negativos+=1;
  } else {
    ceros+=1;
  };
};

console.log("La cantidad de numeros positivos son: "+positivos);
console.log("La cantidad de numeros negativos son: "+negativos);
console.log("La cantidad de numeros igual a cero son: "+ceros);