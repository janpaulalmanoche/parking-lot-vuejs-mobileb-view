import axios from 'axios';
import apiClient from './apiClient.js'

const api = apiClient.baseAPI



export default {

    getEvents(perPage,page){

        return api.get('/events?_limit= ' +perPage + "&_page=" + page);

    },

    getEvent(id){//geting the id base on a event
        return api.get('/events/' + id)
    },

    postEvent(event){//we are receiving a paremeter
            return api.post('/events',event)//and we are passing the paramter here
    }
}