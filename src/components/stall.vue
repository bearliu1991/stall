<template>
  <div id="stall" :class="[type === 'mobile' && 'mobile_stall']">
    <div class="header_bg">
      <img class="top_bg" src="@/assets/stallImg/header_bg.png">
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
                  <a href="#anchor0" :class="[routeHash === '#anchor0' ? 'active' : '']">核心价值</a>
                </li>
                <li>
                  <a href="#anchor1" :class="[routeHash === '#anchor1' ? 'active' : '']">功能介绍</a>
                </li>
                <li>
                  <a href="#anchor2" :class="[routeHash === '#anchor2' ? 'active' : '']">我要订购</a>
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
                      <a href="#anchor0" :class="[routeHash === '#anchor0' ? 'active' : '']">核心价值</a>
                    </li>
                    <li>
                      <a href="#anchor1" :class="[routeHash === '#anchor1' ? 'active' : '']">功能介绍</a>
                    </li>
                    <li>
                      <a href="#anchor2" :class="[routeHash === '#anchor2' ? 'active' : '']">我要订购</a>
                    </li>
                    <li><a href="javascript:void(0)">客服电话： 18069422773</a></li>
                </ul>
                <img class="toggle_img" slot="reference" src="@/assets/mobile/green.png">
              </el-popover>
            </div>
          </header>
          <div class="logo_info">
            <p class="fn34">齐货，让您经营服装档口更轻松</p>
            <p class="fn24">轻松管理 轻松赚钱</p>
          </div>
          <div class="entrance core_value" id="anchor0">
            <div class="decent_cont">
              <div class="title">核心价值</div>
              <p class="title_border"></p>
            </div>
            <ul>
              <li>
                <img src="@/assets/stallImg/b1.png">
                <p class="text">高效操作 便捷服务</p>
                <p class="title_border"></p>
                <span class="desc">每天开单量超过</span>
                <span class="caculation">10000+</span>
              </li>
              <li>
                <img src="@/assets/stallImg/b2.png">
                <p class="text">资金管理 笔笔清晰</p>
                <p class="title_border"></p>
                <span class="desc">每天资金流水超过</span>
                <span class="caculation">100W+</span>
              </li>
              <li>
                <img src="@/assets/stallImg/b3.png">
                <p class="text">商城报货 避免拥挤</p>
                <p class="title_border"></p>
                <span class="desc">每天报货量超过</span>
                <span class="caculation">70W+</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section class="app_main section_main">
      <div class="decent_cont" id="anchor1">
        <div class="title">选商品开单更便捷</div>
        <p class="title_border"></p>
        <p class="question">选择商品一键开单，订单信息一应俱全</p>
        <img class="equipment" src="@/assets/stallImg/convenient.png">
      </div>
      <div class="decent_cont" id="aboutUs">
        <div class="title">VIP价格更智能</div>
        <p class="title_border"></p>
        <p class="question">智能记忆老客户VIP价格，不再需要人脑记忆</p>
        <img class="equipment" src="@/assets/stallImg/intelligent.png">
      </div>
      <div class="decent_cont" id="aboutUs">
        <div class="title">商品销售数据更明确</div>
        <p class="title_border"></p>
        <p class="question">商品库存更清晰，热卖商品及时补货</p>
        <img class="equipment" src="@/assets/stallImg/clear.png">
      </div>
      <div class="decent_cont turnover" id="aboutUs">
        <div class="title">店铺营业额度更清楚</div>
        <p class="title_border"></p>
        <p class="question">店铺销售情况一目了然，坐在家中便可查看</p>
        <img class="equipment" src="@/assets/stallImg/distinct.png">
      </div>
    </section>
    <div class="bottom_purchase" id="anchor2">
      <img width="100%" src="@/assets/stallImg/purchase.png">
      <div>
        <h3>齐货，让开单变得轻松。</h3>
        <div class="wrapper">
          <el-form :model="editForm" ref="editForm">
            <el-form-item prop="inputVal" :rules="[
              {required: true, validator: noEmpty, message: '手机号不能为空', trigger: 'blur'},
              {required: true, validator: mobileReg, message: '请检查手机号', trigger: 'blur'}
            ]">
              <el-input v-model="editForm.inputVal" placeholder="请输入手机号"></el-input>
            </el-form-item>
          </el-form>
          <a class="wanna_buy" @click="savePhone">我要订购</a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './footer'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'stall',
  data () {
    return {
      type: 'pc',
      center: [120.2522999109,30.2350922681],
      zoom: 17,
      editForm: {
        inputVal: ''
      },
      routeHash: '',
      isActive: false,
      plugin: [{
        pName: 'ToolBar',
      }],
      anchor0Position: 0,
      anchor1Postion: 1,
      anchor2Postion: 2
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
        this.anchor2Position = document.getElementById('anchor2').offsetTop - 500
        this.isShowActive()
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
      } else if (topVal < this.anchor2Position) {
        this.routeHash = '#anchor1'
      } else if (topVal >= this.anchor2Position) {
        this.routeHash = '#anchor2'
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
    },
    savePhone() {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          axios.post(this._path.ajaxPreBook, qs.stringify({phone: this.editForm.inputVal}), {
            headers: {
              'app': 'pcStallBackend',
            }
          }).then(res => {
            const data = res.data
            if (data.success) {
              this.$message.success({message: data.msg})
              this.$set(this.editForm, 'inputVal', '')
            } else {
              this.$message.error({message: data.msg})
            }
          })
        }
      })
    },
    mobileReg(rule, value, callback) {
      if (value && !(/^1[3|4|5|7|8|9][0-9]{9}$/.test(value.trim()))) {
        callback(new Error(rule.message))
      } else {
        callback()
      }
    },
    noEmpty(rule, value, callback) {
      if (!value || /^\s*$/.test(value)) {
        callback(new Error(rule.message));
      } else {
        callback();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import '~@/assets/css/index'
  @import '~@/components/css/stall'
  @import '~@/components/css_mobile/stall'
</style>
