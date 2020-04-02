<template>
  <v-container class="conteneodr" fluid>
    <div class="cuadro"></div>
    <v-img
      class="imagens"
      id="cosa"
      height="400px"
      contain
      src="../assets/riegen3/cosa.png"
    />
    <v-img
      class="imagens"
      height="290px"
      contain
      id="on"
      v-show="on"
      src="../assets/riegen3/on.png"
    />
    <v-img
      class="imagens"
      height="250px"
      contain
      id="off"
      v-show="!on"
      src="../assets/riegen3/off.png"
    />
    <Vue2InteractDraggable
      @draggedDown="draggedDown"
      interact-y-threshold="600"
      interact-lock-x-axis
      interact-lock-swipe-up
    >
      <v-img
        height="300px"
        contain
        id="brocha"
        src="../assets/riegen3/brocha.png"
      />
    </Vue2InteractDraggable>
    <div class="cuadro2" @mouseover="on = true" @mouseout="on = false"></div>
  </v-container>
</template>

<script>
import { Vue2InteractDraggable } from 'vue2-interact'
export default {
  name: 'Interact',

  data: () => ({
    on: false
  }),
  components: {
    Vue2InteractDraggable
  }
}
</script>
<style lang="sass" scoped>
.conteneodr
  height: 500px
  width: 500px
  padding-top: 3rem
  background-color: white

.imagens
  position: absolute

.cuadro
  height: 100px
  width: 100px
  background-color: white
  position: absolute
  margin-left: 10rem
  margin-top: 0rem
  z-index: 9

.cuadro2
  height: 50px
  width: 120px
  background-color: transparent
  position: absolute
  margin-left: 10rem
  margin-top: 5rem
  z-index: 9

#cosa
  margin-left: -21rem
  margin-top: 3rem

#off
  margin-left: -9rem
  margin-top: -2rem
  z-index: 99

#on
  margin-left: -12.3rem
  margin-top: -3.3rem
  z-index: 99

#brocha
  margin-left: -1rem
  margin-top: 1rem
  cursor: pointer
</style>
