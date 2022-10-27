//import fetch from 'node-fetch';
const pronote = require('pronote-api-again');

//when user logins, we get the username and password from the database and use it to fetch the data from pronote
// fetch('http://localhost:27017/users')
//     .then(data => data.json())
//     .then(data => {
//         const user = {
//             username: data.username,
//             password: data.password
//         };
//     return res.json(user);
//     })


const url = 'https://0134252b.index-education.net/pronote/eleve.html';
const username = 'username';
const password = 'pwd';
const cas = 'atrium-sud';



async function main() {
    const session = await pronote.login(url, username, password, cas);
    
    console.log(session.user.name); // Affiche le nom de l'élève
    console.log(session.user.studentClass.name); // Affiche la classe de l'élève
    
    const timetable = await session.timetable(); // Récupérer l'emploi du temps d'aujourd'hui
    const marks = await session.marks(); // Récupérer les notes du trimestre
    
    console.log(`L'élève a ${timetable.length} cours aujourd'hui`); 
    console.log(`et a pour l'instant une moyenne de ${marks.averages.student} ce trimestre.`);""	
    
    
    // etc. les fonctions utilisables sont 'timetable', 'marks', 'contents', 'evaluations', 'absences', 
    // 'homeworks', 'infos', et 'menu', sans oublier les champs 'user' et 'params' qui regorgent d'informations.
}

main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
});
