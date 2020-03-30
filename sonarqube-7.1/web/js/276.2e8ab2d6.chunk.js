(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{1007:function(e,t,n){"use strict";function r(e){return'"'+e.replace(/"/g,'\\"')+'"'}n.d(t,"a",function(){return r})},1158:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(22),i=n.n(o),a=n(1);function u(){return r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(a.l)("project_quality_profiles.page")),r.createElement("div",{className:"page-description"},Object(a.l)("project_quality_profiles.page.description")))}var c,l=n(4),p=n(51),s=(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.handleChange=function(e){t.props.profile.key!==e.value&&(t.setState({loading:!0}),t.props.onChangeProfile(t.props.profile.key,e.value).then(t.stopLoading,t.stopLoading))},t.renderProfileName=function(e){return e.isDefault?r.createElement("span",null,r.createElement("strong",null,Object(a.l)("default")),": ",e.label):r.createElement("span",null,e.label)},t}return s(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderProfileSelect=function(){var e=this.props,t=e.profile,n=e.possibleProfiles.map(function(e){return{value:e.key,label:e.name,isDefault:e.isDefault}});return r.createElement(p.c,{clearable:!1,disabled:this.state.loading,onChange:this.handleChange,optionRenderer:this.renderProfileName,options:n,style:{width:300},valueRenderer:this.renderProfileName,value:t.key})},t.prototype.render=function(){var e=this.props.profile;return r.createElement("tr",{"data-key":e.language},r.createElement("td",{className:"thin nowrap"},e.languageName),r.createElement("td",{className:"thin nowrap"},this.renderProfileSelect()),r.createElement("td",null,this.state.loading&&r.createElement("i",{className:"spinner"})))},t}(r.PureComponent);function d(e){var t=Object(l.groupBy)(e.allProfiles,"language"),n=Object(l.orderBy)(e.profiles,"languageName").map(function(n){return r.createElement(f,{key:n.language,profile:n,possibleProfiles:t[n.language],onChangeProfile:e.onChangeProfile})});return r.createElement("div",{className:"boxed-group boxed-group-inner"},r.createElement("table",{className:"data zebra"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:"thin nowrap"},Object(a.l)("language")),r.createElement("th",{className:"thin nowrap"},Object(a.l)("quality_profile")),r.createElement("th",null," "))),r.createElement("tbody",null,n)))}var h=n(993),m=n(264),y=n(119),g=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.handleChangeProfile=function(e,n){var r=t.props.component,o=t.state,i=o.allProfiles,u=o.profiles,c=i&&i.find(function(e){return e.key===n});return(c&&c.isDefault?Object(h.m)(e,r.key):Object(h.d)(n,r.key)).then(function(){if(t.mounted&&u&&c){var n=u.filter(function(t){return t.key!==e}).concat([c]);t.setState({profiles:n}),Object(m.a)(Object(a.m)("project_quality_profile.successfully_updated",c.languageName))}})},t}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchProfiles():Object(y.default)()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.checkPermissions=function(){var e=this.props.component.configuration;return!!(e&&e.showQualityProfiles)},t.prototype.fetchProfiles=function(){var e=this,t=this.props.component,n=t.key,r=t.organization;Promise.all([Object(h.y)({organization:r}).then(function(e){return e.profiles}),Object(h.y)({organization:r,project:n}).then(function(e){return e.profiles})]).then(function(t){var n=t[0],r=t[1];e.mounted&&e.setState({loading:!1,allProfiles:n,profiles:r})},function(){e.mounted&&e.setState({loading:!1})})},t.prototype.render=function(){if(!this.checkPermissions())return null;var e=this.state,t=e.allProfiles,n=e.loading,o=e.profiles;return r.createElement("div",{className:"page page-limited"},r.createElement(i.a,{title:Object(a.l)("project_quality_profiles.page")}),r.createElement(u,null),n?r.createElement("i",{className:"spinner"}):t&&o&&r.createElement(d,{allProfiles:t,profiles:o,onChangeProfile:this.handleChangeProfile}))},t}(r.PureComponent);t.default=O},993:function(e,t,n){"use strict";n.d(t,"y",function(){return c}),n.d(t,"s",function(){return l}),n.d(t,"j",function(){return p}),n.d(t,"w",function(){return s}),n.d(t,"r",function(){return f}),n.d(t,"q",function(){return d}),n.d(t,"A",function(){return h}),n.d(t,"v",function(){return m}),n.d(t,"i",function(){return y}),n.d(t,"l",function(){return g}),n.d(t,"g",function(){return O}),n.d(t,"o",function(){return b}),n.d(t,"n",function(){return j}),n.d(t,"p",function(){return _}),n.d(t,"h",function(){return v}),n.d(t,"d",function(){return q}),n.d(t,"m",function(){return N}),n.d(t,"z",function(){return P}),n.d(t,"x",function(){return E}),n.d(t,"c",function(){return S}),n.d(t,"u",function(){return k}),n.d(t,"b",function(){return w}),n.d(t,"t",function(){return J}),n.d(t,"e",function(){return K}),n.d(t,"f",function(){return C}),n.d(t,"a",function(){return D}),n.d(t,"k",function(){return x});var r=n(4),o=n(1007),i=n(3),a=n(13),u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};function c(e){return Object(i.getJSON)("/api/qualityprofiles/search",e).catch(a.a)}function l(e){return Object(i.getJSON)("/api/qualityprofiles/show",e)}function p(e){return Object(i.request)("/api/qualityprofiles/create").setMethod("post").setData(e).submit().then(i.checkStatus).then(i.parseJSON)}function s(e){return Object(i.request)("/api/qualityprofiles/restore").setMethod("post").setData(e).submit().then(i.checkStatus).then(i.parseJSON)}function f(e){return Object(i.getJSON)("/api/qualityprofiles/projects",e).catch(a.a)}function d(e){return Object(i.getJSON)("/api/qualityprofiles/inheritance",{profileKey:e}).catch(a.a)}function h(e){return Object(i.post)("/api/qualityprofiles/set_default",{profileKey:e})}function m(e,t){return Object(i.post)("/api/qualityprofiles/rename",{key:e,name:t})}function y(e,t){return Object(i.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t})}function g(e){return Object(i.post)("/api/qualityprofiles/delete",{profileKey:e})}function O(e,t){return Object(i.post)("/api/qualityprofiles/change_parent",{profileKey:e,parentKey:t})}function b(){return Object(i.getJSON)("/api/qualityprofiles/importers").then(function(e){return e.importers},a.a)}function j(){return Object(i.getJSON)("/api/qualityprofiles/exporters").then(function(e){return e.exporters})}function _(e){return Object(i.getJSON)("/api/qualityprofiles/changelog",e)}function v(e,t){return Object(i.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function q(e,t){return Object(i.post)("/api/qualityprofiles/add_project",{profileKey:e,projectKey:t}).catch(a.a)}function N(e,t){return Object(i.post)("/api/qualityprofiles/remove_project",{profileKey:e,projectKey:t}).catch(a.a)}function P(e){return Object(i.getJSON)("/api/qualityprofiles/search_users",e).catch(a.a)}function E(e){return Object(i.getJSON)("/api/qualityprofiles/search_groups",e).catch(a.a)}function S(e){return Object(i.post)("/api/qualityprofiles/add_user",e).catch(a.a)}function k(e){return Object(i.post)("/api/qualityprofiles/remove_user",e).catch(a.a)}function w(e){return Object(i.post)("/api/qualityprofiles/add_group",e).catch(a.a)}function J(e){return Object(i.post)("/api/qualityprofiles/remove_group",e).catch(a.a)}function K(e){return Object(i.postJSON)("/api/qualityprofiles/activate_rules",e)}function C(e){return Object(i.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function D(e){var t=e.params&&Object(r.map)(e.params,function(e,t){return t+"="+Object(o.a)(e)}).join(";");return Object(i.post)("/api/qualityprofiles/activate_rule",u({},e,{params:t})).catch(a.a)}function x(e){return Object(i.post)("/api/qualityprofiles/deactivate_rule",e).catch(a.a)}}}]);
//# sourceMappingURL=276.2e8ab2d6.chunk.js.map