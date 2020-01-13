<template>
    <div>
        <q-dialog v-model="confirm" persistent full-width transition-show="flip-down" transition-hide="flip-up">
            <q-card class="bg-primary text-white">
                <q-card-section class="row items-center">


                    <div id="content-header">
                        <div class="container-fluid">
                            <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                                <h5>Plot Area Information: {{person.first_name}} {{person.last_name}}</h5>
                            </div>
                            <div class="widget-box">
                                <div class="widget-content nopadding">
                                    <main class="grid" >

                                        <a v-for="(plot ,index) in plots" v-bind:key="plot.id">
                                            <div class="grid-item" v-bind:style="{ backgroundColor: plot.color[0]}">
                                                {{plot.id}}

                                                {{plot.status}}

                                            </div>

                                        </a>

                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Close" @click="reset_plot" color="orange"/>

                </q-card-actions>
            </q-card>

        </q-dialog>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {

        computed:mapState({
            plots:state =>state.index3.plot_info,
            person:state => state.index3.person_info,
                confirm:state => state.plot.show_plot
        }),
        methods: {
            reset_plot(){
              this.$store.dispatch('RESET_SHOW_PLOT')
              this.$store.dispatch('RESET_A')
            },
            haha($payload) {

            }
        },
    }
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-gap: 10px;
        align-items: start;
        justify-items: center;
        margin:5px 2px;
    }
    .grid img {
        border: 1px solid rgba(0,0,0,0.3);
        box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
        max-width: 100%;
    }
    .grid-item {

        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 13px;
        text-align: center;
    }

</style>