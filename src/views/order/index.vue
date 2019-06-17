<template>
  <div>
    {{userinfo}}
  </div>
</template>

<script>
import request from '@/utils/request'
import {mapState,mapActions} from 'vuex'
export default {
  name: "",
  components: {},
  computed:{
    ...mapState('user',['userinfo'])
  },
  created(){
    this.getUserInfo();
  },
  methods: {
    ...mapActions('user',['getUserInfo'])
  },
};
</script>
<style lang='scss' scoped>

</style>