<template>
  <div class="Fondo d-flex flex-column">
    <img alt="logo" src="../assets/logo.png" />
    <v-container>
      <v-btn>Nosotros</v-btn>
      <v-btn>Proyectos</v-btn>
      <v-btn>Contacto</v-btn>
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
.Fondo
  width: 100vw
  height: 100vh
</style>
