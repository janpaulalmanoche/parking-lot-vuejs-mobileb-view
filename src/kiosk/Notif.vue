<template>
    <div>

        <q-dialog v-model="table" persistent>
            <q-card>
                <q-card-section>
                    <div class="text-h6">Result</div>
                </q-card-section>

                <q-card-section>
                    <q-markup-table flat bordered>
                        <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-right">Birth Date</th>
                            <th class="text-right">Burial Date</th>
                            <th class="text-right">Select</th>
                        </tr>
                        </thead>
                        <tbody class="bg-grey-3">
                        <tr v-for="result in search_result" :key="result.id">
                            <td class="text-left">{{result.first_name}} {{result.last_name}}</td>
                            <td class="text-right">{{result.birth_date}}</td>
                            <td class="text-right">{{result.created_at}}</td>
                            <td class="text-right">

                                <q-btn round :loading="loading5" size="xs" color="primary" @click="(simulateProgress(5) , setID(result.id) )"
                                       icon="play_arrow">
                                    <template v-slot:loading>
                                        <q-spinner-facebook />
                                    </template>
                                </q-btn>
                            </td>
                        </tr>
                        </tbody>
                    </q-markup-table>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="close" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>



        <q-dialog
                v-model="medium"
                persistent
        >
            <q-card style="width: 700px; max-width: 80vw;">
                <q-card-section>
                    <div class="q-pa-md">
                        <q-card class="my-card">
                            <q-parallax
                                    src="https://cdn.quasar.dev/img/parallax1.jpg"
                                    :height="150"
                            />

                            <q-card-section>
                                <div class="text-h6">
                                " {{chosenName}} "
                                </div>
                                <!--<div class="text-subtitle2">by John Doe</div>-->
                                <q-input v-model="input" label="Search Using Surname" icon="search" />
                                <br/>


                                <q-btn
                                icon="search"
                                :loading="loading1"
                                :percentage="percentage1"
                                color="primary"
                                @click="startComputing(1)"
                                style="width: 150px"
                                >
                                Search
                                <template v-slot:loading>
                                <q-spinner-gears class="on-left" />
                                Searching...
                                </template>
                                </q-btn>

                                <q-btn class="flat"
                                       @click="close_search"
                                        color="red-5" label="Close"  style="margin-left: 20px" icon="close" />

                            </q-card-section>


                        </q-card>
                    </div>

                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                    <!--<q-btn flat label="OK" v-close-popup />-->
                </q-card-actions>
            </q-card>
        </q-dialog>

        <div class="column items-center" style="margin-top: 3px; margin-bottom: 100px;">
            <q-fab color="secondary" push icon="keyboard_arrow_right" direction="right">
                <q-fab-action color="primary" @click="showNotif('center')" icon="search" />
                <q-fab-action color="orange-7"  to="/" icon="home" />
                <q-fab-action color="accent"  to="/" icon="close" />
            </q-fab>

        </div>

    </div>
