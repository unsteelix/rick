(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{441:function(e,t,r){var content=r(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("a309a210",content,!0,{sourceMap:!1})},442:function(e,t,r){"use strict";var n=r(2),l=r(281).trim;n({target:"String",proto:!0,forced:r(443)("trim")},{trim:function(){return l(this)}})},443:function(e,t,r){var n=r(103).PROPER,l=r(3),o=r(282);e.exports=function(e){return l((function(){return!!o[e]()||"​᠎"!=="​᠎"[e]()||n&&o[e].name!==e}))}},444:function(e,t,r){"use strict";r(441)},445:function(e,t,r){var n=r(56)((function(i){return i[1]}));n.push([e.i,".table{height:100%;width:100%}.el-table__body-wrapper{overflow-y:auto}",""]),n.locals={},e.exports=n},446:function(e,t,r){"use strict";r.r(t);r(48),r(15),r(27),r(188),r(101),r(102),r(47),r(442);var n={props:["characters"],data:function(){return{search:""}},methods:{filterStatus:function(e,t){return t.status.toLowerCase()===e.toLowerCase()},filterGender:function(e,t){return t.gender.toLowerCase()===e.toLowerCase()}}},l=(r(444),r(36)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("el-table",{staticClass:"table",attrs:{size:"mini",data:e.characters.filter((function(data){return!e.search||data.name.toLowerCase().includes(e.search.toLowerCase().trim())}))}},[t("el-table-column",{attrs:{prop:"name",label:"Name",width:"250"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-popover",{attrs:{trigger:"hover",placement:"right",title:r.row.name}},[t("div",{staticClass:"popover"},[t("img",{staticClass:"pop-image",attrs:{src:r.row.image}})]),e._v(" "),t("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t("el-tag",{attrs:{size:"medium"}},[e._v(e._s(r.row.name))])],1)])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"species",label:"Species",width:"150"}}),e._v(" "),t("el-table-column",{attrs:{prop:"status",label:"Status",width:"80",filters:[{text:"Alive",value:"Alive"},{text:"Dead",value:"Dead"},{text:"unknown",value:"unknown"}],"filter-method":e.filterStatus,"filter-placement":"bottom-end"}}),e._v(" "),t("el-table-column",{attrs:{prop:"gender",label:"Gender",width:"90",filters:[{text:"Female",value:"Female"},{text:"Male",value:"Male"},{text:"Genderless",value:"Genderless"},{text:"unknown",value:"unknown"}],"filter-method":e.filterGender,"filter-placement":"bottom-end"}}),e._v(" "),t("el-table-column",{attrs:{prop:"origin.name",label:"Origin.name","min-width":"200px"},scopedSlots:e._u([{key:"header",fn:function(r){return[e._v("\n      "+e._s(r.search)+"\n      "),t("el-input",{attrs:{size:"mini",placeholder:"Find me..."},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}}])})],1)}),[],!1,null,null,null);t.default=component.exports},456:function(e,t,r){"use strict";r.r(t);r(48),r(15),r(27),r(188),r(101),r(102),r(47),r(442),r(58);var n,l=r(139),o=r(12),c=(r(79),r(283),{props:["episodes"],data:function(){return{search:"",characters:[],filteredCharacters:[],selectedPage:1}},methods:{getCharacters:(n=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.selectedPage=1,0!==t.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("https://rickandmortyapi.com/api/character/".concat(t)).then((function(e){return e.json()}));case 5:r=e.sent,n=[],"id"in r?n.push(r):n=r,this.characters=n,this.filteredCharacters=this.filterByPage(1);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}),onPageChange:function(e){this.selectedPage=e,this.filteredCharacters=this.filterByPage(e)},filterByPage:function(e){return Object(l.a)(this.characters).splice(20*(e-1),20)}}}),d=c,h=r(36),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:e.episodes.filter((function(data){return!e.search||data.name.toLowerCase().includes(e.search.toLowerCase().trim())}))}},[t("el-table-column",{attrs:{prop:"episode",label:"Episode"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-popover",{attrs:{trigger:"click",placement:"top"}},[t("div",{staticClass:"popover"},[t("div",{staticClass:"name"},[e._v(e._s(r.row.name))]),e._v(" "),t("div",{staticClass:"airdate"},[e._v(e._s(r.row.air_date))]),e._v(" "),t("CharactersTable",{attrs:{characters:e.filteredCharacters}})],1),e._v(" "),t("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},on:{click:function(t){e.getCharacters(r.row.characters.map((function(e){return e.split("character/")[1]})))}},slot:"reference"},[t("el-tag",{attrs:{size:"medium"}},[e._v(e._s(r.row.name))])],1),e._v(" "),t("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":20,total:e.characters.length},on:{"current-change":e.onPageChange}})],1)]}}])}),e._v(" "),t("el-table-column",{scopedSlots:e._u([{key:"header",fn:function(r){return[e._v("\n      "+e._s(r.search)+"\n      "),t("el-input",{attrs:{size:"mini",placeholder:"Find me..."},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CharactersTable:r(446).default})}}]);