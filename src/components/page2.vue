<template>
  <div>
    <!--<div>-->
      <!--<text style="font-size: 40px">oninput: {{txtInput}}</text>-->
      <!--<text style="font-size: 40px">onchange: {{txtChange}}</text>-->
      <!--<text style="font-size: 40px">onreturntype: {{txtReturnType}}</text>-->
      <!--<text style="font-size: 40px">selection: {{txtSelection}}</text>-->

    <!--</div>-->
    <div class="pagelogo">
      <text class="page2logo">Insta360</text>
    </div>
    <scroller>
      <!--<div>-->
        <div>
          <text class="title">您的姓名</text>
        <!--</div>-->
        <input type="text" placeholder="您的姓名:" class="input" :autofocus=true value="" @change="onchange" @input="oninput"/>
      </div>
<div>
  <text class="title">拜访事由</text>
  <div class="list-bt">
    <a class="button" ><text class="list-tx">面试</text></a>
    <a class="button" ><text class="list-tx">商务</text></a>
    <a class="button" ><text class="list-tx">其他</text></a>
  </div>
</div>
      <div>
        <div>
          <text class="title">您的电话</text>
        </div>
        <input type="tel" placeholder="您的电话:" class="input" @change="onchange" @input="oninput"/>
      </div>
      <div>
        <text class="title">要拜访的人</text>
        <!--</div>-->
        <input type="text" placeholder="要拜访的人:" class="input" :autofocus=true value="" @change="onchange" @input="oninput"/>
      </div>
      <div class="submit">
        <a class="button"><text class="list-tx">提交</text></a>

      </div>
    </scroller>
  </div>
</template>

<style scoped>
  .submit {
    font-size: 22px;
    align-items: center;
    margin-top: 22px;
  }
  .list-tx {
    font-size: 22px;
    /*opacity:1;*/
  }
  .list-bt {
    flex-direction: row;
    margin-left: 125px;
    margin-right: 125px;
    justify-content:space-between;
    align-items: center;
  }
  .button {
    width: 166.66px;
    height: 56px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 2px;
    padding-right: 2px;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    opacity:0.8;
  }
  .pagelogo {
    align-items: center;
    margin-top: 22px;
    margin-bottom: 22px;
  }
  .page2logo {
    font-size: 66px;
    color: gold;
  }
  .title {
    font-size: 22px;
    margin-left: 125px;
    margin-top: 15px;
    margin-bottom: 15px;
    /*opacity:0.4;*/
  }
  .input {
    font-size: 22px;
    height: 60px;
    width: 500px;
    margin-left: 125px;
    padding-left: 22px;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    opacity: 0.2;

  }
</style>

<script>/*eslint-disable*/
    module.exports = {
        data: function () {
            return {
//                txtInput: '',
//                txtChange: '',
//                txtReturnType: '',
//                txtSelection:'',
//                autofocus: false
            };
        },
//        methods: {
//            ready: function () {
//                var self = this;
//                setTimeout(function () {
//                    self.autofocus = true;
//                }, 1000);
//            },
//            onchange: function (event) {
//                this.txtChange = event.value;
//                console.log('onchange', event.value);
//            },
//            onreturn: function (event) {
//                this.txtReturnType = event.returnKeyType;
//                console.log('onreturn', event.type);
//            },
//            oninput: function (event) {
//                this.txtInput = event.value;
//                console.log('oninput', event.value);
//            },
//            focus: function () {
//                this.$refs['input1'].focus();
//            },
//            blur: function () {
//                this.$refs['input1'].blur();
//            },
//            setRange: function() {
//                console.log(this.$refs["inputselection"]);
//                this.$refs["inputselection"].setSelectionRange(2, 6);
//            },
//            getSelectionRange: function() {
//                console.log(this.$refs["inputselection"]);
//                var self = this;
//                this.$refs["inputselection"].getSelectionRange(function(e) {
//                    self.txtSelection = e.selectionStart +'-' + e.selectionEnd;
//                });
//            }
//        }
    };
</script>