</template>
<script>
    import {mapState    } from 'vuex';
    import axios from 'axios';
    const alerts = [
        // { color: 'negative', message: 'Woah! Danger! You are getting good at this!', icon: 'report_problem' },
        // { message: 'You need to know about this!', icon: 'warning' },
        // { message: 'Wow! Nice job!', icon: 'thumb_up' },
        // { color: 'teal', message: 'Quasar is cool! Right?', icon: 'tag_faces' },
        { color: 'purple',
            message: 'Make sure you type the surname of the person', avatar: 'https://cdn.quasar.dev/img/boy-avatar.png' },
    ]

    export default {
        data () {
            return {
                medium: false,
                input: '',
                table:false,
                search_result:{},
                id:'',
                list: [],
                chosenName: '',

                loading1: false,
                percentage1: 0,
                loading2: false,
                percentage2: 0,
                loading3: false,
                percentage3: 0,


                loading4: false,
                loading5: false,
                loading6: false,
                progress: false
            }

        },
        computed:mapState({
            quote_:state => state.quotes.quotes
        }),
        methods: {
        //for the slecetion button
            close_search(){
                this.medium = false
            },

            showPLOT(){
                this.$store.dispatch('SHOW_PLOT_A')
            },
            setID($id){
              this.id = $id
            },
            simulateProgress (number) {
                // we set loading state
                this[`loading${number}`] = true
                // simulate a delay
                setTimeout(() => {
                    // we're done, we reset loading state
                    this[`loading${number}`] = false

                    axios.post('http://127.0.0.1:8000/api/display-plot',
                        {
                            'id': this.id
                        }).then((response) =>{
                            this.$q.notify({
                                message: 'Proceed to this HIghlited Area',
                                color: 'secondary',
                                position:'top',
                                timeout:0,
                                actions:[
                                    { label: 'Continue', color: 'yellow', handler: () => { this.showPLOT() } },
                                ]
                            })
                        let a = response.data.area.area
                        this.$store.dispatch('SET_PLOT_a',response.data.plot)
                        this.$store.dispatch('AREA',a)
                        this.$store.dispatch('PERSON_INFO_A',response.data.record)
                        console.log('area',a)
                        switch (a) {
                            case a = 'A':
                                this.$store.dispatch('SET_IMG_TRUE_A');
                                this.$store.dispatch('AA');
                                break;

                            case a = 'B':
                                this.$store.dispatch('SET_IMG_TRUE_A');
                                this.$store.dispatch('BB');
                                break;
                            case a = 'C':
                                this.$store.dispatch('SET_IMG_TRUE_A');
                                this.$store.dispatch('CC');
                                break;
                            case a = 'D':
                                this.$store.dispatch('SET_IMG_TRUE_A');
                                this.$store.dispatch('DD');
                                break;
                            case a = 'E':
                                this.$store.dispatch('SET_IMG_TRUE_A');
                                this.$store.dispatch('EE');
                                break;
                            case a = 'F':
                                this.$store.dispatch('SET_IMG_TRUE_A');
                                this.$store.dispatch('FF');
                                break;
                            case a = 'G':
                                this.$store.dispatch('SET_IMG_TRUE_A');
                                this.$store.dispatch('GG');
                                break;
                            case a = 'H':
                                this.$store.dispatch('SET_IMG_TRUE_A');
                                this.$store.dispatch('HH');
                                break;
                        }

                            

                    }).catch((error)=>{

                        console.log(error.response)
                    })
                    this.table = !this.table
                }, 3000)
            },

            picker: function() {
                var chosenNumber = Math.floor(Math.random() * this.quote_.length);
                this.chosenName = this.quote_[chosenNumber];
            },
            showSearchBar() {
                alert('quote_')
            },
            showNotif (position) {
                this.picker()
               this.medium = true
                const { color, textColor, multiLine, icon, message, avatar } = alerts[ Math.floor(Math.random(alerts.length) * 10) % alerts.length ]
                const random = Math.random() * 100

                const twoActions = random > 70
                const buttonColor = color ? 'white' : void 0

                this.$q.notify({
                    color,
                    textColor,
                    icon: random > 30 ? icon : null,
                    message,
                    position,
                    avatar,
                    multiLine,
                    actions: twoActions
                        ? [
                            // { label: 'Reply', color: buttonColor, handler: () => { /* console.log('wooow') */ } },
                            { label: 'Dismiss', color: 'yellow', handler: () => { /* console.log('wooow') */ } }
                        ]
                        : (random > 40
                                ? { label: 'Dismiss', color: 'yellow', handler: () => { /* console.log('wooow') */ } }
                                : null
                        ),
                    timeout: Math.random() * 5000 + 3000
                })
            },
            startComputing (id) {
                this[`loading${id}`] = true
                this[`percentage${id}`] = 0
                this[`interval${id}`] = setInterval(() => {
                    this[`percentage${id}`] += Math.floor(Math.random() * 8 + 10)
                    if (this[`percentage${id}`] >= 100) {
                        clearInterval(this[`interval${id}`])


                        axios.post('http://127.0.0.1:8000/api/search',
                            {
                                'name': this.input
                            }).then((response) =>{
                                if(response.data.length){
                                    this.$q.notify({
                                        message: 'We found some records of what your looking ',
                                        color: 'secondary',
                                        position:'top',
                                    })
                                    this.medium = !this.medium
                                    this.table = !this.table
                                    this.search_result = response.data

                                    console.log(response.data)
                                }else{
                                    this.$q.notify({
                                        message: 'We cant find the person youre looking for.' +
                                            ' Please make sure you type the name correctly',
                                        color: 'orange-8',
                                        position:'top'
                                    })

                                    this.medium = !this.medium

                                }
                        }).catch((error)=>{

                            console.log(error.response)
                        })

                        this[`loading${id}`] = false
                        this.input = ''
                    }
                }, 700)
            }
        },

        beforeDestroy () {
            clearInterval(this.interval1)
            clearInterval(this.interval2)
        }


    }
</script>

<style scoped>

</style>
