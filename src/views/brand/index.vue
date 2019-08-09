<template>
    <div id="brand">
            <div class="top">
                <i class="iconfont icon-forward"></i>
                <p>ROlex劳力士</p>
            </div>
            <div class="center">
                <ul>
                    <li><p>综合</p></li>
                    <li><p>分类</p></li>
                    <li><p>筛选</p></li>
                </ul>
                <div class="shop_list">
                    <div class="shops">

                    </div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name:"brand"
}
</script>

<style>
#brand{
    width: 100%;
    height: 100%;


}
.top{
    width: 100%;
    height: 0.44rem;
    border-bottom: 1px solid #ccc;
    display: flex
}
.top>p{
    font-size: 14px;
    text-align: center;
    line-height: 0.44rem;
    padding-left:1.3rem
}
.top>i{
     padding-left:0.1rem;
        line-height: 0.44rem;
}
.center{
    width: 100%;
    height: 100%;
}
.center>ul{
        position: fixed!important;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 39px;
    left: 0;
    background-color: #fff;
    z-index: 3;
    position: relative;
    font-size: 0;
}
.center>ul>li{
    height: 100%;
    margin: 0 50px;
}
.center>ul>li>p{
    font-size: 16px;
}
.center .shop_list{
    width: 100%;
    height: 100%;
}
</style>
