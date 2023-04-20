"use strict";(self.webpackChunkkevingrondin=self.webpackChunkkevingrondin||[]).push([[2529],{9058:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),l=a(4334),r=a(7961),i=a(7524),o=a(9960),s=a(5999),c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c.sidebarItem},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(3102);function d(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return n.createElement(u.Zo,{component:d,props:e})}function h(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?n.createElement(g,{sidebar:t}):n.createElement(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:a,children:i,...o}=e,s=t&&t.items.length>0;return n.createElement(r.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(h,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},390:function(e,t,a){a.d(t,{Z:function(){return R}});var n=a(7294),l=a(4334),r=a(9460),i=a(4996);function o(e){let{children:t,className:a}=e;const{frontMatter:l,assets:o}=(0,r.C)(),{withBaseUrl:s}=(0,i.C)(),c=o.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"image",content:s(c,{absolute:!0})}),t)}var s=a(9960),c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.C)(),{permalink:o,title:m}=a,u=i?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(c.title,t),itemProp:"headline"},i?m:n.createElement(s.Z,{itemProp:"url",to:o},m))}var u=a(5999),d=a(8824),g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function f(){return n.createElement(n.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:i,formattedDate:o,readingTime:s}=a;return n.createElement("div",{className:(0,l.Z)(g.container,"margin-vert--md",t)},n.createElement(p,{date:i,formattedDate:o}),void 0!==s&&n.createElement(n.Fragment,null,n.createElement(f,null),n.createElement(h,{readingTime:s})))}function b(e){return e.href?n.createElement(s.Z,e):n.createElement(n.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:i,url:o,imageURL:s,email:c}=t,m=o||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},s&&n.createElement(b,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:s,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(b,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),i&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}var N={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function _(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",o?N.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!o&&"col col--6",o?N.imageOnlyAuthorCol:N.authorCol),key:t},n.createElement(v,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function P(){return n.createElement("header",null,n.createElement(m,null),n.createElement(E,null),n.createElement(_,null))}var Z=a(8780),k=a(9588);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.C)();return n.createElement("div",{id:i?Z.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(k.Z,null,t))}var I=a(4881),T=a(1526),w=a(3117);function y(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function F(e){const{blogPostTitle:t,...a}=e;return n.createElement(s.Z,(0,w.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(y,null))}var L={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function B(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:i,editUrl:o,hasTruncateMarker:s}=e,c=!t&&s,m=a.length>0;return m||c||o?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&L.blogPostFooterDetailsFull)},m&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},n.createElement(T.Z,{tags:a})),t&&o&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(I.Z,{editUrl:o})),c&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},n.createElement(F,{blogPostTitle:i,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(o,{className:(0,l.Z)(i,a)},n.createElement(P,null),n.createElement(C,null,t),n.createElement(B,null))}},4881:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(5999),r=a(5281),i=a(3117),o=a(4334),s={iconEdit:"iconEdit_Z9Sw"};function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(4334),r=a(9960);function i(e){const{permalink:t,title:a,subLabel:i,isNext:o}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},3008:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(4334),r=a(9960),i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o(e){let{permalink:t,label:a,count:o}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i.tag,o?i.tagWithCount:i.tagRegular)},a,o&&n.createElement("span",null,o))}},1526:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(4334),r=a(5999),i=a(3008),o={tags:"tags_jXut",tag:"tag_QGVx"};function s(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o.tag},n.createElement(i.Z,{label:t,permalink:a}))}))))}},9460:function(e,t,a){a.d(t,{C:function(){return o},n:function(){return i}});var n=a(7294),l=a(902);const r=n.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:i},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},8824:function(e,t,a){a.d(t,{c:function(){return c}});var n=a(7294),l=a(2263);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);