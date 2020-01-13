export const state = {
    test: 'congrats you successfully integrate VUEX haha pakyu'
}

export const mutations = {
    SET_TEST(state){
        state.test = 'congrats you sucessfully mutate it using mutation of vuex trigger by the ACTION '
    }
}

export const actions = {
    executeAction({commit}){
        commit('SET_TEST')
    }
}