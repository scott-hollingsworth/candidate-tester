(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1242:function(e,t,n){var r=n(543),a=n(487),s=n(15),i=n(501),c=n(513),o=n(713),l=i(function(e,t){var n=o(t);return c(n)&&(n=void 0),c(e)?r(e,a(t,1,c,!0),s(n,2)):[]});e.exports=l},1243:function(e,t,n){"use strict";n.r(t),t.default="**Get the most out of SonarQube with branches analysis**\n\nAnalyze each branch of your project separately with the Developer Edition.\n\n---\n\n[Learn More](https://redirect.sonarsource.com/editions/developer.html)\n"},1244:function(e,t,n){"use strict";n.r(t),t.default="**Learn how to analyze branches in {instance}**\n\nQuickly setup branch analysis and get separate insights for each of your branches and pull requests.\n\n---\n\n[Branches Documentation](/branches/overview/)  \n[Pull Request Analysis](/analysis/pull-request/)\n"},1245:function(e,t,n){var r=n(1246);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(369)(r,a);r.locals&&(e.exports=r.locals)},1246:function(e,t,n){(e.exports=n(368)(!1)).push([e.i,".navbar-context-branches{display:inline-flex;justify-content:center;align-items:center;flex-shrink:1!important;min-width:0;line-height:16px;margin-left:16px;font-size:13px}.navbar-context-branches .popup{min-width:430px;max-width:650px}.navbar-context-meta-branch-menu-title{padding-left:24px}.navbar-context-meta-branch-menu-item{display:flex!important;justify-content:space-between;align-items:center}.navbar-context-meta-branch-menu-item-name{flex:0 1 550px;min-width:0}.navbar-context-meta-branch-menu-item-actions{height:12px;margin-left:32px}",""])},1686:function(e,t,n){"use strict";n.r(t);var r=n(1242),a=n.n(r),s=n(365),i=n(377),c=n(795),o=n(381),l=n(371),u=n(0);function h(){return s.createElement(s.Fragment,null,s.createElement(o.Helmet,{defaultTitle:Object(u.l)("404_not_found"),defer:!1}),s.createElement("div",{className:"page-wrapper-simple",id:"bd"},s.createElement("div",{className:"page-simple",id:"nonav"},s.createElement("h2",{className:"big-spacer-bottom"},Object(u.l)("dashboard.project_not_found")),s.createElement("p",{className:"spacer-bottom"},Object(u.l)("dashboard.project_not_found.2")),s.createElement("p",null,s.createElement(l.Link,{to:"/"},Object(u.l)("go_back_to_homepage"))))))}var p=n(359),m=n(366),d=n(725),b=n(668),g=n(390),f=n(372),k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function v(e){var t=e.branchLike,n=k(e,["branchLike"]);const r=Object(g.b)(t),a=Object(g.j)(t)&&!t.isOrphan||Object(g.h)(t);return s.createElement("li",{key:Object(g.c)(t),onMouseEnter:()=>{n.onSelect(t)},ref:n.innerRef},s.createElement(l.Link,{className:m("navbar-context-meta-branch-menu-item",{active:n.selected}),to:Object(f.c)(n.component.key,t)},s.createElement("div",{className:"navbar-context-meta-branch-menu-item-name text-ellipsis",title:r},s.createElement(b.a,{branchLike:t,className:m("little-spacer-right",{"big-spacer-left":a})}),r,Object(g.g)(t)&&s.createElement("div",{className:"outline-badge spacer-left"},Object(u.l)("branches.main_branch"))),s.createElement("div",{className:"big-spacer-left note"},s.createElement(d.a,{branchLike:t,component:n.component.key}))))}var j=n(488),E=n(416),y=n(384),O=n(388),L=n(408);var N=Object(L.a)(class extends s.PureComponent{constructor(){super(...arguments),this.state={query:"",selected:void 0},this.getFilteredBranchLikes=()=>{const e=this.state.query.toLowerCase();return Object(g.k)(this.props.branchLikes).filter(t=>{const n=Object(g.e)(t)&&t.name.toLowerCase().includes(e),r=Object(g.h)(t)&&(t.title.toLowerCase().includes(e)||t.key.toLowerCase().includes(e));return n||r})},this.handleSearchChange=e=>this.setState({query:e,selected:void 0}),this.handleKeyDown=e=>{switch(e.keyCode){case 13:return e.preventDefault(),void this.openSelected();case 38:return e.preventDefault(),void this.selectPrevious();case 40:return e.preventDefault(),void this.selectNext()}},this.openSelected=()=>{const e=this.getSelected();e&&this.props.router.push(this.getProjectBranchUrl(e))},this.selectPrevious=()=>{const e=this.getSelected(),t=this.getFilteredBranchLikes(),n=t.findIndex(t=>Object(g.i)(t,e));n>0&&this.setState({selected:t[n-1]})},this.selectNext=()=>{const e=this.getSelected(),t=this.getFilteredBranchLikes(),n=t.findIndex(t=>Object(g.i)(t,e));n>=0&&n<t.length-1&&this.setState({selected:t[n+1]})},this.handleSelect=e=>{this.setState({selected:e})},this.getSelected=()=>{if(this.state.selected)return this.state.selected;const e=this.getFilteredBranchLikes();return e.find(e=>Object(g.i)(e,this.props.currentBranchLike))?this.props.currentBranchLike:e.length>0?e[0]:void 0},this.getProjectBranchUrl=e=>Object(f.c)(this.props.component.key,e),this.isOrphan=e=>(Object(g.j)(e)||Object(g.h)(e))&&e.isOrphan,this.renderSearch=()=>s.createElement("div",{className:"menu-search"},s.createElement(E.a,{autoFocus:!0,onChange:this.handleSearchChange,onKeyDown:this.handleKeyDown,placeholder:Object(u.l)("branches.search_for_branches"),value:this.state.query})),this.renderBranchesList=()=>{const e=this.getFilteredBranchLikes(),t=this.getSelected();if(0===e.length)return s.createElement("div",{className:"menu-message note"},Object(u.l)("no_results"));const n=e.map((n,r)=>{const a=this.isOrphan(n),i=r>0?e[r-1]:void 0,c=void 0!==i&&this.isOrphan(i),o=Object(g.f)(n)||a&&!c,l=a&&!c,h=!l&&Object(g.h)(n)&&!Object(g.h)(i),p=!l&&Object(g.j)(n)&&!Object(g.j)(i),m=Object(g.i)(n,t);return s.createElement(s.Fragment,{key:Object(g.c)(n)},o&&s.createElement("li",{className:"divider"}),l&&s.createElement("li",{className:"menu-header"},s.createElement("div",{className:"display-inline-block text-middle"},Object(u.l)("branches.orphan_branches")),s.createElement(y.a,{className:"spacer-left",overlay:Object(u.l)("branches.orphan_branches.tooltip")})),h&&s.createElement("li",{className:"menu-header navbar-context-meta-branch-menu-title"},Object(u.l)("branches.pull_requests")),p&&s.createElement("li",{className:"menu-header navbar-context-meta-branch-menu-title"},Object(u.l)("branches.short_lived_branches")),s.createElement(v,{branchLike:n,component:this.props.component,innerRef:e=>this.selectedBranchNode=m?e:this.selectedBranchNode,key:Object(g.c)(n),onSelect:this.handleSelect,selected:m}))});return s.createElement("ul",{className:"menu menu-vertically-limited",ref:e=>this.listNode=e},n)}}componentDidMount(){this.scrollToSelectedBranch(!1)}componentDidUpdate(){this.scrollToSelectedBranch(!0)}scrollToSelectedBranch(e){this.listNode&&this.selectedBranchNode&&Object(j.b)(this.selectedBranchNode,{parent:this.listNode,smooth:e})}render(){const e=this.props.component,t="TRK"===e.qualifier&&e.configuration&&e.configuration.showSettings;return s.createElement(O.a,{noPadding:!0},this.renderSearch(),this.renderBranchesList(),t&&s.createElement("div",{className:"dropdown-bottom-hint text-right"},s.createElement(l.Link,{className:"text-muted",to:{pathname:"/project/branches",query:{id:e.key}}},Object(u.l)("branches.manage"))))}}),_=n(395),S=n(373),C=n(967),x=n(427),w=n(391),P=n(14),q=n(506);var B=Object(q.a)(class extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={dropdownOpen:!1},this.handleClick=e=>{e.preventDefault(),e.stopPropagation(),e.currentTarget.blur(),this.setState(e=>({dropdownOpen:!e.dropdownOpen}))},this.closeDropdown=()=>{this.mounted&&this.setState({dropdownOpen:!1})},this.renderMergeBranch=()=>{const e=this.props.currentBranchLike;return Object(g.j)(e)?e.isOrphan?s.createElement("span",{className:"note big-spacer-left text-ellipsis flex-shrink"},s.createElement("span",{className:"text-middle"},Object(u.l)("branches.orphan_branch")),s.createElement(y.a,{className:"spacer-left",overlay:Object(u.l)("branches.orphan_branches.tooltip")})):s.createElement("span",{className:"note big-spacer-left"},Object(u.l)("from")," ",s.createElement("strong",null,e.mergeBranch)):Object(g.h)(e)?s.createElement("span",{className:"note big-spacer-left text-ellipsis flex-shrink"},s.createElement(p.FormattedMessage,{defaultMessage:Object(u.l)("branches.pull_request.for_merge_into_x_from_y"),id:"branches.pull_request.for_merge_into_x_from_y",values:{target:s.createElement("strong",null,e.target),branch:s.createElement("strong",null,e.branch)}})):null},this.renderOverlay=()=>s.createElement(s.Fragment,null,s.createElement("p",null,Object(u.l)("application.branches.help")),s.createElement("hr",{className:"spacer-top spacer-bottom"}),s.createElement(l.Link,{className:"spacer-left link-no-underline",to:Object(f.t)(this.props.component.breadcrumbs[0].key,"APP")},Object(u.l)("application.branches.link")))}componentDidMount(){this.mounted=!0}componentWillReceiveProps(e){e.component===this.props.component&&Object(g.i)(e.currentBranchLike,this.props.currentBranchLike)&&e.location===this.props.location||this.setState({dropdownOpen:!1})}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.branchLikes,r=e.currentBranchLike,a=this.props.component,i=a.configuration,c=a.breadcrumbs;if(Object(P.isSonarCloud)()&&!this.props.appState.branchesEnabled)return null;const o=Object(g.b)(r);return c&&c[0]&&"APP"===c[0].qualifier&&t.length<2?s.createElement("div",{className:"navbar-context-branches"},s.createElement(b.a,{branchLike:r,className:"little-spacer-right",fill:S.gray80}),s.createElement("span",{className:"note"},o),i&&i.showSettings&&s.createElement(y.a,{className:"spacer-left",overlay:this.renderOverlay()},s.createElement(C.a,{className:"text-middle",fill:S.blue,size:12}))):this.props.appState.branchesEnabled?t.length<2?s.createElement("div",{className:"navbar-context-branches"},s.createElement(b.a,{branchLike:r,className:"little-spacer-right"}),s.createElement("span",{className:"note"},o),s.createElement(_.a,{className:"spacer-left",doc:Promise.resolve().then(n.bind(null,1244))},s.createElement(C.a,{fill:S.blue,size:12}))):s.createElement("div",{className:"navbar-context-branches"},s.createElement("div",{className:"dropdown"},s.createElement(x.a,{onRequestClose:this.closeDropdown,open:this.state.dropdownOpen,overlay:s.createElement(N,{branchLikes:this.props.branchLikes,canAdmin:i&&i.showSettings,component:this.props.component,currentBranchLike:this.props.currentBranchLike,onClose:this.closeDropdown})},s.createElement("a",{className:"link-base-color link-no-underline nowrap",href:"#",onClick:this.handleClick},s.createElement(b.a,{branchLike:r,className:"little-spacer-right"}),s.createElement("span",{className:"text-limited text-top",title:o},o),s.createElement(w.a,{className:"little-spacer-left"})))),this.renderMergeBranch()):s.createElement("div",{className:"navbar-context-branches"},s.createElement(b.a,{branchLike:r,className:"little-spacer-right",fill:S.gray80}),s.createElement("span",{className:"note"},o),s.createElement(_.a,{className:"spacer-left",doc:Promise.resolve().then(n.bind(null,1243))},s.createElement(C.a,{fill:S.gray71,size:12})))}}),T=n(406),A=n(379),D=n(526),R=n(670),I=n(608),M=n(424);var z=Object(i.connect)((e,t)=>({organization:Object(A.getOrganizationByKey)(e,t.component.organization)}))(function(e){const t=e.component,n=e.organization;return s.createElement("header",{className:"navbar-context-header"},s.createElement(R.a,{organization:n&&Object(P.isSonarCloud)()?n:void 0,title:t.name}),n&&Object(P.isSonarCloud)()&&s.createElement(s.Fragment,null,s.createElement(D.a,{organization:n}),s.createElement(I.a,{className:"navbar-context-header-breadcrumb-link link-base-color link-no-underline spacer-left",organization:n},n.name),s.createElement("span",{className:"slash-separator"})),function(e,t){const n=e[e.length-1];return e.map((r,a)=>s.createElement(s.Fragment,{key:r.key},0===a&&s.createElement(T.a,{className:"spacer-right",qualifier:n.qualifier}),t||a<e.length-1?s.createElement(l.Link,{className:"navbar-context-header-breadcrumb-link link-base-color link-no-underline",title:r.name,to:Object(f.v)(r.key)},r.name):s.createElement("span",{className:"navbar-context-header-breadcrumb-link",title:r.name},r.name),a<e.length-1&&s.createElement("span",{className:"slash-separator"})))}(t.breadcrumbs,void 0!==e.currentBranchLike&&!Object(g.g)(e.currentBranchLike)),Object(P.isSonarCloud)()&&t.alm&&s.createElement("a",{className:"link-no-underline",href:t.alm.url,rel:"noopener noreferrer",target:"_blank"},s.createElement("img",{alt:Object(M.h)(t.alm.key),className:"text-text-top spacer-left",height:16,src:"".concat(Object(f.b)(),"/images/sonarcloud/").concat(Object(M.h)(t.alm.key),".svg"),width:16})),e.currentBranchLike&&s.createElement(B,{branchLikes:e.branchLikes,component:t,currentBranchLike:e.currentBranchLike,location:e.location}))}),F=n(380),U=n(726);const W=Object(F.a)(()=>Promise.all([n.e(1),n.e(363)]).then(n.bind(null,1618)));class Q extends s.PureComponent{constructor(){super(...arguments),this.state={modal:!1},this.handleClick=e=>{e.preventDefault(),e.currentTarget.blur(),this.setState({modal:!0})},this.handleCloseModal=()=>{this.setState({modal:!1})}}render(){return s.createElement(s.Fragment,null,s.createElement("div",{className:"badge badge-focus badge-medium display-inline-flex-center js-component-analysis-warnings flex-1"},s.createElement(U.a,{className:"spacer-right"}),s.createElement(p.FormattedMessage,{defaultMessage:Object(u.l)("component_navigation.last_analsys_had_warnings"),id:"component_navigation.last_analsys_had_warnings",values:{warnings:s.createElement("a",{href:"#",onClick:this.handleClick},Object(u.m)("component_navigation.x_warnings",String(this.props.warnings.length)))}})),this.state.modal&&s.createElement(W,{onClose:this.handleCloseModal,warnings:this.props.warnings}))}}var G=n(407),J=n(602),K=n(603),V=n(374),H=n(478),X=n(392);var Y=Object(i.connect)(e=>({currentUser:Object(A.getCurrentUser)(e)}))(function(e){let t=e.branchLike,n=e.component,r=e.currentUser,a=e.warnings;const i=!t||Object(g.g)(t),c=Object(g.f)(t),o=function(e,t){let n;if("VW"===e.qualifier||"SVW"===e.qualifier)n={type:"PORTFOLIO",component:e.key};else if("APP"===e.qualifier){const r=Object(g.f)(t)?t.name:void 0;n={type:"APPLICATION",component:e.key,branch:r}}else if("TRK"===e.qualifier){const r=Object(g.f)(t)?t.name:void 0;n={type:"PROJECT",component:e.key,branch:r}}return n}(n,t),l=void 0!==n.version&&(i||c);return s.createElement("div",{className:"navbar-context-meta flex-0"},a.length>0&&s.createElement(Q,{warnings:a}),n.analysisDate&&s.createElement("div",{className:"spacer-left text-ellipsis"},s.createElement(G.a,{date:n.analysisDate})),l&&s.createElement(V.a,{mouseEnterDelay:.5,overlay:"".concat(Object(u.l)("version")," ").concat(n.version)},s.createElement("div",{className:"spacer-left text-limited"},Object(u.l)("version")," ",n.version)),Object(X.b)(r)&&s.createElement("div",{className:"navbar-context-meta-secondary"},i&&s.createElement(J.a,{component:n.key,favorite:Boolean(n.isFavorite),qualifier:n.qualifier}),(i||c)&&void 0!==o&&s.createElement(K.a,{className:"spacer-left",currentPage:o})),(Object(g.j)(t)||Object(g.h)(t))&&s.createElement("div",{className:"navbar-context-meta-secondary display-inline-flex-center"},Object(g.h)(t)&&void 0!==t.url&&s.createElement("a",{className:"display-inline-flex-center big-spacer-right",href:t.url,rel:"noopener noreferrer",target:"_blank"},Object(u.l)("branches.see_the_pr"),s.createElement(H.a,{className:"little-spacer-left",size:12})),s.createElement(d.a,{branchLike:t,component:n.key})))}),Z=n(660);const $=["/project/admin","/project/branches","/project/settings","/project/quality_profiles","/project/quality_gate","/custom_measures","/project/links","/project_roles","/project/history","background_tasks","/project/key","/project/deletion","/project/webhooks"];var ee=Object(q.a)(class extends s.PureComponent{constructor(){super(...arguments),this.getQuery=()=>Object.assign({id:this.props.component.key},Object(g.d)(this.props.branchLike)),this.renderExtension=(e,t)=>{let n=e.key,r=e.name;const a=t?"/project/admin/extension/".concat(n):"/project/extension/".concat(n),i={id:this.props.component.key,qualifier:this.props.component.qualifier};return s.createElement("li",{key:n},s.createElement(l.Link,{activeClassName:"active",to:{pathname:a,query:i}},r))}}isProject(){return"TRK"===this.props.component.qualifier}isDeveloper(){return"DEV"===this.props.component.qualifier}isPortfolio(){const e=this.props.component.qualifier;return"VW"===e||"SVW"===e}isApplication(){return"APP"===this.props.component.qualifier}getConfiguration(){return this.props.component.configuration||{}}renderDashboardLink(){const e=this.isPortfolio()?"/portfolio":"/dashboard";return s.createElement("li",null,s.createElement(l.Link,{activeClassName:"active",to:{pathname:e,query:this.getQuery()}},Object(u.l)("overview.page")))}renderCodeLink(){return this.isDeveloper()?null:s.createElement("li",null,s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/code",query:this.getQuery()}},this.isPortfolio()||this.isApplication()?Object(u.l)("view_projects.page"):Object(u.l)("code.page")))}renderActivityLink(){const e=this.props.branchLike;return Object(g.j)(e)||Object(g.h)(e)?null:s.createElement("li",null,s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/activity",query:this.getQuery()}},Object(u.l)("project_activity.page")))}renderIssuesLink(){const e=this.props.location,t=(void 0===e?{pathname:""}:e).pathname.startsWith("/project/issues");return s.createElement("li",null,s.createElement(l.Link,{activeClassName:"active",className:m({active:t}),to:{pathname:"/project/issues",query:Object.assign({},this.getQuery(),{resolved:"false"})}},Object(u.l)("issues.page")))}renderComponentMeasuresLink(){return s.createElement("li",null,s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/component_measures",query:this.getQuery()}},Object(u.l)("layout.measures")))}renderSecurityReports(){const e=this.props,t=e.branchLike,n=e.component.extensions,r=void 0===n?[]:n;return Object(g.j)(t)||Object(g.h)(t)?null:r.some(e=>e.key.startsWith("securityreport/"))?s.createElement("li",null,s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/extension/securityreport/securityreport",query:this.getQuery()}},Object(u.l)("layout.security_reports"))):null}renderAdministration(){const e=this.props.branchLike;if(!this.getConfiguration().showSettings||e&&!Object(g.g)(e))return null;const t=$.some(e=>-1!==window.location.href.indexOf(e)),n=this.renderAdministrationLinks();return n.some(e=>null!=e)?s.createElement(O.b,{"data-test":"administration",overlay:s.createElement("ul",{className:"menu"},n),tagName:"li"},e=>{let n=e.onToggleClick,r=e.open;return s.createElement("a",{"aria-expanded":r,"aria-haspopup":"true",className:m("dropdown-toggle",{active:t||r}),href:"#",id:"component-navigation-admin",onClick:n},Object(u.l)("layout.settings"),s.createElement(w.a,{className:"little-spacer-left"}))}):null}renderAdministrationLinks(){return[this.renderSettingsLink(),this.renderBranchesLink(),this.renderProfilesLink(),this.renderQualityGateLink(),this.renderCustomMeasuresLink(),this.renderLinksLink(),this.renderPermissionsLink(),this.renderBackgroundTasksLink(),this.renderUpdateKeyLink(),this.renderWebhooksLink(),...this.renderAdminExtensions(),this.renderDeletionLink()]}renderSettingsLink(){return!this.getConfiguration().showSettings||this.isApplication()||this.isPortfolio()?null:s.createElement("li",{key:"settings"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/settings",query:this.getQuery()}},Object(u.l)("project_settings.page")))}renderBranchesLink(){return this.props.appState.branchesEnabled&&this.isProject()&&this.getConfiguration().showSettings?s.createElement("li",{key:"branches"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/branches",query:{id:this.props.component.key}}},Object(u.l)("project_branches.page"))):null}renderProfilesLink(){return this.getConfiguration().showQualityProfiles?s.createElement("li",{key:"profiles"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/quality_profiles",query:{id:this.props.component.key}}},Object(u.l)("project_quality_profiles.page"))):null}renderQualityGateLink(){return this.getConfiguration().showQualityGates?s.createElement("li",{key:"quality_gate"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/quality_gate",query:{id:this.props.component.key}}},Object(u.l)("project_quality_gate.page"))):null}renderCustomMeasuresLink(){return Object(P.isSonarCloud)()||!this.getConfiguration().showManualMeasures?null:s.createElement("li",{key:"custom_measures"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/custom_measures",query:{id:this.props.component.key}}},Object(u.l)("custom_measures.page")))}renderLinksLink(){return this.getConfiguration().showLinks?s.createElement("li",{key:"links"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/links",query:{id:this.props.component.key}}},Object(u.l)("project_links.page"))):null}renderPermissionsLink(){return this.getConfiguration().showPermissions?s.createElement("li",{key:"permissions"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project_roles",query:{id:this.props.component.key}}},Object(u.l)("permissions.page"))):null}renderBackgroundTasksLink(){return this.getConfiguration().showBackgroundTasks?s.createElement("li",{key:"background_tasks"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/background_tasks",query:{id:this.props.component.key}}},Object(u.l)("background_tasks.page"))):null}renderUpdateKeyLink(){return this.getConfiguration().showUpdateKey?s.createElement("li",{key:"update_key"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/key",query:{id:this.props.component.key}}},Object(u.l)("update_key.page"))):null}renderWebhooksLink(){return this.getConfiguration().showSettings&&this.isProject()?s.createElement("li",{key:"webhooks"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/webhooks",query:{id:this.props.component.key}}},Object(u.l)("webhooks.page"))):null}renderDeletionLink(){const e=this.props.component.qualifier;return this.getConfiguration().showSettings?"TRK"!==e&&"VW"!==e&&"APP"!==e?null:s.createElement("li",{key:"project_delete"},s.createElement(l.Link,{activeClassName:"active",to:{pathname:"/project/deletion",query:{id:this.props.component.key}}},Object(u.l)("deletion.page"))):null}renderAdminExtensions(){return this.props.branchLike&&!Object(g.g)(this.props.branchLike)?[]:(this.getConfiguration().extensions||[]).map(e=>this.renderExtension(e,!0))}renderExtensions(){const e=(this.props.component.extensions||[]).filter(e=>!e.key.startsWith("securityreport/"));return 0===e.length||this.props.branchLike&&!Object(g.g)(this.props.branchLike)?null:s.createElement(O.b,{"data-test":"extensions",overlay:s.createElement("ul",{className:"menu"},e.map(e=>this.renderExtension(e,!1))),tagName:"li"},e=>{let t=e.onToggleClick,n=e.open;return s.createElement("a",{"aria-expanded":n,"aria-haspopup":"true",className:m("dropdown-toggle",{active:n}),href:"#",id:"component-navigation-more",onClick:t},Object(u.l)("more"),s.createElement(w.a,{className:"little-spacer-left"}))})}render(){return s.createElement(Z.a,null,this.renderDashboardLink(),this.renderIssuesLink(),this.renderSecurityReports(),this.renderComponentMeasuresLink(),this.renderCodeLink(),this.renderActivityLink(),this.renderAdministration(),this.renderExtensions())}}),te=n(931),ne=n(385);var re=Object(q.a)(class extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.fetchIsValidLicense=()=>{this.setState({loading:!0}),Object(te.a)().then(e=>{let t=e.isValidLicense;this.mounted&&this.setState({isValidLicense:t,loading:!1})},()=>{this.mounted&&this.setState({loading:!1})})}}componentDidMount(){this.mounted=!0,this.fetchIsValidLicense()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.currentTask,t=this.state,n=t.isValidLicense;return!t.loading&&e&&e.errorType?n&&"LICENSING_LOC"!==e.errorType?s.createElement(ne.a,{display:"banner",variant:"error"},Object(u.l)("component_navigation.status.last_blocked_due_to_bad_license")):s.createElement(ne.a,{display:"banner",variant:"error"},s.createElement("span",{className:"little-spacer-right"},e.errorMessage),this.props.appState.canAdmin?s.createElement(l.Link,{to:"/admin/extension/license/app"},Object(u.l)("license.component_navigation.button",e.errorType),"."):Object(u.l)("please_contact_administrator")):null}}),ae=n(517);class se extends s.PureComponent{renderMessage(e,t,n){const r=this.props.component;let a;return r.configuration&&r.configuration.showBackgroundTasks&&(e+=".admin",a=s.createElement(l.Link,{to:Object(f.e)(r.key,t)},Object(u.l)("background_tasks.page"))),s.createElement(p.FormattedMessage,{defaultMessage:Object(u.l)(e),id:e,values:{branch:n,url:a}})}render(){const e=this.props,t=e.currentTask,n=e.currentTaskOnSameBranch,r=e.isInProgress,a=e.isPending;if(r)return s.createElement(ne.a,{display:"banner",variant:"info"},this.renderMessage("component_navigation.status.in_progress"));if(a)return s.createElement(ne.a,{display:"banner",variant:"info"},this.renderMessage("component_navigation.status.pending",ae.e.ALL));if(t&&t.status===ae.e.FAILED){if(t.errorType&&Object(u.i)("license.component_navigation.button",t.errorType))return s.createElement(re,{currentTask:t});const e=t.branch||"".concat(t.pullRequest).concat(t.pullRequestTitle?" - "+t.pullRequestTitle:"");let r;return r=!1===n&&e?this.renderMessage("component_navigation.status.failed_branch",void 0,e):this.renderMessage("component_navigation.status.failed"),s.createElement(ne.a,{display:"banner",variant:"error"},r)}return null}}var ie=n(717),ce=n(718);n(1245);class oe extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.populateRecentHistory=()=>{const e=this.props.component.breadcrumbs,t=e[e.length-1].qualifier;-1!==["TRK","VW","APP","DEV"].indexOf(t)&&ie.a.add(this.props.component.key,this.props.component.name,t.toLowerCase(),this.props.component.organization)}}componentDidMount(){this.populateRecentHistory()}componentDidUpdate(e){this.props.component.key!==e.component.key&&this.populateRecentHistory()}render(){const e=this.props,t=e.component,n=e.currentBranchLike,r=e.currentTask,a=e.isInProgress,i=e.isPending;let c;return(a||i||r&&r.status===ae.e.FAILED)&&(c=s.createElement(se,{component:t,currentTask:r,currentTaskOnSameBranch:this.props.currentTaskOnSameBranch,isInProgress:a,isPending:i})),s.createElement(ce.a,{height:c?S.contextNavHeightRaw+30:S.contextNavHeightRaw,id:"context-navigation",notif:c},s.createElement("div",{className:"navbar-context-justified"},s.createElement(z,{branchLikes:this.props.branchLikes,component:t,currentBranchLike:n,location:this.props.location}),s.createElement(Y,{branchLike:n,component:t,warnings:this.props.warnings})),s.createElement(ee,{branchLike:n,component:t,location:this.props.location}))}}var le=n(727),ue=n(567),he=n(409),pe=n(568),me=n(450);function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,s=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"ComponentContainer",function(){return ge});const be=3e3;class ge extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={branchLikes:[],isPending:!1,loading:!0,warnings:[]},this.addQualifier=e=>Object.assign({},e,{qualifier:e.breadcrumbs[e.breadcrumbs.length-1].qualifier}),this.fetchBranches=e=>{const t=e.breadcrumbs.find(e=>{let t=e.qualifier;return["APP","TRK"].includes(t)});if(t){const n=t.key;return Promise.all([Object(le.c)(n),"APP"===t.qualifier?Promise.resolve([]):Object(le.d)(n)]).then(t=>{let n=de(t,2);const r=[...n[0],...n[1]],a=this.getCurrentBranchLike(r);return this.registerBranchStatuses(r,e),{branchLike:a,branchLikes:r,component:e}})}return Promise.resolve({branchLikes:[],component:e})},this.fetchStatus=e=>{Object(ue.g)(e.key).then(e=>{let t=e.current,n=e.queue;if(this.mounted){let e=!1;this.setState(r=>{let s=r.branchLike,i=r.component,c=r.currentTask,o=r.tasksInProgress;const l=this.getCurrentTask(t,s),u=this.getPendingTasks(n,s),h=u.filter(e=>e.status===ae.e.IN_PROGRESS),p=c&&l&&c.id!==l.id,m=o&&(h.length!==o.length||a()(h,o,"id").length>0);return!(e=Boolean(p||m))&&i&&(h.length>0||!i.analysisDate)&&(window.clearTimeout(this.watchStatusTimer),this.watchStatusTimer=window.setTimeout(()=>this.fetchStatus(i),be)),{currentTask:l,isPending:u.some(e=>e.status===ae.e.PENDING),tasksInProgress:h}},()=>{e&&this.fetchComponent()})}},()=>{})},this.fetchWarnings=(e,t)=>{"TRK"===e.qualifier&&Object(ue.d)(Object.assign({component:e.key},Object(g.d)(t))).then(e=>{let t=e.component;this.setState({warnings:t.warnings})},()=>{})},this.getCurrentBranchLike=e=>{const t=this.props.location.query;return t.pullRequest?e.find(e=>Object(g.h)(e)&&e.key===t.pullRequest):e.find(e=>Object(g.e)(e)&&(t.branch?e.name===t.branch:e.isMain))},this.getCurrentTask=(e,t)=>{if(e)return e.status===ae.e.FAILED||this.isSameBranch(e,t)?e:void 0},this.getPendingTasks=(e,t)=>e.filter(e=>this.isSameBranch(e,t)),this.isSameBranch=(e,t)=>{if(t&&!Object(g.g)(t)){if(Object(g.h)(t))return t.key===e.pullRequest;if(Object(g.j)(t)||Object(g.f)(t))return t.type===e.branchType&&t.name===e.branch}return!e.branch&&!e.pullRequest},this.registerBranchStatuses=(e,t)=>{e.forEach(e=>{e.status&&this.props.registerBranchStatus(e,t.key,e.status.qualityGateStatus)})},this.handleComponentChange=e=>{this.mounted&&this.setState(t=>{if(t.component){return{component:Object.assign({},t.component,e)}}return null})},this.handleBranchesChange=()=>{this.mounted&&this.state.component&&this.fetchBranches(this.state.component).then(e=>{let t=e.branchLike,n=e.branchLikes;this.mounted&&this.setState({branchLike:t,branchLikes:n})},()=>{})}}componentDidMount(){this.mounted=!0,this.fetchComponent()}componentDidUpdate(e){e.location.query.id===this.props.location.query.id&&e.location.query.branch===this.props.location.query.branch&&e.location.query.pullRequest===this.props.location.query.pullRequest||this.fetchComponent()}componentWillUnmount(){this.mounted=!1,window.clearTimeout(this.watchStatusTimer)}fetchComponent(){const e=this.props.location.query,t=e.branch,n=e.id,r=e.pullRequest;this.setState({loading:!0});Promise.all([Object(pe.a)({component:n,branch:t,pullRequest:r}),Object(he.j)({component:n,branch:t,pullRequest:r})]).then(e=>{let t=de(e,2),n=t[0],r=t[1].component;const a=this.addQualifier(Object.assign({},n,r));return Object(P.isSonarCloud)()&&this.props.fetchOrganization(a.organization),a},e=>{if(this.mounted){let t;(t=e&&e.response?e.response:e)&&403===t.status?this.props.requireAuthorization(this.props.router):this.setState({component:void 0,loading:!1})}}).then(this.fetchBranches).then(e=>{let t=e.branchLike,n=e.branchLikes,r=e.component;this.mounted&&(this.setState({branchLike:t,branchLikes:n,component:r,loading:!1}),this.fetchStatus(r),this.fetchWarnings(r,t))},()=>{})}render(){const e=this.state,t=e.component,n=e.loading;if(!n&&!t)return s.createElement(h,null);const r=this.state,a=r.branchLike,i=r.branchLikes,o=r.currentTask,l=r.isPending,u=r.tasksInProgress,p=u&&u.length>0;return s.createElement("div",null,t&&!["FIL","UTS"].includes(t.qualifier)&&s.createElement(oe,{branchLikes:i,component:t,currentBranchLike:a,currentTask:o,currentTaskOnSameBranch:o&&this.isSameBranch(o,a),isInProgress:p,isPending:l,location:this.props.location,warnings:this.state.warnings}),n?s.createElement("div",{className:"page page-limited"},s.createElement("i",{className:"spinner"})):s.createElement(c.a.Provider,{value:{branchLike:a,component:t}},s.cloneElement(this.props.children,{branchLike:a,branchLikes:i,component:t,isInProgress:p,isPending:l,onBranchesChange:this.handleBranchesChange,onComponentChange:this.handleComponentChange})))}}const fe={fetchOrganization:me.f,registerBranchStatus:me.h,requireAuthorization:me.i};t.default=Object(L.a)(Object(i.connect)(null,fe)(ge))},395:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(365),a=n(384),s=n(380);const i=Object(s.a)(()=>Promise.all([n.e(7),n.e(20)]).then(n.bind(null,485)));class c extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={open:!1},this.close=()=>{this.mounted&&this.setState({open:!1})}}componentDidMount(){this.mounted=!0,this.props.doc.then(e=>{let t=e.default;this.mounted&&this.setState({content:t})},()=>{}),document.addEventListener("scroll",this.close,!0)}componentWillUnmount(){this.mounted=!1,document.removeEventListener("scroll",this.close,!0)}render(){return this.state.content?r.createElement(a.a,{className:this.props.className,overlay:r.createElement("div",{className:"abs-width-300"},r.createElement(i,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null}}},424:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return o}),n.d(t,"g",function(){return l}),n.d(t,"f",function(){return u}),n.d(t,"h",function(){return h});var r=n(392);function a(e,t){return t.endsWith("/")||(t+="/"),o(e)?t.replace("github.com/","github.com/orgs/")+"people":t+"profile/members"}function s(e){return Object(r.b)(e)&&e.externalProvider?h(e.externalProvider):void 0}function i(e){return Object(r.b)(e)&&(c(e.externalProvider)||o(e.externalProvider))}function c(e){return!!e&&e.startsWith("bitbucket")}function o(e){return"github"===e}function l(e){return"microsoft"===e}function u(e){return Boolean(e&&e.personal)}function h(e){return c(e)?"bitbucket":e}},506:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(365),a=n(377),s=n(454),i=n(379);function c(e){class t extends r.Component{render(){return r.createElement(e,Object.assign({},this.props))}}return t.displayName=Object(s.a)(e,"withAppState"),Object(a.connect)(function(e){return{appState:Object(i.getAppState)(e)}})(t)}},517:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return c});const r={ALL:"__ALL__",ALL_EXCEPT_PENDING:"__ALL_EXCEPT_PENDING__",PENDING:"PENDING",IN_PROGRESS:"IN_PROGRESS",SUCCESS:"SUCCESS",FAILED:"FAILED",CANCELED:"CANCELED"},a="ALL_TYPES",s={ALL:"__ALL__",ONLY_CURRENTS:"CURRENTS"},i={status:r.ALL_EXCEPT_PENDING,taskType:a,currents:s.ALL,minSubmittedAt:void 0,maxExecutedAt:void 0,query:""},c=250},567:function(e,t,n){"use strict";n.d(t,"d",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return o}),n.d(t,"b",function(){return l}),n.d(t,"a",function(){return u}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return p}),n.d(t,"i",function(){return m}),n.d(t,"j",function(){return d});var r=n(4),a=n(383);function s(e){return Object(r.getJSON)("/api/ce/analysis_status",e).catch(a.a)}function i(e){return Object(r.getJSON)("/api/ce/activity",e)}function c(e){const t={};return e&&Object.assign(t,{componentId:e}),Object(r.getJSON)("/api/ce/activity_status",t)}function o(e,t){return Object(r.getJSON)("/api/ce/task",{id:e,additionalFields:t}).then(e=>e.task)}function l(e){return Object(r.post)("/api/ce/cancel",{id:e}).then(()=>o(e),()=>o(e))}function u(){return Object(r.post)("/api/ce/cancel_all")}function h(e){return Object(r.getJSON)("/api/ce/component",{component:e}).catch(a.a)}function p(){return Object(r.getJSON)("/api/ce/task_types").then(e=>e.taskTypes)}function m(){return Object(r.getJSON)("/api/ce/worker_count").catch(a.a)}function d(e){return Object(r.post)("/api/ce/set_worker_count",{count:e}).catch(a.a)}},568:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return c});var r=n(4),a=n(383);function s(e){return Object(r.getJSON)("/api/navigation/component",e).catch(a.a)}function i(){return Object(r.getJSON)("/api/navigation/marketplace").catch(a.a)}function c(){return Object(r.getJSON)("/api/navigation/settings").catch(a.a)}},670:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(365),a=n(381),s=n.n(a);function i(e){let t=e.title,n=e.organization;const a=t+(n?" - "+n.name:"");return r.createElement(s.a,{defaultTitle:a,titleTemplate:"%s - "+a})}},725:function(e,t,n){"use strict";var r=n(365),a=n(377),s=n(419),i=n(379);t.a=Object(a.connect)((e,t)=>{let n=t.branchLike,r=t.component;return{status:Object(i.getBranchStatusByBranchLike)(e,r,n).status}})(function(e){let t=e.status;return t?r.createElement(s.a,{level:t,small:!0}):null})},726:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(365),a=n(370),s=n(373);function i(e){let t=e.className,n=e.fill,i=void 0===n?s.warningIconColor:n,c=e.size;return r.createElement(a.a,{className:t,size:c},r.createElement("path",{d:"M9 12.242v-1.484c0-.14-.11-.258-.25-.258h-1.5c-.14 0-.25.117-.25.258v1.484c0 .14.11.258.25.258h1.5c.14 0 .25-.117.25-.258zM8.984 9.32l.141-3.586a.189.189 0 0 0-.078-.148C9 5.546 8.93 5.5 8.859 5.5H7.141c-.07 0-.141.047-.188.086-.055.039-.078.117-.078.164l.133 3.57c0 .102.117.18.265.18H8.72c.14 0 .258-.078.265-.18zm-.109-7.297l6 11A1 1 0 0 1 14 14.5H2a1 1 0 0 1-.875-1.477l6-11a.994.994 0 0 1 1.75 0z",style:{fill:i}}))}},727:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"e",function(){return l});var r=n(4),a=n(383);function s(e){return Object(r.getJSON)("/api/project_branches/list",{project:e}).then(e=>e.branches,a.a)}function i(e){return Object(r.getJSON)("/api/project_pull_requests/list",{project:e}).then(e=>e.pullRequests,a.a)}function c(e){return Object(r.post)("/api/project_branches/delete",e).catch(a.a)}function o(e){return Object(r.post)("/api/project_pull_requests/delete",e).catch(a.a)}function l(e,t){return Object(r.post)("/api/project_branches/rename",{project:e,name:t}).catch(a.a)}},795:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(365);const a=r.createContext({branchLike:void 0,component:void 0})}}]);
//# sourceMappingURL=296.m.13f8bef9.chunk.js.map