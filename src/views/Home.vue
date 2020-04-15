<template>
  <div class="Fondo d-flex flex-column align-center justify-center">
    <div>
      <kinesis-container>
        <kinesis-element :strength="20">
          <img
            alt="logo"
            height="500px"
            class="imagen"
            src="../assets/logos/logopro.svg"
          />
        </kinesis-element>
        <kinesis-element :strength="10">
          <div
            class="contenedorMenu d-flex flex-row flex-wrap align-center justify-space-around"
          >
            <v-btn
              color="white"
              @click="elegir('Nosotros')"
              text
              class="btnModal"
              >Nosotros</v-btn
            >
            <v-btn
              color="white"
              @click="elegir('Proyectos')"
              text
              class="btnModal"
              >Proyectos</v-btn
            >
            <v-btn
              color="white"
              @click="elegir('Contacto')"
              text
              class="btnModal"
              >Contacto</v-btn
            >

            <v-btn color="white" @click="elegir('Riegen')" text class="btnModal"
              >Riegen</v-btn
            >
          </div>
        </kinesis-element>
      </kinesis-container>
    </div>

    <v-dialog v-model="dialog" width="80vw">
      <v-card class="cardDialog" v-if="titulo === 'Nosotros'">
        <v-card-title class="d-flex justify-center">
          <span class="Font">{{ titulo }}</span>
        </v-card-title>
        <v-card-text class="white--text">
          <Nosotros v-if="titulo === 'Nosotros'"
        /></v-card-text>
      </v-card>

      <v-card class="cardDialog" v-if="titulo === 'Proyectos'">
        <v-card-title class="d-flex justify-center">
          <span class="Font">{{ titulo }}</span>
        </v-card-title>
        <v-card-text class="white--text">
          <Proyectos v-if="titulo === 'Proyectos'" />
        </v-card-text>
      </v-card>

      <v-card class="cardDialog" v-if="titulo === 'Contacto'">
        <v-card-title class="d-flex justify-center">
          <span class="Font">{{ titulo }}</span>
        </v-card-title>
        <v-card-text class="white--text">
          <Contacto v-if="titulo === 'Contacto'" />
        </v-card-text>
      </v-card>

      <v-card class="cardDialog" v-if="titulo === 'Riegen'">
        <v-card-title class="d-flex justify-center">
          <span class="Font">{{ titulo }}</span>
        </v-card-title>
        <v-card-text class="white--text cardRiegen">
          <div class="d-flex flex-row justify-center align-center mb-3">
            <v-btn class="mr-5" width="8rem" @click="Riegen = 'Riegen'"
              >Prototipo 1</v-btn
            >
            <v-btn class="mr-5" width="8rem" @click="Riegen = 'Riegen2'"
              >Prototipo 2</v-btn
            >
            <v-btn class="mr-5" width="8rem" @click="Riegen = 'Riegen3'"
              >Prototipo 3</v-btn
            >
          </div>
          <Riegen v-if="Riegen === 'Riegen'" />
          <Riegen2 v-if="Riegen === 'Riegen2'" />
          <Riegen3 v-if="Riegen === 'Riegen3'" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Nosotros from '@/components/Nosotros.vue'
import Contacto from '@/components/Contacto.vue'
import Proyectos from '@/components/Proyectos.vue'
import Riegen from '@/components/Riegen.vue'
import Riegen2 from '@/components/Riegen2.vue'
import Riegen3 from '@/components/Riegen3.vue'
import imagen from '../assets/logos/logo200px.png'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  name: 'Home',
  data() {
    return {
      nosotros: false,
      dialog: false,
      Riegen: 'default',
      titulo: '',
      imagen
    }
  },
  components: {
    Nosotros,
    Contacto,
    Proyectos,
    Riegen,
    Riegen2,
    Riegen3,
    KinesisContainer,
    KinesisElement
  },
  methods: {
    elegir(titulo) {
      this.dialog = true
      this.titulo = titulo
    }
  }
}
</script>
<style lang="sass" scoped>
.btnModal
  font-family: 'Barrio', cursive
  font-size: 3rem !important

.Fondo
  background-image: url("../assets/fondos/verdesito.jpg")
  width: 100% !important
  height: 100% !important
  background-size: cover

.imagen
  margin-top: -5rem
  margin-bottom: 5rem
  margin-left: 5rem !important

.cardDialog
  background-image: url("../assets/fondos/amarillo.jpg")
  background-position: center center
  background-size: cover

.Font
  font-family: 'B612', sans-serif
  color: white
  font-size: 40px

.cardRiegen
  //background-color: black

.lolo
  background-color: black
  width: 100vw

@media only screen and (max-width: 600px)
  .imagen
    height: 300px !important
    margin-top: 0rem !important
    margin-bottom: 0rem !important
    margin-left: 0rem !important

  .btnModal
    margin-top: 2rem !important
    margin-left: 12rem !important
    font-size: 2rem !important

  .contenedorMenu
    width: 90vw
</style>
