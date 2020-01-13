
export const state = {
    _token:'',
    authenticated: false,
    user_id: '',
    role: '',
    haha: 'bobo'
}

export const mutations = {
    SET_AUTH_TOKEN(state, $parameter ){
        state._token = $parameter
    },
    SET_AUTH_ID(state, $parameter){
        state.user_id  = $parameter
    },
    SET_AUTH_ROLE(state,$parameter){
        state.role = $parameter
    }

}


export const actions = {
        SET_AUTH_TOKEN_A({commit},$parameter){
            commit('SET_AUTH_TOKEN',$parameter)
        },
        SET_AUTH_ID_A({commit},$parameter) {
            commit('SET_AUTH_ID',$parameter)
        },
        SET_AUTH_ROLE_A({commit}, $parameter) {
            commit('SET_AUTH_ROLE',$parameter)
        }
}

export const getters = {
    TOKEN_G:(state)=>{
        return state._token
    }
}


