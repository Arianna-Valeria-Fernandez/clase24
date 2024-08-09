/*primer ejercicio
for(let i = 0; i <=10; i++){
console.log(i);
}
//segundo ejercicio
const frutas = ["Manzana", "Uva", "Pera", "Naranja"];
for (let i =0;i < frutas.length; i++){
    console.log(frutas[i]);
 //tercer ejercicio
}
//cuarto ejercicio
for (let i =0; i <= 10; i+= 2){
    console.log(i);
}
    */
//equipo
const equipo1 = ["Mariely", "Angie", "Michelle", "Arianna"];
let lista = "";

for (let i =0; i <equipo1.length; i++){
    lista += `<li>${equipo1[i]}</li>`;

}
document.getElementById("integrantes").innerHTML = `<ul>${lista}</lu>`;
document.getElementById("lider").innerHTML = equipo1[2];


