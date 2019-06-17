<template>
  <div class="s-con">
       <todoitem  v-for="item in todolist" 
         :key="item.applicationNumber"
          :item="item"
         />
  </div>
</template>

<script>
import {showType} from '../../../utils/computedTime'
import todoitem from '../components/todoitem'
export default {
  props: {
    todolist: Array
  },
  components:{
    todoitem
  },
 
};
</script>
<style lang='scss' scoped>
@import "@/static/scss/common.scss";
@import "@/static/scss/_minix.scss";
.s-con {
  flex: 1;
  background: rgb(247, 248, 248);
}
.con-item {
  width: 100%;
  height: pxTorem(120px);
  background: white;
  margin-bottom: pxTorem(10px);
}
.con-item-top {
  @include box_flex;
  @include justify(space-between);
  padding: pxTorem(10px) pxTorem(15px);
  font-size: pxTorem(12px);
  color: rgb(165, 165, 165);
}
.con-context {
  padding: 0 pxTorem(15px);
  @include sizing;
}
.gray {
  color: rgb(131, 131, 131);
}
.context-top,
.context-bottom {
  padding: pxTorem(8px) 0;
  @include box_flex;
  @include align;
}
.context-top span,
.context-bottom span {
  width: 25%;
  @include flex_shrink(0);
  font-size: pxTorem(12px);
}
</style>