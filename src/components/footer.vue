<template>
  <footer id="footer" :class="[type === 'mobile' && 'mobile_footer']">
    <div class="lists">
      <div>
        <p class="">我们的产品</p>
        <ul>
          <li>齐货收银机</li>
          <li>齐货档口后台</li>
          <li>齐货商城小程序</li>
          <li>齐货PC报货商城</li>
        </ul>
      </div>
      <div>
        <p class="">联系方式</p>
        <ul>
          <li>联系电话：18069422773</li>
          <li>Email：liuhuajian@qh-saas.com</li>
          <li>微信：lhjwechat010</li>
        </ul>
      </div>
      <div>
        <p>加入我们</p>
        <ul class="with_hover">
          <li>
            <a href="https://www.zhipin.com/gongsi/71e6075d010b8c791XJ52Nq5EQ~~.html?ka=search_list_company_1_custompage" target="_blank">查看加入</a>
          </li>
        </ul>
      </div>
      <div class="qr_code">
        <img src="@/assets/img/QRCode.png">
        <div class="bold">微信扫一扫，关注齐货公众号</div>
      </div>
    </div>
    <p class="xiao">&copy;2019 杭州齐货网络科技有限公司 版权所有</p>
    <div class="xiao">浙ICP备 1 9 0 0 6 8 1 0 号-1</div>
  </footer> 
</template>
<script>
  export default {
    data() {
      return {
        type: 'pc'
      }
    },
    mounted() {
      this.type = this._platform()
    }
  }
</script>
<style lang="stylus">
  @import '~@/assets/css/index'
  @import '~@/components/css/footer'
  @import '~@/components/css_mobile/footer'
</style>