<template>

    <q-page>
    
        <!--login modal-->
        <q-dialog v-model="toolbar" persistent>
            <q-card>
                <q-toolbar>
                    <q-avatar>
                        <img src="./htc.png">
                    </q-avatar>

                    <q-toolbar-title><span class="text-weight-bold">User Login</span> (reservation)</q-toolbar-title>

                    <q-btn flat round dense icon="close" v-close-popup />
                </q-toolbar>

                <q-card-section>
                    <q-input v-model="email" label="email" stack-label  />
                    <q-input v-model="password" label="password" type="password" stack-label />
                    <br/>
                    <q-btn color="primary" label="Login" @click="user_login_submit"/>
                </q-card-section>
            </q-card>
        </q-dialog>


        <!--reservcation modal-->
        <q-dialog v-model="reservation_modal_state" persistent>
            <q-card>
                <q-card-section class="row items-center">
                    <q-avatar icon="book" color="primary" text-color="white" />
                    <span class="q-ml-sm">Book Reservation to this parking space ?</span>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="primary" v-close-popup />
                    <q-btn flat label="Yes" color="primary" @click="reservation"   v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <!--<a class="u-link-white" href="#" @click="toggleTimer">-->
        <!--hello-->
        <!--{{ time }}-->
        <!--</a>--> <q-card v-if="user_login">
        <q-card-section class="row items-center">
            <q-avatar icon="book" color="primary" text-color="white" />
            <span class="q-ml-sm">Logged in as: {{user_login_details.first_name}} {{user_login_details.last_name}}</span>
        </q-card-section>

        <q-card-actions align="left">
            <q-btn flat label="Logout" color="primary" v-close-popup @click="logout"/>
            <!--<q-btn flat label="Yes" color="primary" @click="reservation"   v-close-popup />-->
        </q-card-actions>
    </q-card>


        <main class="grid" >

            <a v-for="(plot ,index) in plots" v-bind:key="plot.id">
                <div class="grid-item" v-if="plot.status === 'available'"
                     @click=" user_login  ? reservation_modal(plot.id) : modal_1()">
                   Spot: {{plot.plot}} <br/>
                    {{plot.status}}
                </div>
                <div class="grid-item" v-else id="taken">

                   Spot: {{plot.plot}} <br/>

                    {{plot.status}}<br/>
                    <span class="span">
                     
                    {{plot.booking[0].user.last_name}}
                        
                        <!--<br/>Plate no:-->
                            <!--{{plot.booking[0].vehicle.plate_no}}-->


                    </span>
                </div>

            </a>

        </main>



    </q-page>

</template>

<script>

    // import {mapState} from 'vuex'
    import Notif from "./Notif";
    import Plot from "./Plot";
    // import axios from 'axios'
    import axios from 'axios';
    // axios.defaults.baseURL = process.env.BASE_URL;
    // let api = 'http://192.168.1.9:8000' + '/api/';
    let api = 'http://127.0.0.1:8000' + '/api/';
    // let api = 'https://2525afa1.ngrok.io'+'/api/';
    import {mapState} from 'vuex'
    export default {
        components: {Plot, Notif},

        mounted: function () {
            window.setInterval(() => {
                this.get_data(),
            this.count(),
                    this.remove_1hour_reserved_no_show_up()

            },2000);
            // this.get_data(),
            // this.count()
        },

        computed:mapState({
            counts: state => state.plot.count
        }),

        methods: {
            count() {
                axios.get(api + 'count')
                    .then((response) => {
                        console.log(response.data)
                        this.$store.dispatch('SET_COUNT_A',response.data)
                    })
            },
            get_data(){
                axios.get(api+'plot')
                    .then((response)=>{
                        // console.log(response.data.booking[0].user)
                        this.plots = response.data
                    })
            },

            modal_1(){
                this.toolbar = true
            },
            reservation_modal($plot_id) {
                this.active_selected_plot = $plot_id
                this.reservation_modal_state = true
            },
            //send api requet for reservcation
            reservation(){

                axios.post(api+'reserve-space',{
                    plot_id:this.active_selected_plot,
                    user_id:this.user_login_details.id
                }).then((response)=>{
                        if(response.data == 'on_plot_already'){
                             this.showNotif('You Cant Book Another Spot While On Parked'
                        ,'red','center')
                        }else{
                           console.log(response.data)
                    this.get_data()
                    this.showNotif('Successfully Reserved, (Reservation will be cancelled after 1 hour of no show up)','blue','center')
                        }
                 
                }).catch((error) =>{
             this.showNotif('Only One Reservation is allowed'
                        ,'red','center')
                })
            },
            user_login_submit(){

                axios.post(api+'user-login',{
                    email:this.email,
                    password:this.password
                })
                    .then((response)=>{
                        this.user_login = true
                        console.log(response.data)
                        this.showNotif('User Loged In Success , you can now reserved available parking space','purple','top')
                        // this.plots = response.data
                        this.user_login_details = response.data.data
                    }).catch( (error)=>{
                    console.log(error.response)
                    this.showNotif('Wrong Credentials, please make sure your email and password are correct','orange','top')
                });
                this.toolbar = false
            },

            logout(){
              this.user_login = false
                this.showNotif('Loged out succesfully','purple','top'
                )
            },

            remove_1hour_reserved_no_show_up(){
                axios.get(api+'reservation-check')
            },

            showNotif ($messase , $color,$position) {
                this.$q.notify({
                    message: $messase,
                    color: $color,
                    position:$position
                })
            }

        },
        data() {
            return {
                active_selected_plot:'',

                plots: [],
                time: '',
                isRunning: false,
                interval: null,
                toolbar: false,
                reservation_modal_state:false,
                user_login:false,
                user_login_details:{},
                email:'',
                password:'',

            }
        },


    }
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5px;
        align-items: start;
        justify-items: center;
        margin:2% 2px;
    }
    .grid img {
        border: 1px solid rgba(0,0,0,0.3);
        box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
        max-width: 20%;
    }
    .grid-item {

        background-color: rgb(0, 255, 0);
        border: 1px solid rgb(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 70px;
        text-align: center;
        text-align: center;
        line-height: 80px;
        height: 350px;
        width: 400px;
    }
    #taken{
        background-color:grey;


    }
    .span{
        font-size: 25px;
        margin-top: -200px !important;
    }

</style>


<!--ssh -R 80:localhost:8080 ssh.localhost.run-->