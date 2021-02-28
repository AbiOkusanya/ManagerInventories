(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,n){},63:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);n(28);var a=n(1),c=n.n(a),r=n(38),s=n.n(r),o=(n(44),n(19)),i=n(20),u=n(23),l=n(22),j=n(4),p=n.n(j),b=(n(63),n(16)),m=n(3),d=n(0),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{id:"header",children:Object(d.jsx)("h1",{children:"Inventory Manager"})})}}]),n}(c.a.Component),x=n(14),O=n(2),f=n.n(O),v=n(9),y=n(5),k=n(6),g=n(8);function N(e){var t=e.home,n=e.selectHome,a=e.deleteHome;return Object(d.jsxs)("div",{className:"Homecontainer",children:[Object(d.jsx)("h2",{className:"text shadow",children:"Home Inventory"}),Object(d.jsxs)("div",{className:"home container",children:[Object(d.jsx)("h5",{className:"homeCategory",children:t.homeCategory}),Object(d.jsx)("h5",{className:"homeBrand",children:t.homeBrand}),Object(d.jsx)("h5",{className:"homeLocation",children:t.homeLocation}),Object(d.jsx)("h5",{className:"description",children:t.description}),Object(d.jsx)("h5",{className:"homeNumberofItems",children:t.homeNumberofItems}),Object(d.jsx)("h5",{className:"homeInStock",children:t.homeInStock})]},t.id),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary","data-mdb-ripple-color":"dark",onClick:function(){return n(t)},children:"Edit Home"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary","data-mdb-ripple-color":"dark",onClick:function(){return a(t.id)},children:"Delete Home"})]})}var w=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],c=t[1];function r(){return s.apply(this,arguments)}function s(){return(s=Object(k.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://radiant-ocean-92179.herokuapp.com/homes");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(a.useEffect)((function(){r()}),[]);var o=Object(a.useState)(null),i=Object(g.a)(o,2),u=i[0],l=i[1];function j(e){e.preventDefault(),function(){b.apply(this,arguments)}()}function b(){return(b=Object(k.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("https://radiant-ocean-92179.herokuapp.com/homes",u);case 3:t=e.sent,c([].concat(Object(x.a)(n),[t.data])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var m=Object(a.useState)(null),h=Object(g.a)(m,2),O=h[0],w=h[1];function I(e){w(e)}function S(){return(S=Object(k.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.patch("https://radiant-ocean-92179.herokuapp.com/homes",O);case 4:n=e.sent,console.log(n.data),r(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0,e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function C(e){return L.apply(this,arguments)}function L(){return(L=Object(k.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("https://radiant-ocean-92179.herokuapp.com/homes/"+t);case 3:n=e.sent,console.log(n.data),r(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"container",children:[n&&n.map((function(e){return Object(d.jsx)(N,{home:e,selectHome:I,deleteHome:C})})),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Update Inventory Here"}),Object(d.jsxs)("form",{className:"log-new-inventory",onChange:function(e){return function(e){var t=e.target,n=t.name,a=t.value;l(Object(y.a)(Object(y.a)({},u),{},Object(v.a)({},n,a)))}(e)},onSubmit:function(e){return j(e)},children:[Object(d.jsxs)("label",{children:["Category:",Object(d.jsx)("input",{type:"text",name:"homeCategory"})]}),Object(d.jsxs)("label",{children:["Brand:",Object(d.jsx)("input",{type:"text",name:"homeBrand"})]}),Object(d.jsxs)("label",{children:["Location:",Object(d.jsx)("input",{type:"text",name:"homeLocation"})]}),Object(d.jsxs)("label",{children:["Description:",Object(d.jsx)("input",{type:"text",name:"description"})]}),Object(d.jsxs)("label",{children:["Number of Items:",Object(d.jsx)("input",{type:"text",name:"homeNumberofItems"})]}),Object(d.jsxs)("label",{children:["In Stock:",Object(d.jsx)("input",{type:"text",name:"homeInStock"})]}),Object(d.jsx)("input",{type:"submit",value:"Log New Inventory",className:"update"})]}),O&&Object(d.jsxs)("form",{onChange:function(e){return function(e){var t=e.target,n=t.name,a=t.value;w(Object(y.a)(Object(y.a)({},O),{},Object(v.a)({},n,a)))}(e)},onSubmit:function(e){return function(e){return S.apply(this,arguments)}(e)},children:[Object(d.jsxs)("label",{children:["Category:",Object(d.jsx)("input",{type:"text",name:"homeCategory",defaultValue:O.homeCategory})]}),Object(d.jsxs)("label",{children:["Brand:",Object(d.jsx)("input",{type:"text",name:"homeBrand",defaultValue:O.homeBrand})]}),Object(d.jsxs)("label",{children:["Location:",Object(d.jsx)("input",{type:"text",name:"homeLocation",defaultValue:O.homeLocation})]}),Object(d.jsxs)("label",{children:["Description:",Object(d.jsx)("input",{type:"text",name:"description",defaultValue:O.description})]}),Object(d.jsxs)("label",{children:["Number of Items:",Object(d.jsx)("input",{type:"integer",name:"homeNumberofItems",defaultValue:O.numberofItems})]}),Object(d.jsxs)("label",{children:["In Stock:",Object(d.jsx)("input",{type:"boolean",name:"homeInStock",defaultValue:O.homeInStock})]}),Object(d.jsx)("input",{className:"update",type:"submit",value:"Log New Inventory"})]})]})]})};function I(e){var t=e.makeup,n=e.selectMakeup,a=e.deleteMakeup;return Object(d.jsxs)("div",{className:"Makeupcontainer",children:[Object(d.jsx)("h2",{className:"text shadow",children:"Makeup Inventory"}),Object(d.jsxs)("div",{className:"makeup container",children:[Object(d.jsx)("h5",{className:"makeupCategory",children:t.makeupCategory}),Object(d.jsx)("h5",{className:"makeupBrand",children:t.makeupBrand}),Object(d.jsx)("h5",{className:"makeupLocation",children:t.makeupLocation}),Object(d.jsx)("h5",{className:"description",children:t.description}),Object(d.jsx)("h5",{className:"makeupNumberofItems",children:t.makeupNumberofItems}),Object(d.jsx)("h5",{className:"makeupInStock",children:t.makeupInStock})]},t.id),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary","data-mdb-ripple-color":"dark",onClick:function(){return n(t)},children:"Edit Makeup"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary","data-mdb-ripple-color":"dark",onClick:function(){return a(t.id)},children:"Delete Makeup"})]})}var S=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],c=t[1];function r(){return s.apply(this,arguments)}function s(){return(s=Object(k.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://radiant-ocean-92179.herokuapp.com/makeups");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(a.useEffect)((function(){r()}),[]);var o=Object(a.useState)(null),i=Object(g.a)(o,2),u=i[0],l=i[1];function j(e){e.preventDefault(),function(){b.apply(this,arguments)}()}function b(){return(b=Object(k.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("https://radiant-ocean-92179.herokuapp.com/makeups",u);case 3:t=e.sent,c([].concat(Object(x.a)(n),[t.data])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var m=Object(a.useState)(null),h=Object(g.a)(m,2),O=h[0],N=h[1];function w(e){N(e)}function S(){return(S=Object(k.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.patch("https://radiant-ocean-92179.herokuapp.com/makeups",O);case 4:n=e.sent,console.log(n.data),r(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0,e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function C(e){return L.apply(this,arguments)}function L(){return(L=Object(k.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("https://radiant-ocean-92179.herokuapp.com/makeups/"+t);case 3:n=e.sent,console.log(n.data),r(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"container",children:[n&&n.map((function(e){return Object(d.jsx)(I,{makeup:e,selectMakeup:w,deleteMakeup:C})})),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Update Inventory Here"}),Object(d.jsxs)("form",{className:"log-new-inventory",onChange:function(e){return function(e){var t=e.target,n=t.name,a=t.value;l(Object(y.a)(Object(y.a)({},u),{},Object(v.a)({},n,a)))}(e)},onSubmit:function(e){return j(e)},children:[Object(d.jsxs)("label",{children:["Category:",Object(d.jsx)("input",{type:"text",name:"makeupCategory"})]}),Object(d.jsxs)("label",{children:["Brand:",Object(d.jsx)("input",{type:"text",name:"makeupBrand"})]}),Object(d.jsxs)("label",{children:["Location:",Object(d.jsx)("input",{type:"text",name:"makeupLocation"})]}),Object(d.jsxs)("label",{children:["Description:",Object(d.jsx)("input",{type:"text",name:"description"})]}),Object(d.jsxs)("label",{children:["Number of Items:",Object(d.jsx)("input",{type:"text",name:"makeupNumberofItems"})]}),Object(d.jsxs)("label",{children:["In Stock:",Object(d.jsx)("input",{type:"text",name:"makeupInStock"})]}),Object(d.jsx)("input",{type:"submit",value:"Log New Inventory",className:"update"})]}),O&&Object(d.jsxs)("form",{onChange:function(e){return function(e){var t=e.target,n=t.name,a=t.value;N(Object(y.a)(Object(y.a)({},O),{},Object(v.a)({},n,a)))}(e)},onSubmit:function(e){return function(e){return S.apply(this,arguments)}(e)},children:[Object(d.jsxs)("label",{children:["Category:",Object(d.jsx)("input",{type:"text",name:"makeupCategory",defaultValue:O.makeupCategory})]}),Object(d.jsxs)("label",{children:["Brand:",Object(d.jsx)("input",{type:"text",name:"makeupBrand",defaultValue:O.makeupBrand})]}),Object(d.jsxs)("label",{children:["Location:",Object(d.jsx)("input",{type:"text",name:"makeupLocation",defaultValue:O.makeupLocation})]}),Object(d.jsxs)("label",{children:["Description:",Object(d.jsx)("input",{type:"text",name:"description",defaultValue:O.description})]}),Object(d.jsxs)("label",{children:["Number of Items:",Object(d.jsx)("input",{type:"integer",name:"makeupNumberofItems",defaultValue:O.makeupNumberofItems})]}),Object(d.jsxs)("label",{children:["In Stock:",Object(d.jsx)("input",{type:"boolean",name:"makeupInStock",defaultValue:O.makeupInStock})]}),Object(d.jsx)("input",{className:"update",type:"submit",value:"Edit Inventory"})]})]})]})};function C(e){var t=e.men,n=e.selectMen,a=e.deleteMen;return Object(d.jsxs)("div",{className:"Mencontainer",children:[Object(d.jsx)("h2",{className:"text shadow",children:"Mens Inventory"}),Object(d.jsxs)("div",{className:"men container",children:[Object(d.jsx)("h5",{className:"menCategory",children:t.menCategory}),Object(d.jsx)("h5",{className:"menBrand",children:t.menBrand}),Object(d.jsx)("h5",{className:"menLocation",children:t.menLocation}),Object(d.jsx)("h5",{className:"description",children:t.description}),Object(d.jsx)("h5",{className:"menNumberofItems",children:t.menNumberofItems}),Object(d.jsx)("h5",{className:"menInStock",children:t.menInStock})]},t.id),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary","data-mdb-ripple-color":"dark",onClick:function(){return n(t)},children:"Edit Men"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary","data-mdb-ripple-color":"dark",onClick:function(){return a(t.id)},children:"Delete Men"})]})}var L=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],c=t[1];function r(){return s.apply(this,arguments)}function s(){return(s=Object(k.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://radiant-ocean-92179.herokuapp.com/mens");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(a.useEffect)((function(){r()}),[]);var o=Object(a.useState)(null),i=Object(g.a)(o,2),u=i[0],l=i[1];function j(e){e.preventDefault(),function(){b.apply(this,arguments)}()}function b(){return(b=Object(k.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("https://radiant-ocean-92179.herokuapp.com/mens",u);case 3:t=e.sent,c([].concat(Object(x.a)(n),[t.data])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var m=Object(a.useState)(null),h=Object(g.a)(m,2),O=h[0],N=h[1];function w(e){N(e)}function I(){return(I=Object(k.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.patch("https://radiant-ocean-92179.herokuapp.com/mens",O);case 4:n=e.sent,console.log(n.data),r(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0,e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function S(e){return L.apply(this,arguments)}function L(){return(L=Object(k.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("https://radiant-ocean-92179.herokuapp.com/mens/"+t);case 3:n=e.sent,console.log(n.data),r(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"container",children:[n&&n.map((function(e){return Object(d.jsx)(C,{men:e,selectMen:w,deleteMen:S})})),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Update Inventory Here"}),Object(d.jsxs)("form",{className:"log-new-inventory",onChange:function(e){return function(e){var t=e.target,n=t.name,a=t.value;l(Object(y.a)(Object(y.a)({},u),{},Object(v.a)({},n,a)))}(e)},onSubmit:function(e){return j(e)},children:[Object(d.jsxs)("label",{children:["Category:",Object(d.jsx)("input",{type:"text",name:"menCategory"})]}),Object(d.jsxs)("label",{children:["Brand:",Object(d.jsx)("input",{type:"text",name:"menBrand"})]}),Object(d.jsxs)("label",{children:["Location:",Object(d.jsx)("input",{type:"text",name:"menLocation"})]}),Object(d.jsxs)("label",{children:["Description:",Object(d.jsx)("input",{type:"text",name:"description"})]}),Object(d.jsxs)("label",{children:["Number of Items:",Object(d.jsx)("input",{type:"integer",name:"menNumberofItems"})]}),Object(d.jsxs)("label",{children:["In Stock:",Object(d.jsx)("input",{type:"boolean",name:"menInStock"})]}),Object(d.jsx)("input",{type:"submit",value:"Log New Inventory",className:"update"})]}),O&&Object(d.jsxs)("form",{onChange:function(e){return function(e){var t=e.target,n=t.name,a=t.value;N(Object(y.a)(Object(y.a)({},O),{},Object(v.a)({},n,a)))}(e)},onSubmit:function(e){return function(e){return I.apply(this,arguments)}(e)},children:[Object(d.jsxs)("label",{children:["Category:",Object(d.jsx)("input",{type:"text",name:"menCategory",defaultValue:O.menCategory})]}),Object(d.jsxs)("label",{children:["Brand:",Object(d.jsx)("input",{type:"text",name:"menBrand",defaultValue:O.menBrand})]}),Object(d.jsxs)("label",{children:["Location:",Object(d.jsx)("input",{type:"text",name:"menLocation",defaultValue:O.menLocation})]}),Object(d.jsxs)("label",{children:["Description:",Object(d.jsx)("input",{type:"text",name:"description",defaultValue:O.description})]}),Object(d.jsxs)("label",{children:["Number of Items:",Object(d.jsx)("input",{type:"integer",name:"menNumberofItems",defaultValue:O.menNumberofItems})]}),Object(d.jsxs)("label",{children:["In Stock:",Object(d.jsx)("input",{type:"boolean",name:"menInStock",defaultValue:O.menInStock})]}),Object(d.jsx)("input",{className:"update",type:"submit",value:"Log New Inventory"})]})]})]})};function B(e){var t=e.women,n=e.selectWomen,a=e.deleteWomen;return Object(d.jsxs)("div",{className:"Womencontainer",children:[Object(d.jsx)("h2",{className:"text shadow",children:"Womens Inventory"}),Object(d.jsxs)("div",{className:"women container",children:[Object(d.jsx)("h5",{className:"womenCategory",children:t.womenCategory}),Object(d.jsx)("h5",{className:"womenBrand",children:t.womenBrand}),Object(d.jsx)("h5",{className:"womenLocation",children:t.womenLocation}),Object(d.jsx)("h5",{className:"description",children:t.description}),Object(d.jsx)("h5",{className:"womenNumberofItems",children:t.womenNumberofItems}),Object(d.jsx)("h5",{className:"womenInStock",children:t.womenInStock})]},t.id),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary","data-mdb-ripple-color":"dark",onClick:function(){return n(t)},children:"Edit Women"}),Object(d.jsx)("button",{type:"button",class:"btn btn-outline-secondary","data-mdb-ripple-color":"dark",onClick:function(){return a(t.id)},children:"Delete Women"})]})}var V=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],c=t[1];function r(){return s.apply(this,arguments)}function s(){return(s=Object(k.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://radiant-ocean-92179.herokuapp.com/womens");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(a.useEffect)((function(){r()}),[]);var o=Object(a.useState)(null),i=Object(g.a)(o,2),u=i[0],l=i[1];function j(e){e.preventDefault(),function(){b.apply(this,arguments)}()}function b(){return(b=Object(k.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("https://radiant-ocean-92179.herokuapp.com/womens",u);case 3:t=e.sent,c([].concat(Object(x.a)(n),[t.data])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var m=Object(a.useState)(null),h=Object(g.a)(m,2),O=h[0],N=h[1];function w(e){N(e)}function I(){return(I=Object(k.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.patch("https://radiant-ocean-92179.herokuapp.com/womens",O);case 4:n=e.sent,console.log(n.data),r(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0,e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function S(e){return C.apply(this,arguments)}function C(){return(C=Object(k.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("https://radiant-ocean-92179.herokuapp.com/womens/"+t);case 3:n=e.sent,console.log(n.data),r(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0,e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"container",children:[n&&n.map((function(e){return Object(d.jsx)(B,{women:e,selectWomen:w,deleteWomen:S})})),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Update Inventory Here"}),Object(d.jsxs)("form",{className:"log-new-inventory",onChange:function(e){return function(e){var t=e.target,n=t.name,a=t.value;l(Object(y.a)(Object(y.a)({},u),{},Object(v.a)({},n,a)))}(e)},onSubmit:function(e){return j(e)},children:[Object(d.jsxs)("label",{children:["Category:",Object(d.jsx)("input",{type:"text",name:"womenCategory"})]}),Object(d.jsxs)("label",{children:["Brand:",Object(d.jsx)("input",{type:"text",name:"womenBrand"})]}),Object(d.jsxs)("label",{children:["Location:",Object(d.jsx)("input",{type:"text",name:"womenLocation"})]}),Object(d.jsxs)("label",{children:["Description:",Object(d.jsx)("input",{type:"text",name:"description"})]}),Object(d.jsxs)("label",{children:["Number of Items:",Object(d.jsx)("input",{type:"text",name:"womenNumberofItems"})]}),Object(d.jsxs)("label",{children:["In Stock:",Object(d.jsx)("input",{type:"text",name:"womenInStock"})]}),Object(d.jsx)("input",{type:"submit",value:"Log New Inventory",className:"update"})]}),O&&Object(d.jsxs)("form",{onChange:function(e){return function(e){var t=e.target,n=t.name,a=t.value;N(Object(y.a)(Object(y.a)({},O),{},Object(v.a)({},n,a)))}(e)},onSubmit:function(e){return function(e){return I.apply(this,arguments)}(e)},children:[Object(d.jsxs)("label",{children:["Category:",Object(d.jsx)("input",{type:"text",name:"womenCategory",defaultValue:O.womenCategory})]}),Object(d.jsxs)("label",{children:["Brand:",Object(d.jsx)("input",{type:"text",name:"womenBrand",defaultValue:O.womenBrand})]}),Object(d.jsxs)("label",{children:["Location:",Object(d.jsx)("input",{type:"text",name:"womenLocation",defaultValue:O.womenLocation})]}),Object(d.jsxs)("label",{children:["Description:",Object(d.jsx)("input",{type:"text",name:"description",defaultValue:O.description})]}),Object(d.jsxs)("label",{children:["Number of Items:",Object(d.jsx)("input",{type:"text",name:"womenNumberofItems",defaultValue:O.numberofItems})]}),Object(d.jsxs)("label",{children:["In Stock:",Object(d.jsx)("input",{type:"text",name:"womenInStock",defaultValue:O.womenInStock})]}),Object(d.jsx)("input",{className:"update",type:"submit",value:"Log New Inventory"})]})]})]})},D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{}),Object(d.jsx)(b.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/home",children:"Home Inventory"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/makeups",children:"Makeup Inventory"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/mens",children:"Mens Inventory"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/womens",children:"Womens Inventory"})})]}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/home",children:Object(d.jsx)(w,{})}),Object(d.jsx)(m.a,{path:"/makeups",children:Object(d.jsx)(S,{})}),Object(d.jsx)(m.a,{path:"/mens",children:Object(d.jsx)(L,{})}),Object(d.jsx)(m.a,{path:"/womens",children:Object(d.jsx)(V,{})})]})]})})]})}}]),n}(c.a.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),M()}},[[71,1,2]]]);
//# sourceMappingURL=main.6a563e39.chunk.js.map