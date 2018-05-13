<template>
  <transition name="fade">
    <v-app>
      <div id="decos">
        <img src="src/img/decos/good.png" alt="deco" id="good" />
        <img src="src/img/decos/ok.png" alt="deco" id="ok" />
        <img src="src/img/decos/yeah.png" alt="deco" id="yeah" />
        <img src="src/img/decos/wrong.png" alt="deco" id="wrong" />
        <img src="src/img/decos/perfect.png" alt="deco" id="perfect" />
        <img src="src/img/decos/leek.png" alt="deco" id="poireau" />
        <img src="src/img/decos/panda.png" alt="deco" id="panda" />
        <img src="src/img/decos/diamond.png" alt="deco" id="diamond" />
        <img src="src/img/decos/crown_blue.png" alt="deco" id="couronne_bleue" />
        <img src="src/img/decos/crown_red.png" alt="deco" id="couronne_rouge" />
        <img src="src/img/decos/crown_orange.png" alt="deco" id="couronne_orange" />
        <img src="src/img/decos/crown_green.png" alt="deco" id="couronne_verte" />
        <img src="src/img/decos/unicorn.png" alt="deco" id="unicorn" />
        <img src="src/img/decos/zebra.png" alt="deco" id="zebra" />
        <img src="src/img/decos/rabbit.png" alt="deco" id="rabbit" />
        <img src="src/img/decos/rabbit1.png" alt="deco" id="rabbit1" />
        <img src="src/img/decos/robot.png" alt="deco" id="robot" />
      </div>
      <v-container id="players-form">
        <v-layout row wrap align-content-center align-center>
          <v-flex xs12>
            <img src="src/img/logo.png" alt="logo" />
          </v-flex>
          <v-flex xs12>
            <p>Just Dance Random permet de tirer des noms ainsi qu'une chanson aléatoire afin de faire une partie de Just Dance. Réalisé par Exybore et DavAll.</p>
            <p>Pour commencer, entrez au minimum 2 noms de personnes séparés par des espaces ou des points virgules et validez.</p>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              id="input-players"
              name="players"
              v-model="players"
              label="Joueurs (séparés par des espaces ou des points virgules)"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 align-content-center text-xs-center>
            <v-btn raised color="primary" @click.stop="dance()">Valider</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </transition>
</template>

<script>
import choose from './js/algo.js'

export default {
  data() {
    return {
      players: ''
    }
  },
  methods: {
    dance() {
      let players = this.players.replace(/ /g, ';').split(';')
      console.log(choose(players))
    }
  }
}
</script>
