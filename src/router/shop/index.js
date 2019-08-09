export default {
    path:"/shop",
    component:()=>import("views/shop"),
    name:"shop",
    childern:{
        path:"/search",
        name:"search"
    }
}