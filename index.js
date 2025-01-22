console.log("ciao");
// 1) Quali sono i tipi primitivi principali in TypeScript?
// string | number |boolean | null | undefined | any.
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var nameStudent = "Miguel";
var age = 25;
var studiandoTypeScript = true;
//3) Tipizza il parametro della seguente funzione:
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("Miguel"));
//4) Specifica il tipo di ritorno della seguente funzione:
var sum = function (a, b) { return a + b; }; // deve tornare un numero
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
// const prezzoIva = (prezzo: number): number => {
//     const iva = 0.22;
// }
//7) Cos'è un Type Union e come si scrive?
//è un tipo che può assumere uno dei tipi specificati ad esempio una variabile che può essere una stringa o un numero.
var valore;
valore = "ciao"; //string
valore = 42; //number
//8) Crea una variabile che possa contenere un numero, null o undefined.
var number = undefined;
