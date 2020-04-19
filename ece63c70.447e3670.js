(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{239:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return b}));var a=t(1),r=t(10),p=(t(0),t(245)),o={id:"kotlin",title:"Kotlin"},c={id:"plugins/kotlin",title:"Kotlin",description:"The `kotlin` plugin generates Kotlin `classes` for Enums and Input types.",source:"@site/docs/plugins/kotlin.md",permalink:"/docs/plugins/kotlin",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/kotlin.md",sidebar:"sidebar",previous:{title:"Reason Client",permalink:"/docs/plugins/reason-client"},next:{title:"Java",permalink:"/docs/plugins/java"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:i};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"kotlin")," plugin generates Kotlin ",Object(p.b)("inlineCode",{parentName:"p"},"classes")," for Enums and Input types."),Object(p.b)("p",null,"You can use this plugin to generate Java enums based on your GraphQL schema, and it also generates a type-safe Kotlin transformer for GraphQL ",Object(p.b)("inlineCode",{parentName:"p"},"input")," types."),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("p",null,"To get started with this plugins and preset, make sure you have the following installed:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"NodeJS (10 or later)"),Object(p.b)("li",{parentName:"ul"},"NPM or Yarn")),Object(p.b)("p",null,"Run the following in your Android project:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"  $ yarn init --yes\n  $ yarn add @graphql-codegen/cli graphql @graphql-codegen/kotlin\n")),Object(p.b)("p",null,"Then, create ",Object(p.b)("inlineCode",{parentName:"p"},"codegen.yml")," with the following configuration:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"schema: POINT_TO_YOUR_SCHEMA\ndocuments: POINT_TO_YOUR_GRAPHQL_OPERATIONS\ngenerates:\n  ./app/src/Types.kt:\n    plugins:\n      - kotlin\n")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"Also, make sure to add ",Object(p.b)("inlineCode",{parentName:"p"},"node_modules")," to your ",Object(p.b)("inlineCode",{parentName:"p"},".gitignore")," file.")),Object(p.b)("h2",{id:"configuration"},"Configuration"),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"package (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(p.b)("p",{parentName:"p"},"Customize the Java package name. The default package name will be generated according to the output file path."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/kotlin/my-org/my-app/Resolvers.kt:\n    plugins:\n      - kotlin\n    config:\n      package: custom.package.name\n")),Object(p.b)("h3",{parentName:"p"},"enumValues (",Object(p.b)("inlineCode",{parentName:"h3"},"EnumValuesMap"),")"),Object(p.b)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema."),Object(p.b)("h4",{parentName:"p"},"Usage Example: With Custom Values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(p.b)("h3",{parentName:"p"},"listType (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"Iterable"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to customize the list type"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/kotlin/my-org/my-app/Types.kt:\n    plugins:\n      - kotlin\n    config:\n      listType: Map\n"))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"scalars (",Object(p.b)("inlineCode",{parentName:"h3"},"ScalarsMap"),")"),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{parentName:"p"},"namingConvention (",Object(p.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},"typesPrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},'Usage Example: Add "I" Prefix'),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},"skipTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},"nonOptionalTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified in the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))))}b.isMDXComponent=!0},245:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(t),u=a,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||p;return t?r.a.createElement(d,c({ref:n},l,{components:t})):r.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<p;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);