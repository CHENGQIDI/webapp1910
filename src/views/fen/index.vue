<template>
  <div id="fen">
    <Fenhaeder class="fenhaeder"></Fenhaeder>
    <div class="fenbox">
      <!-- 左 -->
      <div class="fen_let">
        <ul>
          <v-touch v-for="(item,index) in lista" :class="{active:index==current}" :key="index" tag="li" @tap="handledeatell(item,index,)">{{item.cata_name}}</v-touch>
        </ul>
      </div>
      <!-- 右 -->
      <div class="fen_rigth">
        <div class="matter">
          <ul>
            <li class="typelist" v-for="(item,index) in shoplist" :key="index">
              <div class="title">
                <span class="line"></span>
                <span class="name">{{item.cata_name}}</span>
                <span class="line"></span>
              </div>
              <ul class="contentwarpper">
                <li class="conlist" v-for="(goods,num) in item.child_list" :key="num">
                  <a class="conlink">
                    <img :src="goods.cata_thumb" />
                    <p class="name">{{goods.cata_name}}</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import{mapState} from "vuex";
import { fen_now_api, fenshop_now_api } from "../../api/shop/shop";
export default {
  name: "fen",
  data() {
    return {
      lista: [],
      shoplist: [],
      haleds: [],
      current:0,
      idNum:"",  //我默认设置了一个id
    };
  },
  async created() {
   
    console.log(222,this.idNum)
    let data = await fen_now_api();
    this.lista = data.data;

    
    

  },
  methods:{
  async handledeatell(...parmas){

    this.idNum=Number(parmas[0].id)
    var index = parmas[1]
    this.current = index
    console.log(this.num,"methods")
    var data2 = await fenshop_now_api(this.idNum);
    this.shoplist = data2.data;
    this.haleds = data2.data.child_list;
    
    console.log(this.idNum,"created的id")
  },

  }
};
</script>
<style>
.fenhaeder {
  position: relative;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
      height: 44px;
    width: 100%;
}
#fen {
  width: 100%;
  height: 100%;
}
.fenbox {
  width: 100%;
  height: 100%;
  display: flex;
}
.fen_let {
  width: 25%;
  height: 100%;
    position: fixed;
    top: 0.4rem;
  left: 0px;
  /* top: 0.4rem; */
}

.fen_let > ul {
  width: 100%;
  height: 100%;
  background: #fff;
}

.fen_let > ul > li {
  font-size: 16px;
  text-align: center;
  width: 0.7rem;
  height: 3em;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 0.4rem;
  background: #ccc
}

.fen_rigth {
  width: 75%;
  height: 100%;
margin-left:90px ;
}
.fen_rigth > .matter {
  width: 100%;
  height: 100%;
  display: flex;
}
.fen_rigth > .matter > h2 {
  padding: 0.2rem;
}
.fen_rigth > .matter > ul {
  width: 100%;
  height: 100%;
  background: #fff;
}
/* .fen_rigth > .matter > ul > li {
  width: 100%;
  height: 100%;
  background: #ccc;
} */

.typelist {
  margin-top: 10px;
  /* display: flex; */
  width: 100%;

  background: #fff;

}
.title {
  display: -ms-flexbox;
  display: flex;
  padding: 15px 10px 10px;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  height: 13px;
}
.line {
  -ms-flex: 1;
  flex: 1;
  height: 0;
  position: relative;
  border: 0.5px solid #cccccc;
}
.name {
  margin: 0 10px;
  font-size: 13px;
  height: 13px;
  color: #999;
}
.typelist .title .line {
  -ms-flex: 1;
  flex: 1;
  height: 0;
  position: relative;
}
.typelist .contentwarpper {
  overflow: hidden;
}
.typelist .contentwarpper .conlist {
  width: 33.3333%;
  margin: 6px 0;
  float: left;
}
.typelist .contentwarpper .conlist .conlink {
  display: inline-block;
  width: 100%;
  height: 0;
  padding-bottom: calc(100% + 13px);
}
.conlink img {
  vertical-align: top;
  width: 0.93rem;
  height: 0.93rem;
}
.typelist .contentwarpper .conlist .conlink .name {
  font-size: 11px;
  color: #999;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: top;
  align-items: top;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}
.active{
  background: #fff!important;
}
</style>

