import apiClientS from '../../api/apiClientS.js'

const api = apiClientS.baseAPIS

export default{
    available_class(){
        return api.get('/available-class')
    },

}