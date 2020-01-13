import Vue from 'vue'
import { uid } from 'quasar'

export const state = {
    tasks:{
        'ID1':{
            name: 'Go to Shop',
            completed:false,
            dueDate: '2019/9/2019',
            dueTime: '9:00',
        },
        'ID2':{
            name: 'Get Bananas',
            completed:false,
            dueDate: '2019/6/2019',
            dueTime: '13:00',
        },
        'ID3':{
            name: 'Get Apples',
            completed:false,
            dueDate: '2019/2/2019',
            dueTime: '11:00',
        }
    },
    task_find_by_id:'',
}

export const mutations = {
    SET_TRUE_OR_FALSE(state , $params){
        Object.assign(state.tasks[$params.id] ,$params.updates)
        //this is an example of finding the ID to that array and assign it with the folwing values
        //find by index ,thatd the secret but anayway since you will send an http request, you jut need an id
    },
    DELETE(state, $params){
        // delete state.tasks[$params]
        Vue.delete(state.tasks, $params)
    },
    //so when delete a key inside the arrasy, you need to do something so it will update
    SAVE_TASK(state , paylod){
        Vue.set(state.tasks , paylod.id , paylod.tasks)
        //those paylod.id , paylod.tasks matches in the actiosn on below
        //so this is how you add data into the existing state data,
        //incase you dont want to have a new data from the server cause it may caue delay
        //its like on the delete
    },

}

export const actions = {
    update_tasks_action({commit},$params){
        commit('SET_TRUE_OR_FALSE',$params)
    },
    deleteTask({commit} ,$id){
        commit('DELETE',$id)
    },
    addTask({commit} ,$data){
        let taskID = uid()
        let paylod = {
            id:taskID,
            tasks: $data
        }
        commit('SAVE_TASK',paylod)

    }
}

export const getters = {
    tasksTodo:(state) =>{
        let tasks = {}
        Object.keys(state.tasks).forEach(function (key) {
                let task = state.tasks[key]
            if(!task.completed){
                tasks[key] = task
            }
        })
        return state.tasks
    },

    tasksCompleted:(state) =>{
        let tasks = {}
        Object.keys(state.tasks).forEach(function (key) {
            let task = state.tasks[key]
            if(task.completed){
                tasks[key] = task
            }
        })
        return tasks
    }

}