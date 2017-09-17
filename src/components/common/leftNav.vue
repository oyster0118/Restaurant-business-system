<template>
  <div class="left-nav">
    <ul>
      <router-link tag="li" to="/pos">
        <i class="icon iconfont icon-goumai"></i>
        <div>收银</div>
      </router-link>
  
      <router-link tag="li" to="/shop">
        <i class="icon iconfont icon-dianpu"></i>
        <div>店铺</div>
      </router-link>
  
      <router-link tag="li" to="/raw">
        <i class="icon iconfont icon-hanbao"></i>
        <div>原料</div>
      </router-link>
  
      <router-link tag="li" to="/member">
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>会员</div>
      </router-link>
  
      <router-link tag="li" to="/statistics">
        <i class="icon iconfont icon-zuanshi"></i>
        <div>统计</div>
      </router-link>
  
      <router-link tag="li" to="/setting">
        <i class="icon iconfont icon-gongnengjianyi"></i>
        <div>设置</div>
      </router-link>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'leftNav',
  data() {
    return {

    }
  }
}
</script>

<style>
    .left-nav{
       color:#fff;
       font-size:10px;
       height:100%;
       background-color: #1D8ce0;
       float:left;
       width:5%;
    }
    .iconfont{
       font-size:24px;
    }
    .left-nav ul{
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom:1px solid #20a0ff;
        padding:10px;
    }
</style> 
