<template>
  <div class="Fondo d-flex flex-column align-center justify-center">
    <img
      alt="logo"
      height="500px"
      class="imagen"
      src="../assets/logos/logopro.svg"
    />
    <v-container class="d-flex flex-row justify-space-around">
      <v-btn color="white" text class="btnModal">Nosotros</v-btn>
      <v-btn color="white" text class="btnModal">Proyectos</v-btn>
      <v-btn color="white" text class="btnModal">Contacto</v-btn>
    </v-container>
    <Nosotros v-if="nosotros" />
  </div>
</template>

<script>
import Nosotros from '@/components/Nosotros.vue'

export default {
  name: 'Home',
  data() {
    return {
      nosotros: false
    }
  },
  components: {
    Nosotros
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

.imagen
  //background-color: black
</style>
