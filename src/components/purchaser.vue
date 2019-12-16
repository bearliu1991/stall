<template>
    <div id="purchaser" :class="[type === 'mobile' && 'mobile_purchaser']">
      <div class="header_bg">
        <img class="top_bg" src="@/assets/purchaserImg/header_bg.png">
        <div class="header_cont">
          <div class="app_main">
            <header :class="[type === 'mobile' ? 'active' : isActive ? 'active' : '']">
              <div class="header_wrap">
                <router-link to="/">
                  <img v-show="type !== 'mobile' && !isActive" src="@/assets/img/logo.png" />
                  <img v-show="type === 'mobile' || isActive" src="@/assets/img/logo_active.png" />
                </router-link>
                <ul v-if="type !== 'mobile'">
                  <li>
                    <a href="#anchor0" :class="[routeHash === '#anchor0' ? 'active' : '']">使用场景</a>
                  </li>
                  <li>
                    <a href="#anchor1" :class="[routeHash === '#anchor1' ? 'active' : '']">功能介绍</a>
                  </li>
                  <li><a href="javascript:void(0)">客服电话： 18069422773</a></li>
                </ul>
                <el-popover
                  v-if="type === 'mobile'"
                  placement="bottom"
                  width="40em"
                  trigger="click"
                >
                <ul :class="[type === 'mobile' && 'mobile_ul']">
                  <li>
                    <a href="#anchor0" :class="[routeHash === '#anchor0' ? 'active' : '']">使用场景</a>
                  </li>
                  <li>
                    <a href="#anchor1" :class="[routeHash === '#anchor1' ? 'active' : '']">功能介绍</a>
                  </li>
                  <li><a href="javascript:void(0)">客服电话： 18069422773</a></li>
                </ul>
                <img class="toggle_img" slot="reference" src="@/assets/mobile/green.png">
              </el-popover>
              </div>
            </header>
            <div class="logo_info">
              <p class="fn34">齐货，满足您所有服装批发的需求</p>
              <p class="fn24">轻轻松松在线下单</p>
            </div>
          </div>
        </div>
      </div>
      <section class="app_main section_main">
        <div class="decent_cont" id="anchor0">
          <div class="title">使用场景</div>
          <p class="title_border"></p>
          <ul class="lists">
            <li>
              <img src="@/assets/purchaserImg/b1.png">
              <span>采购员</span>
            </li>
            <li>
              <img src="@/assets/purchaserImg/b2.png">
              <span>拿货骑手</span>
            </li>
            <li>
              <img src="@/assets/purchaserImg/b3.png">
              <span>仓库管理员</span>
            </li>
            <li>
              <img src="@/assets/purchaserImg/b4.png">
              <span>财务</span>
            </li>
            <li>
              <img src="@/assets/purchaserImg/b5.png">
              <span>零售商</span>
            </li>
          </ul>
        </div>
        <div class="decent_cont" id="anchor1">
          <div class="title">齐货小程序商城-上齐货零售下单更便捷</div>
          <p class="title_border"></p>
          <p class="question">逛商城-选货-下单-支付</p>
          <img class="equipment" src="@/assets/purchaserImg/convenient.png">
        </div>
        <div class="decent_cont" style="background:#313A5A; color:#fff">
          <div class="title" style="color:#fff">齐货小程序商城-上齐货赊账订单一键还款</div>
          <p class="title_border"></p>
          <p class="question">齐货商城-我的赊账-立即还款</p>
          <img class="equipment" src="@/assets/purchaserImg/oneKey.png">
        </div>
        <div class="decent_cont" id="prebuy">
          <div class="title">齐货报货系统-上齐货大需求订单一键导入</div>
          <p class="title_border"></p>
          <p class="question">报货系统-导入需求-一键报货</p>
          <img class="equipment bottom_equipment" src="@/assets/purchaserImg/import.png">
        </div>
      </section>
      <div class="bottom_purchase">
        <img src="@/assets/stallImg/purchase.png" width="100%">
        <div>
          <h3>线下档口与线上店铺打通，百分百实体店铺</h3>
          <h4>线上店铺选款，线下档口取货</h4>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import Footer from './footer'
  export default {
    name: 'home',
    data () {
      return {
        type: 'pc',
        center: [120.2522999109,30.2350922681],
        zoom: 17,
        routeHash: '',
        isActive: false,
        plugin: [{
          pName: 'ToolBar',
        }],
        anchor0Position: 0,
        anchor1Postion: 1
      }
    },
    watch: {
      '$route'(to,path,obj) {
        this.routeHash = to.hash
      }
    },
    components: {Footer},
    mounted() {
      this.type = this._platform()
      this.init()
      window.onscroll = () => {
        this.isShowActive()
      }
      window.onresize = () => {
        this.init()
      }
    },
    methods: {
      init() {
        const timer = setTimeout(() => {
          clearTimeout(timer)
          this.$nextTick(() => {
            this.anchor0Position = document.getElementById('anchor0').offsetTop - 5 
            this.anchor1Position = document.getElementById('anchor1').offsetTop - 50
            this.isShowActive()
          })
        }, 600)
      },
      // 判断是否展示顶部悬浮头
      isShowActive() {
        this.$nextTick(() => {
          this.isActive = this.getScrollTop() > 20
          this.anchorChoose(this.getScrollTop())
        })
      },
      anchorChoose(topVal) {
        if (topVal < this.anchor0Position) {
          this.routeHash = ''
        } else if (topVal < this.anchor1Position) {
          this.routeHash = '#anchor0'
        } else if (topVal >= this.anchor1Position) {
          this.routeHash = '#anchor1'
        }
      },
      getScrollTop() {
        let scroll_top = 0
        if (document.documentElement && document.documentElement.scrollTop) {
          scroll_top = document.documentElement.scrollTop
        } else if (document.body) {
          scroll_top = document.body.scrollTop
        }
        return scroll_top
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="stylus" scoped>
    @import '~@/assets/css/index'
    @import '~@/components/css/purchaser'
    @import '~@/components/css_mobile/purchaser'
  </style>
