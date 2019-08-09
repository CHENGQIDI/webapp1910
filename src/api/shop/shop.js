import http from "utils/http.js"
//分类
export const fen_now_api=(id=14)=>http("get","/api/good/top_catlist",{id:id})
export const fenshop_now_api=(id=165)=>http("get","/api/good/catlist",{id:id})
//navlist
export const nav_now_api=(id=4)=>http("get","/api/shop/catalist",{id:id})
export const navlist_now_api=(id=4)=>http("get","/api/good/cata_goods_list",{id:id})
//搜索
export const search_now_api=(id=4)=>http("get","/api/search/recommend_listt",{id:id})
export const searchlist_now_api=(id=4)=>http("get","/api/search/recommend_list",{id:id})