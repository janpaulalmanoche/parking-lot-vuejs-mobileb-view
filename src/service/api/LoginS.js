import apiClient from './apiClient.js';
import axios from 'axios'
const api = apiClient.baseAPI;

const baseAPI = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: false,
    headers:{
        Accept:'application/json',
        'Content-type' : 'application/json',
    }
})

export default{

    login_s($username , $password){
        return baseAPI.post('/login',
            {
                'username':$username,
                'password':$password
            }
        ).then((response)=>{
            console.log(response.data)
        }).catch( (error)=>{

        })
    },






}