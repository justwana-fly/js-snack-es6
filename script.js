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

const nomeTavolo = "Tavolo Vip";
const ospiti = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez',
    'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
];

const listaSegnaposto = ospiti.map((ospite, index) => ({
    nomeTavolo: nomeTavolo,
    nomeOspite: ospite,
    posto: index + 1
}));

console.log(listaSegnaposto);



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
const listaStudenti = [
    { nome: `Marco della Rovere`, Id: `213`, mediaVoti: `78` },
    { nome: `Paola Cortellessa`, Id: `110`, mediaVoti: `96` },
    { nome: `Andrea Mantegna`, Id: `250`, mediaVoti: `48` },
    { nome: `Gaia Borromini`, Id: `145`, mediaVoti: `74` },
    { nome: `Luigi Grimaldello`, Id: `196`, mediaVoti: `68` },
    { nome: `Piero della Francesca`, Id: `102`, mediaVoti: `50` },
    { nome: `Francesca da Polenta`, Id: `120`, mediaVoti: `84` },
    { nome: `Giovanni Pascoli`, Id: `175`, mediaVoti: `59` },
    { nome: `Chiara Mazzini`, Id: `185`, mediaVoti: `100` },
    { nome: `Matteo Colombo`, Id: `140`, mediaVoti: `25` },
    { nome: `Giulia Brunelleschi`, Id: `225`, mediaVoti: `92` },
    { nome: `Lorenzo Medici`, Id: `180`, mediaVoti: `66` }
];

//(Marco della Rovere => MARCO DELLA ROVERE);
const listaStudentiMaiuscolo = listaStudenti.map(studente => ({
    nome: studente.nome.toUpperCase(),
    Id: studente.Id,
    mediaVoti: studente.mediaVoti
}));
console.log(listaStudentiMaiuscolo);



//2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
const nuovoArrayMedia70Up = listaStudenti.filter((el) => {
    return el.mediaVoti >= `70`
});
console.log(nuovoArrayMedia70Up);



//3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const media70UpEid120Up = listaStudenti.filter((el) => {
    return el.mediaVoti >= `70` && el.Id >= `120`
    
});
console.log(media70UpEid120Up);






