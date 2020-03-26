<template>
  <v-container class="d-flex flex-column align-center todo">
    <div class="d-flex flex-row linki">
      <v-icon color="white">mdi-phone</v-icon>
      <h2>2222659298</h2>
    </div>
    <div class="d-flex flex-row linki">
      <v-icon color="white">mdi-email</v-icon>
      <h2>apuntoagora@gmail.com</h2>
    </div>
    <div>
      <a
        class="d-flex flex-row linki"
        href="https://www.facebook.com/puntoagora/"
        target="_blank"
      >
        <v-icon color="white">mdi-facebook</v-icon>
        <h2>@puntoagora</h2>
      </a>
    </div>
    <div>
      <a
        class="d-flex flex-row linki"
        href="https://www.instagram.com/puntoagora/"
        target="_blank"
      >
        <v-icon color="white">mdi-instagram</v-icon>
        <h2>@puntoagora</h2>
      </a>
    </div>
  </v-container>
</template>
<style lang="sass" scoped>
.linki
    text-decoration: none !important
    color: white
    margin-bottom: 1rem

.todo
  background-color: rgba(116,207,206,0.8)
  border-radius: 25px
  padding: 2rem
</style>
