<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
//import Nosotros from './components/Nosotros'

export default {
  name: 'App',

  components: {
    //Nosotros
  },

  data: () => ({
    nosotros: true
  })
}
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=B612|Barrio&display=swap')
//font-family: 'Barrio', cursive
//font-family: 'B612', sans-serif
</style>
