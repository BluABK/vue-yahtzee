(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-yahtzee/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1516:function(e,t,r){e.exports=r.p+"img/dieFace5.3f1e0c14.png"},"33a8":function(e,t,r){"use strict";r("8c07")},3845:function(e,t,r){e.exports=r.p+"img/dieFace1.141bd9bf.png"},4803:function(e,t,r){e.exports=r.p+"img/dieFace6.21bcb5b1.png"},4869:function(e,t,r){e.exports=r.p+"img/dieFace2.bc3b8427.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("VueYahtzee",{attrs:{msg:"Vue-Yatzy"}})],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),a("Settings"),a("div",{staticClass:"board-container"},[a("div",{staticClass:"player-adder-container"},[a("div",{staticClass:"player-adder",on:{click:function(t){return e.addPlayer()}}},[a("span",{staticClass:"player-adder-text"},[e._v("+")]),a("img",{staticClass:"player-adder-img",attrs:{src:r("fa19"),alt:"Add Player (CPU)"}}),a("div",{staticStyle:{clear:"left"}})]),a("div",{staticClass:"player-adder",on:{click:function(t){return e.addPlayer("CPU",!1)}}},[a("span",{staticClass:"player-adder-text"},[e._v("+")]),a("img",{staticClass:"player-adder-img",attrs:{src:r("f219"),alt:"Add Player (CPU)"}}),a("div",{staticStyle:{clear:"left"}})])]),a("div",{staticClass:"board-spacer"}),a("table",{staticClass:"board-table paper stacked"},[a("thead",[a("board-row",{attrs:{rowNumber:0,description:"Players",players:e.players,thickBottomBorder:!0,darkerBgColor:!0,boldFont:!0}})],1),a("tbody",[a("board-row",{attrs:{rowNumber:1,description:"Ones",players:e.players}}),a("board-row",{attrs:{rowNumber:2,description:"Twoes",players:e.players}}),a("board-row",{attrs:{rowNumber:3,description:"Threes",players:e.players}}),a("board-row",{attrs:{rowNumber:4,description:"Fours",players:e.players}}),a("board-row",{attrs:{rowNumber:5,description:"Fives",players:e.players}}),a("board-row",{attrs:{rowNumber:6,description:"Sixes",players:e.players,thickBottomBorder:!0}}),a("board-row",{attrs:{rowNumber:7,description:"Sum",players:e.players,darkerBgColor:!0,boldFont:!0}}),a("board-row",{attrs:{rowNumber:8,description:"Bonus",players:e.players,darkerBgColor:!0,boldFont:!0}}),a("board-row",{attrs:{rowNumber:9,description:"1 pair",players:e.players}}),a("board-row",{attrs:{rowNumber:10,description:"2 pairs",players:e.players}}),a("board-row",{attrs:{rowNumber:11,description:"3 equal",players:e.players}}),a("board-row",{attrs:{rowNumber:12,description:"4 equal",players:e.players}}),a("board-row",{attrs:{rowNumber:13,description:"Small straight",players:e.players}}),a("board-row",{attrs:{rowNumber:14,description:"Big straight",players:e.players}}),a("board-row",{attrs:{rowNumber:15,description:"House",players:e.players}}),a("board-row",{attrs:{rowNumber:16,description:"Chance",players:e.players}}),a("board-row",{attrs:{rowNumber:17,description:"Yatzy",players:e.players,thickBottomBorder:!0}}),a("board-row",{attrs:{rowNumber:18,description:"Sumtotal",players:e.players,darkerBgColor:!0,boldFont:!0}})],1)])]),a("button",{attrs:{disabled:e.players.length<=0,name:"btn-sim-game-forced"},on:{click:function(t){return e.playForcedGame()}}},[e._v("Simulate game (forced)")]),a("button",{attrs:{disabled:e.players.length<=0,name:"btn-sim-round"},on:{click:function(t){return e.rollAllDice()}}},[e._v("Roll die")]),a("br"),a("div",{staticClass:"rolled-dice-container"},[e._l(e.currentlyRolledDice,(function(t,n){return[e.currentlyRolledDice.length>0?a("div",{key:n,staticClass:"die",on:{click:function(t){return e.selectCurrentlyRolledDie(n)}}},[a("img",{attrs:{src:r("a02c")("./dieFace"+t+".png"),alt:t,title:t}})]):e._e()]}))],2)],1)},i=[],l=r("d4ec"),c=r("bee2"),u=(r("b0c0"),function(){function e(){Object(l["a"])(this,e),this.clear()}return Object(c["a"])(e,[{key:"list",get:function(){return[this.ones,this.twoes,this.threes,this.fours,this.fives,this.sixes,this.sum,this.bonus,this.pair,this.pairs,this.equal3,this.equal4,this.smallStraight,this.bigStraight,this.house,this.chance,this.yatzy,this.sumtotal]}},{key:"clear",value:function(){this.ones=null,this.twoes=null,this.threes=null,this.fours=null,this.fives=null,this.sixes=null,this.sum=null,this.bonus=null,this.pair=null,this.pairs=null,this.equal3=null,this.equal4=null,this.smallStraight=null,this.bigStraight=null,this.house=null,this.chance=null,this.yatzy=null,this.sumtotal=null}}]),e}());r("ac1f"),r("5319"),r("d3b7"),r("25f0");function d(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)}))}var p=function(){function e(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(l["a"])(this,e),this.id=d(),this.name=t,this.isHuman=r,this.scores=new u}return Object(c["a"])(e,[{key:"list",get:function(){var e=this.scores.list;return e.unshift(this.name),e}}]),e}(),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings"})},h=[],b={name:"Settings",props:{players:Array},data:function(){return{}}},y=b,m=r("2877"),g=Object(m["a"])(y,f,h,!1,null,"428dfe6d",null),v=g.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",{staticClass:"board-row",class:e.rowClassName},[r("th",{staticClass:"board-col",class:e.tableCellHeaderClassName},[e._v(e._s(e.description))]),e._l(e.players,(function(t){return[r("td",{key:t.id,staticClass:"board-col",class:e.tableCellDataClassName},[e._v(e._s(t.list[e.rowNumber]))])]}))],2)},x=[],C=(r("a9e3"),r("a15b"),{name:"BoardRow",props:{rowNumber:Number,description:String,players:Array,thickBottomBorder:{default:!1,type:Boolean},darkerBgColor:{default:!1,type:Boolean},boldFont:{default:!1,type:Boolean}},computed:{rowClassName:function(){var e=[];return this.thickBottomBorder&&e.push("thick-bottom-border"),this.darkerBgColor&&e.push("darken"),e.join(" ")},tableCellHeaderClassName:function(){var e=[];return this.boldFont&&e.push("bold-font"),e.join(" ")},tableCellDataClassName:function(){var e=[];return this.boldFont&&e.push("bold-font"),e.join(" ")}}}),_=C,N=(r("f14d"),Object(m["a"])(_,w,x,!1,null,"3c58f6f9",null)),O=N.exports,k={name:"VueYahtzee",components:{Settings:v,BoardRow:O},props:{msg:String},created:function(){this.SCORE_BOARD_ROWS=18},computed:{},data:function(){return{players:[],gameRunning:!1,currentScoreBoardRow:0,currentPlayer:null,currentlyRolledDice:[]}},methods:{addPlayer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unnamed",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=new p(e,t);this.players.push(r),console.log("Added player",r)},rollDie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e-1+Math.ceil(Math.random()*(t-e+1))},rollAllDice:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=[],r=0;r<e;r++)t.push(this.rollDie());this.currentlyRolledDice=t,console.log("currentlyRolledDice",this.currentlyRolledDice)},selectCurrentlyRolledDie:function(e){console.log("selectDie",e,this.currentlyRolledDice[e])},playForcedGame:function(){this.gameRunning=!0;for(var e=0;e<this.SCORE_BOARD_ROWS;e++)console.log(e)}}},S=k,B=(r("33a8"),Object(m["a"])(S,s,i,!1,null,"7cc5619e",null)),F=B.exports,j={name:"App",components:{VueYahtzee:F}},R=j,D=(r("034f"),Object(m["a"])(R,n,o,!1,null,null,null)),P=D.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,r){},"8c07":function(e,t,r){},9651:function(e,t,r){},a02c:function(e,t,r){var a={"./dieFace1.png":"3845","./dieFace2.png":"4869","./dieFace3.png":"d0fc","./dieFace4.png":"a4a7","./dieFace5.png":"1516","./dieFace6.png":"4803"};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="a02c"},a4a7:function(e,t,r){e.exports=r.p+"img/dieFace4.ce19d3bb.png"},d0fc:function(e,t,r){e.exports=r.p+"img/dieFace3.7a0df4bd.png"},f14d:function(e,t,r){"use strict";r("9651")},f219:function(e,t,r){e.exports=r.p+"img/cpu.377e244f.svg"},fa19:function(e,t,r){e.exports=r.p+"img/person.686fcbe8.png"}});
//# sourceMappingURL=app.72c195ae.js.map