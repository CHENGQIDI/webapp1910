<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name:"alleyBScroll",
    mounted(){
  this.scroll= new BScroll(this.$refs.wrapper,{
      click:true,
      tap:true,
      pullDownRefresh:true,
      pullUpLoad:true

    })
    
  },
  methods:{
      //下拉刷新
    //   handlepullingDow(callback){
    //       this.scroll.on("pullingDown",()=>{
    //           callback()
    //       })
    //   }
    handlepullingUp(callback){
             this.scroll.on("pullingUp",()=>{
              callback()
          })
    }
  }
}
</script>
<style>
.wrapper{
    height: 100%;
}

</style>

