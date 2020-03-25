/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered() {
      console.log('Service worker has been registered.')
    },
    cached() {
      console.log('Content has been cached for offline use.')
    },
    updatefound() {
      console.log('New content is downloading.')
      alert(
        'Hay nuevo contenido disponible. Haz click en aceptar para comenzar la descarga en segundo plano.'
      )
    },
    updated() {
      console.log('New content is available; please refresh.')
      alert(
        'Aplicación actualizada, cierre por completo la aplicación y vuelve a entrar para ver los nuevos cambios'
      )
    },
    offline() {
      console.log(
        'No internet connection found. App is running in offline mode.'
      )
    },
    error(error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
