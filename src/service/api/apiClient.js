import axios from 'axios'
// <--- Import the library //to use the loadbae
import {mapState,mapMutations} from 'vuex';


computed:mapState({
    _token:state =>state.authS._token
})

const baseAPI = axios.create({//A single Axios instance for our enterire app
    baseURL: 'http://127.0.0.1:8000/api/teacher/',  //base url for all calls to use
    withCredentials: false,
    headers:{ //authenticatin and configuration
        Accept:'application/json',
        'Content-type' : 'application/json',
        'Authorization': 'Bearer'
            +
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU3NDIyNzk0OCwiZXhwIjoxNTgwMjI3ODg4LCJuYmYiOjE1NzQyMjc5NDgsImp0aSI6IjRxUVJlWnRsOGpyUDJpbEMiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.3eBPaRS17SDdLkjppll4zmf_dFSxECQpxRL65Ow3tnI '
    }
})

//this one is usefull especially when you are just building from local,until to live server,just rename the baseUrl


export default {
    baseAPI
}