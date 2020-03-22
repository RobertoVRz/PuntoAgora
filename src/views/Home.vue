<template>
  <div class="Fondo d-flex flex-row align-center justify-center">
    <img alt="logo" src="../assets/logo.png" />
    <v-container>
      <v-btn>Nosotros</v-btn>
      <v-btn>Proyectos</v-btn>
      <v-btn>Contacto</v-btn>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  }
}
</script>
<style lang="sass" scoped>
.Fondo
  width: 100vw
  height: 100vh
</style>
