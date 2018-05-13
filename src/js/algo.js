function choose(players) {
  let selected = []
  let select = ''
  do {
    select = players[Math.round(Math.random() * (players.length - 1))] // On choisis un joueur aléatoire
    if (selected.indexOf(select) == -1) {
      // Vérification que le joueur a pas déjà été sélectionné
      selected.push(select)
    }
    if (selected.lenght == 4) {
      // Si la limite de joueurs est atteinte, on stope tout
      break
    }
  } while (Math.round(Math.random())) // On choisis si on rajoute un joueur
  return {
    selected: selected,
    infos: determine(selected)
  }
}

function determine(selected) {
  let mode = ''
  switch (selected.length) {
    case 1:
      mode = 'solo'
      break
    case 2:
      mode = 'duo'
      break
    case 3:
      mode = 'trio'
      break
    case 4:
      mode = 'quatro'
      break
  }
  return {
    mode: mode,
    song: song(mode)
  }
}

function song(mode) {
  let songs = require('./songs.js')
  return songs[mode][Math.round(Math.random() * (songs[mode].length - 1))]
}

export default choose
