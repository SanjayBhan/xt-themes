!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(module,exports){module.exports=FusionCharts},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _FusionCharts=__webpack_require__(0),_FusionCharts2=_interopRequireDefault(_FusionCharts),_fusionchartsTheme=__webpack_require__(2),_fusionchartsTheme2=_interopRequireDefault(_fusionchartsTheme);_FusionCharts2["default"].addDep(_fusionchartsTheme2["default"])},function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0;/**!
 * @license Boilerplate Theme v//? write(JSON.parse(require('fs').readFileSync('./package.json')).version);
 * FusionCharts JavaScript Library
 *
 * This theme file includes the following theme variants:
 * - boilerplate-basic
 * - boilerplate-extended
 *
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 */
var themeArray=[{name:"boilerplate-basic",theme:{base:{chart:{labelDisplay:"stagger !important",caption:"Theme Caption \\!important",canvasBgColor:"#56EF22",borderThickness:"5 !important",borderColor:"#E60539",baseFontColor:"#781129"},categories:[{fontColor:"#0F4F40",fontSize:15,category:function(index){return{showLabel:index%2?0:1}},vline:{color:"#000000",thickness:2}}],dataset:[{color:"#8C3146",data:function(index,dataObj){return 8==index&&(dataObj.value=""),{color:Number(dataObj.value)<32e3?"#8C3146":"#FF0000",alpha:"100"}}}],trendlines:[{line:function(index){return index?{color:"#ff0000",thickness:3}:{color:"#ffff00",thickness:3}}}]},pie2d:{chart:{bgColor:"#FF0000"}},msline:{chart:{canvasBgColor:"#FF0000"}}}},{name:"boilerplate-extended",theme:{base:{chart:{labelDisplay:"rotate",showValues:1,rotateYAxisName:0,canvasBgColor:"#f0ff00",borderThickness:1},categories:{fontColor:"#ff0000",fontSize:15,category:function(index){return{showLabel:index%2?1:0}},vline:{color:"#000000",thickness:2}},dataset:[{color:"#00ffff",data:function(index){return{color:index%2?"#0FF000":"#ffffff",alpha:"100"}}}]}}}];exports["default"]={extension:themeArray,name:"boilerplateTheme",type:"theme"}}]);
//# sourceMappingURL=fusioncharts.theme.boilerplate.js.map