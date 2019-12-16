<template>
  <div id="home" :class="[type === 'mobile' && 'mobile_home']">
    <div class="header_bg">
      <img class="top_bg" src="@/assets/img/header_bg.png">
      <div class="header_cont">
        <div class="app_main">
          <header :class="[type === 'mobile' ? 'active' : isActive ? 'active' : '']">
            <div class="header_wrap">
              <img v-show="type !== 'mobile' && !isActive" src="@/assets/img/logo.png" />
              <img v-show="type === 'mobile' || isActive" src="@/assets/img/logo_active.png" />
              <ul v-if="type !== 'mobile'">
                <li>
                  <a href="#anchor0" :class="[routeHash === '#anchor0' ? 'active' : '']">关于齐货</a>
                </li>
                <li>
                  <a href="#anchor1" :class="[routeHash === '#anchor1' ? 'active' : '']">行业难题</a>
                </li>
                <li>
                  <a href="#anchor2" :class="[routeHash === '#anchor2' ? 'active' : '']">解决方案</a>
                </li>
                <li>
                  <a href="#anchor3" :class="[routeHash === '#anchor3' ? 'active' : '']">入驻批发市场</a>
                </li>
                <li>
                  <a href="#anchor4" :class="[routeHash === '#anchor4' ? 'active' : '']">联系我们</a>
                </li>
              </ul>
              <el-popover
                v-if="type === 'mobile'"
                placement="bottom"
                width="2rem"
                trigger="click"
                >
                <ul :class="[type === 'mobile' && 'mobile_ul']">
                  <li>
                    <a href="#anchor0" :class="[routeHash === '#anchor0' ? 'active' : '']">关于齐货</a>
                  </li>
                  <li>
                    <a href="#anchor1" :class="[routeHash === '#anchor1' ? 'active' : '']">行业难题</a>
                  </li>
                  <li>
                    <a href="#anchor2" :class="[routeHash === '#anchor2' ? 'active' : '']">解决方案</a>
                  </li>
                  <li>
                    <a href="#anchor3" :class="[routeHash === '#anchor3' ? 'active' : '']">入驻批发市场</a>
                  </li>
                  <li>
                    <a href="#anchor4" :class="[routeHash === '#anchor4' ? 'active' : '']">联系我们</a>
                  </li>
                </ul>
                <img class="toggle_img" slot="reference" src="@/assets/mobile/green.png">
              </el-popover>
            </div>
          </header>
          <div class="logo_info">
            <p class="fn34">齐货网</p>
            <p class="fn24">专业的服装批发平台，线上线下一站式经营</p>
          </div>
          <ul class="entrance">
            <li>
              <div class="title">
                <span>采</span>
                <i>我是采购商</i>
              </div>
              <p class="introduce">采购商端报货商城，建立我的需求订单</p>
              <router-link to="/purchaser#purchaser"><span>了解更多</span> <img src="@/assets/img/triangleYellow.png"></router-link>
            </li>
            <li>
              <div class="title">
                <span>档</span>
                <i>我是档口</i>
              </div>
              <p class="introduce">档口端收银系统，管理我的商品和资金</p>
              <router-link to="/stall#stall"><span>了解更多</span> <img src="@/assets/img/triangleBlue.png"></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section class="app_main section_main">
      <div class="decent_cont traditional_problems" id="anchor0">
        <div class="title">关于齐货</div>
        <p class="title_border"></p>
        <p class="question">齐货网是什么？</p>
        <div class="project_intro">
          齐货致力于解决服装档口批发存在的诸多问题。<br />
          目前服装档口批发市场还处于纸质开单的阶段。<br />
          通过齐货，可以帮助档口解决库存难管理、<br v-if="type === 'mobile'"/>价格难记忆、开单靠手写等档口常见的问题。<br />
          齐货的使命是让档口节约更多的成本，<br v-if="type === 'mobile'"/>及时准确掌握店铺情况，使档口管理更加轻松。
        </div>
        <img class="equipment" src="@/assets/img/equipment.png">
      </div>
      <div class="decent_cont traditional_problems" id="anchor1">
        <div class="title">传统服装档口批发难题</div>
        <p class="title_border"></p>
        <ul class="problems first_ul">
          <li>
            <img src="@/assets/img/b1.png">
            <div>
              <img src="@/assets/img/t1.png">
              <p class="name_title">传统纸质开单易丢失</p>
              <div>使用齐货-替代传统手动开单，从开单到收款一气呵成，专属VIP客户开单，
                智能管理VIP客户开单价格，随时查看所有订单，一键打印纸质订单。</div>
            </div>
          </li>
          <li>
            <img src="@/assets/img/b2.png">
            <div>
              <img src="@/assets/img/t2.png">
              <p class="name_title">店铺销售情况不清晰</p>
              <div>使用齐货-管理您的商品和客户，了解您的店铺销售情况，热销商品一目了然，
                轻松管理每日销售额，订单情况，永久管理，资金明细，清清楚楚。</div>
            </div>
          </li>
          <li>
            <img src="@/assets/img/b3.png">
            <div>
              <img src="@/assets/img/t3.png">
              <p class="name_title">客户对账靠手算</p>
              <div>使用齐货-每日生成客户对账情况，欠款还款，退货抵扣欠款统统记录。
                一键导出发送给客户，及时对账。</div>
            </div>
          </li>
        <!-- </ul>
        <ul class="problems sec_ul"> -->
          <li>
            <img src="@/assets/img/b4.png">
            <div>
              <img src="@/assets/img/t4.png">
              <p class="name_title">商品销售数据不准确</p>
              <div>使用齐货-热销商品一目了然，销售报表图形化展示，销售数据，
                智能分析商品销售额单独计算，库存实时把控。</div>
            </div>
          </li>
          <li>
            <img src="@/assets/img/b5.png">
            <div>
              <img src="@/assets/img/t5.png">
              <p class="name_title">上门取货太集中</p>
              <div>使用齐货-小弟备货一键操作，及时通知客户上门取货。</div>
            </div>
          </li>
          <li>
            <img src="@/assets/img/b6.png">
            <div>
              <img src="@/assets/img/t6.png">
              <p class="name_title">商品库存太模糊</p>
              <div>使用齐货-更加精准的管理您的尾货库存，掌握库存及时补货。</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="decent_cont traditional_problems" id="anchor2">
        <div class="title">齐货网，传统服装批发档口营销解决方案</div>
        <p class="title_border"></p>
        <div class="icon_list">
          <ul class="first_ul">
            <li>
              <img src="@/assets/img/g1.png">
              <span>订单管理</span>
            </li>
            <li>
              <img src="@/assets/img/g2.png">
              <span>商品管理</span>
            </li>
            <li>
              <img src="@/assets/img/g3.png">
              <span>客户管理</span>
            </li>
            <li>
              <img src="@/assets/img/g4.png">
              <span>营销管理</span>
            </li>
            <li>
              <img src="@/assets/img/g5.png">
              <span>在线支付</span>
            </li>
          </ul>
          <ul class="sec_ul">
            <li>
              <img src="@/assets/img/g6.png">
              <span>在线购物</span>
            </li>
            <li>
              <img src="@/assets/img/g7.png">
              <span>库存管理</span>
            </li>
            <li>
              <img src="@/assets/img/g8.png">
              <span>销售管理</span>
            </li>
            <li>
              <img src="@/assets/img/g9.png">
              <span>资金管理</span>
            </li>
            <li>
              <img src="@/assets/img/g10.png">
              <span>报货系统</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="decent_cont traditional_problems" id="anchor3">
        <div class="title">入驻批发市场</div>
        <p class="title_border"></p>
        <ul class="stalls">
          <li>
            <img src="@/assets/img/stall.png">
            <div>
              <span>电商基地</span>
              <i>A168</i>
            </div>
          </li>
          <li>
            <img src="@/assets/img/stall.png">
            <div>
              <span>电商基地</span>
              <i>A177</i>
            </div>
          </li>
          <li>
            <img src="@/assets/img/stall.png">
            <div>
              <span>电商基地</span>
              <i>A108</i>
            </div>
          </li>
          <li>
            <img src="@/assets/img/stall.png">
            <div>
              <span>电商基地</span>
              <i>A025</i>
            </div>
          </li>
          <li>
            <img src="@/assets/img/stall.png">
            <div>
              <span>电商基地</span>
              <i>A030</i>
            </div>
          </li>
        </ul>
      </div>
      <div class="decent_cont traditional_problems" id="anchor4">
        <div class="title">联系我们</div>
        <p class="title_border"></p>
        <div class="need_advice">我们非常希望聆听到您的声音，如果有什么需求欢迎与我们联系！</div>
        <div class="contacts" :class="[type === 'mobile' && 'mobile_map']">
          <div>
            <p>杭州齐货网络科技有限公司</p>
            <ul>
              <li>公司地址：浙江省杭州市萧山区博地中心A幢13F</li>
              <li>联系电话：18069422773</li>
              <li>Email：liuhuajian@qh-saas.com</li>
              <li>微信：lhjwechat010</li>
            </ul>
          </div>
          <div class="amap-wrapper">
            <el-amap :center="center" :plugin="plugin" :zoom="zoom">
              <el-amap-marker :position="center" :visible="true" ></el-amap-marker>
            </el-amap>
          </div>
        </div>
      </div>
    </section>
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
      anchor1Postion: 1,
      anchor2Postion: 2,
      anchor3Postion: 3,
      anchor4Postion: 4
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
        this.anchor0Position = document.getElementById('anchor0').offsetTop - 5 
        this.anchor1Position = document.getElementById('anchor1').offsetTop - 5
        this.anchor2Position = document.getElementById('anchor2').offsetTop - 5
        this.anchor3Position = document.getElementById('anchor3').offsetTop - 5
        this.anchor4Position = document.getElementById('anchor4').offsetTop - 5
        this.isShowActive()
      }, 600)
    },
    // 判断是否展示顶部悬浮头
    isShowActive() {
      this.isActive = this.getScrollTop() > 20
      this.anchorChoose(this.getScrollTop())
    },
    anchorChoose(topVal) { 
      if (topVal < this.anchor0Position) {
        this.routeHash = ''
      } else if (topVal < this.anchor1Position) {
        this.routeHash = '#anchor0'
      } else if (topVal < this.anchor2Position) {
        this.routeHash = '#anchor1'
      } else if (topVal < this.anchor3Position) {
        this.routeHash = '#anchor2'
      } else if (topVal < this.anchor4Position - 100) {
        this.routeHash = '#anchor3'
      } else {
        this.routeHash = '#anchor4'
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
  @import '~@/components/css/home'
  @import '~@/components/css_mobile/home'
</style>
