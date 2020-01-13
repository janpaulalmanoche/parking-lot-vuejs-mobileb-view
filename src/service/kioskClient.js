import axios from 'axios'
// <--- Import the library //to use the loadbae
import {mapState,mapMutations} from 'vuex';
import {store} from 'src/store/index'



const baseAPIS = axios.create({//A single Axios instance for our enterire app
    baseURL: 'http://127.0.0.1:8000/api/',  //base url for all calls to use
    withCredentials: false,
    headers: { //authenticatin and configuration
        Accept: 'application/json',
        'Content-type': 'application/json'
    }

})


export default {

    baseAPIS
}