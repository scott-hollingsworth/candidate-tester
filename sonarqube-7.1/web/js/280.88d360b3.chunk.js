(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{1005:function(t,e,n){"use strict";n.d(e,"i",function(){return i}),n.d(e,"h",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"f",function(){return s}),n.d(e,"l",function(){return l}),n.d(e,"b",function(){return p}),n.d(e,"n",function(){return d}),n.d(e,"c",function(){return f}),n.d(e,"o",function(){return m}),n.d(e,"e",function(){return y}),n.d(e,"k",function(){return g}),n.d(e,"m",function(){return h}),n.d(e,"a",function(){return b}),n.d(e,"g",function(){return O}),n.d(e,"j",function(){return v});var a=n(3),o=n(13),r=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};function i(t){return Object(a.getJSON)("/api/qualitygates/list",t).catch(o.a)}function c(t){return Object(a.getJSON)("/api/qualitygates/show",t).catch(o.a)}function u(t){return Object(a.postJSON)("/api/qualitygates/create",t).catch(o.a)}function s(t){return Object(a.post)("/api/qualitygates/destroy",t).catch(o.a)}function l(t){return Object(a.post)("/api/qualitygates/rename",t).catch(o.a)}function p(t){return Object(a.postJSON)("/api/qualitygates/copy",t).catch(o.a)}function d(t){return Object(a.post)("/api/qualitygates/set_as_default",t).catch(o.a)}function f(t){return Object(a.postJSON)("/api/qualitygates/create_condition",t)}function m(t){return Object(a.postJSON)("/api/qualitygates/update_condition",t)}function y(t){return Object(a.post)("/api/qualitygates/delete_condition",t)}function g(t){return Object(a.getJSON)("/api/qualitygates/get_by_project",t).then(function(t){var e=t.qualityGate;return e&&r({},e,{isDefault:e.default})},o.a)}function h(t){return Object(a.getJSON)("/api/qualitygates/search",t).catch(o.a)}function b(t){return Object(a.post)("/api/qualitygates/select",t).catch(o.a)}function O(t){return Object(a.post)("/api/qualitygates/deselect",t).catch(o.a)}function v(t){return Object(a.getJSON)("/api/qualitygates/application_status",t).catch(o.a)}},1013:function(t,e,n){"use strict";var a,o=n(0),r=n(4),i=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(e){var n=t.call(this,e)||this;return n.getPosition=function(){var t=n.container&&n.container.getBoundingClientRect();return t?{top:window.pageYOffset+t.top,left:window.pageXOffset+t.left}:{top:0,left:0}},n.debouncedOnResize=Object(r.debounce)(function(){return n.forceUpdate()},250),n}return i(e,t),e.prototype.componentDidMount=function(){this.forceUpdate(),window.addEventListener("resize",this.debouncedOnResize)},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.debouncedOnResize)},e.prototype.render=function(){var t=this;return o.createElement("div",{className:this.props.className,ref:function(e){return t.container=e}},this.props.children(this.getPosition()))},e}(o.PureComponent);e.a=c},1072:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n(0),o=n(6),r=n(25),i=n(1);function c(t){var e=t.className,n=t.tooltip,c=void 0===n||n,u=a.createElement("div",{className:o("outline-badge",e)},Object(i.l)("quality_gates.built_in")),s=a.createElement("div",null,a.createElement("span",null,Object(i.l)("quality_gates.built_in.description.1")),a.createElement("span",{className:"little-spacer-left"},Object(i.l)("quality_gates.built_in.description.2")));return a.createElement(r.a,{overlay:c?s:void 0},u)}},1114:function(t,e,n){},1159:function(t,e,n){"use strict";n.r(e);var a,o=n(10),r=n(64),i=n(0),c=n.n(i),u=n(5),s=n.n(u),l=n(22),p=n.n(l),d=n(1005),f=n(20),m=n(11),y=n(1),g=n(38),h=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={loading:!1,name:""},e.handleNameChange=function(t){e.setState({name:t.currentTarget.value})},e.handleFormSubmit=function(t){t.preventDefault();var n=e.props.organization,a=e.state.name;a&&(e.setState({loading:!0}),Object(d.d)({name:a,organization:n}).then(function(t){e.props.onCreate(t),e.context.router.push(Object(g.t)(String(t.id),n)),e.props.onClose()},function(){e.mounted&&e.setState({loading:!1})}))},e}return h(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.state,e=t.loading,n=t.name,a=Object(y.l)("quality_gates.create"),o=e||!n;return i.createElement(f.a,{contentLabel:a,onRequestClose:this.props.onClose},i.createElement("form",{id:"quality-gate-form",onSubmit:this.handleFormSubmit},i.createElement("div",{className:"modal-head"},i.createElement("h2",null,a)),i.createElement("div",{className:"modal-body"},i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"quality-gate-form-name"},Object(y.l)("name"),i.createElement("em",{className:"mandatory"},"*")),i.createElement("input",{autoFocus:!0,id:"quality-gate-form-name",maxLength:100,onChange:this.handleNameChange,required:!0,size:50,type:"text",value:n}))),i.createElement("div",{className:"modal-foot"},e&&i.createElement("i",{className:"spinner spacer-right"}),i.createElement(m.f,{className:"js-confirm",disabled:o},Object(y.l)("save")),i.createElement(m.e,{className:"js-modal-close",onClick:this.props.onClose},Object(y.l)("cancel")))))},e.contextTypes={router:u.object},e}(i.PureComponent),O=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={createQualityGateOpen:!1},e.openCreateQualityGateForm=function(){e.setState({createQualityGateOpen:!0})},e.closeCreateQualityGateForm=function(){e.setState({createQualityGateOpen:!1})},e}return O(e,t),e.prototype.render=function(){var t=this.props.organization;return i.createElement("header",{className:"page-header"},i.createElement("h1",{className:"page-title"},Object(y.l)("quality_gates.page")),this.props.canCreate&&i.createElement("div",{className:"page-actions"},i.createElement(m.a,{id:"quality-gate-add",onClick:this.openCreateQualityGateForm},Object(y.l)("create"))),this.state.createQualityGateOpen&&i.createElement(b,{onClose:this.closeCreateQualityGateForm,onCreate:this.props.onAdd,organization:t&&t.key}))},e}(i.PureComponent),j=n(2),_=n(1072);function E(t){var e=t.organization,n=t.qualityGates;return c.a.createElement("div",{className:"list-group"},n.map(function(t){return c.a.createElement(j.Link,{activeClassName:"active",className:"list-group-item","data-id":t.id,key:t.id,to:Object(g.t)(String(t.id),e&&e.key)},c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,t.name),c.a.createElement("td",{className:"thin nowrap spacer-left text-right"},t.isDefault&&c.a.createElement("span",{className:"badge"},Object(y.l)("default")),t.isBuiltIn&&c.a.createElement(_.a,{className:"little-spacer-left",tooltip:!1}))))))}))}var N=n(1013),q=(n(1114),function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}()),w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={},e.fetchQualityGates=function(){return Object(d.i)({organization:e.props.organization&&e.props.organization.key}).then(function(t){var n=t.actions,a=t.qualitygates,o=e.props,r=o.organization;(0,o.updateStore)({actions:n,qualityGates:a}),a&&1===a.length&&!n.create&&e.context.router.replace(Object(g.t)(String(a[0].id),r&&r.key))},function(){})},e}return q(e,t),e.prototype.componentDidMount=function(){this.fetchQualityGates(),document.body.classList.add("white-page"),document.documentElement.classList.add("white-page");var t=document.getElementById("footer");t&&t.classList.add("page-footer-with-sidebar")},e.prototype.componentWillUnmount=function(){document.body.classList.remove("white-page"),document.documentElement.classList.remove("white-page");var t=document.getElementById("footer");t&&t.classList.remove("page-footer-with-sidebar")},e.prototype.render=function(){var t=this,e=this.props,n=e.children,a=e.qualityGates,o=e.actions,r=e.organization,i=Object(y.l)("quality_gates.page");return c.a.createElement("div",{id:"quality-gates-page",className:"layout-page"},c.a.createElement(p.a,{defaultTitle:i,titleTemplate:"%s - "+i}),c.a.createElement(N.a,{className:"layout-page-side-outer"},function(e){var n=e.top;return c.a.createElement("div",{className:"layout-page-side",style:{top:n}},c.a.createElement("div",{className:"layout-page-side-inner"},c.a.createElement("div",{className:"layout-page-filters"},c.a.createElement(v,{canCreate:o&&o.create,onAdd:t.props.addQualityGate,organization:r}),a&&c.a.createElement(E,{organization:r,qualityGates:a}))))}),null!=a&&c.a.Children.map(n,function(t){return c.a.cloneElement(t,{organization:r})}))},e.contextTypes={router:s.a.object.isRequired},e}(i.Component),C=n(7);e.default=Object(o.connect)(function(t){return Object(C.getQualityGatesAppState)(t)},function(t){return{updateStore:function(e){return t(Object(r.s)(e))},addQualityGate:function(e){return t(Object(r.l)(e))},deleteQualityGate:function(e){return t(Object(r.o)(e))}}})(w)}}]);
//# sourceMappingURL=280.88d360b3.chunk.js.map