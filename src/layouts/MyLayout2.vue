<template>
  <!--<q-layout view="hHh lpR fFf">-->
    <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <!--this is for tha button to hide or unhide the sidebar-->
        <!--<q-btn-->
                <!--flat-->
                <!--dense-->
                <!--round-->
                <!--@click="leftDrawerOpen = !leftDrawerOpen"-->
                <!--aria-label="Menu"-->
        <!--&gt;-->
          <!--<q-icon name="menu" />-->
        <!--</q-btn>-->

        <q-toolbar-title class="absolute-center">
        Parking Lot
        </q-toolbar-title>

        <!--<div>Quasar v{{ $q.version }}</div>-->


      </q-toolbar>
    </q-header>

    <!--footer-->
    <q-footer>
      <q-tabs >
          <q-route-tab
                  v-for="(navs ,index) in navsFromVuex"
                  :key="navs.label"
                  :to="navs.to"
                  :icon="navs.icon"
                  exact
                  :label="navs.label"/>

      </q-tabs>
    </q-footer>

    <!--sidebar-->

    <!--<q-drawer-->
            <!--v-model="leftDrawerOpen"-->
            <!--show-if-above-->
            <!--bordered-->
            <!--:width="250"-->
    <!--&gt;-->
      <!--<q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">-->
        <!--<q-item-->
                <!--exact-->
                <!--clickable-->
                <!--v-for="(navs ,index) in navsFromVuex"-->
                <!--:to="navs.to"-->
                <!--:key="navs.label">-->

          <!--<q-item-section avatar>-->
            <!--<q-icon :name="navs.icon" />-->
          <!--</q-item-section>-->
          <!--<q-item-section>-->
            <!--<q-item-label>{{navs.label}}</q-item-label>-->
            <!--&lt;!&ndash;<q-item-label caption>quasar.dev</q-item-label>&ndash;&gt;-->
          <!--</q-item-section>-->
        <!--</q-item>-->
      <!--</q-scroll-area>-->

      <!--<q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">-->
        <!--<div class="absolute-bottom bg-transparent">-->
          <!--<q-avatar size="56px" class="q-mb-sm">-->
            <!--<img src="https://cdn.quasar.dev/img/boy-avatar.png">-->
          <!--</q-avatar>-->
          <!--<div class="text-weight-bold">Razvan Stoenescu</div>-->
          <!--<div>@rstoenescu</div>-->
        <!--</div>-->
      <!--</q-img>-->
    <!--</q-drawer>-->


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { openURL } from 'quasar'
  import {mapState} from 'vuex'
  export default {
    name: 'MyLayout',
    data () {
      return {
        leftDrawerOpen: false
      }
    },
    computed:mapState({
      // navsFromVuex: state => state.routerModule.navs
    }),
    methods: {
      openURL
    }
  }
</script>

<!--so we can hide the footer when the width of the device is 768px we will hide the footer-->
  <style lang="scss">
    @media screen and (min-width:768px){
        .q-footer{
          display:none
        }
    }
    /*this will overide the current class active, incae you chaneg colors*/
    .q-drawer {
      /*.q-router-link--exact-active{*/
        /*color:red !important;*/
      /*}*/
    }
  </style>