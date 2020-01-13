<!--<template>-->
  <!--<q-layout view="hHh lpR fFf">-->
    <!--<q-header elevated>-->
      <!--<q-toolbar>-->

        <!--&lt;!&ndash;this is for tha button to hide or unhide the sidebar&ndash;&gt;-->
        <!--&lt;!&ndash;<q-btn&ndash;&gt;-->
                <!--&lt;!&ndash;flat&ndash;&gt;-->
                <!--&lt;!&ndash;dense&ndash;&gt;-->
                <!--&lt;!&ndash;round&ndash;&gt;-->
                <!--&lt;!&ndash;@click="leftDrawerOpen = !leftDrawerOpen"&ndash;&gt;-->
                <!--&lt;!&ndash;aria-label="Menu"&ndash;&gt;-->
        <!--&lt;!&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;<q-icon name="menu" />&ndash;&gt;-->
        <!--&lt;!&ndash;</q-btn>&ndash;&gt;-->

        <!--<q-toolbar-title class="absolute-center">-->
          <!--Awesome Todo-->
        <!--</q-toolbar-title>-->

        <!--&lt;!&ndash;<div>Quasar v{{ $q.version }}</div>&ndash;&gt;-->


      <!--</q-toolbar>-->
    <!--</q-header>-->

    <!--&lt;!&ndash;footer&ndash;&gt;-->
    <!--<q-footer>-->
      <!--<q-tabs >-->
          <!--<q-route-tab-->
                  <!--v-for="(navs ,index) in navsFromVuex"-->
                  <!--:key="navs.label"-->
                  <!--:to="navs.to"-->
                  <!--:icon="navs.icon"-->
                  <!--exact-->
                  <!--:label="navs.label"/>-->

      <!--</q-tabs>-->
    <!--</q-footer>-->

    <!--&lt;!&ndash;sidebar&ndash;&gt;-->

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


    <!--<q-page-container>-->
      <!--<router-view />-->
    <!--</q-page-container>-->
  <!--</q-layout>-->
<!--</template>-->

<!--<script>-->
  <!--import { openURL } from 'quasar'-->
  <!--import {mapState} from 'vuex'-->
  <!--export default {-->
    <!--name: 'MyLayout',-->
    <!--data () {-->
      <!--return {-->
        <!--leftDrawerOpen: false-->
      <!--}-->
    <!--},-->
    <!--computed:mapState({-->
      <!--navsFromVuex: state => state.routerModule.navs-->
    <!--}),-->
    <!--methods: {-->
      <!--openURL-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--&lt;!&ndash;so we can hide the footer when the width of the device is 768px we will hide the footer&ndash;&gt;-->
  <!--<style lang="scss">-->
    <!--@media screen and (min-width:768px){-->
        <!--.q-footer{-->
          <!--display:none-->
        <!--}-->
    <!--}-->
    <!--/*this will overide the current class active, incae you chaneg colors*/-->
    <!--.q-drawer {-->
      <!--/*.q-router-link&#45;&#45;exact-active{*/-->
        <!--/*color:red !important;*/-->
      <!--/*}*/-->
    <!--}-->
  <!--</style>-->