<template>
  <div id="gift">
    <div class="gift_top">
      <v-touch class="iconfont icon-forward" @tap="handleback()" tag="i"></v-touch>
      <h2>礼物</h2>
    </div>
    
    <div class="gift_bootom" >
      <alleyBScroll ref="alleyscroll">
      <div class="giftList">
        <div class="lists" v-for="(item,index) in goods" :key="index">
        <img :src="item.big_thumb" />
        <p>{{item.brand_en_name}}</p>
        <p>￥{{item.product_price}}}</p>
      </div>
      </div>
       </alleyBScroll>
    </div>
   
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "gift",
  data(){
      return{
        goods:JSON.parse(sessionStorage.getItem("goods"))||[]

      }
  },
  methods: {
    handleback() {
      this.$router.back();
    }
  },
  created(){
     if(!sessionStorage.getItem("goods")){
        axios.get("http://mobile.5lux.com/rpcgood/brand_detail/36/undefined?").then(data=>{
         this.goods=data.data.data.goods_list;
         sessionStorage.setItem("goods",JSON.stringify(data.data.data.goods_list))
        
      })
     }
  },mounted(){
    // this.$refs.alleyscroll.handlepullingDow(()=>{
    //     this.$router.go(0)
    // })
   
  }
};
</script>
<style>
#gift {
  width: 100%;
  height: 100%;
}
.gift_top {
  height: 0.4rem;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;

  z-index: 200;
  position: absolute;
  top: 0;

}
.gift_top > h2 {
  font-size: 16px;
  align-items: center;
  line-height: 0.4rem;
  margin-left: 1.5rem;

}
.gift_top > i {
  align-items: center;
  line-height: 0.4rem;
  margin-left: 0.1rem;
  
}
.gift_bootom {
width: 100%;
height: 100%;
background: #ffffff
}
.giftList{
    display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex: warp;
  flex: warp;
  margin: 15px;
  width: calc(100% - 30px);
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  background: #ffffff
}
.lists {
  width: 1.7rem;
  height: 2.3rem;
  background: #ffffff;
  margin: 15px 0;
  border: 1px solid #cccccc;
}
.lists > p {
  padding: 11px 0 10px;
  font-size: 12px;
  font-family: \\9ed1\4f53;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 11px 0 10px;
  font-size: 12px;
  font-family: \\9ed1\4f53;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center
}
.lists > img {
  width: 1.61rem;
  height: 1.61rem;
}
</style>
