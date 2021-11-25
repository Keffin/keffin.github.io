exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 4691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tags_query)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: external "/Users/kevinalemi/Desktop/Code/keffin.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(24072);
// EXTERNAL MODULE: ./node_modules/theme-ui/dist/theme-ui.esm.js
var theme_ui_esm = __webpack_require__(18733);
// EXTERNAL MODULE: ./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js + 17 modules
var theme_ui_components_esm = __webpack_require__(17631);
// EXTERNAL MODULE: ./node_modules/lodash.kebabcase/index.js
var lodash_kebabcase = __webpack_require__(35683);
var lodash_kebabcase_default = /*#__PURE__*/__webpack_require__.n(lodash_kebabcase);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(92031);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx + 8 modules
var layout = __webpack_require__(87356);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx
var use_minimal_blog_config = __webpack_require__(31889);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx
var seo = __webpack_require__(40901);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts
var replaceSlashes = __webpack_require__(41340);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/tags.tsx
/** @jsx jsx */const Tags=({list})=>{const{tagsPath,basePath}=(0,use_minimal_blog_config/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)(layout/* default */.Z,null,(0,theme_ui_esm/* jsx */.tZ)(seo/* default */.Z,{title:"Tags"}),(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Heading */.X6,{as:"h1",variant:"styles.h1"},"Tags"),(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Box */.xu,{mt:[4,5]},list.map(listItem=>(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Flex */.kC,{key:listItem.fieldValue,mb:[1,1,2],sx:{alignItems:`center`}},(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU,{as:gatsby_browser_entry.Link,sx:{variant:`links.listItem`,mr:2},to:(0,replaceSlashes/* default */.Z)(`/${basePath}/${tagsPath}/${lodash_kebabcase_default()(listItem.fieldValue)}`)},listItem.fieldValue," ",(0,theme_ui_esm/* jsx */.tZ)("span",{sx:{color:`secondary`}},"(",listItem.totalCount,")"))))));};/* harmony default export */ const tags = (Tags);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/tags.tsx
function MinimalBlogCoreTags(_ref){let props=(0,esm_extends/* default */.Z)({},_ref);const{data:{allPost}}=props;return/*#__PURE__*/index_js_.createElement(tags,Object.assign({list:allPost.group},props));}
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/tags-query.tsx
/* harmony default export */ const tags_query = (MinimalBlogCoreTags);const query="2973783538";

/***/ }),

