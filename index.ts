console.log("ciao");
// 1) Quali sono i tipi primitivi principali in TypeScript?
// string | number |boolean | null | undefined | any.

//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
 let nameStudent: string = "Miguel";
let age: number = 25;
let studiandoTypeScript: boolean = true;

//3) Tipizza il parametro della seguente funzione:

const greet = (name: string): string => {
    return "Ciao " + name;
  };
  
  console.log(greet("Miguel"))

//4) Specifica il tipo di ritorno della seguente funzione:

const sum = (a: number, b: number) => {  return a + b } // deve tornare un numero

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
// const prezzoIva = (prezzo: number): number => {
//     const iva = 0.22;

// }

//7) Cos'è un Type Union e come si scrive?
//è un tipo che può assumere uno dei tipi specificati ad esempio una variabile che può essere una stringa o un numero.
let valore: string | number;
valore = "ciao"; //string
valore = 42; //number

//8) Crea una variabile che possa contenere un numero, null o undefined.
let number: number | undefined  = undefined;

//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type giorniSettimana = 'Domenica' | 'lunedì' | 'martedì' | 'mercoledì' | 'giovedì' |'viernì' | 'sabato'
