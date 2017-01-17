<template>
  <footer class="page">
    <div class="page__bd" style="height: 100%;">
      <div class="weui-tab">
        <div class="weui-tabbar">
          <a v-on:click="barSelect('home')" class="weui-tabbar__item"
             v-bind:class="isSelect=='home'?'weui-bar__item_on':''">
            <img src="static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">首页</p>
          </a>
          <a v-on:click="barSelect('blog')" class="weui-tabbar__item"
             v-bind:class="isSelect=='blog'?'weui-bar__item_on':''">
            <img src="static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">开发</p>
          </a>
          <a v-on:click="barSelect('it')" class="weui-tabbar__item"
             v-bind:class="isSelect=='it'?'weui-bar__item_on':''">
            <img src="static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">IT</p>
          </a>
          <a v-on:click="barSelect('my')" class="weui-tabbar__item"
             v-bind:class="isSelect=='my'?'weui-bar__item_on':''">
            <img src="static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">我</p>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        props: {
            isSelect: {
                type: String,
            },
        },
        methods: {
            barSelect(flag){
                this.$router.push({path: flag});
            },
        }
    }


</script>