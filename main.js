function createGame(player1,legendP1, hour, player2, legendP2) {
    return `
        <li>
            <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}" title="${legendP1}">
            <strong>${hour}</strong>
            <img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}" title="${legendP2}">
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
        createCard('20/11', 'domingo', createGame('qatar', 'Catar', '0 X 2', 'ecuador', 'Equador')) +
        createCard('21/11', 'segunda', createGame('england', 'Inglaterra', '6 X 2', 'iran', 'Irã') + createGame('senegal', 'Senegal', '0 X 2', 'netherlands', 'Holanda') + createGame('united-states', 'Estados Unidos', '1 X 1', 'wales', 'País de Gales')) +
        createCard('22/11', 'terça', createGame('argentina', 'Argentina', '1 X 2', 'saudi-arabia', 'Arábia Saudita') + createGame('denmark', 'Dinamarca', '0 X 0', 'tunisia', 'Tunísia') + createGame('mexico', 'México', '0 X 0', 'poland', 'Polônia') + createGame('france', 'França', '4 X 1', 'australia', 'Austrália')) +
        createCard('23/11', 'quarta', createGame('marocco', 'Marrocos', '0 X 0', 'croatia', 'Croácia') + createGame('germany', 'Alemanha', '1 X 2', 'japan', 'Japão') + createGame('spain', 'Espanha', '7 X 0', 'costa-rica', 'Costa Rica') + createGame('belgium', 'Bélgica', '1 X 0', 'canada', 'Canadá')) +
        createCard('24/11', 'quinta', createGame('switzerland', 'Suíça', '1 X 0', 'cameroon', 'Camarões') + createGame('uruguay', 'Uruguai', '0 X 0', 'south-korea', 'Coreia do Sul') + createGame('portugal', 'Portugal', '3 X 2', 'ghana', 'Gana') + createGame('brazil', 'Brasil', '2 X 0', 'serbia', 'Sérvia')) +    
        ` 
        <div class="jornada-1">
            <h1>Jornada 2 de 3</h1>
        </div>

         ` +
        createCard('25/11', 'sexta', createGame('wales', 'País de Gales', '0 X 2', 'iran', 'Irã') + createGame('qatar', 'Catar', '1 X 3', 'senegal', 'Senegal') + createGame('netherlands', 'Holanda', '1 X 1', 'ecuador', 'Equador') + createGame('england', 'Inglaterra', '0 X 0', 'united-states', 'Estados Unidos')) +
        createCard('26/11', 'sábado', createGame('tunisia', 'Tunísia', '0 X 1', 'australia', 'Austrália') + createGame('poland', 'Polônia', '2 X 0', 'saudi-arabia', 'Arábia Saudita') + createGame('france', 'França', '2 X 1', 'denmark', 'Dinamarca') + createGame('argentina', 'Argentina', '2 X 0', 'mexico', 'México')) +
        createCard('27/11', 'domingo', createGame('japan', 'Japão', '0 X 1', 'costa-rica', 'Costa Rica') + createGame('belgium', 'Bélgica', '0 X 2', 'marocco', 'Marrocos') + createGame('croatia', 'Croácia', '4 X 1', 'canada', 'Canadá') + createGame('spain', 'Espanha', '1 X 1', 'germany', 'Alemanha')) +
        createCard('28/11', 'segunda', createGame('cameroon', 'Camarões', '3 X 3', 'serbia', 'Sérvia') + createGame('south-korea', 'Coreia do Sul', '2 X 3', 'ghana', 'Gana') + createGame('brazil', 'Brasil', '1 X 0', 'switzerland', 'Suíça') + createGame('portugal', 'Portugal', '2 X 0', 'uruguay', 'Uruguai')) +
        ` 
        <div class="jornada-1">
            <h1>Jornada 3 de 3</h1>
        </div>

         ` +
        createCard('29/11', 'terça', createGame('ecuador', 'Equador', '1 X 2', 'senegal', 'Senegal') + createGame('netherlands', 'Holanda', '2 X 0', 'qatar', 'Catar') + createGame('iran', 'Irã', '0 X 1', 'united-states', 'Estados Unidos') + createGame('wales', 'País de Gales', '0 X 3', 'england', 'Inglaterra')) +
        createCard('30/11', 'quarta', createGame('australia', 'Austrália', '1 X 0', 'denmark', 'Dinamarca') + createGame('tunisia', 'Tunísia', '1 X 0', 'france', 'França') + createGame('poland', 'Polônia', '0 X 2', 'argentina', 'Argentina') + createGame('saudi-arabia', 'Arábia Saudita', '1 X 2', 'mexico', 'México')) +
        createCard('01/12', 'quinta', createGame('croatia', 'Croácia', '0 X 0', 'belgium', 'Bélgica') + createGame('canada', 'Canadá', '1 X 2', 'marocco', 'Marrocos') + createGame('costa-rica', 'Costa Rica', '2 X 4', 'germany', 'Alemanha') + createGame('japan', 'Japão', '2 X 1', 'spain', 'Espanha')) +
        createCard('02/12', 'sexta', createGame('south-korea', 'Coreia do Sul', '2 X 1', 'portugal', 'Portugal') + createGame('ghana', 'Gana', '0 X 2', 'uruguay', 'Uruguai') + createGame('serbia', 'Sérvia', '2 X 3', 'switzerland', 'Suíça') + createGame('brazil', 'Brasil', '0 X 1', 'cameroon', 'Camarões')) +
        ` 
        <div class="jornada-1">
            <h1>OITAVAS DE FINAL</h1>
        </div>

         ` +
        createCard('03/12', 'sábado', createGame('netherlands', 'Holanda', '3 X 1', 'united-states', 'Estados Unidos') + createGame('argentina', 'Argentina', '2 X 1', 'australia', 'Austrália')) +
        createCard('04/12', 'domingo', createGame('france', 'França', '3 X 1', 'poland', 'Polônia') + createGame('england', 'Inglaterra', '3 X 0', 'senegal', 'Senegal')) +
        createCard('05/12', 'segunda', createGame('japan', 'Japão', '1 (1 x 3) 1', 'croatia', 'Croácia') + createGame('brazil', 'Brasil', '4 X 1', 'south-korea', 'Coreia do Sul')) +
        createCard('06/12', 'terça', createGame('marocco', 'Marrocos', '0 (3 x 0) 0', 'spain', 'Espanha') + createGame('portugal', 'Portugal', '6 X 1', 'switzerland', 'Suíça')) +
        ` 
        <div class="jornada-1">
            <h1>QUARTAS DE FINAL</h1>
        </div>

         ` +
         createCard('09/12', 'sexta', createGame('croatia', 'Croácia', '12:00', 'brazil', 'Brasil') + createGame('netherlands', 'Holanda', '16:00', 'argentina', 'Argentina')) + 
         createCard('10/12', 'sábado', createGame('marocco', 'Marrocos', '12:00', 'portugal', 'Portugal') + createGame('england', 'Inglaterra', '16:00', 'france', 'França'))