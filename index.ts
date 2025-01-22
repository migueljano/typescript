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

let oggi: giorniSettimana;

oggi = 'lunedì';  
oggi = 'sabato'; 
// oggi = 'festa'; --> errore

//10) Tipizza il seguente array di numeri nei due modi possibili:

const numbers = [1, 2, 3]
const numberOne: number[] = [1, 2, 3] 
const numberTwo: Array<number> = [1, 2, 3]

//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

let genericArray: [string, string, string, number, number]
// 12) Qual è la differenza tra type e interface?
/*
  in Typescript la differenza tra type e interface è che interface permettono
  di estendere nuove funzioanalità  in qualsiasi momento, mentre "Type" definisce un oggetto e non può essere riapeerto per aggiungere nuove 
  proprietà puoi comunque ottenere un effetto simile usando le union types o le intersection types..
*/

//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
// 14)Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface Person {
    firstname: string;
    lastname: string;
    age?: number; //<-- renderlo opzionale basta aggiungere(?)
}