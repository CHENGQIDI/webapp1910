<template>
  <div id="navtop">
  <alleyBScroll>
  
      <div id="top">
        <ul>
          <v-touch
            tag="li"
            v-for="(item,index) in shopList"
            :key="index"
            @tap="handleDetail(item,index)"
            :class="{actiove:index==current}"
          >
            <span>{{item.cata_name}}</span>
          </v-touch>

        </ul>
      </div>
    

    <div class="nav_bootom">
      <div class="navList">
        <div class="lists" v-for="(item,index) in this.navgodss" :key="index">
          <img :src="item.big_thumb" />
          <p>{{item.brand_en_name}}</p>
          <p>{{item.brand_enname}}</p>
          <p>￥{{item.product_price}}</p>
        </div>
      </div>
    </div>
</alleyBScroll>
  </div>
</template>
<script>

import { nav_now_api, navlist_now_api } from "../../api/shop/shop.js";
export default {
  name: "Navtop",
  data() {
    return {
      shopList: [],
      navgodss: [],
      current: 0,
      idNum:""
    };
  },
  async created() {
    let data = await nav_now_api();
    this.shopList = data.data;
    console.log(data)
   

    // let data2 = await navlist_now_api();
    // this.navgodss = data2.data.goods_list;
    // console.log(this.navgodss)
  },



    methods:{
  async handleDetail(...parmas){

    this.idNum=Number(parmas[0].cata_id)
    var index = parmas[1]
    this.current = index
   
    var data2 = await navlist_now_api(this.idNum);
    // this.shoplist = data2.data;
    this.navgodss = data2.data.goods_list;
    console.log(this.idNum)
    
   if( this.idNum=0){ 
      alert(1)
        this.$router.push("/home")
      
      }
  },
  //  methods:{
  //       handleDetail(id,name){
  //     this.$router.push({name:"nav",params:{id,name}})

  //    if(id==0){
  //       this.$router.push("/home")
  //     }

  //   }
    }
};
</script>
<style>
#top {
  width: 100%;
  height: 0.42rem;
  overflow: auto;

}
#top > ul {
  float: left;
  width: 800px;
  height: 0.42rem;
  overflow: auto;
  border-bottom: 1px solid #ccc;
  position: relative;
  top: 0px;
  left: 0px;
 
}
#top > ul > li {
  float: left;
  font-size: 16px;
  margin-left: 30px;
  text-align: center;
  line-height: 0.4rem;
  border-bottom:none; 
  
}
.actiove{
  border-bottom:3px solid #010000!important;
}
.navtop{
  height: 100%;

  
}
.nav_bootom {
  width: 100%;
  height: 100%;
  background: #ffffff;
}
.navimg {
  height: 2.5rem;
  width: 100%;
}
.navimg > img {
  width: 100%;
  height: 100%;
}
.navList {
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
  background: #ffffff;
}
.lists {
  width: 1.7rem;
  height: 2.3rem;
  background: #ffffff;
  margin: 15px 0;
  border: 1px solid #cccccc;
}
.lists > p {
  padding: 0 11px 0 10px;
  font-size: 12px;
  font-family: \\9ed1\4f53;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.lists > img {
  width: 1.61rem;
  height: 1.61rem;
}
</style>
