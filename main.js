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

        createCard('20/11', 'domingo', createGame('qatar', '0 X 2', 'ecuador')) +
        createCard('21/11', 'segunda', createGame('england', '6 X 2', 'iran') + createGame('senegal', '0 X 2', 'netherlands') + createGame('united-states', '1 X 1', 'wales')) +
        createCard('22/11', 'terça', createGame('argentina', '1 X 2', 'saudi-arabia') + createGame('denmark', '0 X 0', 'tunisia') + createGame('mexico', '0 X 0', 'poland') + createGame('france', '4 X 1', 'australia')) +
        createCard('23/11', 'quarta', createGame('marocco', '0 X 0', 'croatia') + createGame('germany', '1 X 2', 'japan') + createGame('spain', '7 X 0', 'costa-rica') + createGame('belgium', '1 X 0', 'canada')) +
        createCard('24/11', 'quinta', createGame('switzerland', '1 X 0', 'cameroon') + createGame('uruguay', '0 X 0', 'south-korea') + createGame('portugal', '3 X 2', 'ghana') + createGame('brazil', '2 X 0', 'serbia')) +
        createCard('25/11', 'sexta', createGame('wales', '07:00', 'iran') + createGame('qatar', '10:00', 'senegal') + createGame('netherlands', '13:00', 'ecuador') + createGame('england', '16:00', 'united-states')) +
        createCard('26/11', 'sábado', createGame('tunisia', '07:00', 'australia') + createGame('poland', '10:00', 'saudi-arabia') + createGame('france', '13:00', 'denmark') + createGame('argentina', '16:00', 'mexico')) +
        createCard('27/11', 'domingo', createGame('japan', '07:00', 'costa-rica') + createGame('belgium', '10:00', 'marocco') + createGame('croatia', '13:00', 'canada') + createGame('spain', '16:00', 'germany')) +
        createCard('28/11', 'segunda', createGame('cameroon', '07:00', 'serbia') + createGame('south-korea', '10:00', 'ghana') + createGame('brazil', '13:00', 'switzerland') + createGame('portugal', '16:00', 'uruguay')) +
        createCard('29/11', 'terça', createGame('ecuador', '12:00', 'senegal') + createGame('netherlands', '12:00', 'qatar') + createGame('iran', '16:00', 'united-states') + createGame('wales', '16:00', 'england')) +
        createCard('30/11', 'quarta', createGame('australia', '12:00', 'denmark') + createGame('tunisia', '12:00', 'france') + createGame('poland', '16:00', 'argentina') + createGame('saudi-arabia', '16:00', 'mexico')) +
        createCard('01/12', 'quinta', createGame('croatia', '12:00', 'belgium') + createGame('canada', '12:00', 'marocco') + createGame('costa-rica', '16:00', 'germany') + createGame('japan', '16:00', 'spain')) +
        createCard('02/12', 'sexta', createGame('south-korea', '12:00', 'portugal') + createGame('ghana', '12:00', 'uruguay') + createGame('serbia', '16:00', 'switzerland') + createGame('brazil', '16:00', 'cameroon'))