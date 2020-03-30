(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{1062:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=n(313);t.default=function(e){var t=e.className,n=e.fill,o=e.size;return a.createElement(r.ThemedIcon,{className:t,size:o||64,viewBox:"0 0 64 64"},function(e){var t=e.theme;return a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:n||t.colors.darkBlue,strokeWidth:"2"},a.createElement("path",{d:"M32 9v5M11.5195 43.0898l7.48-4.091m33.481-18.0994l-7.48 4.1m-33.481-4.1l7.48 4.1M45 38.999l7.48 4.101M32 50v5m15-23c0 8.284-6.715 15-15 15s-15-6.716-15-15c0-8.285 6.715-15 15-15s15 6.715 15 15z"}),a.createElement("path",{d:"M40 38c0 1.656-3.58 2-8 2s-8-.344-8-2m16 0v-3l-5-3-1-1m-10 7v-3l5-3 1-1m6-4c0 2.2-1.8 4-4 4s-4-1.8-4-4v-1c0-2.2 1.8-4 4-4s4 1.8 4 4v1zm-.0098-21.71c7.18 1.069 13.439 4.96 17.609 10.51m-17.609 42.91c7.18-1.07 13.439-4.96 17.609-10.51M6.6299 41.25c-1.06-2.88-1.63-6-1.63-9.25s.57-6.37 1.63-9.25m3.7705-6.9502c4.17-5.55 10.43-9.44 17.609-10.51m-17.609 42.9104c4.17 5.55 10.43 9.439 17.609 10.51M57.3701 22.75c1.06 2.88 1.63 6 1.63 9.25s-.57 6.37-1.63 9.25"}),a.createElement("path",{d:"M36 5c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2M12 19c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2m51 0c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2M12 45c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2m51 0c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2M36 59c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2"}))})}},1200:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(310),o=n(326),s=n.n(o),c=n(737),l=n.n(c),i=n(1062),m=n.n(i),d=n(5),p=n(538),h=n(782),u=(n(628),n(324)),b=n.n(u),g=n(28),f=n(659),v=n(354),E=n(319);var O=Object(v.a)(class extends a.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{const e=this.props,t=e.onClick,n=e.organization,a=e.router;t(),a.push(Object(E.q)(n.key))}}render(){const e=this.props.organization;return a.createElement(r.ListButton,{className:"abs-width-300",onClick:this.handleClick},a.createElement("div",{className:"display-flex-center"},a.createElement(f.a,{className:"spacer-right",organization:e}),a.createElement("span",null,e.name)))}});function z(e){let t=e.onClick,n=e.organizations;if(0===n.length)return null;const r=b()(n,e=>e.name.toLocaleLowerCase()).slice(0,3);return a.createElement("div",null,a.createElement("ul",null,r.map(e=>a.createElement("li",{key:e.key},a.createElement(O,{onClick:t,organization:e})))),n.length>3&&a.createElement("div",{className:"big-spacer-top"},a.createElement("span",{className:"big-spacer-right"},Object(d.translateWithParameters)("x_of_y_shown",r.length,n.length)),a.createElement(g.Link,{className:"small",onClick:t,to:"/account/organizations"},Object(d.translate)("see_all"))))}function x(e){const t=e.onClose,n=e.onOpenProjectOnboarding,o=e.userOrganizations,c=Object(d.translate)("onboarding.header");return a.createElement(s.a,{contentLabel:c,onRequestClose:t,shouldCloseOnOverlayClick:!1,size:o.length>0?"medium":"small"},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,Object(d.translate)("onboarding.header")),a.createElement("p",{className:"spacer-top"},Object(d.translate)("onboarding.header.description"))),a.createElement("div",{className:"modal-body text-center display-flex-row huge-spacer-top huge-spacer-bottom"},a.createElement("div",{className:"flex-1"},a.createElement(l.a,{className:"big-spacer-bottom"}),a.createElement("h3",{className:"big-spacer-bottom"},Object(d.translate)("onboarding.analyze_your_code")),a.createElement(r.Button,{onClick:n},Object(d.translate)("onboarding.project.create"))),o.length>0&&a.createElement(a.Fragment,null,a.createElement("div",{className:"vertical-pipe-separator"},a.createElement("div",{className:"vertical-separator"})),a.createElement("div",{className:"flex-1"},a.createElement(m.a,{className:"big-spacer-bottom"}),a.createElement("h3",{className:"big-spacer-bottom"},Object(d.translate)("onboarding.browse_your_organizations")),a.createElement(z,{onClick:t,organizations:o})))),a.createElement("div",{className:"modal-foot text-right"},a.createElement(r.ResetButtonLink,{onClick:t},Object(d.translate)("not_now"))))}n.d(t,"OnboardingModal",function(){return x});t.default=Object(h.a)(Object(p.a)(x))},538:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(2),r=n(31),o=n.n(r),s=n(332),c=n(388),l=n(407);function i(e){class t extends a.Component{componentDidMount(){Object(s.b)(this.props.currentUser)||o()()}render(){return Object(s.b)(this.props.currentUser)?a.createElement(e,Object.assign({},this.props)):null}}return t.displayName=Object(c.a)(e,"whenLoggedIn"),Object(l.a)(t)}},628:function(e,t,n){var a=n(629);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(312)(a,r);a.locals&&(e.exports=a.locals)},629:function(e,t,n){(e.exports=n(311)(!1)).push([e.i,".onboarding-step{position:relative;padding-left:34px}.onboarding-step:not(.is-open):not(.is-finished){opacity:.4}.onboarding-step .boxed-group-actions{height:24px;line-height:24px}.onboarding-step hr{margin-left:-54px}.onboarding-step-number{position:absolute;top:15px;left:15px;width:24px;height:24px;line-height:24px;border-radius:24px;background-color:#b9b9b9;color:#fff;font-size:14px;text-align:center}.onboarding-step.is-open .onboarding-step-number{background-color:#236a97}.onboarding-step.is-finished{cursor:pointer;outline:none}",""])},737:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=n(313);t.default=function(e){var t=e.className,n=e.fill,o=e.size;return a.createElement(r.ThemedIcon,{className:t,size:o||64,viewBox:"0 0 64 64"},function(e){var t=e.theme;return a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:n||t.colors.darkBlue,strokeWidth:"2"},a.createElement("path",{d:"M2 59h60V13H2zm0-46h60V5H2zm3-4h2m2 0h2m2 0h2m2 0h42"}),a.createElement("path",{d:"M59 34h-6l-2-4h-6l-2 5h-6l-2 2h-6l-2-4h-6l-2 5h-6l-2 4H5m1 14v-9m4 9v-6m4 6V43m4 13V45m4 11V42m4 14V39m4 17V41m4 15V46m4 10V40m4 16V44m4 12V37m4 19V38m4 18V43m4 13V39m-3-18h-2m-2 0h-2m-2 0h-2M9 29h14M9 33h7m17-12h8m-14 4h8m-8-4h4m-21 4h12v-4H10z"}),a.createElement("path",{d:"M58 31V17H6v22"}))})}},782:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(2),r=n(316),o=n(691),s=n(318),c=n(388);function l(e){class t extends a.Component{componentDidMount(){this.props.fetchMyOrganizations()}render(){return a.createElement(e,Object.assign({},this.props))}}t.displayName=Object(c.a)(e,"withUserOrganizations");const n={fetchMyOrganizations:o.b};return Object(r.connect)(function(e){return{userOrganizations:Object(s.getMyOrganizations)(e)}},n)(t)}}}]);
//# sourceMappingURL=331.m.fb22fc48.chunk.js.map