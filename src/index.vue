<template>
    <div class="wrapper">
        <image style="width:750px; height:1200px;"
               src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522751401995&di=d40658ef42c651e9f6a6b61265d25484&imgtype=0&src=http%3A%2F%2Ff2.dn.anqu.com%2Fdown%2FNDk1Mg%3D%3D%2Fallimg%2F1309%2F54-130912110217.jpg">

        </image>
        <div class="title">
            <!--<image :src="logo" class="logo" />-->
            <text class="logo">Insta360</text>
            <!--<route-link id="HelloWorld" to="HelloWorld">-->
            <a class="button" @click="jump">
                <text class="greeting">来访登记</text>
            </a>
            <!--</route-link>-->
            <!--<div class="h-bottom">-->
                <!--<a class="h-button" href="http://dotwe.org/raw/dist/a5e3760925ac3b9d68a3aa0cc0298857.bundle.wx">-->
                    <!--<text class="greeting">曾经来过</text>-->
                <!--</a>-->
                <!--<a class="h-button" href="http://dotwe.org/raw/dist/a5e3760925ac3b9d68a3aa0cc0298857.bundle.wx">-->
                    <!--<text class="greeting">团队到访</text>-->
                <!--</a>-->
            <!--</div>-->
        </div>
        <!--<router-view></router-view>-->
    </div>
</template>

<script>/*eslint-disable */
let navigator = weex.requireModule('navigator')
let modal = weex.requireModule('modal')
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    jump (event) {
      console.log('will jump')
      navigator.push({
        url: 'http://192.168.2.89:8001/page2.js',
        animated: 'true'
      }, event => {
        modal.toast({ message: 'callback: ' + event })
      })
    }
  }
}
</script>
<style scoped>
  /*.wrapper {*/
    /*justify-content: center;*/
    /*align-items: center;*/
  /*}*/
  .title{
      width: 750px;
      height: 1000px;
      position:absolute;
      top: 0px;
      left: 0px;
  }
  .logo {
      font-size: 144px;
      color: #FFFF00;
      text-align: center;
      width: 750px;
    /*height: 294px;*/
    margin-top: 178px;
    margin-bottom: 178px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .button {
    width: 250px;
    /*margin-top: 0px;*/
    margin-left: 250px;
    margin-right: 250px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    border-color: #FFFF00;
    /*background-color: #c0c0c0;*/
      border-radius: 25px;
  }
  .h-button {
    width: 375px;
    /*margin-top: 200px;*/
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
      border-radius: 25px;

      /*background-color: #F5F5F5*/
  }
  .greeting {
    font-size: 50px;
    color: #FFFF00;
    text-align: center;
  }
  .h-bottom {
    width: 750px;
    margin-top: 253px;
    flex-direction: row;
    justify-content: center;
  }
  /*.message {*/
    /*margin: 30px;*/
    /*font-size: 32px;*/
    /*color: #727272;*/
  /*}*/
</style>
