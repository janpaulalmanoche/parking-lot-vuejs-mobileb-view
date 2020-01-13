export const state={
    showImg: true,
    areaImg:{
        A:false,
        B:false,
        C:false,
        D:false,
        E:false,
        F:false,
        G:false,
        H:false
    },
    Area:'',
    person_info:[],
    plot_info:[]
}

export const mutations = {

        PERSON_INFO(state,$payload){
            state.person_info = $payload
        },
        RESET_M(state){
          state.showImg = true
            state.areaImg.A = false ,state.areaImg.B = false ,state.areaImg.C = false,
                state.areaImg.D = false ,state.areaImg.E = false ,state.areaImg.F = false,
                state.areaImg.G = false ,state.areaImg.H = false
        },
    SET_PLOT_INFO(state , $payload){
          state.plot_info = $payload
    },
    SET_IMG_TRUE_M(state){
        state.showImg = !state.showImg
    },

    SET_AREA(state,$payload){
        state.Area = $payload
    },
    SET_IMG_AREA_A(state){
        state.areaImg.A = !state.areaImg.A
        state.areaImg.B = false
        state.areaImg.C = false
        state.areaImg.D = false
        state.areaImg.E = false
        state.areaImg.F = false
        state.areaImg.G = false
        state.areaImg.H = false
    },

    SET_IMG_AREA_B(state){
        state.areaImg.B = !state.areaImg.B
        state.areaImg.A = false
        state.areaImg.C = false
        state.areaImg.D = false
        state.areaImg.E = false
        state.areaImg.F = false
        state.areaImg.G = false
        state.areaImg.H = false
    },

    SET_IMG_AREA_C(state){
        state.areaImg.C = !state.areaImg.C
        state.areaImg.A = false
        state.areaImg.B = false
        state.areaImg.D = false
        state.areaImg.E = false
        state.areaImg.F = false
        state.areaImg.G = false
        state.areaImg.H = false
    },

    SET_IMG_AREA_D(state){
        state.areaImg.D = !state.areaImg.D
        state.areaImg.A = false
        state.areaImg.B = false
        state.areaImg.C = false
        state.areaImg.E = false
        state.areaImg.F = false
        state.areaImg.G = false
        state.areaImg.H = false
    },

    SET_IMG_AREA_E(state){
        state.areaImg.E = !state.areaImg.E
        state.areaImg.A = false
        state.areaImg.B = false
        state.areaImg.C = false
        state.areaImg.D = false
        state.areaImg.F = false
        state.areaImg.G = false
        state.areaImg.H = false
    },

    SET_IMG_AREA_F(state){
        state.areaImg.F = !state.areaImg.F
        state.areaImg.A = false
        state.areaImg.B = false
        state.areaImg.C = false
        state.areaImg.D = false
        state.areaImg.E = false
        state.areaImg.G = false
        state.areaImg.H = false
    },

    SET_IMG_AREA_G(state){
        state.areaImg.G = !state.areaImg.G
        state.areaImg.A = false
        state.areaImg.B = false
        state.areaImg.C = false
        state.areaImg.D = false
        state.areaImg.F = false
        state.areaImg.E = false
        state.areaImg.H = false
    },

    SET_IMG_AREA_H(state){
        state.areaImg.H = !state.areaImg.H
        state.areaImg.A = false
        state.areaImg.B = false
        state.areaImg.C = false
        state.areaImg.D = false
        state.areaImg.F = false
        state.areaImg.G = false
        state.areaImg.E = false
    },

}

export const actions = {
    PERSON_INFO_A({commit},$payload){
        commit('PERSON_INFO',$payload)
    },
    RESET_A({commit}){
        commit('RESET_M')
    },
    SET_PLOT_a({commit},$paylod){
      commit('SET_PLOT_INFO',$paylod)
    },

    SET_IMG_TRUE_A({commit}){
        commit('SET_IMG_TRUE_M')
    },

    AREA({commit},$paylod){
        commit('SET_AREA',$paylod)
    },


    AA({commit}){
        commit('SET_IMG_AREA_A')
    },

    BB({commit}){
        commit('SET_IMG_AREA_B')
    },

    CC({commit}){
        commit('SET_IMG_AREA_C')
    },

    DD({commit}){
        commit('SET_IMG_AREA_D')
    },

    EE({commit}){
        commit('SET_IMG_AREA_E')
    },

    FF({commit}){
        commit('SET_IMG_AREA_F')
    },

    GG({commit}){
        commit('SET_IMG_AREA_G')
    },


    HH({commit}){
        commit('SET_IMG_AREA_H')
    },


}