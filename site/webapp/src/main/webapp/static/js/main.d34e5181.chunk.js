(this["webpackJsonphee-react-csr"]=this["webpackJsonphee-react-csr"]||[]).push([[0],{137:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(49),i=n.n(l),s=n(87),c=n(9),o=n(55),m=n(50),u=n.n(m),h=n(12),p=n(90),E=n(4);function g(e){var t=e.component.getModels().document,n=t&&e.page.getContent(t),a=r.a.useContext(h.BrPageContext);if(!n||!a)return null;var l,i=n.getData(),s=i.title,c=i.summary,o=i.relatedNews,m=[],u=Object(p.a)(o);try{for(u.s();!(l=u.n()).done;){var g=l.value,d=g&&e.page.getContent(g);if(d){var f=d.getData(),v=f.title,b=f._links,w=d.getUrl();"internal"===(null===b||void 0===b?void 0:b.site.type)&&(w=(null===b||void 0===b?void 0:b.site).href),m.push(r.a.createElement(E.d.Item,{href:w,key:w},v))}}}catch(y){u.e(y)}finally{u.f()}return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.j,null,r.a.createElement("h2",null,s),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c.value}})),m.length>0&&r.a.createElement(E.d,null,r.a.createElement("h3",null,"Related Articles"),m))}function d(e){var t=e.component.getModels().user,n=r.a.useContext(h.BrPageContext);return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Azure AD User Profile"),r.a.createElement(E.l,{noBorder:!0},r.a.createElement(E.l.Row,null,r.a.createElement(E.l.Key,null,"Name"),r.a.createElement(E.l.Value,null,t.displayName)),r.a.createElement(E.l.Row,null,r.a.createElement(E.l.Key,null,"Username"),r.a.createElement(E.l.Value,null,t.username)),r.a.createElement(E.l.Row,null,r.a.createElement(E.l.Key,null,"Job Title"),r.a.createElement(E.l.Value,null,t.jobTitle)),r.a.createElement(E.l.Row,null,r.a.createElement(E.l.Key,null,"Groups"),r.a.createElement(E.l.Value,null,t.groups.map((function(e,t){return r.a.createElement(E.a,{key:t},e)})))))):n&&n.isPreview()?r.a.createElement(E.m,{label:"Azure AD User Profile"},r.a.createElement("p",null,"This component cannot be previewed in Channel Manager as it needs to get user profile from Azure AD which in turn requires an Azure AD/Office 365 user to be logged in.")):null}function f(){return r.a.createElement(E.e,null,r.a.createElement(E.e.List,{columns:!0},r.a.createElement(E.e.ListItem,{href:"https://www.nhs.uk/nhs-sites/"},"NHS sites"),r.a.createElement(E.e.ListItem,{href:"https://www.nhs.uk/about-us/"},"About us"),r.a.createElement(E.e.ListItem,{href:"https://www.nhs.uk/contact-us/"},"Contact us"),r.a.createElement(E.e.ListItem,{href:"https://www.nhs.uk/personalisation/login.aspx"},"Profile editor login"),r.a.createElement(E.e.ListItem,{href:"https://www.nhs.uk/about-us/sitemap/"},"Sitemap"),r.a.createElement(E.e.ListItem,{href:"https://www.nhs.uk/accessibility/"},"Accessibility"),r.a.createElement(E.e.ListItem,{href:"https://www.nhs.uk/our-policies/"},"Our policies"),r.a.createElement(E.e.ListItem,{href:"https://www.nhs.uk/our-policies/cookies-policy/"},"Cookies")),r.a.createElement(E.e.Copyright,null,"\xa9 Crown copyright"))}function v(e){var t=e.component.getModels().heroBannerDocument,n=t&&e.page.getContent(t);if(!n)return null;var a=n.getData(),l=a.heading,i=a.summaryText;return r.a.createElement(E.h,null,r.a.createElement(E.h.Heading,null,l),r.a.createElement(E.h.Text,null,i))}function b(e){var t=e.item;return t._links.site?r.a.createElement(E.g.NavItem,{href:t._links.site.href},t.name):r.a.createElement(E.g.NavItem,{disabled:!0},t.name)}function w(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),"\xa0",r.a.createElement(E.f,{action:"/site/logout",method:"post"},"\xa0\xa0",r.a.createElement(E.b,{secondary:!0},"Logout")))}function y(){var e=r.a.useContext(h.BrComponentContext),t=r.a.useContext(h.BrPageContext);if(!e||!t)return null;var n=t.toJSON()._links.site.href,a=!1;n.endsWith("/user-home-page")&&(a=!0);var l="south-east,west-midlands,greater-london,north-east,north-west,south-west-england,east-midlands,east-england,yorkshire-and-humber".split(","),i="/site";l.forEach((function(e){-1===n.indexOf("/site/"+e)&&-1===n.indexOf("/site/_cmsinternal/"+e)||(i="/site/"+e)}));var s=e.getModels().menu,c=e.getModels().headerTheme;return r.a.createElement(E.g,{orgName:c.orgName,orgSplit:c.orgSplit,orgDescriptor:c.orgDescriptor,white:c.whiteHeaderBg},r.a.createElement(E.g.Container,null,r.a.createElement(E.g.Logo,{href:i}),r.a.createElement(E.g.Content,null,r.a.createElement(E.g.MenuToggle,null),r.a.createElement(E.g.Search,{action:"/site/search"}),a&&r.a.createElement(w,null))),r.a.createElement(E.g.Nav,{className:t.isPreview()?"has-edit-button":""},r.a.createElement(h.BrManageMenuButton,{menu:s}),s.siteMenuItems.map((function(e,t){return r.a.createElement(b,{key:t,item:e})}))))}function k(e){var t=e.component.getModels().sharepointSiteFiles,n=r.a.useContext(h.BrPageContext);return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Sharepoint Documents"),Object.keys(t).map((function(e,n){return r.a.createElement(E.d,{key:n},r.a.createElement(E.l.Row,null,r.a.createElement("b",null,e)),t[e].map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(E.d.Item,{href:e.url,key:t,target:"_blank"},e.title),"\xa0\xa0\xa0\xa0\xa0\xa0[",e.fileType,"] [Last Modified By: ",e.modifiedBy,", Date: ",new Date(e.modifiedDate).toUTCString(),"]"))})))}))):n&&n.isPreview()?r.a.createElement(E.m,{label:"Sharepoint Documents"},r.a.createElement("p",null,"This component cannot be previewed in Channel Manager as it needs to list files from Sharepoint which in turn requires an Azure AD/Office 365 user to be logged in.")):null}var C=n(85),N=n.n(C),B=n(166),x=n(170),O=n(167),j=n(168),D=n(169),P=n(162),A=n(163),I=n(164),L=n(165),S=(n(137),n(51)),_=n.n(S),M=n(83),R=n(84),T=n(91),F=n(89),U=n(160),z=function(e){Object(T.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t,n){return t.preventDefault(),e.props.refine(n)},e}return Object(R.a)(n,[{key:"render",value:function(){var e,t,n=this,a=this.props,l=a.currentRefinement,i=a.nbPages,s=a.createURL;if(l>1){var c=l-1;e=r.a.createElement(E.i.Link,{previous:!0,href:s(c),onClick:function(e){return n.onChange(e,c)}},"Page ",c," of ",i)}if(l<i){var o=l+1;t=r.a.createElement(E.i.Link,{next:!0,href:s(o),onClick:function(e){return n.onChange(e,o)}},"Page ",o," of ",i)}return r.a.createElement("div",{style:{minWidth:400}},r.a.createElement(E.i,null,e,t))}}]),n}(a.Component),H=Object(U.a)(z),K=n(52),W=n.n(K);function q(e){var t=e.component.getParameters().indexName||"",n=e.component.getParameters().appId||"",r=e.component.getParameters().apiKey||"";if(!t||!r||!n)return console.log("Search component is not configured correctly!"),null;var l=N()(n,r);return a.createElement("div",{className:"nhsuk-width-container"},a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css",integrity:"sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8=",crossOrigin:"anonymous"}),a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css",integrity:"sha256-HB49n/BZjuqiCtQQf49OdZn63XuKFaxcIHWf0HNKte8=",crossOrigin:"anonymous"}),a.createElement(B.a,{searchClient:l,indexName:t},a.createElement("div",{className:"left-panel"},a.createElement("div",{className:"custom-refinement-section"},a.createElement("div",{className:"custom-refinement-list"},a.createElement("h5",null,"Category"),a.createElement(V,{attribute:"category"})),a.createElement("div",{className:"custom-refinement-list"},a.createElement("h5",null,"Region"),a.createElement(V,{attribute:"region"})),a.createElement("div",{className:"custom-refinement-list"},a.createElement("h5",null,"Speciality"),a.createElement(V,{attribute:"speciality"}))),a.createElement(x.a,{hitsPerPage:5})),a.createElement("div",{className:"right-panel"},a.createElement("div",{className:"custom-search"},a.createElement(O.a,{submit:a.createElement(E.k,null),reset:a.createElement(E.c,null)})),a.createElement(G,{defaultRefinement:"articles",items:[{value:"articles",label:"Relevance"},{value:"articles_date_desc",label:"Most recently modified"}]}),a.createElement(Z,null),a.createElement(J,null),a.createElement(H,null))))}var J=Object(P.a)((function(e){var t=e.hits;return a.createElement("div",null,a.createElement("ul",{className:"nhsuk-list nhsuk-list--border"},t.map((function(e){return a.createElement("div",{key:e.objectID},a.createElement("li",null,a.createElement("h2",{className:"nhsuk-u-margin-bottom-1",style:{fontWeight:400,fontSize:"19px"}},a.createElement("a",{className:"app-search-results-item",href:"/site/".concat(e.path)},a.createElement(j.a,{attribute:"title",hit:e}))),a.createElement("p",{className:"nhsuk-body-s nhsuk-u-margin-top-1"},a.createElement(j.a,{attribute:"introduction",hit:e}),a.createElement(D.a,{hit:e,attribute:"summary"}),";",a.createElement("strong",null,a.createElement(j.a,{attribute:"category",hit:e})))))}))))})),V=Object(A.a)((function(e){var t=e.items,n=e.refine;return a.createElement(_.a,null,t.map((function(e){return a.createElement(_.a.Box,{key:e.label,onClick:function(){return n(e.value)}},e.label," (",e.count,")")})))})),Z=Object(I.a)((function(e){var t=e.nbHits;return a.createElement("p",{className:"nhsuk-body-s nhsuk-u-margin-bottom-3",style:{paddingLeft:"65%",paddingBottom:"20px"}},"Found ",a.createElement("b",null,t)," matching results.")})),G=Object(L.a)((function(e){var t=e.items,n=e.refine,r=e.createURL;return a.createElement(W.a,{label:"Sort by",onChange:function(e){e.preventDefault(),n(e.target.value)},style:{fontSize:"16px"}},t.map((function(e){return a.createElement(W.a.Option,{key:e.value,value:e.value,href:r(e.value)},e.label)})))}));u.a.interceptors.request.use((function(e){return Object(o.a)(Object(o.a)({},e),{},{withCredentials:!0})})),i.a.render(r.a.createElement(s.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/(.*)",component:function(e){var t="south-east,west-midlands,greater-london,north-east,north-west,south-west-england,east-midlands,east-england,yorkshire-and-humber".split(","),n="http://localhost:8080/site",a="http://localhost:8080/site/_cmsinternal",l=e.location.pathname;t.forEach((function(t){e.location.pathname.startsWith("/site/"+t)&&(n+="/"+t,l=e.location.pathname.replace("/site/"+t,"")),e.location.pathname.startsWith("/site/_cmsinternal/"+t)&&(a+="/"+t,l=e.location.pathname.replace("/site/_cmsinternal/"+t,"/site/_cmsinternal"))})),l.startsWith("/site")&&!l.startsWith("/site/_cmsinternal")&&(l=e.location.pathname.substring("/site".length));var i={httpClient:u.a,options:{live:{cmsBaseUrl:n,spaBaseUrl:""},preview:{cmsBaseUrl:a,spaBaseUrl:"/site/_cmsinternal?bloomreach-preview=true"}},request:{path:"".concat(l).concat(e.location.search)}},s={Article:g,"AzureAD Profile":d,"Hero Banner":v,"Sharepoint Files":k,Search:q};return r.a.createElement(h.BrPage,{configuration:i,mapping:s},r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark sticky-top bg-dark",role:"navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement(h.BrComponent,{path:"menu"},r.a.createElement(y,null)))))),r.a.createElement(h.BrComponent,{path:"hero"}),r.a.createElement("div",{className:"nhsuk-width-container"},r.a.createElement("main",{className:"nhsuk-main-wrapper",id:"maincontent"},r.a.createElement(h.BrComponent,{path:"main"}))),r.a.createElement(f,null))}}),r.a.createElement(c.a,{to:"/"}))),document.getElementById("root"))},93:function(e,t,n){e.exports=n(159)}},[[93,1,2]]]);
//# sourceMappingURL=main.d34e5181.chunk.js.map