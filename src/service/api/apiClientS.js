import axios from 'axios'
// <--- Import the library //to use the loadbae
import {mapState,mapMutations} from 'vuex';
import {store} from 'src/store/index'



const baseAPIS = axios.create({//A single Axios instance for our enterire app
    baseURL: 'http://127.0.0.1:8000/api/student/',  //base url for all calls to use
    withCredentials: false,
    headers: { //authenticatin and configuration
        Accept: 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU3MzYyNDQ3NCwiZXhwIjoxNTc5NjI0NDE0LCJuYmYiOjE1NzM2MjQ0NzQsImp0aSI6ImkydTZJcUVWMldPbVpxTnEiLCJzdWIiOjQsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.On0LI_93PYF1_HJ8U_sa5YPHUHG1zMEhxqU0yAf9Gfo '}


})

//this
// one is usefull especially when you are just building from local,until to live server,just rename the baseUrl

export default {

    baseAPIS
}