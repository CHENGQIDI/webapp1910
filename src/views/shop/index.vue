<template>
  <div>
   
    <!-- header -->
    <div class="top_a">
        <i class="iconfont icon-sousuo"></i>
        
            <router-link type="text" placeholder="5LUX.com"  to="/search" tag="input">
            </router-link>
       
        <p class="iconfont icon-bao"></p>
    </div>

    <!-- <div id="top">
      <ul>
        <v-touch
          tag="li"
     
          v-for="(item,index) in shopList"
          :key="index"
          @tap="handleDetail(item.cata_id,item.cata_name)"
          
        >
        
          <span>{{item.cata_name}}</span>
        </v-touch>

    
      </ul>
    </div> -->
     <Navtop/>
     <router-view></router-view>
    <!-- banner -->
    <div id="box">
      <div class="banner">
        <div class="swiper-container ban">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in bannerimg" :key="index">
              <img :src="item.silde_original" />
            </div>
            <!-- 如果需要分页器 -->
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <!-- nav -->
      <div class="nav">
        <div class="nav-a fen" v-for="(item,index) in fen" :key="index"  ref="cqd">
          <i class="iconfont icon-pintuan"></i>
          <!-- <i v-for="(item,index) in info " :class=item.name :key="index"></i> -->
          <p>{{item.ad_name}}</p>
        </div>
      </div>
      <div class="ban_footer">
        <div class="swiper-container ban_img">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in Bvlgari" :key="index">
              <img :src="item.img_url" />
            </div>
            <!-- 如果需要分页器 -->
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="ban_title">
          <div class="ban_title_img" v-for="(item,index) in flagship" :key="index">
            <img :src="item.store_thumb" />
            <p>{{item.store_title}}</p>
          </div>
        </div>

        <!-- 查看所有的旗舰店 -->
        <div class="qjd">
          <p>查看所有的旗舰店></p>
        </div>
      </div>
      <!-- 时尚发布厅 -->
      <div class="centenn">
        <div class="title">
          <p>时尚发布厅</p>
          <p>——FASHION TV——</p>
        </div>
        <div class="advfor">
        <div class="adv_fir" >
          <img src="http://img550.5lux.com.cn/2018/10/25/gh/154045757116_750x421.jpg" />
          <p class="com_text_menu">Stella McCartney</p>
        </div>
        <ul class="adv_sec">
          <li class="adv_list">
            <img src="http://img550.5lux.com.cn/2018/10/25/cd/154045757343_369x456.jpg" />
            <p class="com_text_list">Bvlgari</p>
          </li>
          <li class="adv_list">
            <img src="http://img550.5lux.com.cn/2018/10/25/tu/154045757262_369x456.jpg" />
            <p class="com_text_list">Armani</p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.min.css";

export default {
  name: "shop",

  data() {
    return {
      shopList: [],
      bannerimg: [],
      fen: [],
      info: [
        {
          name: "iconfont icon-fenlei"
        },
        {
          name: "iconfont icon-pintuan"
        },
        {
          name: "iconfont icon-ziyuan"
        },
        {
          name: "iconfont icon-liping"
        }
      ],
      Bvlgari: [],
      flagship: [],
      imgs: []
    };
  },
  created() {
    // axios.get("https://apim.restful.5lux.com.cn/shop/catalist").then(data => {
    //   this.shopList = data.data.data;
    //   console.log(this.shopList)
    // });
    axios.get("https://apim.restful.5lux.com.cn/shop/slide").then(data => {
      this.bannerimg = data.data.data;

      this.$nextTick(() => {
        this.swiperBanner();
      });
    });
    axios
      .get("https://apim.restful.5lux.com.cn/shop/buttons_info")
      .then(data => {
        this.fen = data.data.data.button_list;
      });
    axios
      .get("https://apim.restful.5lux.com.cn/shop/get_flagship_recommend")
      .then(data => {
        this.Bvlgari = data.data.data;

        this.$nextTick(() => {
          this.swiperBanner();
        });
      });
    axios
      .get("https://apim.restful.5lux.com.cn/shop/get_flagship_recommend")
      .then(data => {
        this.flagship = data.data.data[0].store_infos;
      });
    axios
      .get(" https://apim.restful.5lux.com.cn/shop/home_all_info")
      .then(data => {
        this.imgs = data.data.data.fashion_video.list
       
      });
  },
  methods: {
    swiperBanner() {
      new Swiper(".swiper-container", {
        autoplay: {
          delay: 800
        }, //可选选
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    },
      //     handleDetail(id,name){
      //   this.$router.push({name:"nav",params:{id,name}})
      // alert(2)
      // }
  },
  updated(){
  
    var dd= this.$refs.cqd;
    var gift=dd[4];
    var fen=dd[0];
    gift.onclick = ()=>{
      this.$router.push("/gift")
    }
    fen.onclick=()=>{
      this.$router.push("/fen")
    }
 
  },

};
</script>
<style scoped>
/* header */
.top_a {
  height: 0.4rem;
  background: #000;
  display: flex;
  position: relative;
}
.top_a > input {
  width: 3.02rem;
  height: 0.3rem;
  background: #3f3f3f;
  border: none;
  margin: 7px 17px;
  padding-left: 30px;
}
.top_a > i {
  position: absolute;
  left: 8px;
  top: 5px;
  color: #fff;
}
.top_a > p {
  position: absolute;
  top: 10px;
  color: #fff;
  left: 370px;
  font-size: 20px;
}

/* #top {
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
  line-height: 0.42rem;
   border-bottom: 1px solid #010000;
}
.router-link-exact-active .router-link-active li{
  border-bottom: 1px solid #010000; 
}*/
/* banner */
#box {
  height: 5.36rem;
  width: 100%;
  flex: 1;
  overflow: auto;
}
#box .banner {
  width: 100%;
  height: 2.8rem;
  background: #000;
}
#box .banner .ban {
  width: 100%;
  height: 2.8rem;
  position: relative;
}
#box .banner .ban > .swiper-wrapper {
  height: 2.8rem;
  width: 100%;
}
#box .banner .ban > .swiper-wrapper > .swiper-slide {
  height: 2.8rem;
  width: 100%;
}
#box .banner .ban > .swiper-wrapper > .swiper-slide > img {
  height: 2.8rem;
  width: 100%;
}
/* nav */
#box .nav {
  width: 100%;
  height: 0.82rem;
  background: #ffffff;
  display: flex;
  overflow: auto;
}
#box .nav .nav-a {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#box .nav .nav-a > p {
  font-size: 16px;
}
#box .nav .nav-a > i {
  font-size: 25px;
  color: #3f3f3f;
}

