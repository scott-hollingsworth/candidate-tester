(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1677:function(e,t,n){"use strict";n.r(t);var o=n(365),s=n(381),a=n(549),r=n(378),l=n(1635),i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&(n[o[s]]=e[o[s]])}return n};class c extends o.Component{constructor(){super(...arguments),this.mounted=!1,this.handleSubmit=(e,t)=>{let n=t.setSubmitting;const o=this.props.onSubmit(e),s=()=>{this.mounted&&n(!1)};o?o.then(s,s):s()}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return o.createElement(l.a,{initialValues:this.props.initialValues,isInitialValid:this.props.isInitialValid,onSubmit:this.handleSubmit,validate:this.props.validate},e=>{var t=e.handleSubmit,n=i(e,["handleSubmit"]);return o.createElement("form",{onSubmit:t},this.props.children(n))})}}var d=n(375),h=n(367),m=n(0);class u extends o.PureComponent{constructor(){super(...arguments),this.handleSubmit=e=>this.props.onSubmit(e).then(()=>{this.props.onClose()})}render(){return o.createElement(r.a,{contentLabel:this.props.header,noBackdrop:this.props.noBackdrop,onRequestClose:this.props.onClose,size:this.props.size},o.createElement(c,{initialValues:this.props.initialValues,isInitialValid:this.props.isInitialValid,onSubmit:this.handleSubmit,validate:this.props.validate},e=>o.createElement(o.Fragment,null,o.createElement("header",{className:"modal-head"},o.createElement("h2",null,this.props.header)),o.createElement("div",{className:"modal-body"},this.props.children(e)),o.createElement("footer",{className:"modal-foot"},o.createElement(d.a,{className:"spacer-right",loading:e.isSubmitting}),o.createElement(h.i,{disabled:e.isSubmitting||!e.isValid||!e.dirty},this.props.confirmButtonText),o.createElement(h.h,{disabled:e.isSubmitting,onClick:this.props.onClose},Object(m.l)("cancel"))))))}}var p=n(366),b=n(562),g=n(546);function v(e){const t=e.description,n=e.dirty,s=e.error,a=n&&e.touched&&void 0===s,r=n&&e.touched&&void 0!==s;return o.createElement("div",{className:"modal-validation-field"},e.label,e.children({className:p({"is-invalid":r,"is-valid":a})}),r&&o.createElement(b.a,{className:"little-spacer-top"}),a&&o.createElement(g.a,{className:"little-spacer-top"}),r&&o.createElement("p",{className:"text-danger"},s),t&&o.createElement("div",{className:"modal-field-description"},t))}var f=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&(n[o[s]]=e[o[s]])}return n};function C(e){var t=e.className,n=f(e,["className"]);const s=n.description,a=n.dirty,r=n.error,l=n.label,i=n.touched,c=f(n,["description","dirty","error","label","touched"]),d={description:s,dirty:a,error:r,label:l,touched:i};return o.createElement(v,Object.assign({},d),e=>{let n=e.className;return o.createElement("input",Object.assign({className:p(t,n)},c))})}class E extends o.PureComponent{constructor(){super(...arguments),this.handleCancelClick=e=>{e.preventDefault(),e.currentTarget.blur(),this.props.onClose()},this.handleValidate=e=>{const t=e.name,n=e.secret,o=e.url,s={};return t.trim()||(s.name=Object(m.l)("webhooks.name.required")),o.trim()?o.startsWith("http://")||o.startsWith("https://")?Object(a.isWebUri)(o)||(s.url=Object(m.l)("webhooks.url.bad_format")):s.url=Object(m.l)("webhooks.url.bad_protocol"):s.url=Object(m.l)("webhooks.url.required"),n&&n.length>200&&(s.secret=Object(m.l)("webhooks.secret.bad_format")),s}}render(){const e=this.props.webhook,t=!!e,n=t?Object(m.l)("webhooks.update"):Object(m.l)("webhooks.create"),s=t?Object(m.l)("update_verb"):Object(m.l)("create");return o.createElement(u,{confirmButtonText:s,header:n,initialValues:{name:e?e.name:"",secret:e?e.secret:"",url:e?e.url:""},isInitialValid:t,onClose:this.props.onClose,onSubmit:this.props.onDone,size:"small",validate:this.handleValidate},e=>{let t=e.dirty,n=e.errors,s=e.handleBlur,a=e.handleChange,r=e.isSubmitting,l=e.touched,i=e.values;return o.createElement(o.Fragment,null,o.createElement(C,{autoFocus:!0,dirty:t,disabled:r,error:n.name,id:"webhook-name",label:o.createElement("label",{htmlFor:"webhook-name"},Object(m.l)("webhooks.name"),o.createElement("em",{className:"mandatory"},"*")),name:"name",onBlur:s,onChange:a,touched:l.name,type:"text",value:i.name}),o.createElement(C,{description:Object(m.l)("webhooks.url.description"),dirty:t,disabled:r,error:n.url,id:"webhook-url",label:o.createElement("label",{htmlFor:"webhook-url"},Object(m.l)("webhooks.url"),o.createElement("em",{className:"mandatory"},"*")),name:"url",onBlur:s,onChange:a,touched:l.url,type:"text",value:i.url}),o.createElement(C,{description:Object(m.l)("webhooks.secret.description"),dirty:t,disabled:r,error:n.secret,id:"webhook-secret",label:o.createElement("label",{htmlFor:"webhook-secret"},Object(m.l)("webhooks.secret")),name:"secret",onBlur:s,onChange:a,touched:l.secret,type:"password",value:i.secret}))})}}var k=n(374);const y=10;class w extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={openCreate:!1},this.handleCreateClose=()=>{this.mounted&&this.setState({openCreate:!1})},this.handleCreateOpen=()=>{this.setState({openCreate:!0})},this.renderCreate=()=>this.props.webhooksCount>=y?o.createElement(k.a,{overlay:Object(m.m)("webhooks.maximum_reached",y)},o.createElement(h.a,{className:"js-webhook-create disabled"},Object(m.l)("create"))):o.createElement(o.Fragment,null,o.createElement(h.a,{className:"js-webhook-create",onClick:this.handleCreateOpen},Object(m.l)("create")),this.state.openCreate&&o.createElement(E,{onClose:this.handleCreateClose,onDone:this.props.onCreate}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return this.props.loading?null:o.createElement("div",{className:"page-actions"},this.renderCreate())}}var O=n(359),S=n(371);function N(e){let t=e.children,n=e.loading;return o.createElement("header",{className:"page-header"},o.createElement("h1",{className:"page-title"},Object(m.l)("webhooks.page")),n&&o.createElement("i",{className:"spinner"}),t,o.createElement("p",{className:"page-description"},o.createElement(O.FormattedMessage,{defaultMessage:Object(m.l)("webhooks.description"),id:"webhooks.description",values:{url:o.createElement(S.Link,{to:"/documentation/project-administration/webhooks/"},Object(m.l)("webhooks.documentation_link"))}})))}var j=n(382),x=n.n(j),D=n(433),M=n(376);function q(e){let t=e.className,n=e.delivery,s=e.loading,a=e.payload;return o.createElement("div",{className:t},o.createElement("p",{className:"spacer-bottom"},Object(m.m)("webhooks.delivery.response_x",n.httpStatus||Object(m.l)("webhooks.delivery.server_unreachable"))),o.createElement("p",{className:"spacer-bottom"},Object(m.m)("webhooks.delivery.duration_x",Object(M.formatMeasure)(n.durationMs,"MILLISEC"))),o.createElement("p",{className:"spacer-bottom"},Object(m.l)("webhooks.delivery.payload")),o.createElement(d.a,{className:"spacer-left spacer-top",loading:s},a&&o.createElement(D.a,{noCopy:!0,snippet:P(a)})))}function P(e){try{return JSON.stringify(JSON.parse(e),void 0,2)}catch(t){return e}}var L=n(4),z=n(383);function U(e){return Object(L.getJSON)("/api/webhooks/deliveries",e).catch(z.a)}function _(e){return Object(L.getJSON)("/api/webhooks/delivery",e).catch(z.a)}class I extends o.PureComponent{constructor(){var e;super(...arguments),e=this,this.mounted=!1,this.state={loading:!0},this.fetchPayload=function(){return _({deliveryId:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props).delivery.id}).then(t=>{let n=t.delivery;e.mounted&&e.setState({payload:n.payload,loading:!1})},()=>{e.mounted&&e.setState({loading:!1})})},this.formatPayload=e=>{try{return JSON.stringify(JSON.parse(e),void 0,2)}catch(t){return e}}}componentDidMount(){this.mounted=!0,this.fetchPayload()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.delivery,n=e.webhook,s=this.state,a=s.loading,l=s.payload,i=Object(m.m)("webhooks.latest_delivery_for_x",n.name);return o.createElement(r.a,{contentLabel:i,onRequestClose:this.props.onClose},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,i)),o.createElement(q,{className:"modal-body modal-container",delivery:t,loading:a,payload:l}),o.createElement("footer",{className:"modal-foot"},o.createElement(h.h,{className:"js-modal-close",onClick:this.props.onClose},Object(m.l)("close"))))}}var F=n(646),W=n(407);class B extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleClick=()=>{this.setState({modal:!0})},this.handleModalClose=()=>{this.mounted&&this.setState({modal:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.webhook;if(!e.latestDelivery)return o.createElement("span",null,Object(m.l)("webhooks.last_execution.none"));const t=this.state.modal;return o.createElement(o.Fragment,null,e.latestDelivery.success?o.createElement(g.a,{className:"text-text-top"}):o.createElement(b.a,{className:"text-text-top"}),o.createElement("span",{className:"spacer-left display-inline-flex-center"},o.createElement(W.a,{date:e.latestDelivery.at}),o.createElement(h.b,{className:"button-small little-spacer-left",onClick:this.handleClick},o.createElement(F.a,null))),t&&o.createElement(I,{delivery:e.latestDelivery,onClose:this.handleModalClose,webhook:e}))}}var V=n(387);function T(e){let t=e.onClose,n=e.onSubmit,s=e.webhook;const a=Object(m.l)("webhooks.delete");return o.createElement(V.a,{header:a,onClose:t,onSubmit:n},e=>{let t=e.onCloseClick,n=e.onFormSubmit,r=e.submitting;return o.createElement("form",{onSubmit:n},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,a)),o.createElement("div",{className:"modal-body"},Object(m.m)("webhooks.delete.confirm",s.name)),o.createElement("footer",{className:"modal-foot"},o.createElement(d.a,{className:"spacer-right",loading:r}),o.createElement(h.i,{className:"button-red",disabled:r},Object(m.l)("delete")),o.createElement(h.h,{disabled:r,onClick:t},Object(m.l)("cancel"))))})}var J=n(881);class R extends o.PureComponent{constructor(){var e;super(...arguments),e=this,this.mounted=!1,this.state={loading:!1,open:!1},this.fetchPayload=function(){let t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props).delivery;return e.setState({loading:!0}),_({deliveryId:t.id}).then(t=>{let n=t.delivery;e.mounted&&e.setState({payload:n.payload,loading:!1})},()=>{e.mounted&&e.setState({loading:!1})})},this.formatPayload=e=>{try{return JSON.stringify(JSON.parse(e),void 0,2)}catch(t){return e}},this.handleClick=()=>{this.state.payload||this.fetchPayload(),this.setState(e=>{return{open:!e.open}})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.delivery,t=this.state,n=t.loading,s=t.open,a=t.payload;return o.createElement(J.a,{onClick:this.handleClick,open:s,renderHeader:()=>e.success?o.createElement(g.a,{className:"pull-right js-success"}):o.createElement(b.a,{className:"pull-right js-error"}),title:o.createElement(W.a,{date:e.at})},o.createElement(q,{className:"big-spacer-left",delivery:e,loading:n,payload:a}))}}var H=n(397);const A=10;class Z extends o.PureComponent{constructor(){var e;super(...arguments),e=this,this.mounted=!1,this.state={deliveries:[],loading:!0},this.fetchDeliveries=function(){U({webhook:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props).webhook.key,ps:A}).then(t=>{let n=t.deliveries,o=t.paging;e.mounted&&e.setState({deliveries:n,loading:!1,paging:o})},e.stopLoading)},this.fetchMoreDeliveries=function(){let t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props).webhook;const n=e.state.paging;n&&(e.setState({loading:!0}),U({webhook:t.key,p:n.pageIndex+1,ps:A}).then(t=>{let n=t.deliveries,o=t.paging;e.mounted&&e.setState(e=>({deliveries:[...e.deliveries,...n],loading:!1,paging:o}))},e.stopLoading))},this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})}}componentDidMount(){this.mounted=!0,this.fetchDeliveries()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.webhook,t=this.state,n=t.deliveries,s=t.loading,a=t.paging,l=Object(m.m)("webhooks.deliveries_for_x",e.name);return o.createElement(r.a,{contentLabel:l,onRequestClose:this.props.onClose},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,l)),o.createElement("div",{className:"modal-body modal-container"},n.map(e=>o.createElement(R,{delivery:e,key:e.id})),o.createElement("div",{className:"text-center"},o.createElement(d.a,{loading:s})),void 0!==a&&o.createElement(H.a,{className:"little-spacer-bottom",count:n.length,loadMore:this.fetchMoreDeliveries,ready:!s,total:a.total})),o.createElement("footer",{className:"modal-foot"},o.createElement(h.h,{className:"js-modal-close",onClick:this.props.onClose},Object(m.l)("close"))))}}var G=n(421);class K extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={deleting:!1,deliveries:!1,updating:!1},this.handleDelete=()=>this.props.onDelete(this.props.webhook.key),this.handleDeleteClick=()=>{this.setState({deleting:!0})},this.handleDeletingStop=()=>{this.mounted&&this.setState({deleting:!1})},this.handleDeliveriesClick=()=>{this.setState({deliveries:!0})},this.handleDeliveriesStop=()=>{this.setState({deliveries:!1})},this.handleUpdate=e=>this.props.onUpdate(Object.assign({},e,{webhook:this.props.webhook.key})),this.handleUpdateClick=()=>{this.setState({updating:!0})},this.handleUpdatingStop=()=>{this.setState({updating:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.webhook;return o.createElement(o.Fragment,null,o.createElement(G.c,{className:"big-spacer-left"},o.createElement(G.b,{className:"js-webhook-update",onClick:this.handleUpdateClick},Object(m.l)("update_verb")),e.latestDelivery&&o.createElement(G.b,{className:"js-webhook-deliveries",onClick:this.handleDeliveriesClick},Object(m.l)("webhooks.deliveries.show")),o.createElement(G.a,null),o.createElement(G.b,{className:"js-webhook-delete",destructive:!0,onClick:this.handleDeleteClick},Object(m.l)("delete"))),this.state.deliveries&&o.createElement(Z,{onClose:this.handleDeliveriesStop,webhook:e}),this.state.updating&&o.createElement(E,{onClose:this.handleUpdatingStop,onDone:this.handleUpdate,webhook:e}),this.state.deleting&&o.createElement(T,{onClose:this.handleDeletingStop,onSubmit:this.handleDelete,webhook:e}))}}function Q(e){let t=e.onDelete,n=e.onUpdate,s=e.webhook;return o.createElement("tr",null,o.createElement("td",null,s.name),o.createElement("td",null,s.url),o.createElement("td",null,s.secret?Object(m.l)("yes"):Object(m.l)("no")),o.createElement("td",null,o.createElement(B,{webhook:s})),o.createElement("td",{className:"thin nowrap text-right"},o.createElement(K,{onDelete:t,onUpdate:n,webhook:s})))}class X extends o.PureComponent{constructor(){super(...arguments),this.renderHeader=()=>o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,Object(m.l)("name")),o.createElement("th",null,Object(m.l)("webhooks.url")),o.createElement("th",null,Object(m.l)("webhooks.secret_header")),o.createElement("th",null,Object(m.l)("webhooks.last_execution")),o.createElement("th",null)))}render(){const e=this.props.webhooks;return e.length<1?o.createElement("p",null,Object(m.l)("webhooks.no_result")):o.createElement("table",{className:"data zebra"},this.renderHeader(),o.createElement("tbody",null,x()(e,e=>e.name.toLowerCase()).map(e=>o.createElement(Q,{key:e.key,onDelete:this.props.onDelete,onUpdate:this.props.onUpdate,webhook:e}))))}}var Y=n(389);n.d(t,"default",function(){return $});class $ extends o.PureComponent{constructor(){var e;super(...arguments),e=this,this.mounted=!1,this.state={loading:!0,webhooks:[]},this.fetchWebhooks=()=>(function(e){return Object(L.getJSON)("/api/webhooks/list",e).catch(z.a)})(this.getScopeParams()).then(e=>{let t=e.webhooks;this.mounted&&this.setState({loading:!1,webhooks:t})},()=>{this.mounted&&this.setState({loading:!1})}),this.getScopeParams=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props,n=t.organization,o=t.component;const s=n&&n.key;return{organization:o?o.organization:s,project:o&&o.key}},this.handleCreate=e=>{return function(e){return Object(L.postJSON)("/api/webhooks/create",e).catch(z.a)}(Object.assign({name:e.name,url:e.url},e.secret&&{secret:e.secret},this.getScopeParams())).then(e=>{let t=e.webhook;this.mounted&&this.setState(e=>{return{webhooks:[...e.webhooks,t]}})})},this.handleDelete=e=>(function(e){return Object(L.post)("/api/webhooks/delete",e).catch(z.a)})({webhook:e}).then(()=>{this.mounted&&this.setState(t=>{return{webhooks:t.webhooks.filter(t=>t.key!==e)}})}),this.handleUpdate=e=>{return function(e){return Object(L.post)("/api/webhooks/update",e).catch(z.a)}(Object.assign({webhook:e.webhook,name:e.name,url:e.url},e.secret&&{secret:e.secret})).then(()=>{this.mounted&&this.setState(t=>{return{webhooks:t.webhooks.map(t=>t.key===e.webhook?Object.assign({},t,{name:e.name,secret:e.secret,url:e.url}):t)}})})}}componentDidMount(){this.mounted=!0,this.fetchWebhooks()}componentWillUnmount(){this.mounted=!1}render(){const e=this.state,t=e.loading,n=e.webhooks;return o.createElement(o.Fragment,null,o.createElement(Y.a,{suggestions:"webhooks"}),o.createElement(s.Helmet,{title:Object(m.l)("webhooks.page")}),o.createElement("div",{className:"page page-limited"},o.createElement(N,{loading:t},o.createElement(w,{loading:t,onCreate:this.handleCreate,webhooksCount:n.length})),!t&&o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement(X,{onDelete:this.handleDelete,onUpdate:this.handleUpdate,webhooks:n}))))}}},378:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(365),s=n(405),a=n(366);function r(e){return o.createElement(s,Object.assign({className:a("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:a("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}s.setAppElement("#content")},387:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(365),s=n(378),a=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&(n[o[s]]=e[o[s]])}return n};class r extends o.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=()=>{this.mounted&&this.setState({submitting:!1})},this.handleCloseClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()},this.handleFormSubmit=e=>{e.preventDefault(),this.submit()},this.handleSubmitClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()},this.submit=()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.children,n=e.header,r=e.onClose,l=(e.onSubmit,a(e,["children","header","onClose","onSubmit"]));return o.createElement(s.a,Object.assign({contentLabel:n,onRequestClose:r},l),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},389:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(365),s=n(411);function a(e){let t=e.suggestions;return o.createElement(s.a.Consumer,null,e=>{let n=e.addSuggestions,s=e.removeSuggestions;return o.createElement(r,{addSuggestions:n,removeSuggestions:s,suggestions:t})})}class r extends o.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},397:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(365),s=n(366),a=n(375),r=n(0),l=n(376),i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&(n[o[s]]=e[o[s]])}return n};function c(e){var t=e.ready,n=void 0===t||t,c=i(e,["ready"]);const d=c.total&&c.total>c.count,h=o.createElement("a",{className:"spacer-left",href:"#",onClick:e=>{e.preventDefault(),e.currentTarget.blur(),c.loadMore&&c.loadMore()}},Object(r.l)("show_more")),m=o.createElement("a",{className:"spacer-left",href:"#",onClick:e=>{e.preventDefault(),e.currentTarget.blur(),c.reload&&c.reload()}},Object(r.l)("reload")),u=s("spacer-top note text-center",{"new-loading":!n},c.className);let p;return c.needReload&&c.reload?p=m:d&&c.loadMore&&(p=h),o.createElement("footer",{className:u},Object(r.m)("x_of_y_shown",Object(l.formatMeasure)(c.count,"INT",null),Object(l.formatMeasure)(c.total,"INT",null)),p,c.loading&&o.createElement(a.a,{className:"text-bottom spacer-left position-absolute"}))}},407:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return l});var o=n(365),s=n(359),a=n(13);const r={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function l(e){let t=e.children,n=e.date;return o.createElement(s.FormattedDate,Object.assign({value:Object(a.g)(n)},r),t)}},421:function(e,t,n){"use strict";var o=n(365),s=n(366),a=n(371),r=n(388),l=n(391),i=n(370);function c(e){let t=e.className,n=e.fill,s=void 0===n?"currentColor":n,a=e.size,r=void 0===a?14:a;return o.createElement(i.a,{className:t,size:r,viewBox:"0 0 14 14"},o.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},o.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:s}})))}var d=n(367);function h(e){return o.createElement(r.b,{className:e.className,onOpen:e.onOpen,overlay:o.createElement("ul",{className:"menu"},e.children)},o.createElement(d.a,{className:s("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},o.createElement(c,{size:e.small?12:14}),o.createElement(l.a,{className:"little-spacer-left"})))}n.d(t,"c",function(){return h}),n.d(t,"b",function(){return m}),n.d(t,"a",function(){return u});class m extends o.PureComponent{constructor(){super(...arguments),this.handleClick=e=>{e.preventDefault(),e.currentTarget.blur(),this.props.onClick&&this.props.onClick()}}render(){const e=s(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?o.createElement("li",null,o.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?o.createElement("li",null,o.createElement(a.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):o.createElement("li",null,o.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))}}function u(){return o.createElement("li",{className:"divider"})}},433:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n(365),s=n(366),a=n(494);n(863);const r=" \\\n  ";function l(e){let t=e.className,n=e.isOneLine,l=e.noCopy,i=e.render,c=e.snippet,d=e.wrap;const h=Array.isArray(c)?c.filter(e=>void 0!==e):[c],m=n?h.join(" "):h.join(r);return o.createElement("div",{className:s("code-snippet",{"code-snippet-oneline":n,"code-snippet-wrap":d},t)},o.createElement("pre",null,i?i():m),!l&&o.createElement(a.a,{copyValue:m}))}},483:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(365),s=n(370);function a(e){let t=e.className,n=e.fill,a=void 0===n?"currentColor":n,r=e.size;return o.createElement(s.a,{className:t,size:r},o.createElement("path",{d:"M7.72 11.596L3.119 6.992A.382.382 0 0 1 3 6.713c0-.108.04-.2.118-.279l1.03-1.03a.382.382 0 0 1 .278-.117c.108 0 .201.04.28.117L8 8.7l3.294-3.295a.382.382 0 0 1 .28-.117c.108 0 .2.04.279.117l1.03 1.03a.382.382 0 0 1 .117.28c0 .107-.04.2-.118.278L8.28 11.596a.382.382 0 0 1-.279.117.382.382 0 0 1-.28-.117z",style:{fill:a}}))}},494:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(365),s=n(366),a=n(538),r=n(374),l=n(367),i=n(0);class c extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={tooltipShown:!1},this.showTooltip=()=>{this.mounted&&(this.setState({tooltipShown:!0}),setTimeout(()=>{this.mounted&&this.setState({tooltipShown:!1})},1e3))}}componentDidMount(){this.mounted=!0,this.copyButton&&(this.clipboard=new a(this.copyButton),this.clipboard.on("success",this.showTooltip))}componentDidUpdate(){this.clipboard&&this.clipboard.destroy(),this.copyButton&&(this.clipboard=new a(this.copyButton),this.clipboard.on("success",this.showTooltip))}componentWillUnmount(){this.mounted=!1,this.clipboard&&this.clipboard.destroy()}render(){return o.createElement(r.a,{overlay:Object(i.l)("copied_action"),visible:this.state.tooltipShown},o.createElement(l.a,{className:s("no-select",this.props.className),"data-clipboard-text":this.props.copyValue,innerRef:e=>this.copyButton=e},this.props.label?this.props.label:Object(i.l)("copy")))}}},496:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n(365),s=n(483),a=n(504),r=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&(n[o[s]]=e[o[s]])}return n};function l(e){var t=e.open,n=r(e,["open"]);return t?o.createElement(s.a,Object.assign({},n)):o.createElement(a.a,Object.assign({},n))}},646:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(365),s=n(370);function a(e){let t=e.className,n=e.fill,a=void 0===n?"currentColor":n,r=e.size;return o.createElement(s.a,{className:t,size:r},o.createElement("path",{d:"M2.968 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM2.968 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177z",style:{fill:a}}))}},863:function(e,t,n){var o=n(864);"string"==typeof o&&(o=[[e.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(369)(o,s);o.locals&&(e.exports=o.locals)},864:function(e,t,n){(e.exports=n(368)(!1)).push([e.i,".code-snippet{position:relative;margin:8px 0;background:#404040;color:#f0f0f0;border-radius:3px}.code-snippet pre{padding:16px;overflow:auto}.code-snippet>button{position:absolute;top:16px;right:16px;line-height:18px;border:1px solid #fff;color:#fff;font-size:11px;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.code-snippet>button:active,.code-snippet>button:focus,.code-snippet>button:hover{background-color:#fff;color:#404040}.code-snippet-oneline pre{padding-bottom:40px}.code-snippet-oneline>button{top:auto;bottom:16px}.code-snippet-wrap pre{white-space:pre-wrap;word-break:break-all}.code-snippet .highlight{font-weight:700;color:#ebccd1}.code-snippet .button-icon{color:#fff!important}.code-snippet .button-icon:active svg,.code-snippet .button-icon:focus svg,.code-snippet .button-icon:hover svg{background-color:#fff;color:#404040}",""])},881:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(365),s=n(366),a=n(496);class r extends o.PureComponent{constructor(){super(...arguments),this.state={hoveringInner:!1},this.handleClick=()=>{this.props.onClick(this.props.data)},this.onDetailEnter=()=>{this.setState({hoveringInner:!0})},this.onDetailLeave=()=>{this.setState({hoveringInner:!1})}}render(){const e=this.props,t=e.className,n=e.open,r=e.renderHeader,l=e.title;return o.createElement("div",{className:s("boxed-group boxed-group-accordion",t,{"no-hover":this.state.hoveringInner})},o.createElement("div",{className:"boxed-group-header",onClick:this.handleClick,role:"listitem"},o.createElement("span",{className:"boxed-group-accordion-title"},o.createElement(a.a,{className:"little-spacer-right",open:n}),l),r&&r()),n&&o.createElement("div",{className:"boxed-group-inner",onMouseEnter:this.onDetailEnter,onMouseLeave:this.onDetailLeave},this.props.children))}}}}]);
//# sourceMappingURL=303.m.87d58416.chunk.js.map