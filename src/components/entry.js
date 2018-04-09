/* global Vue */

/* weex initialized here, please do not move this line */
const router = require('../router')
const page2 = require('@/components/page2.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, page2))
router.push('/')
