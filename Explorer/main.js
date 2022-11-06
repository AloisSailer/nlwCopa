function createGame(player1, hour, player2, altPlayer1, altPlayer2) {
  return `
    <li>
      <img src="./assets/${player1}.svg" alt="Bandeira ${altPlayer1}" />
      <strong>${hour}</strong>
      <img src="./assets/${player2}.svg" alt="Bandeira ${altPlayer2}" />
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard(
    '24/11',
    'domingo',
    createGame('brazil', '16:00', 'serbia', 'Brasil', 'Sérvia')
  ) +
  createCard(
    '28/11',
    'segunda',
    createGame('brazil', '13:00', 'switzerland', 'Brasil', 'Suiça')
  ) +
  createCard(
    '02/12',
    'sexta',
    createGame('brazil', '16:00', 'cameroon', 'Brasil', 'Camarões')
  )
  
