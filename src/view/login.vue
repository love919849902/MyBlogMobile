<template>
    <div id="mainPage">
        <header class="header">
            <a v-on:click="back()"><img src="./../assets/images/back.png" /></a>
        </header>
        <div id="main" class="page__bd">
            <div class="login">
            </div>
            <div class="weui-cells news_cells">
                <div class="weui-cell weui-cell-input">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="账号">
                    </div>
                </div>
                <div class="weui-cell weui-cell-input">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="密码">
                    </div>
                </div>
                <div>
                    <a href="javascript:;" class="weui-btn weui-btn_primary">登录</a>
                </div>
                <div id="registlink" class="center">
                    <a href="javascript:;">忘记密码</a>|<a href="javascript:;">注册账号</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    export default {
        components: {
            
        },
        data() {
            return {

            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        },
    }
</script>