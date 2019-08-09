<template>
      <!-- header -->

    <div class="top_a">
        <v-touch class="iconfont icon-forward" @tap="hdanlebacks()" tag="i"></v-touch>
      <div class="conet">
        <p>品牌</p>
        <p>旗舰店</p>
        <p>分类</p>
      </div>
    
    </div>
</template>
<script>
export default {
    name:"Fenhaeder",
   methods:{
     hdanlebacks(){
       this.$router.back()
     }
   }
}
</script>
<style>
   .top_a{
    height: 0.4rem;
    background: #000;
    display: flex;
    position: relative;
}
 .top_a>i{
     color: #fff ;
     font-size: 20px;
 line-height: 0.4rem;
 padding-left: 0.15rem
 }
 .conet{
     width: 100%;
     height: 100%;
     display: flex;
    padding-left: 0.5rem
 }
.conet>p{
    color: #fff;
    left: 370px;
    font-size: 20px;
     line-height: 0.4rem;
  margin-left:0.2rem; 
}

</style>
