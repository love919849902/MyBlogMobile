<template>
    <router-view></router-view>
    <!--<transition name="slide-fade" mode="out-in">
        <router-view></router-view>
    </transition>-->
</template>

<script>
    export default {
        data(){
            return {
                path: ''
            }
        },
        components: {
           
        },
        methods:{
            componentsChange(flag) {
                this.$router.push({path: flag});
            }
        }
    }
</script>