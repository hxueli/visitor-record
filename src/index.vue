<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <a class="button" href="http://dotwe.org/raw/dist/a5e3760925ac3b9d68a3aa0cc0298857.bundle.wx">
      <text class="greeting">来访登记</text>
    </a>
    <!--<list class="h-bottom">-->
      <!--<cell class="h-cell">-->
    <div class="h-bottom">
        <a class="h-button" href="http://dotwe.org/raw/dist/a5e3760925ac3b9d68a3aa0cc0298857.bundle.wx">
          <text class="greeting">来访登记</text>
        </a>
      <!--</cell>-->
      <!--<cell class="h-cell">-->
        <a class="h-button" href="http://dotwe.org/raw/dist/a5e3760925ac3b9d68a3aa0cc0298857.bundle.wx">
          <text class="greeting">来访登记</text>
        </a>
    </div>
      <!--</cell>-->
    <!--</list>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'http://192.168.2.89:8001/logo.png'
    }
  }
}
</script>

<style scoped>
  /*.wrapper {*/
    /*justify-content: center;*/
    /*align-items: center;*/
  /*}*/
  .logo {
    width: 750px;
    height: 294px;
    margin-top: 165.5px;
    margin-bottom: 165.5px;
    border-style: solid;
    border-width: 1px;
    border-color: #008000;
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
    margin-top: 525px;
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
