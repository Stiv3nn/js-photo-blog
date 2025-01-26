// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

// Milestone 3
// Inseriamo il JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

// Font utilizzati:
// titoli:  ‘Edu Tas Beginner’, sans-serif;
// date: ‘Sometype Mono’, ‘monospace’;
//--------------------------------------------------------------------

// Seleziono gli elementi di output
const containerCard = document.querySelector('.container');

// Setto l'endpoint e i parametri relativi
const endpoint = `https://lanciweb.github.io/demo/api/pictures/`;

// Faccio partire la richieesta AJAX verso l'API
axios.get(endpoint)
    .then(response => {
        // codice da eseguire in caso di successo
        const posts = response.data; //utilizzando ".data" mi stampa soltanto l'array specifico
        //console.log(posts); // creo e stampo la costante posts per salvare l'array

        // Estrapolare gli elementi e andarli a creare
        // Creo un ciclo per l'array di oggetti per estrapolare uno oggetto alla volta
        for (let i = 0; i < posts.length; i++){
            let postSingolo = posts[i];
            console.log(postSingolo);

            // Destrutturo l'oggetto
            const {date, title, url} = postSingolo;

            // Creo le card || Non posso  mettere innerText perchè mi legge tutto come testo e anche i tag. (sto creando). Metto += perchè devo aggiungere e non sovrascrivere.
            containerCard.innerHTML += `
            <div class="card">
                <img src="${url}" alt="" height="400px">
                <img id="pin" src="img/pin.svg" alt=""> 
                <p class="date">${date}</p>
                <h2 class="title">${title}</h2>
            </div>
            `;
            
        }
    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error);
    });
