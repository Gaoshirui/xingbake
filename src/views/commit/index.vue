<template >
    <div  class="wrap" >
         <el-header :title="type==='overtime'?'办公室加班申请表':'办公室调休盛情表'"/>
         <div class="top">                
            <div class="det">
                <div class="left">
                    <img :src="this.list.avatar" alt class="left_img">
                </div>
                <div class="middle">
                    <ul>
                        <li>
                            <p>申请人姓名</p>
                            <p>{{this.list.nickname}}</p>
                        </li>
                        <li>
                            <p>直接主管</p>
                            <p class="p">秦毅超</p>
                        </li>
                        <li>
                            <p>申请单号</p>
                            <p class="p">{{this.list.applicationNumber}}</p>
                        </li>
                        <li>
                            <p>发起时间</p>
                            <p class="p">{{new Date(this.list.startTime).toLocaleDateString()}}</p>
                        </li>
                    </ul>
                </div>
                <div class="right">
                <p>></p>
                </div>
            </div>
            </div>
            <div class="content">
                <h2>申请信息</h2>
                <div class="cont">
                    <ul>
                    <li>
                        <p>加班日期</p>
                        <!-- <p>{{new Date(this.list.startTime).toLocaleDateString()}}</p> -->
                    </li>
                    <li>
                        <p>加班类型</p>
                        <p>{{showType}}</p>
                    </li>
                    <li>
                        <p>加班起始时间</p>
                        <!-- <p>{{StartTime(this.list.startTime)}}</p> -->
                    </li>
                    <li>
                        <p>加班截止时间</p>
                        <!-- <p>{{EndTime(this.list.endTime)}}</p> -->
                    </li>
                    <li>
                        <p>共计时数</p>
                        <p>2.5</p>
                    </li>
                    </ul>
                </div>
            </div>
            <div class="cont2">
                <h2>加班事由</h2>
                <p>{{this.list.describes}}</p>
            </div>
            <div class="cont3">
                <div class="cont3_top">
                    <p class="y"></p>
                    <p class="r">附件</p>
                    <p class="s">共4件 ></p>
                </div>
                <div class="cont3_cont">
                    <img src="http://img4.imgtn.bdimg.com/it/u=2032769818,927819564&fm=15&gp=0.jpg" alt>
                    <img src="http://img0.imgtn.bdimg.com/it/u=2081985362,2048887978&fm=15&gp=0.jpg" alt>
                    <img src="http://img5.imgtn.bdimg.com/it/u=4206386444,67045743&fm=26&gp=0.jpg" alt>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li>
                    <dl>
                        <dd></dd>
                        <dt>审批历史</dt>
                    </dl>
                    </li>
                    <li class="li li_l">退回</li>
                    <li class="li li_r">同意</li>
                </ul>
            </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
const _mapActions = ()=>{
    return{
        a(){

        },
        b(){

        }
    }
}
export default {
    props:{
        type:String
    },
    computed: {
        userinfo(){
            return this.$store.stata.user.userinfo;
        }
    },
    created() {
        this['user/getUserInfo']()
    },
    methods: {
         ..._mapActions(['user'],['getUserInfo'])    
    },
}
</script>