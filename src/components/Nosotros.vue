<template>
  <v-row>
    <v-col class="d-flex flex-column justify-center align-center" cols="12">
      <v-avatar
        @click="selectPersona('Al')"
        color="white"
        size="150"
        v-show="persona === ''"
      >
        <v-img src="../assets/al.jpeg" class="perfil" />
      </v-avatar>
      <div v-show="persona === 'Al'">
        <div class="todo d-flex flex-column justify-center align-center">
          <v-avatar
            @click="selectPersona('Al')"
            color="white"
            size="150"
            v-show="persona === 'Al' || persona === ''"
          >
            <v-img src="../assets/al.jpeg" class="perfil" />
          </v-avatar>
          <p class=" ma-5 headline">
            Coordinador y miembro de Punto Ágora. Licenciado en Artes Plásticas
            enfocado en la intervención y reanimación de espacios públicos. Ha
            colaborado en proyectos de intervención mural y experimentación
            plástica, desde hace 6 años como, gestor, artista, muralista,
            tallerista y voluntario. Fue beneficiario del Programa de Estímulo a
            la Creación y al Desarrollo Artístico 2013 del Fondo Estatal para la
            Cultura y las Artes de Puebla ( PECDAP ) y por segunda ocasión
            beneficiario de este programa en el año 2015-2016, con un proyecto
            de Arte Urbano. <br /><br />Ex jugador de Baloncesto, Originario de
            la ciudad de Puebla, personaje místico, bohemio, extrovertido,
            caótico, amante de las artes, el graffiti, las expresiones humanas,
            la magia y todo lo que se le permita ver en este plano cósmico. Su
            interés por lo atrevido, mágico, inesperado, y fugaz de las cosas,
            así como su formación disciplinaria en el ámbito deportivo, le han
            permitido desarrollarse con mayor agilidad y de manera acertada en
            su camino experiencial. "Caminos existen muchos, vidas quizá solo
            una o quizá ninguna pero los momentos son los que definen nuestros
            sentimientos."
          </p>
          <div class="d-flex flex-column justify-center align-center">
            <v-btn text @click="selectPersona('')"
              ><v-icon class="equis" color="white">mdi-close</v-icon></v-btn
            >
          </div>
        </div>
      </div>
    </v-col>
    <v-col class="d-flex flex-row justify-center align-center" cols="12">
      <v-avatar
        @click="selectPersona('Rob')"
        color="white"
        size="150"
        v-show="persona === ''"
      >
        <img src="../assets/rob.jpg" id="rob" class="perfil" />
      </v-avatar>
      <div v-show="persona === 'Rob'">
        <div class="d-flex flex-column align-center todo">
          <v-avatar
            @click="selectPersona('Rob')"
            color="white mb-5"
            size="150"
            v-show="persona === 'Rob' || persona === ''"
          >
            <img src="../assets/rob.jpg" id="rob" class="perfil" />
          </v-avatar>
          <p class="headline">
            Ingeniero en Sistemas Computacionales y Diseñador Web apasionado por
            la interacción humano computadora, el desarrollo web y la
            automatización de procesos. Amante del buen café, la tecnología y el
            emprendimiento. Comenzó su trayectoria como programador a los 14
            años cuando tuvo su primer computadora. Durante su preparatoria y
            universidad se dedicó al freelance realizando minijuegos y páginas
            web. A mediados de la universidad trabajó en proyectos de
            automatización de procesos para la empresa, al igual que en
            proyectos de IOT (internet de las cosas). Durante su último año de
            la universidad fundó una empres a de diseño y desarrollo de
            tecnologías.<br /><br />
            También fungió como coordinador de proyectos de tecnología en
            Ludicultura donde se encargaba de intervenir tecnológicamente
            procesos, necesidades y actividades de la organización. Actualmente
            es cofundador y director del área de ingeniería en Ópalo Studio
            donde se dedica a dirigir y desarrollar proyectos de software e
            innovación tecnológica.
          </p>

          <div class="d-flex flex-column justify-center align-center">
            <v-btn text @click="selectPersona('')"
              ><v-icon class="equis" color="white">mdi-close</v-icon></v-btn
            >
          </div>
        </div>
      </div>

      <v-avatar
        @click="selectPersona('Gabo')"
        color="white"
        size="150"
        class="ml-10"
        v-show="persona === ''"
      >
        <img
          lazy-src="https://cdn.vuetifyjs.com/images/john.jpg"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          class="perfil"
        />
      </v-avatar>
      <div v-show="persona === 'Gabo'">
        <div class="d-flex flex-column align-center todo">
          <v-avatar
            @click="selectPersona('Gabo')"
            color="white"
            size="150"
            class="mb-10 "
            v-show="persona === 'Gabo' || persona === ''"
          >
            <img
              lazy-src="https://cdn.vuetifyjs.com/images/john.jpg"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              class="perfil"
            />
          </v-avatar>
          <p class="headline ">
            Orgulloso polímata aficionado. Fascinado por el funcionamiento de
            las cosas desde chico, encontró una fascinación particular por la
            electrónica, donde fenómenos físicos desde lo más simple hasta lo
            cuántico, sucden de formas a menudo invisibles para conformar
            máquinas y sistemas con capacidades que llegan hasta a retar a
            nuestra imaginación. A la par de estos intereses, una pasión por las
            artes, en particular la música y la plástica, así como por la
            emoción de materializar lo que uno ha inventado, han convergido en
            trabajos donde se explora la naturaleza del circuito electrónico
            como medio artístico. Concluyó una carrera técnica en diseño de
            sistemas electrónicos a los 12 años, posteriormente una en diseño
            gráfico durante su bachillerato, para finalmente estudiar Ingeniería
            en Electrónica en la UDLAP. <br /><br />Actualmente dirige
            Protoplasma, donde realiza ingeniería de producto y diseño
            industrial. Fundó esta empresa concluyendo sus estudios para
            demostrar la capacidad de la industria, diseñadores e ingenieros
            mexicanos para crear productos electrónicos de consumo de gran
            calidad y excelente diseño.Todos los diseños de los productos se
            liberan como fuente abierta y se produce material educativo de
            mediana especialización, de acceso gratuito y en español, con el
            objetivo de inspirar y preparar a las nacientes generaciones de
            inventores.
          </p>
          <div class="d-flex flex-column justify-center align-center">
            <v-btn text @click="selectPersona('')"
              ><v-icon class="equis" color="white">mdi-close</v-icon></v-btn
            >
          </div>
        </div>
      </div></v-col
    >
  </v-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      persona: ''
    }
  },
  methods: {
    selectPersona(x) {
      this.persona = x
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.perfil:hover
  height: 350px
  width: 350px
  cursor: pointer

#rob:hover
  margin-left: -1.5rem

.equis
  font-size: 3rem !important

.todo
  background-color: rgba(116,207,206,0.8)
  border-radius: 25px
  padding: 2rem
</style>
