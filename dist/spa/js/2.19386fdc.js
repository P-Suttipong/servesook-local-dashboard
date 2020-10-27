(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0a6e":function(t,a,e){},2059:function(t,a,e){"use strict";var s=e("e630"),o=e.n(s);o.a},"256b":function(t,a,e){},"36bc":function(t,a,e){"use strict";var s=e("0a6e"),o=e.n(s);o.a},"4ca2":function(t,a,e){"use strict";var s=e("256b"),o=e.n(s);o.a},"8b24":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-mt-xl"},[e("div",{staticClass:"flex column items-center justify-center"},[e("div",{staticClass:"row"},[e("displayCard",{staticClass:"q-mx-md",attrs:{icon:"fas fa-laptop-house",topic:"IP Address",value:t.DefaultGateway,cardColor:"background-image: linear-gradient(180deg, #FEDA0C, #FFB305);",topicColor:"color: White",valueColor:"color: White"}}),e("displayCard",{staticClass:"q-mx-md",attrs:{icon:"fas fa-sun",topic:"Lux",value:t.lux+" Lux",cardColor:"background-image: linear-gradient(180deg, #FEDA0C, #FFB305);",topicColor:"color: White",valueColor:"color: White",cardType:"lux-card"}})],1),e("q-carousel",{staticClass:"q-mt-xs rounded-borders",attrs:{swipeable:"",animated:"",infinite:"",autoplay:t.autoplay,padding:t.padding,vertical:t.vertical,arrows:t.arrows,"control-color":"grey-6",height:"18vh"},model:{value:t.envi,callback:function(a){t.envi=a},expression:"envi"}},[e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"in"}},[e("displayCardLong",{staticClass:"q-mx-md q-mt-md",attrs:{icon1:"fas fa-temperature-high",topic1:"Temperature",value1:"IN: "+t.tempIn.temp,icon2:"fas fa-tint",topic2:"Humidity",value2:"IN: "+t.tempIn.humd,cardColor:"background-image: linear-gradient(80deg, #00F497, #00C6F2);",topicColor:"color: White",valueColor:"color: White"}})],1),e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"out"}},[e("displayCardLong",{staticClass:"q-mx-md q-mt-md",attrs:{icon1:"fas fa-temperature-high",topic1:"Temperature",value1:"OUT: "+t.tempOut.temp,icon2:"fas fa-tint",topic2:"Humidity",value2:"OUT: "+t.tempOut.humd,cardColor:"background-image: linear-gradient(80deg, #00F497, #00C6F2);",topicColor:"color: White",valueColor:"color: White"}})],1)],1),e("q-carousel",{staticClass:"rounded-borders",attrs:{swipeable:"",animated:"",infinite:"",padding:t.padding,vertical:t.vertical,arrows:t.arrows,autoplay:t.autoplay,"control-color":"grey-6",height:"15vh"},model:{value:t.water,callback:function(a){t.water=a},expression:"water"}},[e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"main"}},[e("displayCardLong",{staticClass:"q-mx-md q-mt-md",attrs:{icon1:"fas fa-water",topic1:"pH",value1:"MAIN: "+t.mainTank.ph,icon2:"fas fa-flask",topic2:"EC",value2:"MAIN: "+t.mainTank.ec,cardColor:"background-image: linear-gradient(180deg, #5a9dfd, #326DFF);",topicColor:"color: White",valueColor:"color: White"}})],1),e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"left"}},[e("displayCardLong",{staticClass:"q-mx-md q-mt-md",attrs:{icon1:"fas fa-water",topic1:"pH",value1:"LEFT: "+t.subLeft.ph,icon2:"fas fa-flask",topic2:"EC",value2:"LEFT: "+t.subLeft.ec,cardColor:"background-image: linear-gradient(180deg, #5a9dfd, #326DFF);",topicColor:"color: White",valueColor:"color: White"}})],1),e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"right"}},[e("displayCardLong",{staticClass:"q-mx-md q-mt-md",attrs:{icon1:"fas fa-water",topic1:"pH",value1:"RIGHT: "+t.subRight.ph,icon2:"fas fa-flask",topic2:"EC",value2:"RIGHT: "+t.subRight.ec,cardColor:"background-image: linear-gradient(180deg, #5a9dfd, #326DFF);",topicColor:"color: White",valueColor:"color: White"}})],1)],1)],1)])},o=[],l=e("ded3"),i=e.n(l),r=e("2f62"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"display-card flex items-center row",class:t.cardBackgroud,style:t.cardColor},[e("div",{staticClass:"q-ml-md q-mt-md col-3 flex justify-center"},[e("div",{staticClass:"column items-center",style:t.topicColor},[e("span",[e("i",{staticClass:"icon",class:t.icon})]),e("span",[e("p",{staticClass:"title-text"},[t._v(t._s(t.topic))])])])]),e("div",{staticClass:"col-8 q-mt-md flex justify-center",style:t.valueColor},[e("p",{staticClass:"value-text"},[t._v(t._s(t.value))])])])},n=[],d={name:"display-card",components:{},props:["icon","topic","value","cardColor","topicColor","valueColor","cardType"],computed:{cardBackgroud(){return"lux-card"===this.cardType?"lux-card":""}}},u=d,p=(e("4ca2"),e("2877")),m=Object(p["a"])(u,c,n,!1,null,"371b2799",null),C=m.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"display-card flex items-center row",style:t.cardColor},[e("div",{staticClass:"q-ml-md q-mt-md col-2 flex justify-center"},[e("div",{staticClass:"column items-center",style:t.topicColor},[e("span",[e("i",{staticClass:"icon",class:t.icon1})]),e("span",[e("p",{staticClass:"title-text"},[t._v(t._s(t.topic1))])])])]),e("div",{staticClass:"col-3 q-mt-md flex justify-center",style:t.valueColor},[e("p",{staticClass:"value-text"},[t._v(t._s(t.value1))])]),e("div",{staticClass:"q-ml-md q-mt-md col-3 flex justify-center"},[e("div",{staticClass:"column items-center",style:t.topicColor},[e("span",[e("i",{staticClass:"icon",class:t.icon2})]),e("span",[e("p",{staticClass:"title-text"},[t._v(t._s(t.topic2))])])])]),e("div",{staticClass:"col-2 q-mt-md flex justify-center",style:t.valueColor},[e("p",{staticClass:"value-text"},[t._v(t._s(t.value2))])])])},v=[],g={name:"display-card-long",components:{},props:["icon1","topic1","value1","icon2","topic2","value2","cardColor","topicColor","valueColor"]},h=g,y=(e("36bc"),Object(p["a"])(h,f,v,!1,null,"23fd8197",null)),x=y.exports,w={name:"PageIndex",components:{displayCard:C,displayCardLong:x},data(){return{padding:!0,vertical:!1,arrows:!0,navigation:!0,autoplay:!0,envi:"in",water:"main",interval:""}},computed:i()({},Object(r["b"])({DefaultGateway:t=>t.network.defaultGateway,staticIP:t=>t.network.staticIP,tempIn:t=>t.network.tempIn,tempOut:t=>t.network.tempOut,mainTank:t=>t.network.mainTank,subLeft:t=>t.network.subLeft,subRight:t=>t.network.subRight,lux:t=>t.network.lux})),methods:{fetchData(){this.interval=setInterval(function(){this.$store.dispatch("getDefaultGateway"),this.$store.dispatch("getFarmData")}.bind(this),1e4)}},beforeMount(){this.$store.dispatch("getDefaultGateway"),this.$store.dispatch("getFarmData")},mounted(){this.fetchData()},beforeDestroy(){clearInterval(this.interval)}},b=w,q=(e("2059"),e("880c")),k=e("62cd"),F=e("eebe"),_=e.n(F),I=Object(p["a"])(b,s,o,!1,null,"47aefcd6",null);a["default"]=I.exports;_()(I,"components",{QCarousel:q["a"],QCarouselSlide:k["a"]})},e630:function(t,a,e){}}]);