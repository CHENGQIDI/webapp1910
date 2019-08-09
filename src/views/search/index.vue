<template><alleyBScroll>
  <div id="search">
    
    <div class="nav">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="Gicci包" v-model="inputVal"/>
      <v-touch tag="p" @tap="hadlefh()">取消</v-touch >
    </div>
    <div class="list">
      <div class="list_center">
        <div class="hot">
          <p>热门搜索</p>
        </div>
        <ul class="hot_search" >
          <v-touch  v-for="(item,index) in hotsearch" :key="index"  tag="li" @tap="hadleBrand()">{{item.keyword}}</v-touch>
        </ul>
      </div>
      <div class="list_bottom">
        <div class="bottom_top">
          <p>——为你推荐——</p>
        </div>
        <div class="bootm_bootm" >
          <div class="bootm_shop" v-for="(item,index) in bao" :key="index">
            <img
              :src="item.product_thumb"
            />
            <p>{{item.product_name}}</p>
          </div>
         
         
        </div>
      </div>
    </div>
      
  </div> 
  </alleyBScroll>
</template>
<script>
import axios from "axios";

export default {
    name:"search",
    data(){
        return{
            hotsearch:[],
            bao:[],
            inputVal:[],
            inputlist:[]
        }
    },
    created(){
        axios.get("https://apim.restful.5lux.com.cn/search/recommend_list").then(data=>{
            this.hotsearch=data.data.data.hot_search
           this.bao=data.data.data.recommend_products
                console.log(data.data.data)
        })
    },
    watch:{
      inputVal(newval,oldval){
          let data = axios.get("https://apim.restful.5lux.com.cn/search/recommend_list").then(data=>{
            //   this.inputlist=data.data.data?data.data.data.recommend_products:
            //     console.log(data.data.data.recommend_products)
        })
        }
    },
   methods:{
       hadlefh(){
           this.$router.back()
       },
       hadleBrand(){
           this.$router.push("/brand")
       }
   }
};
</script>
<style scoped>
.nav {
  height: 0.4rem;
  background: #fff;
  display: flex;
  position: relative;
  border-bottom: 1px solid #cccccc;
}
.nav > input {
  width: 3.02rem;
  height: 0.3rem;
  background: #cccccc;
  border: none;
  margin: 7px 17px;
  padding-left: 30px;
  border-radius: 10px;
}
.nav > i {
  position: absolute;
  left: 22px;
  top: 15px;
  color: #fff;
}
.nav > p {
  position: absolute;
  top: 10px;

  left: 370px;
  font-size: 16px;
}
/* list */
.list {
  width: 100%;
  height: 100%;
}
.list .list_center {
  width: 100%;
  height: 2rem;
  background: #cccccc;
}
.list .list_center .hot {
  width: 100%;
  height: 0.4rem;
  background: #ccc;
}
.list .list_center .hot > p {
  font-size: 14px;
  line-height: 0.4rem;
  margin-left: 10px;
}
.list .list_center .hot_search {
  padding: 10px 15px;
  color: #666;
  font-family: \\9ed1\4f53;
  font-size: 12px;
  overflow: hidden;
  padding-bottom: 0;
  background: #fff;

  height: 2rem;

}
.list .list_center .hot_search > li {
  float: left;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid #e5e5e5;
  border-radius: 2.5px;
  margin-bottom: 10px;
  margin-right: 10px;

 
}
.list .list_center .list_bottom {
  width: 100%;
  height: 100%;
}
.list .list_bottom .bottom_top {
  width: 100%;
  height: 0.4rem;
    background: #ccc;
}
.list .list_bottom .bottom_top > p {
  font-size: 14px;
  line-height: 0.4rem;
  margin-left: 10px;
  text-align: center;
  color: #999;
}
.bootm_bootm {
  /* width: 100%;
        height: 100%;
         display: flex;
         flex-wrap: nowrap */
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
}
.bootm_shop {
  width: 1.7rem;
  height: 2.3rem;
  background: #ffffff;;
  margin: 15px 0;
}
.bootm_shop > p {
  padding: 11px 0 10px;
  font-size: 12px;
  font-family: \\9ed1\4f53;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; padding: 11px 0 10px;
  font-size: 12px;
  font-family: \\9ed1\4f53;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} 
.bootm_shop >img{
    width: 1.61rem;
    height:  1.61rem;
}

</style>
