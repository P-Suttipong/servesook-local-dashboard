(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0619":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-mt-xl flex justify-center"},[e("div",{staticClass:"column col-md-8"},[e("q-btn",{staticClass:"config-btn",attrs:{loading:t.loadingConfigGateway},on:{click:function(a){return t.configGateway()}}},[e("i",{staticClass:"fas fa-sliders-h q-mr-md"}),t._v(" Default Gateway Config")]),e("q-btn",{staticClass:"reboot-btn q-mt-lg",on:{click:function(a){return t.rebootRaspi()}}},[e("i",{staticClass:"fas fa-undo q-mr-md"}),t._v(" Reboot")])],1),e("q-dialog",{model:{value:t.isConfig,callback:function(a){t.isConfig=a},expression:"isConfig"}},[e("q-card",[e("q-card-section"),e("q-card-section",{staticClass:"q-pt-none alert-text"},[t._v("\n        Configuration Default Gateway Done !\n      ")]),e("q-card-actions",{attrs:{align:"center"}},[e("q-btn",{attrs:{flat:"",label:"close",color:"primary"},on:{click:function(a){return t.closeModal()}}})],1)],1)],1)],1)},o=[],i=e("ded3"),s=e.n(i),c=e("2f62"),l={name:"SettingPage",components:{},data(){return{alert:!1}},computed:s()({},Object(c["b"])({DefaultGateway:t=>t.network.defaultGateway,staticIP:t=>t.network.staticIP,loadingConfigGateway:t=>t.network.loadingConfigGateway,isConfig:t=>t.network.isConfig})),methods:{getDefaultGateway(){this.$store.dispatch("getDefaultGateway")},configGateway(){this.$store.dispatch("configDefaultDateway")},rebootRaspi(){this.$store.dispatch("rebootRaspi")},closeModal(){this.$store.commit("SET_IS_CONFIG",!1)}}},r=l,f=(e("58f7"),e("2877")),d=e("9c40"),u=e("24e8"),g=e("f09f"),w=e("a370"),C=e("4b7e"),b=e("eebe"),m=e.n(b),p=Object(f["a"])(r,n,o,!1,null,"3cfc53be",null);a["default"]=p.exports;m()(p,"components",{QBtn:d["a"],QDialog:u["a"],QCard:g["a"],QCardSection:w["a"],QCardActions:C["a"]})},1174:function(t,a,e){},"58f7":function(t,a,e){"use strict";var n=e("1174"),o=e.n(n);o.a}}]);