<template>
     <div class="h-top">
      <span class="iconfont icon-arrow-left topicon" v-if="back" @click="$router.back()"></span>
      <span>{{titletext}}</span>
      <span>
        <span class="iconfont icon-riqixuanze topicon"></span>
        <span class="iconfont icon-fangdajing topicon"></span>
      </span>
    </div>
</template>
<script>
export default {
    props:{
        back:{
            default:true,
            type:Boolean
        },
        title:{
            default :'',
            type:String
        }
    },
    computed: {
        titletext(){
            return this.title ? this.title : this.$route.meta.title
        }
    },
}
</script>
<style lang="scss" scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";
header {
    width: 100%;
    height: pxTorem(150px);
    box-shadow: 0 pxTorem(10px) pxTorem(10px) rgb(233, 233, 233);
    @include box_flex;
    @include direction(column);
}  
.h-top {
    width: 100%;
    height: pxTorem(44px);
    font-size: pxTorem(18px);
    @include box_flex;
    @include justify(space-between);
    padding: 0 pxTorem(10px);
    @include sizing;
    @include align;
}
</style>