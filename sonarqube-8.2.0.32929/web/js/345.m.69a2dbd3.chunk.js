(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{1807:function(e,t,n){"use strict";n.r(t);var s=n(2),o=n(323),i=n(315),p=n.n(i),r=n(5),a=n(358),l=n(349),c=n(320),u=n(1196),d=n(1197),h=n(607),m=n(663),g=n(600),b=n(328),f=n(309),y=n(852),x=n(805),L=n(870),A=n(721);function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){k(e,t,n[t])})}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class v extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.rootNodeRef=s.createRef(),this.state={additionalLines:{},highlightedSymbols:[],loading:!1,openIssuesByLine:{},snippets:[]},this.expandBlock=(e,t)=>{const n=this.props,s=n.branchLike,o=n.snippetGroup.component.key,i=this.state.snippets.find(t=>t.index===e);if(!i)return Promise.reject();const p=A.a+A.c-1,r="up"===t?{from:Math.max(1,i.start-p),to:i.start-1}:{from:i.end+1,to:i.end+p};return Object(a.u)(P({key:o},r,Object(b.d)(s))).then(e=>e.reduce((e,t)=>(t.coverageStatus=Object(y.a)(t),e[t.line]=t,e),{})).then(n=>this.animateBlockExpansion(e,t,n))},this.expandComponent=()=>{const e=this.props,t=e.branchLike,n=e.snippetGroup.component.key;this.setState({loading:!0}),Object(a.u)(P({key:n},Object(b.d)(t))).then(e=>{this.mounted&&this.setState(t=>{return{additionalLines:P({},t.additionalLines,e),loading:!1,snippets:[{start:0,end:e[e.length-1].line,index:-1}]}})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleLinePopupToggle=e=>{this.props.onLinePopupToggle(P({},e,{component:this.props.snippetGroup.component.key}))},this.handleOpenIssues=e=>{this.setState(t=>({openIssuesByLine:P({},t.openIssuesByLine,{[e.line]:!0})}))},this.handleCloseIssues=e=>{this.setState(t=>({openIssuesByLine:P({},t.openIssuesByLine,{[e.line]:!1})}))},this.handleSymbolClick=e=>{this.setState({highlightedSymbols:e})},this.loadDuplications=e=>{this.props.loadDuplications(this.props.snippetGroup.component.key,e)},this.renderDuplicationPopup=(e,t)=>this.props.renderDuplicationPopup(this.props.snippetGroup.component,e,t)}componentDidMount(){this.mounted=!0,this.createSnippetsFromProps()}componentWillUnmount(){this.mounted=!1}createSnippetsFromProps(){const e=Object(A.d)({locations:this.props.snippetGroup.locations,issue:this.props.issue,addIssueLocation:this.props.issue.secondaryLocations.length>0});this.setState({snippets:e})}getNodes(e){const t=this.rootNodeRef.current;if(!t)return;const n=t.querySelector("#snippet-wrapper-".concat(e));if(!n)return;const s=n.querySelector(".snippet");if(!s)return;const o=s.firstChild;return o?{wrapper:s,table:o}:void 0}cleanDom(e){const t=this.getNodes(e);if(!t)return;const n=t.wrapper;t.table.style.marginTop="",n.style.maxHeight=""}setMaxHeight(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this.getNodes(e);if(!s)return;const o=s.wrapper,i=s.table,p=void 0!==t?t:i.getBoundingClientRect().height;if(n){const e=o.getBoundingClientRect().height;i.style.transition="none",i.style.marginTop="".concat(e-p,"px"),setTimeout(()=>{i.style.transition="",i.style.marginTop="0px",o.style.maxHeight="".concat(p+20,"px")},0)}else o.style.maxHeight="".concat(p+20,"px")}animateBlockExpansion(e,t,n){if(this.mounted){const s=this.state.snippets,o=Object(A.e)({direction:t,snippetIndex:e,snippets:s}),i=o.filter(e=>e.toDelete);return i.forEach(e=>this.setMaxHeight(e.index)),this.setMaxHeight(e),new Promise(s=>{this.setState(e=>{let t=e.additionalLines,s=e.snippets;return{additionalLines:P({},t,n),snippets:s}},()=>{i.forEach(e=>{this.setMaxHeight(e.index,0)}),this.setMaxHeight(e,void 0,"up"===t),setTimeout(()=>{this.setState({snippets:o.filter(e=>!e.toDelete)},s),this.cleanDom(e)},200)})})}return Promise.resolve()}renderSnippet(e){let t=e.index,n=e.issuesByLine,o=e.last,i=e.locationsByLine,p=e.snippet;return s.createElement(L.a,{branchLike:this.props.branchLike,component:this.props.snippetGroup.component,expandBlock:this.expandBlock,handleCloseIssues:this.handleCloseIssues,handleLinePopupToggle:this.handleLinePopupToggle,handleOpenIssues:this.handleOpenIssues,handleSymbolClick:this.handleSymbolClick,highlightedLocationMessage:this.props.highlightedLocationMessage,highlightedSymbols:this.state.highlightedSymbols,index:t,issue:this.props.issue,issuePopup:this.props.issuePopup,issuesByLine:n,last:o,linePopup:this.props.linePopup,loadDuplications:this.loadDuplications,locations:this.props.locations,locationsByLine:i,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onLocationSelect:this.props.onLocationSelect,openIssuesByLine:this.state.openIssuesByLine,renderDuplicationPopup:this.renderDuplicationPopup,scroll:this.props.scroll,snippet:p})}render(){const e=this.props,t=e.branchLike,n=e.duplications,o=e.issue,i=e.issuesByLine,p=e.last,r=e.snippetGroup,a=this.state,l=a.additionalLines,c=a.loading,u=a.snippets,d=Object(h.d)([o]),m=1===u.length&&r.component.measures&&u[0].end-u[0].start===parseInt(r.component.measures.lines||"",10),g=Object(A.h)(u,P({},r.sources,l));return s.createElement("div",{className:f("component-source-container",{"source-duplications-expanded":n&&n.length>0}),ref:this.rootNodeRef},s.createElement(x.a,{branchLike:t,expandable:!m,loading:c,onExpand:this.expandComponent,sourceViewerFile:r.component}),g.map((e,t)=>s.createElement("div",{id:"snippet-wrapper-".concat(u[t].index),key:u[t].index},this.renderSnippet({snippet:e,index:u[t].index,issuesByLine:p?i:{},locationsByLine:p&&t===u.length-1?d:{},last:p&&t===u.length-1}))))}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return S});class S extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={components:{},duplicationsByLine:{},loading:!0,notAccessible:!1},this.fetchDuplications=(e,t)=>{Object(a.q)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){O(e,t,n[t])})}return e}({key:e},Object(b.d)(this.props.branchLike))).then(n=>{this.mounted&&this.setState(s=>({duplicatedFiles:n.files,duplications:n.duplications,duplicationsByLine:Object(h.a)(n.duplications),linePopup:1===n.duplications.length?{component:e,index:0,line:t.line,name:"duplications"}:s.linePopup}))},()=>{})},this.handleIssuePopupToggle=(e,t,n)=>{this.setState(s=>{const o=s.issuePopup&&s.issuePopup.name===t&&s.issuePopup.issue===e;return!1===n||o?!0!==n&&o?{issuePopup:void 0}:null:{issuePopup:{issue:e,name:t}}})},this.handleLinePopupToggle=e=>{let t=e.component,n=e.index,s=e.line,o=e.name,i=e.open;this.setState(e=>{const p=void 0!==e.linePopup&&e.linePopup.line===s&&e.linePopup.name===o&&e.linePopup.component===t&&e.linePopup.index===n;return!1===i||p?!0!==i&&p?{linePopup:void 0}:null:{linePopup:{component:t,index:n,line:s,name:o}}})},this.handleCloseLinePopup=()=>{this.setState({linePopup:void 0})},this.renderDuplicationPopup=(e,t,n)=>{const o=this.state,i=o.duplicatedFiles,p=o.duplications;if(!e||!i)return null;const r=Object(d.b)(p,t);return s.createElement(g.a.Consumer,null,t=>{let o=t.openComponent;return s.createElement(u.a,{blocks:Object(d.a)(r,n),branchLike:this.props.branchLike,duplicatedFiles:i,inRemovedComponent:Object(d.c)(r),onClose:this.handleCloseLinePopup,openComponent:o,sourceViewerFile:e})})}}componentDidMount(){this.mounted=!0,this.fetchIssueFlowSnippets(this.props.issue.key)}componentWillReceiveProps(e){e.issue.key!==this.props.issue.key&&this.fetchIssueFlowSnippets(e.issue.key)}componentWillUnmount(){this.mounted=!1}fetchIssueFlowSnippets(e){this.setState({loading:!0}),Object(l.h)(e).then(e=>{this.mounted&&(this.setState({components:e,issuePopup:void 0,linePopup:void 0,loading:!1}),this.props.onLoaded&&this.props.onLoaded())},e=>{403!==e.status&&Object(c.a)(e),this.mounted&&this.setState({loading:!1,notAccessible:403===e.status})})}render(){const e=this.state,t=e.loading,n=e.notAccessible;if(t)return s.createElement("div",null,s.createElement(p.a,null));if(n)return s.createElement(o.Alert,{className:"spacer-top",variant:"warning"},Object(r.translate)("code_viewer.no_source_code_displayed_due_to_security"));const i=this.state,a=i.components,l=i.duplications,c=i.duplicationsByLine,u=i.linePopup,d=Object(h.b)(this.props.issues),g=Object(A.f)(this.props.locations,a);return s.createElement("div",null,g.map((e,t)=>{let n={};return u&&e.component.key===u.component&&(n={duplications:l,duplicationsByLine:c,linePopup:{index:u.index,line:u.line,name:u.name}}),s.createElement(m.a.Provider,{key:"".concat(this.props.issue.key,"-").concat(this.props.selectedFlowIndex||0,"-").concat(t),value:{branchLike:this.props.branchLike,file:e.component}},s.createElement(v,Object.assign({branchLike:this.props.branchLike,highlightedLocationMessage:this.props.highlightedLocationMessage,issue:this.props.issue,issuePopup:this.state.issuePopup,issuesByLine:d[e.component.key]||{},last:t===g.length-1,loadDuplications:this.fetchDuplications,locations:e.locations||[],onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.handleIssuePopupToggle,onLinePopupToggle:this.handleLinePopupToggle,onLocationSelect:this.props.onLocationSelect,renderDuplicationPopup:this.renderDuplicationPopup,scroll:this.props.scroll,snippetGroup:e},n)))}))}}},721:function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],s=!0,o=!1,i=void 0;try{for(var p,r=e[Symbol.iterator]();!(s=(p=r.next()).done)&&(n.push(p.value),!t||n.length!==t);s=!0);}catch(e){o=!0,i=e}finally{try{s||null==r.return||r.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"c",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"h",function(){return h}),n.d(t,"f",function(){return m}),n.d(t,"e",function(){return g}),n.d(t,"g",function(){return b});const i=5,p=5,r=11,a=9,l=50;function c(e,t){let n=o(e,2),s=n[0],i=n[1],p=o(t,2),a=p[0];return!(s>p[1]+r||i<a-r)}function u(e){return{component:e.component,textRange:e.textRange||{endLine:0,endOffset:0,startLine:0,startOffset:0}}}function d(e){const t=e.locations,n=e.issue;return(e.addIssueLocation?[u(n),...t]:t).reduce((e,t,s)=>{const o=Math.max(1,t.textRange.startLine-i),r=function(e){const t=e.issue,n=e.locationEnd,s=t.textRange&&t.textRange.endLine||0;return s&&s!==n?n+p:n+a}({issue:n,locationEnd:t.textRange.endLine});let l;return e=e.filter(e=>{if(c([e.start,e.end],[o,r])){let t=!1;return l||(l=e,t=!0),l.start=Math.min(o,e.start,l.start),l.end=Math.max(r,e.end,l.end),t}return!0}),void 0===l&&e.push({start:o,end:r,index:s}),e},[])}function h(e,t){return e.map(e=>{const n=[];for(let s=e.start;s<=e.end;s++)t[s]&&n.push(t[s]);return n}).filter(e=>e.length>0)}function m(e,t){let n,o="";const i=[];return e.forEach((e,p)=>{e.component!==o&&(n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){s(e,t,n[t])})}return e}({},t[e.component]||function(e){return{component:{key:e,measures:{},path:"",project:"",projectName:"",q:"FIL",uuid:""},sources:[]}}(e.component),{locations:[]}),i.push(n),o=e.component),e.index=p,n.locations.push(e)}),i}function g(e){let t=e.direction,n=e.snippetIndex,s=e.snippets;const o=s.find(e=>e.index===n);if(!o)throw new Error("Snippet ".concat(n," not found"));return o.start=Math.max(0,o.start-("up"===t?l:0)),o.end+="down"===t?l:0,s.map(e=>e.index===n?o:(c([e.start,e.end],[o.start,o.end])&&(o.start=Math.min(e.start,o.start),o.end=Math.max(e.end,o.end),e.toDelete=!0),e))}function b(e,t){return e>=t[0].line&&e<=t[t.length-1].line}},870:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var s=n(309),o=n.n(s),i=n(2),p=n(711),r=n.n(p),a=n(5),l=n(426),c=n(837),u=n(607),d=n(662),h=n(806),m=(n(875),n(721));const g=32;class b extends i.PureComponent{constructor(e){super(e),this.doScroll=e=>{this.props.scroll&&this.props.scroll(e);const t=this.snippetNodeRef.current;t&&Object(l.scrollHorizontally)(e,{leftOffset:g,rightOffset:t.getBoundingClientRect().width-g,parent:t})},this.scrollToLastExpandedRow=()=>{if(this.props.scroll){const e=this.snippetNodeRef.current;if(!e)return;const t=e.querySelectorAll("tr"),n=t[t.length-1];this.props.scroll(n,100)}},this.expandBlock=e=>()=>this.props.expandBlock(this.props.index,e).then(()=>{"down"===e&&this.scrollToLastExpandedRow()}),this.snippetNodeRef=i.createRef()}renderLine(e){let t=e.displayDuplications,n=e.displaySCM,s=e.index,o=e.issuesForLine,p=e.issueLocations,r=e.line,a=e.snippet,l=e.symbols,u=e.verticalBuffer;const m=Object(d.b)(r,this.props.locations),g=this.props,b=g.duplications,f=g.duplicationsByLine,y=b?b.length:0,x=y&&f&&f[r.line]||[],L=o.some(e=>e.key===this.props.issue.key);return i.createElement(c.a,{branchLike:this.props.branchLike,displayAllIssues:!1,displayCoverage:!0,displayDuplications:t,displayIssues:!L||o.length>1,displayLocationMarkers:!0,displaySCM:n,duplications:x,duplicationsCount:y,highlighted:!1,highlightedLocationMessage:Object(h.b)(this.props.highlightedLocationMessage,m),highlightedSymbols:Object(h.a)(l,this.props.highlightedSymbols),issueLocations:p,issuePopup:this.props.issuePopup,issues:o,key:r.line,last:!1,line:r,linePopup:this.props.linePopup,loadDuplications:this.props.loadDuplications,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onIssueSelect:()=>{},onIssueUnselect:()=>{},onIssuesClose:this.props.handleCloseIssues,onIssuesOpen:this.props.handleOpenIssues,onLinePopupToggle:this.props.handleLinePopupToggle,onLocationSelect:this.props.onLocationSelect,onSymbolClick:this.props.handleSymbolClick,openIssues:this.props.openIssuesByLine[r.line],previousLine:s>0?a[s-1]:void 0,renderDuplicationPopup:this.props.renderDuplicationPopup,scroll:this.doScroll,secondaryIssueLocations:m,selectedIssue:Object(h.c)(this.props.issue.key,o),verticalBuffer:u})}render(){const e=this.props,t=e.component,n=e.displaySCM,s=e.issue,p=e.issuesByLine,l=void 0===p?{}:p,c=e.last,d=e.locationsByLine,h=e.openIssuesByLine,g=e.snippet,b=t.measures&&t.measures.lines&&parseInt(t.measures.lines,10),f=Object(u.e)(g),y=g[g.length-1].line,x=s.textRange?s.textRange.endLine:s.line,L=Math.max(...Object.keys(l).map(e=>parseInt(e,10)).filter(e=>Object(m.g)(e,g)&&(e===x||h[e]))),A=c?Math.max(0,m.b-(y-L)):0,P=g.some(e=>!!e.duplicated);return i.createElement("div",{className:"source-viewer-code snippet",ref:this.snippetNodeRef},i.createElement("div",null,g[0].line>1&&i.createElement("div",{className:"expand-block expand-block-above"},i.createElement("button",{"aria-label":Object(a.translate)("source_viewer.expand_above"),onClick:this.expandBlock("up"),type:"button"},i.createElement(r.a,null))),i.createElement("table",{className:o()("source-table",{"expand-up":g[0].line>1,"expand-down":!b||g[g.length-1].line<b})},i.createElement("tbody",null,g.map((e,t)=>this.renderLine({displayDuplications:P,displaySCM:n,index:t,issuesForLine:l[e.line]||[],issueLocations:d[e.line]||[],line:e,snippet:g,symbols:f[e.line],verticalBuffer:t===g.length-1?A:0})))),(!b||g[g.length-1].line<b)&&i.createElement("div",{className:"expand-block expand-block-below"},i.createElement("button",{"aria-label":Object(a.translate)("source_viewer.expand_below"),onClick:this.expandBlock("down"),type:"button"},i.createElement(r.a,null)))))}}},875:function(e,t,n){var s=n(876);"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(312)(s,o);s.locals&&(e.exports=s.locals)},876:function(e,t,n){(e.exports=n(311)(!1)).push([e.i,'.snippet{margin:8px;border:1px solid #cdcdcd;overflow-x:auto;overflow-y:hidden;transition:max-height .2s}.snippet>div{display:table;width:100%;position:relative;transition:margin-top .2s}.snippet table{width:100%}.expand-block{position:absolute;z-index:2;width:100%}.expand-block>button{background:transparent;box-sizing:border-box;color:#777;height:20px;width:100%;padding:2px;border:0;text-align:left;cursor:pointer}.expand-block>button:active,.expand-block>button:focus,.expand-block>button:hover{color:#236a97;outline:none}.expand-block-above{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAADdJREFUCB1dzMEKADAIAlBd1v9/bcc2YgRjHh8qq2qTxCQzsX4wM6y30RARF3sy0Es1SIK7Y64OpCES1W69JS4AAAAASUVORK5CYII=");top:0}.expand-block-below{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQQBjQEQVd5jwAAADhJREFUCNddyTEKADEMA8GVA/7/Z+PGwUp1cGTaYe/tv5lxrLWoKj6SiMzkjZDEG7JtANt0N+ccLrB/KZxXTt7fAAAAAElFTkSuQmCC");bottom:0}.source-table.expand-up{margin-top:20px}.source-table.expand-down{margin-bottom:20px}',""])}}]);
//# sourceMappingURL=345.m.69a2dbd3.chunk.js.map