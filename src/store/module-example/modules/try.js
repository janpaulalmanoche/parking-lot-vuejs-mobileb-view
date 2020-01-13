export const state = {
    tryy : ''
}

export const mutations = {
    TRY(state , data){
        state.tryy = data
    }
}

export const actions = {
    TRY_A({commit} , data){
        commit('TRY',data)
    }
}