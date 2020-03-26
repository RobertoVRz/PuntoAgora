<template>
  <div class="Fondo d-flex flex-column align-center justify-center">
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
        <v-container class="d-flex flex-row justify-space-around">
          <v-btn color="white" @click="elegir('Nosotros')" text class="btnModal"
            >Nosotros</v-btn
          >
          <v-btn
            color="white"
            @click="elegir('Proyectos')"
            text
            class="btnModal"
            >Proyectos</v-btn
          >
          <v-btn color="white" @click="elegir('Contacto')" text class="btnModal"
            >Contacto</v-btn
          >
        </v-container>
      </kinesis-element>
    </kinesis-container>

    <v-dialog v-model="dialog" width="600px">
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
          <Proyectos v-if="titulo === 'Proyectos'" /> </v-card-text>
      </v-card>

      <v-card class="cardDialog" v-if="titulo === 'Contacto'">
        <v-card-title class="d-flex justify-center">
          <span class="Font">{{ titulo }}</span>
        </v-card-title>
        <v-card-text class="white--text">
          <Contacto v-if="titulo === 'Contacto'" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Nosotros from '@/components/Nosotros.vue'
import Contacto from '@/components/Contacto.vue'
import Proyectos from '@/components/Proyectos.vue'
import imagen from '../assets/logos/logo200px.png'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  name: 'Home',
  data() {
    return {
      nosotros: false,
      dialog: false,
      titulo: '',
      imagen
    }
  },
  components: {
    Nosotros,
    Contacto,
    Proyectos,
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
  width: 100vw
  height: 100vh
  background-size: cover

.imagen
  margin-top: -5rem
  margin-bottom: 5rem

.cardDialog
  background-image: url("../assets/fondos/amarillo.jpg")
  background-position: center center
  background-size: cover

.Font
  font-family: 'B612', sans-serif
  color: white
  font-size: 40px
</style>
