(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-050decb3"],{3672:function(e,t,n){},"8a43":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.checkbox?n("div",{staticClass:"checkbox"},[n("input",{attrs:{type:"checkbox",disabled:e.readonly,id:e.name},on:{change:function(t){return e.updateValue(t.target.checked)}}}),n("label",{attrs:{for:e.name}},[n("v-icon",{staticClass:"icon",attrs:{name:e.icon}}),e._v("\n    "+e._s(e.label)+"\n  ")],1)]):n("div",{staticClass:"toggle",class:{on:e.value}},[n("v-toggle",{attrs:{value:e.value,disabled:e.readonly},on:{input:e.updateValue}}),n("span",[e._v(e._s(e.label))])],1)},a=[],u=n("8db2"),i=n.n(u),o={mixins:[i.a],computed:{icon:function(){return this.value?"check_box":"check_box_outline_blank"},checkbox:function(){return this.options.checkbox||!1},label:function(){return this.value?this.options.labelOn:this.options.labelOff}},methods:{updateValue:function(e){this.$emit("input",e)}}},c=o,s=(n("bfc4"),n("2877")),r=Object(s["a"])(c,l,a,!1,null,"4cc4615c",null);t["default"]=r.exports},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},bfc4:function(e,t,n){"use strict";var l=n("3672"),a=n.n(l);a.a}}]);
//# sourceMappingURL=chunk-050decb3.8add0990.js.map