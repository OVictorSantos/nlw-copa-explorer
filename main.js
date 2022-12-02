function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return ` 
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}


document.querySelector('#cards').innerHTML =  
         ` 
        <div class="jornada-1">
            <h1>Jornada 1 de 3</h1>
        </div>

         ` +
        createCard('20/11', 'domingo', createGame('qatar', '0 X 2', 'ecuador')) +
        createCard('21/11', 'segunda', createGame('england', '6 X 2', 'iran') + createGame('senegal', '0 X 2', 'netherlands') + createGame('united-states', '1 X 1', 'wales')) +
        createCard('22/11', 'terça', createGame('argentina', '1 X 2', 'saudi-arabia') + createGame('denmark', '0 X 0', 'tunisia') + createGame('mexico', '0 X 0', 'poland') + createGame('france', '4 X 1', 'australia')) +
        createCard('23/11', 'quarta', createGame('marocco', '0 X 0', 'croatia') + createGame('germany', '1 X 2', 'japan') + createGame('spain', '7 X 0', 'costa-rica') + createGame('belgium', '1 X 0', 'canada')) +
        createCard('24/11', 'quinta', createGame('switzerland', '1 X 0', 'cameroon') + createGame('uruguay', '0 X 0', 'south-korea') + createGame('portugal', '3 X 2', 'ghana') + createGame('brazil', '2 X 0', 'serbia')) +    
        ` 
        <div class="jornada-1">
            <h1>Jornada 2 de 3</h1>
        </div>

         ` +
        createCard('25/11', 'sexta', createGame('wales', '0 X 2', 'iran') + createGame('qatar', '1 X 3', 'senegal') + createGame('netherlands', '1 X 1', 'ecuador') + createGame('england', '0 X 0', 'united-states')) +
        createCard('26/11', 'sábado', createGame('tunisia', '0 X 1', 'australia') + createGame('poland', '2 X 0', 'saudi-arabia') + createGame('france', '2 X 1', 'denmark') + createGame('argentina', '2 X 0', 'mexico')) +
        createCard('27/11', 'domingo', createGame('japan', '0 X 1', 'costa-rica') + createGame('belgium', '0 X 2', 'marocco') + createGame('croatia', '4 X 1', 'canada') + createGame('spain', '1 X 1', 'germany')) +
        createCard('28/11', 'segunda', createGame('cameroon', '3 X 3', 'serbia') + createGame('south-korea', '2 X 3', 'ghana') + createGame('brazil', '1 X 0', 'switzerland') + createGame('portugal', '2 X 0', 'uruguay')) +
        ` 
        <div class="jornada-1">
            <h1>Jornada 3 de 3</h1>
        </div>

         ` +
        createCard('29/11', 'terça', createGame('ecuador', '2 X 0', 'senegal') + createGame('netherlands', '2 X 0', 'qatar') + createGame('iran', '0 X 1', 'united-states') + createGame('wales', '0 X 3', 'england')) +
        createCard('30/11', 'quarta', createGame('australia', '1 X 0', 'denmark') + createGame('tunisia', '1 X 0', 'france') + createGame('poland', '0 X 2', 'argentina') + createGame('saudi-arabia', '1 X 2', 'mexico')) +
        createCard('01/12', 'quinta', createGame('croatia', '0 X 0', 'belgium') + createGame('canada', '1 X 2', 'marocco') + createGame('costa-rica', '2 X 4', 'germany') + createGame('japan', '2 X 1', 'spain')) +
        createCard('02/12', 'sexta', createGame('south-korea', '12:00', 'portugal') + createGame('ghana', '12:00', 'uruguay') + createGame('serbia', '16:00', 'switzerland') + createGame('brazil', '16:00', 'cameroon'))