import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

import * as index3 from './kiosk/index3'
import * as quotes from './kiosk/quotes'
Vue.use(Vuex)
import * as plot from './kiosk/plot'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example

        index3,
        quotes,
        plot
    },
      state: {
         tokenz: '',
      },
      mutations: {

          SET_AUTH_TOKENZ(state, $parameter ){
              state.tokenz = $parameter
          },
      },
      actions:{
          SET_AUTH_TOKEN_AZ({commit},$parameter){
              commit('SET_AUTH_TOKENZ',$parameter)
          },
      },
      getters: {
          config: state => state.tokenz
      },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
