//Exercitiul nr.1

//Ana vrea să construiască un calculator de bacșiș (tips) foarte simplu pentru ori de câte ori merge să mănânce într-un restaurant.
// În țara ei, este obișnuit să dai bacșiș 15% dacă valoarea facturii este între 50 și 300. Dacă valoarea este diferită, bacșișul 
//este de 20%.
//1. Sarcina ta este de a calcula bacșișul, în funcție de valoarea facturii. Creați o variabilă numită „tip” pentru aceasta. 
//Nu este permis să folosiți o instrucțiune if/else 😅 (Dacă vă este mai ușor, puteți începe cu o instrucțiune if/else, 
//apoi încercați să o convertiți într-un operator ternar!)



const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const tip1 = (bill1 >= 50 && bill1 <= 300) ? bill1 * 0.15 : bill1 * 0.20;
const tip2 = (bill2 >= 50 && bill2 <= 300) ? bill2 * 0.15 : bill2 * 0.20;
const tip3 = (bill3 >= 50 && bill3 <= 300) ? bill3 * 0.15 : bill3 * 0.20;

// 2. Imprimarea pe consolă a detaliilor facturii
console.log(`Nota a fost ${bill1}, bacșișul a fost ${tip1.toFixed(2)} și valoarea totală ${ (bill1 + tip1).toFixed(2) }`);
console.log(`Nota a fost ${bill2}, bacșișul a fost ${tip2.toFixed(2)} și valoarea totală ${ (bill2 + tip2).toFixed(2) }`);
console.log(`Nota a fost ${bill3}, bacșișul a fost ${tip3.toFixed(2)} și valoarea totală ${ (bill3 + tip3).toFixed(2) }`);


//Exersare:
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}



console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);
