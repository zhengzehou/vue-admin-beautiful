/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-12-4 23:03:28
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b25a3"],{"246a":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"webSocket-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:8}},[s("el-alert",{attrs:{type:"success",closable:!1}},[e._v(" webSocket连接"+e._s(e.status)+"！ ")]),s("br"),s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"地址"}},[s("el-input",{attrs:{disabled:""},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),s("el-form-item",{attrs:{label:"消息",prop:"message"}},[s("el-input",{model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("发送消息")])],1),s("el-form-item",{attrs:{label:"返回信息汇总"}},[e._v(" "+e._s(e.data)+" ")])],1)],1)],1)],1)},n=[],r={name:"WebSocket",components:{},data:function(){return{url:"ws://123.207.136.134:9010/ajaxchattest",webSocket:null,data:[],status:"",form:{message:null},rules:{message:[{required:!0,message:"请输入消息",trigger:"blur"}]}}},created:function(){this.init()},destroyed:function(){this.webSocket.close()},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){if(!t)return!1;e.send(e.form.message)}))},init:function(){var e=this.url;this.webSocket=new WebSocket(e),this.webSocket.onmessage=this.onmessage,this.webSocket.onopen=this.onopen,this.webSocket.onerror=this.onerror,this.webSocket.onclose=this.onclose},onopen:function(){this.status="成功"},onerror:function(){this.status="失败",this.initWebSocket()},onmessage:function(e){var t=e.data;this.data.push(t.substring(0,t.length-66))},send:function(e){this.webSocket.send(e)},onclose:function(e){this.status="断开"}}},a=r,i=s("2877"),l=Object(i["a"])(a,o,n,!1,null,null,null);t["default"]=l.exports}}]);