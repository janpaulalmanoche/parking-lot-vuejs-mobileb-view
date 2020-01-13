export const state = {
    showModal:false
}

export const mutations = {
    SET_MODAL_FALSE(state){
        state.showModal = !state.showModal
    }
}

export const actions={
    action_SET_MODAL_FALSE({commit}){
        commit('SET_MODAL_FALSE')
    }
}