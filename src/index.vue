<template>
  <div class="wrapper">
      <image style="width:750px; height:1250px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522697905635&di=67a4847176f8008286bb7a73dbbcb0fc&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201412%2F09%2F20141209002509_u5hrh.jpeg"></image>
      <div class="title">
    <!--<image :src="logo" class="logo" />-->
    <text class="logo">Insta360</text>
          <a class="button" href="http://dotwe.org/raw/dist/a5e3760925ac3b9d68a3aa0cc0298857.bundle.wx">
      <text class="greeting">来访登记</text>
    </a>
    <div class="h-bottom">
        <a class="h-button" href="http://dotwe.org/raw/dist/a5e3760925ac3b9d68a3aa0cc0298857.bundle.wx">
          <text class="greeting">曾经来过</text>
        </a>
        <a class="h-button" href="http://dotwe.org/raw/dist/a5e3760925ac3b9d68a3aa0cc0298857.bundle.wx">
          <text class="greeting">团队到访</text>
        </a>
    </div>

      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://thumbnail0.baidupcs.com/thumbnail/2cf8ae970d7354317b4f9339e380ba82?fid=3104971008-250528-231969654250238&time=1522688400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-JydKkxNTuG7vGWPBIoLmddrJ7kE%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=2134707898507020047&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video'
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
      position:absolute;
      top: 0px;
      left: 0px;
  }
  .logo {
      font-size: 144px;
      color: #ffffff;
      text-align: center;
    width: 750px;
    /*height: 294px;*/
    margin-top: 230.5px;
    margin-bottom: 230.5px;
    /*border-style: solid;*/
    /*border-width: 1px;*/
    /*border-color: #008000;*/
    margin-left: 0px;
    margin-right: 0px;
  }
  .button {
    width: 250px;
    /*margin-top: 200px;*/
    margin-left: 250px;
    margin-right: 250px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
    background-color: #F5F5F5
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
    background-color: #F5F5F5
  }
  .greeting {
    /*text-align: center;*/
    /*margin-top: 70px;*/
    font-size: 50px;
    color: #41B883;
    text-align: center;
    /*background-color: silver;*/
    /*width: 750px;*/
    /*height: 200px;*/
  }
  .h-bottom {
    width: 750px;
    margin-top: 460px;
    flex-direction: row;
    justify-content: center;
  }
  /*.h-cell {*/
    /*width: 375px;*/
    /*margin-top: 525px;*/
    /*flex-direction: row;*/
    /*justify-content: space-around;*/
  /*}*/
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
