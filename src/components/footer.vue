<template>
  <footer class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-tabbar">
          <a v-on:click="barSelect('home')" class="weui-tabbar__item" v-bind:class="isSelect=='home'?'weui-bar__item_on':''">
            <img src="./../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">首页</p>
          </a>
          <a v-on:click="barSelect('explore')" class="weui-tabbar__item" v-bind:class="isSelect=='explore'?'weui-bar__item_on':''">
            <img src="./../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">探索</p>
          </a>
          <a v-on:click="barSelect('digital')" class="weui-tabbar__item" v-bind:class="isSelect=='digital'?'weui-bar__item_on':''">
            <img src="./../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">数码</p>
          </a>
          <a v-on:click="barSelect('center')" class="weui-tabbar__item" v-bind:class="isSelect=='center'?'weui-bar__item_on':''">
            <img src="./../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">我</p>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        isSelect: 'home'
      }
    },
    created() {
      if (this.$route.name)
        this.isSelect = this.$route.name;
    },
    methods: {
      barSelect(flag) {
        this.$router.push({ path: flag });
      },
    }
  }


</script>