<template>
  <div class="Fondo d-flex flex-column align-center justify-center">
    <img
      alt="logo"
      height="500px"
      class="imagen"
      src="../assets/logos/logopro.svg"
    />
    <v-container class="d-flex flex-row justify-space-around">
      <v-btn color="white" @click="elegir('Nosotros')" text class="btnModal"
        >Nosotros</v-btn
      >
      <v-btn color="white" @click="elegir('Proyectos')" text class="btnModal"
        >Proyectos</v-btn
      >
      <v-btn color="white" @click="elegir('Contacto')" text class="btnModal"
        >Contacto</v-btn
      >
    </v-container>
    <Nosotros v-if="nosotros" />
    <v-dialog v-model="dialog" width="600px">
      <v-card class="cardDialog" v-if="titulo === 'Nosotros'">
        <v-card-title class="d-flex justify-center">
          <span class="Font">{{ titulo }}</span>
        </v-card-title>
        <v-card-text class="white--text">
          <v-row>
            <v-col
              class="d-flex flex-row justify-center align-center"
              cols="12"
            >
              <v-avatar color="white" size="150">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  class="perfil"
                /> </v-avatar
            ></v-col>
            <v-col
              class="d-flex flex-row justify-center align-center"
              cols="12"
            >
              <v-avatar color="white" size="150">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  class="perfil"
                />
              </v-avatar>

              <v-avatar color="white" size="150" class="ml-10">
                <img
                  lazy-src="https://cdn.vuetifyjs.com/images/john.jpg"
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  class="perfil"
                /> </v-avatar
            ></v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card class="cardDialog" v-if="titulo === 'Proyectos'">
        <v-card-title class="d-flex justify-center">
          <span class="Font">{{ titulo }}</span>
        </v-card-title>
        <v-card-text class="white--text"> </v-card-text>
      </v-card>

      <v-card class="cardDialog" v-if="titulo === 'Contacto'">
        <v-card-title class="d-flex justify-center">
          <span class="Font">{{ titulo }}</span>
        </v-card-title>
        <v-card-text class="white--text">
          <v-container class="d-flex flex-column align-center ">
            <div class="d-flex flex-row">
              <v-icon color="white">mdi-phone</v-icon>
              <h2>2222659298</h2>
            </div>
            <div class="d-flex flex-row">
              <v-icon color="white">mdi-email</v-icon>
              <h2>apuntoagora@gmail.com</h2>
            </div>
            <div class="d-flex flex-row">
              <v-icon color="white">mdi-facebook</v-icon>
              <h2>@puntoagora https://www.facebook.com/puntoagora/</h2>
            </div>
            <div class="d-flex flex-row">
              <v-icon color="white">mdi-instagram</v-icon>
              <h2>@puntoagora https://www.instagram.com/puntoagora/</h2>
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Nosotros from '@/components/Nosotros.vue'
import imagen from '../assets/logos/logo200px.png'

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
    Nosotros
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
  background-image: url("../assets/fondos/verde.jpg")
  background-position: center center
  background-size: cover

.Font
  font-family: 'B612', sans-serif
  color: white
  font-size: 40px

.perfil:hover
  height: 200px
  width: 200px
  cursor: pointer
</style>
