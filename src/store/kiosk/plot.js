export const state = {
    show_plot:false
}

export const mutations = {
    SHOW_PLOT(state)
    {
        state.show_plot = !state.show_plot
    },
    RESET_PLOT(state){
        state.show_plot = !state.show_plot
    }
}

export const actions = {

    SHOW_PLOT_A({commit}){
        commit('SHOW_PLOT')
    },

    RESET_SHOW_PLOT({commit}){
        commit('RESET_PLOT')
    }

}