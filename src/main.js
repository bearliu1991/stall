// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap'
import { Form, FormItem, Input, Message, Popover, Button } from 'element-ui'
import _path from './path'
import {_platform} from './utils/common'

Vue.config.productionTip = false
Vue.use(VueAMap)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Popover)
Vue.use(Button)
Vue.prototype.$message = Message
Vue.prototype._path = _path
Vue.prototype._platform = _platform
VueAMap.initAMapApiLoader({
  key: 'd22a6b2ca67eee7347de305ac69d7256',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
