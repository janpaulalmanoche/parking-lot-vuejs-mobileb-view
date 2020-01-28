export const state = {
    show_plot:false,

    count: '0'
}

export const mutations = {
    SHOW_PLOT(state)
    {
        state.show_plot = !state.show_plot
    },
    RESET_PLOT(state){
        state.show_plot = !state.show_plot
    },
    SET_COUNT(state , $param){
        state.count = $param
    }
}

export const actions = {

    SET_COUNT_A({commit},$param){
        commit('SET_COUNT',$param)
    },

    SHOW_PLOT_A({commit}){
        commit('SHOW_PLOT')
    },

    RESET_SHOW_PLOT({commit}){
        commit('RESET_PLOT')
    }

}