(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1151:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(22),o=a.n(c),r=a(4),l=a(2),s=a(237),i=a(148),p=a(242),u=a(25),m=a(1);function d(e){var t=e.project,a=null!=t.lastAnalysisDate,c=Object(r.sortBy)(t.links,"type");return n.createElement("div",{className:"account-project-card clearfix"},n.createElement("aside",{className:"account-project-side"},a?n.createElement("div",{className:"account-project-analysis"},n.createElement(s.a,{date:t.lastAnalysisDate},function(e){return n.createElement(u.a,{overlay:n.createElement(i.a,{date:t.lastAnalysisDate})},n.createElement("span",null,Object(m.m)("my_account.projects.analyzed_x",e)))})):n.createElement("div",{className:"account-project-analysis"},Object(m.l)("my_account.projects.never_analyzed")),null!=t.qualityGate&&n.createElement("div",{className:"account-project-quality-gate"},n.createElement(p.a,{level:t.qualityGate}))),n.createElement("h3",{className:"account-project-name"},n.createElement(l.Link,{to:{pathname:"/dashboard",query:{id:t.key}}},t.name)),c.length>0&&n.createElement("div",{className:"account-project-links"},n.createElement("ul",{className:"list-inline"},c.map(function(e){return n.createElement("li",{key:e.type},n.createElement("a",{className:"link-with-icon",href:e.href,title:e.name,target:"_blank",rel:"nofollow"},n.createElement("i",{className:"icon-color-link icon-"+e.type})))}))),n.createElement("div",{className:"account-project-key"},t.key),!!t.description&&n.createElement("div",{className:"account-project-description"},t.description))}var y=a(78);function j(e){var t=e.projects;return n.createElement("div",{id:"account-projects"},0===t.length?n.createElement("div",{className:"js-no-results"},Object(m.l)("my_account.projects.no_results")):n.createElement("p",null,Object(m.l)("my_account.projects.description")),t.length>0&&n.createElement("ul",{className:"account-projects-list"},t.map(function(e){return n.createElement("li",{key:e.key},n.createElement(d,{project:e}))})),t.length>0&&n.createElement(y.a,{count:t.length,total:e.total||0,ready:!e.loading,loadMore:e.loadMore}))}var h,E=a(33),f=(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])},function(e,t){function a(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0,page:1,query:""},t.loadMore=function(){return t.loadProjects(t.state.page+1)},t.search=function(e){return t.loadProjects(1,e)},t}return f(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.loadProjects()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.loadProjects=function(e,t){var a=this;void 0===e&&(e=this.state.page),void 0===t&&(t=this.state.query),this.setState({loading:!0});var n={ps:100};return e>1&&(n.p=e),t&&(n.q=t),Object(E.q)(n).then(function(n){var c=e>1?(a.state.projects||[]).concat(n.projects):n.projects;a.setState({projects:c,query:t,loading:!1,page:n.paging.pageIndex,total:n.paging.total})})},t.prototype.render=function(){var e=n.createElement(o.a,{title:Object(m.l)("my_account.projects")});return null==this.state.projects?n.createElement("div",{className:"text-center"},e,n.createElement("i",{className:"spinner spinner-margin"})):n.createElement("div",{className:"account-body account-container"},e,n.createElement(j,{projects:this.state.projects,total:this.state.total,loading:this.state.loading,loadMore:this.loadMore,search:this.search}))},t}(n.PureComponent);t.default=v}}]);
//# sourceMappingURL=258.2a0a5282.chunk.js.map