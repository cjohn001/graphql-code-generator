(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(10),c=(n(0),n(245)),o={},i={id:"generated-config/kotlin",title:"kotlin",description:"### package (`string`)",source:"@site/docs/generated-config/kotlin.md",permalink:"/docs/generated-config/kotlin",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/kotlin.md"},l=[{value:"package (<code>string</code>)",id:"package-string",children:[]},{value:"enumValues (<code>EnumValuesMap</code>)",id:"enumvalues-enumvaluesmap",children:[]},{value:"listType (<code>string</code>, default value: <code>Iterable</code>)",id:"listtype-string-default-value-iterable",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"package-string"},"package (",Object(c.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(c.b)("p",null,"Customize the Java package name. The default package name will be generated according to the output file path."),Object(c.b)("h4",{id:"usage-example"},"Usage Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/kotlin/my-org/my-app/Resolvers.kt:\n    plugins:\n      - kotlin\n    config:\n      package: custom.package.name\n")),Object(c.b)("h3",{id:"enumvalues-enumvaluesmap"},"enumValues (",Object(c.b)("inlineCode",{parentName:"h3"},"EnumValuesMap"),")"),Object(c.b)("p",null,"Overrides the default value of enum values declared in your GraphQL schema."),Object(c.b)("h4",{id:"usage-example-with-custom-values"},"Usage Example: With Custom Values"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(c.b)("h3",{id:"listtype-string-default-value-iterable"},"listType (",Object(c.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(c.b)("inlineCode",{parentName:"h3"},"Iterable"),")"),Object(c.b)("p",null,"Allow you to customize the list type"),Object(c.b)("h4",{id:"usage-example-1"},"Usage Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/kotlin/my-org/my-app/Types.kt:\n    plugins:\n      - kotlin\n    config:\n      listType: Map\n")))}p.isMDXComponent=!0},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,d=s["".concat(o,".").concat(b)]||s[b]||m[b]||c;return n?a.a.createElement(d,i({ref:t},u,{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);