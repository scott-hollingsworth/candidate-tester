(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1781:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n(327),a=n(356),o=n.n(a),i=n(350),l=n.n(i),c=n(5),u=n(677),m=n(330),d=n(310),p=n(315),h=n.n(p),g=n(333),f=n.n(g);class E extends s.PureComponent{constructor(e){super(e),this.handleSubmit=()=>this.props.onSubmit({description:this.state.description,name:this.state.name}).then(this.props.onClose),this.handleDescriptionChange=e=>{this.setState({description:e.currentTarget.value})},this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.state={description:e.group&&e.group.description||"",name:e.group&&e.group.name||""}}render(){return s.createElement(f.a,{header:this.props.header,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},e=>{let t=e.onCloseClick,n=e.onFormSubmit,r=e.submitting;return s.createElement("form",{onSubmit:n},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,this.props.header)),s.createElement("div",{className:"modal-body"},s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"create-group-name"},Object(c.translate)("name"),s.createElement("em",{className:"mandatory"},"*")),s.createElement("input",{autoFocus:!0,id:"create-group-name",maxLength:255,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:this.state.name})),s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"create-group-description"},Object(c.translate)("description")),s.createElement("textarea",{id:"create-group-description",name:"description",onChange:this.handleDescriptionChange,value:this.state.description}))),s.createElement("footer",{className:"modal-foot"},s.createElement(h.a,{className:"spacer-right",loading:r}),s.createElement(d.SubmitButton,{disabled:r},this.props.confirmButtonText),s.createElement(d.ResetButtonLink,{onClick:t},Object(c.translate)("cancel"))))})}}class C extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={createModal:!1},this.handleCreateClick=()=>{this.setState({createModal:!0})},this.handleClose=()=>{this.mounted&&this.setState({createModal:!1})},this.handleSubmit=e=>this.props.onCreate(e)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return s.createElement(s.Fragment,null,s.createElement("header",{className:"page-header",id:"groups-header"},s.createElement("h1",{className:"page-title"},Object(c.translate)("user_groups.page")),s.createElement(h.a,{loading:this.props.loading}),s.createElement("div",{className:"page-actions"},s.createElement(d.Button,{id:"groups-create",onClick:this.handleCreateClick},Object(c.translate)("groups.create_group"))),s.createElement("p",{className:"page-description"},Object(c.translate)("user_groups.page.description"))),this.state.createModal&&s.createElement(E,{confirmButtonText:Object(c.translate)("create"),header:Object(c.translate)("groups.create_group"),onClose:this.handleClose,onSubmit:this.handleSubmit}))}}var b=n(324),v=n.n(b),O=n(377),S=n.n(O),N=n(8);function y(e){let t=e.group,n=e.onClose,r=e.onSubmit;const a=Object(c.translate)("groups.delete_group");return s.createElement(f.a,{header:a,onClose:n,onSubmit:r},e=>{let n=e.onCloseClick,r=e.onFormSubmit,o=e.submitting;return s.createElement("form",{onSubmit:r},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,a)),s.createElement("div",{className:"modal-body"},Object(c.translateWithParameters)("groups.delete_group.confirmation",t.name)),s.createElement("footer",{className:"modal-foot"},s.createElement(h.a,{className:"spacer-right",loading:o}),s.createElement(d.SubmitButton,{className:"button-red",disabled:o},Object(c.translate)("delete")),s.createElement(d.ResetButtonLink,{disabled:o,onClick:n},Object(c.translate)("cancel"))))})}var j=n(577),q=n.n(j),z=n(353),w=n.n(z),_=n(493),k=n.n(_),M=n(326),D=n.n(M),x=n(678),F=n.n(x);class P extends s.PureComponent{constructor(e){super(e),this.mounted=!1,this.fetchUsers=e=>Object(u.d)({name:this.props.group.name,organization:this.props.organization,p:e.page,ps:e.pageSize,q:""!==e.query?e.query:void 0,selected:e.filter}).then(t=>{this.mounted&&this.setState(n=>{const s=null!=e.page&&e.page>1,r=s?[...n.users,...t.users]:t.users,a=t.users.filter(e=>e.selected).map(e=>e.login),o=s?[...n.selectedUsers,...a]:a;return{needToReload:!1,lastSearchParams:e,loading:!1,users:r,usersTotalCount:t.total,selectedUsers:o}})}),this.handleSelect=e=>Object(u.a)({name:this.props.group.name,login:e,organization:this.props.organization}).then(()=>{this.mounted&&this.setState(t=>({needToReload:!0,selectedUsers:[...t.selectedUsers,e]}))}),this.handleUnselect=e=>Object(u.e)({name:this.props.group.name,login:e,organization:this.props.organization}).then(()=>{this.mounted&&this.setState(t=>({needToReload:!0,selectedUsers:w()(t.selectedUsers,e)}))}),this.renderElement=e=>{const t=k()(this.state.users,{login:e});return s.createElement("div",{className:"select-list-list-item"},void 0===t?e:s.createElement(s.Fragment,null,t.name,s.createElement("br",null),s.createElement("span",{className:"note"},t.login)))},this.state={needToReload:!1,users:[],selectedUsers:[]}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=Object(c.translate)("users.update");return s.createElement(D.a,{contentLabel:e,onRequestClose:this.props.onClose},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,e)),s.createElement("div",{className:"modal-body modal-container"},s.createElement(F.a,{elements:this.state.users.map(e=>e.login),elementsTotalCount:this.state.usersTotalCount,needToReload:this.state.needToReload&&this.state.lastSearchParams&&this.state.lastSearchParams.filter!==x.SelectListFilter.All,onSearch:this.fetchUsers,onSelect:this.handleSelect,onUnselect:this.handleUnselect,renderElement:this.renderElement,selectedElements:this.state.selectedUsers,withPaging:!0})),s.createElement("footer",{className:"modal-foot"},s.createElement(d.ResetButtonLink,{onClick:this.props.onClose},Object(c.translate)("Done"))))}}class L extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleMembersClick=()=>{this.setState({modal:!0})},this.handleModalClose=()=>{this.mounted&&(this.setState({modal:!1}),this.props.onEdit())}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return s.createElement(s.Fragment,null,s.createElement(d.ButtonIcon,{className:"button-small",onClick:this.handleMembersClick},s.createElement(q.a,null)),this.state.modal&&s.createElement(P,{group:this.props.group,onClose:this.handleModalClose,organization:this.props.organization}))}}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class T extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={deleteForm:!1,editForm:!1},this.handleDeleteClick=()=>{this.setState({deleteForm:!0})},this.handleEditClick=()=>{this.setState({editForm:!0})},this.closeDeleteForm=()=>{this.mounted&&this.setState({deleteForm:!1})},this.closeEditForm=()=>{this.mounted&&this.setState({editForm:!1})},this.handleDeleteFormSubmit=()=>this.props.onDelete(this.props.group.name),this.handleEditFormSubmit=e=>{let t=e.name,n=e.description;const s=this.props.group;return this.props.onEdit(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){U(e,t,n[t])})}return e}({description:n,id:s.id},Object(N.omitNil)({name:t!==s.name?t:void 0})))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.group;return s.createElement("tr",{"data-id":e.id},s.createElement("td",{className:" width-20"},s.createElement("strong",{className:"js-group-name"},e.name),e.default&&s.createElement("span",{className:"little-spacer-left"},"(",Object(c.translate)("default"),")")),s.createElement("td",{className:"width-10"},s.createElement("div",{className:"display-flex-center"},s.createElement("span",{className:"spacer-right"},e.membersCount),!e.default&&s.createElement(L,{group:e,onEdit:this.props.onEditMembers,organization:this.props.organization}))),s.createElement("td",{className:"width-40"},s.createElement("span",{className:"js-group-description"},e.description)),s.createElement("td",{className:"thin nowrap text-right"},!e.default&&s.createElement(S.a,null,s.createElement(O.ActionsDropdownItem,{className:"js-group-update",onClick:this.handleEditClick},Object(c.translate)("update_details")),s.createElement(O.ActionsDropdownDivider,null),s.createElement(O.ActionsDropdownItem,{className:"js-group-delete",destructive:!0,onClick:this.handleDeleteClick},Object(c.translate)("delete")))),this.state.deleteForm&&s.createElement(y,{group:e,onClose:this.closeDeleteForm,onSubmit:this.handleDeleteFormSubmit}),this.state.editForm&&s.createElement(E,{confirmButtonText:Object(c.translate)("update_verb"),group:e,header:Object(c.translate)("groups.update_group"),onClose:this.closeEditForm,onSubmit:this.handleEditFormSubmit}))}}function B(e){return s.createElement("div",{className:"boxed-group boxed-group-inner"},s.createElement("table",{className:"data zebra zebra-hover",id:"groups-list"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null),s.createElement("th",{className:"nowrap"},Object(c.translate)("members")),s.createElement("th",{className:"nowrap"},Object(c.translate)("description")),s.createElement("th",null))),s.createElement("tbody",null,e.showAnyone&&s.createElement("tr",{className:"js-anyone",key:"anyone"},s.createElement("td",{className:"width-20"},s.createElement("strong",{className:"js-group-name"},Object(c.translate)("groups.anyone"))),s.createElement("td",{className:"width-10"}),s.createElement("td",{className:"width-40",colSpan:2},s.createElement("span",{className:"js-group-description"},Object(c.translate)("user_groups.anyone.description")))),v()(e.groups,e=>e.name.toLowerCase()).map(t=>s.createElement(T,{group:t,key:t.id,onDelete:e.onDelete,onEdit:e.onEdit,onEditMembers:e.onEditMembers,organization:e.organization})))))}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){A(e,t,n[t])})}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return G});class G extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0,query:""},this.makeFetchGroupsRequest=e=>(this.setState({loading:!0}),Object(u.f)(R({organization:this.organization,q:this.state.query},e))),this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.fetchGroups=e=>{this.makeFetchGroupsRequest(e).then(e=>{let t=e.groups,n=e.paging;this.mounted&&this.setState({groups:t,loading:!1,paging:n})},this.stopLoading)},this.fetchMoreGroups=()=>{const e=this.state.paging;e&&e.total>e.pageIndex*e.pageSize&&this.makeFetchGroupsRequest({p:e.pageIndex+1}).then(e=>{let t=e.groups,n=e.paging;this.mounted&&this.setState(e=>{let s=e.groups;return{groups:[...void 0===s?[]:s,...t],loading:!1,paging:n}})},this.stopLoading)},this.search=e=>{this.fetchGroups({q:e}),this.setState({query:e})},this.refresh=()=>{this.fetchGroups({q:this.state.query})},this.handleCreate=e=>Object(u.b)(R({},e,{organization:this.organization})).then(e=>{this.mounted&&this.setState(t=>{let n=t.groups;return{groups:[...void 0===n?[]:n,e]}})}),this.handleDelete=e=>Object(u.c)({name:e,organization:this.organization}).then(()=>{this.mounted&&this.setState(t=>{let n=t.groups;return{groups:(void 0===n?[]:n).filter(t=>t.name!==e)}})}),this.handleEdit=e=>Object(u.g)(e).then(()=>{this.mounted&&this.setState(t=>{let n=t.groups;return{groups:(void 0===n?[]:n).map(t=>t.id===e.id?R({},t,e):t)}})})}componentDidMount(){this.mounted=!0,this.fetchGroups()}componentWillUnmount(){this.mounted=!1}get organization(){return this.props.organization&&this.props.organization.key}render(){const e=this.state,t=e.groups,n=e.loading,a=e.paging,i=e.query,u=void 0===this.props.organization&&"anyone".includes(i.toLowerCase());return s.createElement(s.Fragment,null,s.createElement(m.a,{suggestions:"user_groups"}),s.createElement(r.a,{defer:!1,title:Object(c.translate)("user_groups.page")}),s.createElement("div",{className:"page page-limited",id:"groups-page"},s.createElement(C,{loading:n,onCreate:this.handleCreate}),s.createElement(l.a,{className:"big-spacer-bottom",id:"groups-search",minLength:2,onChange:this.search,placeholder:Object(c.translate)("search.search_by_name"),value:i}),void 0!==t&&s.createElement(B,{groups:t,onDelete:this.handleDelete,onEdit:this.handleEdit,onEditMembers:this.refresh,organization:this.organization,showAnyone:u}),void 0!==t&&void 0!==a&&s.createElement("div",{id:"groups-list-footer"},s.createElement(o.a,{count:u?t.length+1:t.length,loadMore:this.fetchMoreGroups,ready:!n,total:u?a.total+1:a.total}))))}}},330:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var s=n(2),r=n(355);function a(e){let t=e.suggestions;return s.createElement(r.a.Consumer,null,e=>{let n=e.addSuggestions,r=e.removeSuggestions;return s.createElement(o,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}class o extends s.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},351:function(e,t,n){var s=n(410),r=1/0,a=1.7976931348623157e308;e.exports=function(e){return e?(e=s(e))===r||e===-r?(e<0?-1:1)*a:e==e?e:0:0===e?e:0}},377:function(e,t,n){"use strict";var s,r=this&&this.__extends||(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(309),o=n(2),i=n(28),l=n(329),c=n(378),u=n(310),m=n(322),d=n(375),p=n(314),h=n(5);t.default=function(e){var t=e.children,n=e.className,s=e.overlayPlacement,r=e.small,i=e.toggleClassName;return o.createElement(m.default,{className:n,onOpen:e.onOpen,overlay:o.createElement("ul",{className:"menu"},t),overlayPlacement:s},o.createElement(u.Button,{className:a("dropdown-toggle",i,{"button-small":r})},o.createElement(c.default,{size:r?12:14}),o.createElement(l.default,{className:"little-spacer-left"})))};var g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return r(t,e),t.prototype.render=function(){var e=this,t=a(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?o.createElement("li",null,o.createElement("a",{className:t,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?o.createElement("li",null,o.createElement(i.Link,{className:t,id:this.props.id,to:this.props.to},this.props.children)):this.props.copyValue?o.createElement(d.ClipboardBase,null,function(n){var s=n.setCopyButton,r=n.copySuccess;return o.createElement(p.default,{overlay:h.translate("copied_action"),visible:r},o.createElement("li",{"data-clipboard-text":e.props.copyValue,ref:s},o.createElement("a",{className:t,href:"#",id:e.props.id,onClick:e.handleClick},e.props.children)))}):o.createElement("li",null,o.createElement("a",{className:t,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(o.PureComponent);t.ActionsDropdownItem=g,t.ActionsDropdownDivider=function(){return o.createElement("li",{className:"divider"})}},378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),r=n(313);t.default=function(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,o=e.size,i=void 0===o?14:o;return s.createElement(r.default,{className:t,size:i,viewBox:"0 0 14 14"},s.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},s.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:a}})))}},380:function(e,t,n){var s=n(351);e.exports=function(e){var t=s(e),n=t%1;return t==t?n?t-n:t:0}},403:function(e,t){e.exports=function(e,t,n,s){for(var r=e.length,a=n+(s?1:-1);s?a--:++a<r;)if(t(e[a],a,e))return a;return-1}},473:function(e,t,n){var s=n(339),r=n(510),a=n(509);e.exports=function(e){return function(t,n,o){var i=Object(t);if(!r(t)){var l=s(n,3);t=a(t),n=function(e){return l(i[e],e,i)}}var c=e(t,n,o);return c>-1?i[l?t[c]:c]:void 0}}},493:function(e,t,n){var s=n(473)(n(494));e.exports=s},494:function(e,t,n){var s=n(403),r=n(339),a=n(380),o=Math.max;e.exports=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var l=null==n?0:a(n);return l<0&&(l=o(i+l,0)),s(e,r(t,3),l)}},577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),r=n(313);t.default=function(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,o=e.size;return s.createElement(r.default,{className:t,size:o},s.createElement("path",{d:"M2.968 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM2.968 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177z",style:{fill:a}}))}},677:function(e,t,n){"use strict";n.d(t,"f",function(){return a}),n.d(t,"d",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"c",function(){return m});var s=n(8),r=n(320);function a(e){return Object(s.getJSON)("/api/user_groups/search",e).catch(r.a)}function o(e){return Object(s.getJSON)("/api/user_groups/users",e).catch(r.a)}function i(e){return Object(s.post)("/api/user_groups/add_user",e).catch(r.a)}function l(e){return Object(s.post)("/api/user_groups/remove_user",e).catch(r.a)}function c(e){return Object(s.postJSON)("/api/user_groups/create",e).then(e=>e.group,r.a)}function u(e){return Object(s.post)("/api/user_groups/update",e).catch(r.a)}function m(e){return Object(s.post)("/api/user_groups/delete",e).catch(r.a)}}}]);
//# sourceMappingURL=18.m.43bdeaad.chunk.js.map