#box .ban_footer {
  height: 3.9rem;
  width: 100%;
}

#box .ban_footer .ban_img {
  height: 2.39rem;
  width: 100%;
}
#box .ban_footer .ban_img > img {
  width: 100%;
  height: 2.39rem;
}
#box .ban_footer .ban_img > .swiper-wrapper {
  width: 100%;
  height: 2.39rem;
}
#box .ban_footer .ban_img > .swiper-wrapper > .swiper-slide {
  width: 100%;
  height: 2.39rem;
}
#box .ban_footer .ban_img > .swiper-wrapper > .swiper-slide > img {
  width: 100%;
  height: 2.39rem;
}
#box .ban_footer .ban_title {
  width: 100%;
  height: 1.2rem;
  display: flex;
  position: relative;
  overflow: auto;
}
#box .ban_footer .ban_title .ban_title_img {
  width: 100%;
  height: 1.2rem;
  margin-right: 10px;
}
#box .ban_footer .ban_title .ban_title_img > img {
  width: 1.2rem;
  height: 1.2rem;
}
#box .ban_footer .ban_title .ban_title_img > p {
  font-size: 14px;
  color: #fff;
  position: absolute;
  bottom: 3px;
  padding-left: 10px;
}
/* 查看qjd */
.qjd {
  width: 100%;
  height: 0.3rem;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.qjd > p {
  font-size: 14px;
  width: 1.3rem;
  height: 0.25rem;
  background: #333333;
  line-height: 0.25rem;
  border-radius: 5px;
  text-align: center;
  color: #fff;
}
#box .centenn {
  width: 100%;
  height: 100px;
  background: #000;
}

#box .centenn .title {
  width: 100%;
  height: 0.4rem;
}
#box .centenn .title > p {
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 0.15rem;
  margin-top: 5px;
}
#box .centenn .adv_fir {
  width: 100%;
  height: 2.11rem;
  background: red;
}
#box .centenn .adv_fir > img {
  width: 100%;
  height: 100%;
}
#box .centenn .adv_fir > p {
  font-size: 20px;
  text-align: center;
  position: relative;
  bottom: 0.3rem;
  color: #fff;
}
#box .centenn .adv_sec {
  width: 100%;
  height: 2.34rem;
  display: flex;

  justify-content: space-between;
}
#box .centenn .adv_sec > li {
  width: 1.84rem;
  height: 100%;
  margin-top: 0.05rem;
}
#box .centenn .adv_sec > li > img {
  width: 100%;
  height: 100%;
}
#box .centenn .adv_sec > li > p {
  font-size: 20px;
  text-align: center;
  position: relative;
  bottom: 0.3rem;
  color: #fff;
}
.swiper-container {
  width: 600px;
  height: 300px;
}
.swiper-pagination {
  position: absolute;
  bottom: -15px;
}
</style>
