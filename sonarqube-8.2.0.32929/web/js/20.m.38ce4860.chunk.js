(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{412:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(2),o=n(316),c=n(318),l=n(388);function s(e){class t extends r.Component{render(){return r.createElement(e,Object.assign({},this.props))}}return t.displayName=Object(l.a)(e,"withAppState"),Object(o.connect)(function(e){return{appState:Object(c.getAppState)(e)}})(t)}},458:function(e,t,n){"use strict";n.r(t);var r=n(309),o=n(2),c=n(735),l=n.n(c),s=n(1159),a=n.n(s),i=n(823),d=n.n(i),u=n(825),h=n.n(u),p=n(426),m=n(430),f=n.n(m);class b extends o.PureComponent{constructor(){super(...arguments),this.state={open:!1},this.handleClick=e=>{this.setState(e=>({open:!e.open})),e.stopPropagation(),e.preventDefault()}}renderTitle(e){return o.createElement("a",{"aria-expanded":this.state.open,"aria-haspopup":!0,className:"link-no-underline",href:"#",onClick:this.handleClick},o.createElement(f.a,{className:"text-middle little-spacer-right",open:this.state.open}),e.props?e.props.children:e)}render(){const e=o.Children.toArray(this.props.children);if(e.length<1)return null;const t=o.Children.toArray(e[0].props.children);return t.length<2?null:o.createElement("div",{className:"collapse-container"},this.renderTitle(t[0]),this.state.open&&t.slice(1))}}var g=n(335);function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function O(e){const t=e.alt,n=e.src,r=k(e,["alt","src"]);return o.createElement("img",Object.assign({alt:t,className:"max-width-100",src:Object(g.getBaseUrl)()+"/images/embed-doc"+n},r))}var w=n(28),y=n(464),E=n.n(y),v=n(22),j=n(412);function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const x="/#sonarcloud#/",S="/#sonarqube#/",A="/#sonarqube-admin#/";var N=Object(j.a)(class extends o.PureComponent{constructor(){super(...arguments),this.handleClickOnAnchor=e=>{const t=this.props,n=t.customProps,r=t.href,o=void 0===r?"#":r;n&&n.onAnchorClick&&n.onAnchorClick(o,e)}}render(){const e=this.props,t=e.children,n=e.href,r=(e.customProps,C(e,["children","href","customProps"]));if(n&&n.startsWith("#"))return o.createElement("a",{href:"#",onClick:this.handleClickOnAnchor},t);if(n&&n.startsWith("/")){if(n.startsWith(x))return o.createElement(P,{url:n},t);if(n.startsWith(S))return o.createElement(H,{url:n},t);if(n.startsWith(A))return o.createElement(W,{canAdmin:this.props.appState.canAdmin,url:n},t);{const e="/documentation"+n;return o.createElement(w.Link,Object.assign({to:e},r),t)}}return o.createElement(o.Fragment,null,o.createElement("a",Object.assign({href:n,rel:"noopener noreferrer",target:"_blank"},r),t),o.createElement(E.a,{className:"text-muted little-spacer-left little-spacer-right text-baseline",size:12}))}});function P(e){let t=e.children,n=e.url;if(Object(v.isSonarCloud)()){const e="/".concat(n.substr(x.length));return o.createElement(w.Link,{to:e},t)}return o.createElement(o.Fragment,null,t)}function H(e){let t=e.children,n=e.url;if(Object(v.isSonarCloud)())return o.createElement(o.Fragment,null,t);{const e="/".concat(n.substr(S.length));return o.createElement(w.Link,{target:"_blank",to:e},t)}}function W(e){let t=e.canAdmin,n=e.children,r=e.url;if(Object(v.isSonarCloud)()||!t)return o.createElement(o.Fragment,null,n);{const e="/".concat(r.substr(A.length));return o.createElement(w.Link,{target:"_blank",to:e},n)}}n(935);var L=n(498),T=n.n(L),_=n(361),D=n.n(_),F=n(475),I=n(5),q=n(1172),z=n.n(q);function U(){return this.use(h.a),function(e){const t=z()(e,{heading:"doctoc",maxDepth:2});null!==t.index&&-1!==t.index&&t.map?e.children=[t.map]:e.children=[]}}class J extends o.PureComponent{constructor(e){super(e),this.node=null,this.state={anchors:[]},this.scrollHandler=()=>{const e=Object(F.findDOMNode)(this);if(!e||!e.parentNode)return;const t=e.parentNode.querySelectorAll("h2[id]"),n=window.pageYOffset||document.body.scrollTop;let r;for(let e=0,o=t.length;e<o&&!(t.item(e).offsetTop>n+120);e++)r="#".concat(t.item(e).id);this.setState({highlightAnchor:r})},this.debouncedScrollHandler=D()(this.scrollHandler)}static getDerivedStateFromProps(e){const t=e.content;return{anchors:J.getAnchors(t)}}componentDidMount(){window.addEventListener("scroll",this.debouncedScrollHandler,!0),this.scrollHandler()}componentWillUnmount(){window.removeEventListener("scroll",this.debouncedScrollHandler,!0)}render(){const e=this.state,t=e.anchors,n=e.highlightAnchor;return 0===t.length?null:o.createElement("div",{className:"markdown-toc"},o.createElement("div",{className:"markdown-toc-content"},o.createElement("h4",null,Object(I.translate)("documentation.on_this_page")),t.map(e=>o.createElement("a",{className:r({active:n===e.href}),href:e.href,key:e.title,onClick:t=>{this.props.onAnchorClick(e.href,t)}},e.title))))}}J.getAnchors=T()(e=>{const t=l()().use(d.a).use(U).processSync("\n## doctoc\n"+e);if(t&&t.contents.props.children){let e=t.contents,n=10;for(;n&&e.props.children.length&&"ul"!==e.type;)e=e.props.children[0],n--;if("ul"===e.type&&e.props.children.length)return e.props.children.map(e=>{if("string"==typeof e)return null;const t=e.props.children[0];return{href:t.props.href,title:t.props.children[0]}}).filter(e=>e)}return[]});var M=n(826),R=n.n(M);function B(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const Y="/#sonarcloud#/";function G(e){let t=e.children,n=e.customProps,r=e.href,c=B(e,["children","customProps","href"]);return n&&R()(n,(e,t)=>{r&&(r=r.replace("#".concat(t,"#"),encodeURIComponent(e)))}),r&&r.startsWith("/")?(r=r.startsWith(Y)?"/".concat(r.substr(Y.length)):"/documentation/".concat(r.substr(1)),o.createElement(w.Link,Object.assign({rel:"noopener noreferrer",target:"_blank",to:r},c),t)):o.createElement(o.Fragment,null,o.createElement("a",Object.assign({href:r,rel:"noopener noreferrer",target:"_blank"},c),t),o.createElement(E.a,{className:"little-spacer-left little-spacer-right text-baseline",size:12}))}n.d(t,"default",function(){return K});class K extends o.PureComponent{constructor(){super(...arguments),this.node=null,this.handleAnchorClick=(e,t)=>{if(this.node){const n=this.node.querySelector(e);n&&(t.preventDefault(),Object(p.scrollToElement)(n,{bottomOffset:window.innerHeight-80}),history.pushState&&history.pushState(null,"",e))}}}render(){const e=this.props,t=e.childProps,n=e.content,c=e.className,s=e.title,i=e.stickyToc,u=e.isTooltip,p=l()();return p.use(a.a,{danger:{classes:"alert alert-danger"},warning:{classes:"alert alert-warning"},info:{classes:"alert alert-info"},success:{classes:"alert alert-success"},collapse:{classes:"collapse"}}).use(d.a,{remarkReactComponents:{div:V,a:u?Q(G,t):Q(N,{onAnchorClick:this.handleAnchorClick}),img:O},toHast:{},sanitize:!1}).use(h.a),o.createElement("div",{className:r("markdown",c,{"has-toc":i}),ref:e=>this.node=e},o.createElement("div",{className:"markdown-content"},void 0!==s&&o.createElement("h1",{className:"documentation-title"},s),p.processSync(n).contents),i&&o.createElement(J,{content:n,onAnchorClick:this.handleAnchorClick}))}}function Q(e,t){return function(n){return o.createElement(e,Object.assign({customProps:t},n))}}function V(e){return e.className?e.className.includes("collapse")?o.createElement(b,null,e.children):o.createElement("div",{className:r("cut-margins",e.className)},e.children):e.children}},935:function(e,t,n){var r=n(936);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(312)(r,o);r.locals&&(e.exports=r.locals)},936:function(e,t,n){(e.exports=n(311)(!1)).push([e.i,".markdown-content .alert{margin-bottom:8px;border:1px solid;border-radius:2px}.markdown-content .alert.is-inline{display:inline-flex}.markdown-content .alert:empty{display:none}.markdown-content .alert-danger,.markdown-content .alert-error{border-color:#f4b1b0;background-color:#f2dede;color:#862422}.markdown-content .alert-danger .alert-icon,.markdown-content .alert-error .alert-icon{border-color:#f4b1b0}.markdown-content .alert-warning{border-color:#faebcc;background-color:#fcf8e3;color:#6f4f17}.markdown-content .alert-warning .alert-icon{border-color:#faebcc}.markdown-content .alert-info{border-color:#b1dff3;background-color:#d9edf7;color:#0e516f}.markdown-content .alert-info .alert-icon{border-color:#b1dff3}.markdown-content .alert-success{border-color:#d6e9c6;background-color:#dff0d8;color:#215821}.markdown-content .alert-success .alert-icon{border-color:#d6e9c6}",""])}}]);
//# sourceMappingURL=20.m.38ce4860.chunk.js.map