<template>
    <div id="mainPage">
        <myhead></myhead>
        <div class="container">
            <div id="main" class="page__bd">
                <div class="weui-panel__bd">
                    <a v-for="item in list" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__hd news_content">
                            <img class="weui-media-box__thumb" v-bind:src="item.img.u" alt="">
                        </div>
                        <div class="weui-media-box__bd">
                            <div class="weui-media-box__title news_title">
                                {{item.title}}
                            </div>
                            <p class="weui-media-box__desc left">{{item.columnid|columndeal}}</p>
                            <p class="weui-media-box__desc right">{{item.ctime|DealDate}}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <myfoot></myfoot>
    </div>
</template>
<script>
    import myhead from './../components/Header'
    import myfoot from './../components/Footer'
    import common from '../base/common'
    import fetch from './../base/fetch'

    export default {
        components: {
            myfoot,
            myhead
        },
        data() {
            return {
                list: [],
            }
        },
        created() {
            fetch.get('/static/data/Digital.json')
                .then((result) => {
                    this.list = result;
                })
        },
        methods: {

        },
        filters: {
            DealDate(date) {
                return common.readableTimestamp(date);
            },
            columndeal(val) {
                var columns = "";
                var vals = val.split(",");
                for (var i = 0; i < vals.length; i++) {
                    if (common.columnInfos[vals[i]]) {
                        columns += common.columnInfos[vals[i]].name + ",";
                    }
                }
                columns = columns.substr(0, columns.length - 1);
                return columns;
            }
        }
</script>