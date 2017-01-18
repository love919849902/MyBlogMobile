<template>
    <div id="main" class="page__bd">
        <div class="PersonalCenter"></div>
        <div class="center">
            <a v-on:click="gos()" class="weui-btn weui-btn_plain-primary my_login_btn">去登录</a>
        </div>
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                    <img src="./../assets/images/set.png"></div>
                <div class="weui-cell__bd">
                    <p>我的收藏</p>
                </div>
                <div class="weui-cell__ft">说明文字</div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                    <img src="./../assets/images/icon_collection.png"></div>
                <div class="weui-cell__bd">
                    <p>我的文章</p>
                </div>
                <div class="weui-cell__ft">说明文字</div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                    <img src="./../assets/images/icon_collection.png"></div>
                <div class="weui-cell__bd">
                    <p>设置</p>
                </div>
                <div class="weui-cell__ft">说明文字</div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                    <img src="./../assets/images/help.png"></div>
                <div class="weui-cell__bd">
                    <p>反馈</p>
                </div>
                <div class="weui-cell__ft">说明文字</div>
            </a>
            <a class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="./../assets/images/help.png"></div>
                <div class="weui-cell__bd">
                    <p>版本</p>
                </div>
                <div class="weui-cell__ft">v1.0.0</div>
            </a>
        </div>
        <myfoot :isSelect="path"></myfoot>
    </div>
</template>
<script>
    import myfoot from './../components/Footer'
    export default {
        components: {
            myfoot,
        },
        data() {
            return {
                msg: 'hello vue',
                path: 'my',
            }
        },
        methods: {
            gos() {
                this.$router.push({ path: 'login' });
            }
        },
    }
</script>