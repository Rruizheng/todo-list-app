import Vue from 'vue'
import App from './app.vue'

import './assets/styles/test.css'
import './assets/styles/teststylus.styl'
import './assets/images/0.jpg'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    render: (h) => h(App)
}).$mount(root)