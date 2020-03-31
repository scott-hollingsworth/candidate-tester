(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{1804:function(e,t,a){"use strict";a.r(t);var n=a(309),r=a(2),s=a(316),i=a(321),l=a.n(i),c=a(323),o=a(5),m=a(408),d=a(535),u=a(346),v=a(328),p=a(344),f=a(423),b=a(318),h=a(1186),g=a(1187),y=a(1188),w=a(1201),E=(a(1185),a(635)),O=a(317);var N=r.memo(function(e){let t=e.className,a=e.measures,s=e.type;const i=Object(E.j)(s),l=Object(p.findMeasure)(a,i);return l&&void 0!==l.value?r.createElement("div",{className:n(t,"display-flex-center")},r.createElement("span",{className:"huge"},Object(O.formatMeasure)(l.value,"PERCENT")),r.createElement("span",{className:"label flex-1 spacer-left text-right"},Object(o.translate)("component_measures.facet_category.overall_category.estimated"))):null}),j=a(304),_=a(28),k=a(367),x=a.n(k),M=a(331),S=a(319);var q=r.memo(function(e){let t=e.component,a=e.level;const s="OK"===a,i=void 0===t.qualityGate?Object(S.w)():Object(S.v)(t.qualityGate.key);return r.createElement("div",{className:n("overview-quality-gate-badge-large small",{failed:!s,success:s})},r.createElement("div",{className:"display-flex-center"},r.createElement("span",null,Object(o.translate)("overview.on_new_code_long")),r.createElement(l.a,{className:"little-spacer-left",overlay:r.createElement(j.FormattedMessage,{defaultMessage:Object(o.translate)("overview.quality_gate.conditions_on_new_code"),id:"overview.quality_gate.conditions_on_new_code",values:{link:r.createElement(_.Link,{to:i},Object(o.translate)("overview.quality_gate"))}})},r.createElement(x.a,{fill:M.colors.transparentWhite,size:12}))),void 0!==a&&r.createElement("h3",{className:"huge-spacer-top huge"},Object(o.translate)("metric.level",a)))});function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,s=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw s}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){L(e,t,a[t])})}return e}function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"PullRequestOverview",function(){return P});class P extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,measures:[]},this.fetchBranchData=()=>{const e=this.props,t=e.branchLike,a=e.component.key;this.setState({loading:!0}),Promise.all([Object(d.e)(a,E.e,D({additionalFields:"metrics"},Object(v.d)(t))),this.props.fetchBranchStatus(t,a)]).then(e=>{let t=C(e,1)[0],a=t.component,n=t.metrics;this.mounted&&a.measures&&this.setState({loading:!1,measures:Object(p.enhanceMeasuresWithMetrics)(a.measures||[],n||[])})},()=>{this.mounted&&this.setState({loading:!1})})}}componentDidMount(){this.mounted=!0,this.fetchBranchData()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.branchLike,s=e.component,i=e.conditions,d=e.ignoredConditions,v=e.status,f=this.state,b=f.loading,O=f.measures;if(b)return r.createElement("div",{className:"page page-limited"},r.createElement("i",{className:"spinner"}));if(void 0===i)return null;const j=i.filter(e=>"ERROR"===e.level).map(e=>Object(p.enhanceConditionWithMeasure)(e,O)).filter(m.isDefined);return r.createElement("div",{className:"page page-limited"},r.createElement("div",{className:n("pr-overview",{"has-conditions":j.length>0})},d&&r.createElement(c.Alert,{className:"big-spacer-bottom",display:"inline",variant:"info"},r.createElement("span",{className:"text-middle"},Object(o.translate)("overview.quality_gate.ignored_conditions")),r.createElement(l.a,{className:"spacer-left",overlay:Object(o.translate)("overview.quality_gate.ignored_conditions.tooltip")})),r.createElement("div",{className:"display-flex-row"},r.createElement("div",{className:"big-spacer-right"},r.createElement("h2",{className:"overview-panel-title spacer-bottom small"},Object(o.translate)("overview.quality_gate"),r.createElement(u.a,{className:"spacer-left",doc:Promise.resolve().then(a.bind(null,1189))})),r.createElement(q,{component:s,level:v})),j.length>0&&r.createElement("div",{className:"pr-overview-failed-conditions big-spacer-right"},r.createElement("h2",{className:"overview-panel-title spacer-bottom small"},Object(o.translate)("overview.failed_conditions")),r.createElement(w.b,{branchLike:t,collapsible:!0,component:s,failedConditions:j})),r.createElement("div",{className:"flex-1"},r.createElement("h2",{className:"overview-panel-title spacer-bottom small"},Object(o.translate)("overview.measures")),r.createElement("div",{className:"overview-panel-content"},[E.b.Bug,E.b.Vulnerability,E.b.SecurityHotspot,E.b.CodeSmell].map(e=>r.createElement("div",{className:"overview-measures-row display-flex-row",key:e},r.createElement("div",{className:"overview-panel-big-padded flex-1 small display-flex-center"},r.createElement(h.a,{branchLike:t,component:s,measures:O,type:e,useDiffMetric:!0})),r.createElement("div",{className:"overview-panel-big-padded overview-measures-aside display-flex-center"},r.createElement(g.a,{branchLike:t,component:s,measures:O,type:e,useDiffMetric:!0})))),[E.d.Coverage,E.d.Duplication].map(e=>r.createElement("div",{className:"overview-measures-row display-flex-row",key:e},r.createElement("div",{className:"overview-panel-big-padded flex-1 small display-flex-center"},r.createElement(y.a,{branchLike:t,component:s,measures:O,type:e,useDiffMetric:!0})),r.createElement(N,{className:"overview-panel-big-padded overview-measures-aside text-right overview-measures-emphasis",measures:O,type:e}))))))))}}const B={fetchBranchStatus:f.c};t.default=Object(s.connect)((e,t)=>{let a=t.branchLike,n=t.component;const r=Object(b.getBranchStatusByBranchLike)(e,n.key,a);return{conditions:r.conditions,ignoredConditions:r.ignoredConditions,status:r.status}},B)(P)}}]);
//# sourceMappingURL=368.m.ca4c1ae8.chunk.js.map