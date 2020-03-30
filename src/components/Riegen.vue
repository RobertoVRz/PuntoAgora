<template>
  <v-container class="conteneodr" fluid>
    <div class="cuadro"></div>
    <v-img
      class="imagens"
      id="cosa"
      height="400px"
      contain
      src="../assets/riegen/cosa.png"
    />
    <v-img
      class="imagens"
      height="100px"
      contain
      id="on"
      v-if="on"
      src="../assets/riegen/nanosOn.png"
    />
    <v-img
      class="imagens"
      height="200px"
      contain
      id="off"
      src="../assets/riegen/nanoxOff.png"
    />
    <v-img
      class="imagens"
      height="100px"
      contain
      id="pleca"
      src="../assets/riegen/plecaBlanca.png"
    />
    <Vue2InteractDraggable
      @draggedDown="draggedDown"
      interact-max-rotation="15"
      interact-y-threshold="600"
      interact-lock-x-axis
      interact-lock-swipe-up
    >
      <v-img
        height="300px"
        contain
        id="brocha"
        src="../assets/riegen/brocha.png"
      />
    </Vue2InteractDraggable>
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

#cosa
  margin-left: -15rem
  margin-top: 3rem

#off
  margin-left: -8rem
  margin-top: 1rem
  z-index: 99

#brocha
  margin-left: -1rem
  margin-top: 1rem
  cursor: pointer
</style>
