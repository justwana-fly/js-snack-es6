/*SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.

Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, 

per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:

nome del tavolo (tableName),

nome dell'ospite (guestName),

posto occupato (place),

Generiamo e stampiamo in console la lista per i segnaposto.
*/

// const nomeTavolo = "Tavolo Vip";
// const ospiti = [
//     'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez',
//     'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
// ];

// const listaSegnaposto = ospiti.map((ospite, index) => ({
//     nomeTavolo: nomeTavolo,
//     nomeOspite: ospite,
//     posto: index + 1
// }));

// console.log(listaSegnaposto);



/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso,
 dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo

ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

Buon pomeriggio e buon lavoro !!! :faccia_nerd:
Questo è l'elenco degli studenti:

ES:
(
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
)
*/

//lista studenti con   -nome   -id   -media voti
// const listaStudenti = [
//     { nome: `Marco della Rovere`, Id: `213`, mediaVoti: `78` },
//     { nome: `Paola Cortellessa`, Id: `110`, mediaVoti: `96` },
//     { nome: `Andrea Mantegna`, Id: `250`, mediaVoti: `48` },
//     { nome: `Gaia Borromini`, Id: `145`, mediaVoti: `74` },
//     { nome: `Luigi Grimaldello`, Id: `196`, mediaVoti: `68` },
//     { nome: `Piero della Francesca`, Id: `102`, mediaVoti: `50` },
//     { nome: `Francesca da Polenta`, Id: `120`, mediaVoti: `84` },
//     { nome: `Giovanni Pascoli`, Id: `175`, mediaVoti: `59` },
//     { nome: `Chiara Mazzini`, Id: `185`, mediaVoti: `100` },
//     { nome: `Matteo Colombo`, Id: `140`, mediaVoti: `25` },
//     { nome: `Giulia Brunelleschi`, Id: `225`, mediaVoti: `92` },
//     { nome: `Lorenzo Medici`, Id: `180`, mediaVoti: `66` }
// ];

// //(Marco della Rovere => MARCO DELLA ROVERE);
// const listaStudentiMaiuscolo = listaStudenti.map(studente => ({
//     nome: studente.nome.toUpperCase(),
//     Id: studente.Id,
//     mediaVoti: studente.mediaVoti
// }));
// console.log(listaStudentiMaiuscolo);



// //2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// const nuovoArrayMedia70Up = listaStudenti.filter((el) => {
//     return el.mediaVoti >= `70`
// });
// console.log(nuovoArrayMedia70Up);



// //3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// const media70UpEid120Up = listaStudenti.filter((el) => {
//     return el.mediaVoti >= `70` && el.Id >= `120`
    
// });
// console.log(media70UpEid120Up);




// SNACK 3
// Creare un array di oggetti:

// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    { nome: "Bianchi", peso: 7 },
    { nome: "Trek", peso: 8 },
    { nome: "Specialized", peso: 7.5 },
    { nome: "Cannondale", peso: 7.2 },
    { nome: "Giant", peso: 7.8 },
    { nome: "Pinarello", peso: 7.3 },
    { nome: "Scott", peso: 7.4 },
    { nome: "Colnago", peso: 7.6 },
    { nome: "Merida", peso: 7.1 },
    { nome: "Wilier", peso: 7.9 }
  ];
  
let biciConMenoPeso = bikes[0];
for (const bici of bikes) {
    if (bici.peso < biciConMenoPeso.peso){
        biciConMenoPeso = bici;
    }
}

console.log(`La bici piu leggera è ${biciConMenoPeso.nome} con un peso di ${biciConMenoPeso.peso} kg.`);



// SNACK 4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// BONUS
// Stampare in pagina oltre che in console!
// Buon pomeriggio e buon divertimento !!!!


function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const squadreDiCalcio = [
    { nome: 'Squadra1', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra2', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Squadra3', puntiFatti: 0, falliSubiti: 0 },
    
];

for (let squadra of squadreDiCalcio) {
    squadra.puntiFatti = generaNumeroCasuale(0, 100);
    squadra.falliSubiti = generaNumeroCasuale(0, 50);
}

const squadreConPuntiEFalli = squadreDiCalcio.map(({ nome, puntiFatti, falliSubiti }) => ({ nome, puntiFatti, falliSubiti }));

console.log("Squadre con nomi, punti fatti e falli subiti:");
console.log(squadreConPuntiEFalli);
