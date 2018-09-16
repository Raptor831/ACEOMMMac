'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource';
import Foundation from 'foundation-sites'
import App from './App';

Vue.use(VueResource);

const app = new Vue({
    el: '#aceomm',
    render: h => h(App)
})
