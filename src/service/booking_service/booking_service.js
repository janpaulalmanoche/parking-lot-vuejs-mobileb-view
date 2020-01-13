import apiClient from '../api/apiClient.js'

const api = apiClient.baseAPI

export default {
    teacher_booking($max_capacity,$start,$end){
        return api.post('/store-class' ,
            {
                'max_capacity':$max_capacity,
                'start':$start,
                'end':$end
            })
    },

    class_list(){
        return api.get('/class-list-teacher')
    },

    teacher_booking_approve($book_id){
        return api.post('/booking-request/approve',{
            'booking_id':$book_id
        })
    }
}