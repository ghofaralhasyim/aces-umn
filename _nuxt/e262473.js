(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{306:function(t,e,l){var content=l(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(64).default)("6c3a57b9",content,!0,{sourceMap:!1})},310:function(t,e,l){"use strict";l(306)},311:function(t,e,l){var o=l(63)(!1);o.push([t.i,".labs-card[data-v-157f6646]{padding:12px 12px 20px;background-color:#fff;color:#222;min-width:100%;max-height:230px;overflow:hidden;box-shadow:0 8px 16px 5px hsla(0,0%,62.4%,.13);border-radius:4px}.labs-card h4[data-v-157f6646]{font-size:1em;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.labs-card .author[data-v-157f6646],.labs-card p[data-v-157f6646]{color:#929292}.labs-card p[data-v-157f6646]{text-align:justify;overflow:hidden;max-height:72px;min-height:72px}.labs-card .label[data-v-157f6646]{background:#969696;padding:6px 12px;border-radius:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),t.exports=o},322:function(t,e,l){"use strict";l.r(e);var o={props:{data:{type:Object,default:function(){}}},methods:{generateLink:function(t){return{name:"labs-slug",params:{slug:t}}}}},r=(l(310),l(24)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nuxt-link",{staticClass:"flex flex-col shadow full-width pl-8 pr-8",attrs:{to:t.generateLink(t.data.slug)}},[l("div",{staticClass:"labs-card flex flex-col"},[l("h4",{staticClass:"m-0"},[t._v(t._s(t.data.title))]),t._v(" "),l("span",{staticClass:"text-small author mt-8"},[t._v("Author: "+t._s(t.data.author.name))]),t._v(" "),l("p",{staticClass:"text-small",domProps:{innerHTML:t._s(t.data.excerpt)}}),t._v(" "),l("div",{staticClass:"flex flex-row col-gap-12"},[l("span",{staticClass:"text-small label",class:"Backend Web Development"===t.data.labscategory.name?"label-blue":"DevSecOps"===t.data.labscategory.name?"label-yellow":"label-grey"},[t._v(t._s(t.data.labscategory.name))])])])])}),[],!1,null,"157f6646",null);e.default=component.exports}}]);