/***/ 87356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: external "/Users/kevinalemi/Desktop/Code/keffin.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(24072);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(16657);
// EXTERNAL MODULE: ./node_modules/theme-ui/dist/theme-ui.esm.js
var theme_ui_esm = __webpack_require__(18733);
// EXTERNAL MODULE: ./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js + 17 modules
var theme_ui_components_esm = __webpack_require__(17631);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx
var seo = __webpack_require__(40901);
// EXTERNAL MODULE: ./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js
var theme_ui_color_modes_esm = __webpack_require__(86197);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx
var use_minimal_blog_config = __webpack_require__(31889);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx
/** @jsx jsx */// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/714b6209c5bd61b220370e8a7ad84c0b1407946a/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx
const ColorModeToggle=({isDark,toggle})=>(0,theme_ui_esm/* jsx */.tZ)("button",{onClick:toggle,type:"button","aria-label":isDark?`Activate Light Mode`:`Activate Dark Mode`,title:isDark?`Activate Light Mode`:`Activate Dark Mode`,sx:{opacity:0.65,position:`relative`,borderRadius:`5px`,width:`40px`,height:`25px`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`opacity 0.3s ease`,border:`none`,outline:`none`,background:`none`,cursor:`pointer`,padding:0,appearance:`none`,"&:hover, &:focus":{opacity:1}}},(0,theme_ui_esm/* jsx */.tZ)("div",{sx:{position:`relative`,width:`24px`,height:`24px`,borderRadius:`50%`,border:t=>isDark?`4px solid ${t.colors.toggleIcon}`:`none`,backgroundColor:isDark?`toggleIcon`:`transparent`,transform:isDark?`scale(0.55)`:`scale(1)`,transition:`all 0.45s ease`,overflow:isDark?`visible`:`hidden`,boxShadow:t=>isDark?`none`:`inset 8px -8px 0px 0px ${t.colors.toggleIcon}`,"&:before":{content:`""`,position:`absolute`,right:`-9px`,top:`-9px`,height:`24px`,width:`24px`,border:t=>isDark?`2px solid ${t.colors.toggleIcon}`:`none`,borderRadius:`50%`,transform:isDark?`translate(14px, -14px)`:`translate(0, 0)`,opacity:isDark?0:1,transition:`transform 0.45s ease`},"&:after":{content:`""`,width:`8px`,height:`8px`,borderRadius:`50%`,margin:`-4px 0 0 -4px`,position:`absolute`,top:`50%`,left:`50%`,boxShadow:t=>`0 -23px 0 ${t.colors.toggleIcon}, 0 23px 0 ${t.colors.toggleIcon}, 23px 0 0 ${t.colors.toggleIcon}, -23px 0 0 ${t.colors.toggleIcon}, 15px 15px 0 ${t.colors.toggleIcon}, -15px 15px 0 ${t.colors.toggleIcon}, 15px -15px 0 ${t.colors.toggleIcon}, -15px -15px 0 ${t.colors.toggleIcon}`,transform:isDark?`scale(1)`:`scale(0)`,transition:`all 0.35s ease`}}}));/* harmony default export */ const colormode_toggle = (ColorModeToggle);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(92031);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts
var replaceSlashes = __webpack_require__(41340);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx
/** @jsx jsx */function AsLink(props){return (0,theme_ui_esm/* jsx */.tZ)(gatsby_browser_entry.Link,Object.assign({activeClassName:"active"},props));}const Navigation=({nav})=>{const{basePath}=(0,use_minimal_blog_config/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment,null,nav&&nav.length>0&&(0,theme_ui_esm/* jsx */.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,`18px`],".active":{color:`heading`}}},nav.map(item=>(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU,{key:item.slug,as:AsLink,to:(0,replaceSlashes/* default */.Z)(`/${basePath}/${item.slug}`)},item.title))));};/* harmony default export */ const navigation = (Navigation);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx
var use_site_metadata = __webpack_require__(1567);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx
/** @jsx jsx */const HeaderTitle=()=>{const{siteTitle}=(0,use_site_metadata/* default */.Z)();const{basePath}=(0,use_minimal_blog_config/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)(gatsby_browser_entry.Link,{to:(0,replaceSlashes/* default */.Z)(`/${basePath}`),"aria-label":`${siteTitle} - Back to home`,sx:{color:`heading`,textDecoration:`none`}},(0,theme_ui_esm/* jsx */.tZ)("div",{sx:{my:0,fontWeight:`medium`,fontSize:[3,4]}},siteTitle));};/* harmony default export */ const header_title = (HeaderTitle);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx
/** @jsx jsx */const HeaderExternalLinks=()=>{const{externalLinks}=(0,use_minimal_blog_config/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment,null,externalLinks&&externalLinks.length>0&&(0,theme_ui_esm/* jsx */.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,`18px`]}},externalLinks.map(link=>(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU,{key:link.url,href:link.url},link.name))));};/* harmony default export */ const header_external_links = (HeaderExternalLinks);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx
/** @jsx jsx */const Header=()=>{const{navigation:nav}=(0,use_minimal_blog_config/* default */.Z)();const[colorMode,setColorMode]=(0,theme_ui_color_modes_esm/* useColorMode */.If)();const isDark=colorMode===`dark`;const toggleColorMode=e=>{e.preventDefault();setColorMode(isDark?`light`:`dark`);};return (0,theme_ui_esm/* jsx */.tZ)("header",{sx:{mb:[5,6]}},(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Flex */.kC,{sx:{alignItems:`center`,justifyContent:`space-between`}},(0,theme_ui_esm/* jsx */.tZ)(header_title,null),(0,theme_ui_esm/* jsx */.tZ)(colormode_toggle,{isDark:isDark,toggle:toggleColorMode})),(0,theme_ui_esm/* jsx */.tZ)("div",{sx:{boxSizing:`border-box`,display:`flex`,variant:`dividers.bottom`,alignItems:`center`,justifyContent:`space-between`,mt:3,color:`secondary`,a:{color:`secondary`,":hover":{color:`heading`}},flexFlow:`wrap`}},(0,theme_ui_esm/* jsx */.tZ)(navigation,{nav:nav}),(0,theme_ui_esm/* jsx */.tZ)(header_external_links,null)));};/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx
/** @jsx jsx */const Footer=()=>{const{siteTitle}=(0,use_site_metadata/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)("footer",{sx:{boxSizing:`border-box`,display:`flex`,justifyContent:`space-between`,mt:[6],color:`secondary`,a:{variant:`links.secondary`},flexDirection:[`column`,`column`,`row`],variant:`dividers.top`}},(0,theme_ui_esm/* jsx */.tZ)("div",null,"\xA9 ",new Date().getFullYear()," by ",siteTitle,". All rights reserved."),(0,theme_ui_esm/* jsx */.tZ)("div",null,(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"},"Theme"),` `,"by",` `,(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")));};/* harmony default export */ const footer = (Footer);
// EXTERNAL MODULE: ./node_modules/@theme-ui/color/dist/theme-ui-color.esm.js + 6 modules
var theme_ui_color_esm = __webpack_require__(29464);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts
const code={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:t=>`${t.space[3]} !important`}},"[data-name='live-preview']":{padding:t=>`calc(${t.space[2]} + 10px) !important`,backgroundColor:(0,theme_ui_color_esm/* tint */.nV)(`primary`,0.7)},".prism-code":{fontSize:[1,1,2],padding:`2rem 1rem 1rem 1rem`,webkitOverflowScrolling:`touch`,backgroundColor:`transparent`,minWidth:`100%`,mb:0,mt:0,overflow:`auto`,'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:`1rem`}},".token":{display:`inline-block`},"p > code, li > code":{bg:`gray.2`,color:`gray.8`,px:2,py:1,borderRadius:`2px`},".gatsby-highlight":{fontSize:[1,1,2],position:`relative`,webkitOverflowScrolling:`touch`,bg:`rgb(1, 22, 39)`,borderRadius:`2px`,mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:`100%`},"pre code":{float:`left`,minWidth:`100%`},'pre[class*="language-"]:before':{bg:`white`,borderRadius:`0 0 0.25rem 0.25rem`,color:`black`,fontSize:`12px`,letterSpacing:`0.025rem`,padding:`0.1rem 0.5rem`,position:`absolute`,left:`1rem`,textAlign:`right`,textTransform:`uppercase`,top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:`"js"`,background:`#f7df1e`,color:`black`},'pre[class~="language-jsx"]:before':{content:`"jsx"`,background:`#61dafb`,color:`black`},'pre[class~="language-ts"]:before':{content:`"ts"`,background:`#61dafb`,color:`black`},'pre[class~="language-tsx"]:before':{content:`"tsx"`,background:`#61dafb`,color:`black`},'pre[class~="language-html"]:before':{content:`"html"`,background:`#005a9c`,color:`white`},'pre[class~="language-xml"]:before':{content:`"xml"`,background:`#005a9c`,color:`white`},'pre[class~="language-svg"]:before':{content:`"svg"`,background:`#005a9c`,color:`white`},'pre[class~="language-graphql"]:before':{content:`"GraphQL"`,background:`#E10098`},'pre[class~="language-css"]:before':{content:`"css"`,background:`#ff9800`,color:`black`},'pre[class~="language-mdx"]:before':{content:`"mdx"`,background:`#f9ac00`,color:`black`},'pre[class~="language-php"]:before':{content:`"php"`,background:`#777bb3`,color:`black`},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:`"py"`,background:`#306998`,color:`white`},'pre[class~="language-text"]:before':{content:`"text"`},"pre[class~='language-shell']:before":{content:`'shell'`},"pre[class~='language-sh']:before":{content:`'sh'`},"pre[class~='language-bash']:before":{content:`'bash'`},"pre[class~='language-yaml']:before":{content:`'yaml'`,background:`#ffa8df`},"pre[class~='language-yml']:before":{content:`'yml'`,background:`#ffa8df`},"pre[class~='language-markdown']:before":{content:`'md'`},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:`'json'`,background:`linen`},"pre[class~='language-diff']:before":{content:`'diff'`,background:`#e6ffed`}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:`normal`,wordBreak:`normal`,overflowWrap:`normal`,lineHeight:1.5,tabSize:4,hyphens:`none`},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:`primary`},".gatsby-highlight pre::-webkit-scrollbar-track":{background:`rgb(1, 22, 39)`},".line-number-style":{display:`inline-block`,width:`3em`,userSelect:`none`,opacity:0.3,textAlign:`center`,position:`relative`},".code-title":{backgroundColor:(0,theme_ui_color_esm/* tint */.nV)(`primary`,0.7),color:`black`,fontSize:0,px:3,py:2,fontFamily:`monospace`,mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:`rgb(2, 55, 81)`,borderLeft:`4px solid rgb(2, 155, 206)`,".line-number-style":{width:`calc(3em - 4px)`,opacity:0.5,left:`-2px`}},".react-live-wrapper":{position:`relative`},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]}};/* harmony default export */ const styles_code = (code);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx
const _excluded=["children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,defineProperty/* default */.Z)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/** @jsx jsx */const skipNavStyles={border:0,clip:`react(0 0 0 0)`,height:`1px`,width:`1px`,margin:`-1px`,padding:0,overflow:`hidden`,position:`absolute`,"&:focus":{padding:3,position:`fixed`,top:`15px`,left:`15px`,backgroundColor:`heading`,color:`background`,zIndex:1,width:`auto`,height:`auto`,clip:`auto`,textDecoration:`none`}};const SkipNavLink=_ref=>{let{children}=_ref,props=(0,objectWithoutProperties/* default */.Z)(_ref,_excluded);return (0,theme_ui_esm/* jsx */.tZ)("a",Object.assign({},props,{sx:_objectSpread({},skipNavStyles),href:"#skip-nav","data-skip-link":"true"}),children);};/* harmony default export */ const skip_nav = (SkipNavLink);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx
function layout_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function layout_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){layout_ownKeys(Object(source),true).forEach(function(key){(0,defineProperty/* default */.Z)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{layout_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/** @jsx jsx */const Layout=({children,className=``})=>(0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment,null,(0,theme_ui_esm/* jsx */.tZ)(emotion_react_esm/* Global */.xB,{styles:theme=>({"*":{boxSizing:`inherit`},html:{WebkitTextSizeAdjust:`100%`},img:{borderStyle:`none`},pre:{fontFamily:`monospace`,fontSize:`1em`},"[hidden]":{display:`none`},"::selection":{backgroundColor:theme.colors.text,color:theme.colors.background},a:{transition:`all 0.3s ease-in-out`,color:`text`}})}),(0,theme_ui_esm/* jsx */.tZ)(seo/* default */.Z,null),(0,theme_ui_esm/* jsx */.tZ)(skip_nav,null,"Skip to content"),(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Container */.W2,null,(0,theme_ui_esm/* jsx */.tZ)(header,null),(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Box */.xu,{id:"skip-nav",sx:layout_objectSpread({},styles_code),className:className},children),(0,theme_ui_esm/* jsx */.tZ)(footer,null)));/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 40901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24072);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92031);
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1567);
const Seo=({title=``,description=``,pathname=``,image=``,children=null,canonicalUrl=``})=>{const site=(0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();const{siteTitle,siteTitleAlt:defaultTitle,siteUrl,siteDescription:defaultDescription,siteLanguage,siteImage:defaultImage,author}=site;const seo={title:title||defaultTitle,description:description||defaultDescription,url:`${siteUrl}${pathname||``}`,image:`${siteUrl}${image||defaultImage}`};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{title:title,defaultTitle:defaultTitle,titleTemplate:`%s | ${siteTitle}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("html",{lang:siteLanguage}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"image",content:seo.image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:seo.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:url",content:seo.url}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:image",content:seo.image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:image:alt",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:seo.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:url",content:seo.url}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:image",content:seo.image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:image:alt",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:author}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/favicon-32x32.png`)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/favicon-16x16.png`)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/apple-touch-icon.png`)}),canonicalUrl?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"canonical",href:canonicalUrl}):null,children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 1567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92031);
const useSiteMetadata=()=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("318001574");return data.site.siteMetadata;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSiteMetadata);

/***/ }),

/***/ 41340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Replace double slashes // with one slash /
 * @description This prevents double slashes as users might add e.g. the basePath as "/blog" or "blog"
 * @param input
 * @return {string} - Sanitized string
 */function replaceSlashes(input){return input.replace(/\/\/+/g,`/`);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceSlashes);

/***/ }),

/***/ 35683:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = kebabCase;


/***/ })

};
;
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tags-query-tsx.js.map