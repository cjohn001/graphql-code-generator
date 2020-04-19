(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{189:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(1),l=t(10),i=(t(0),t(245)),o={},r={id:"generated-config/typescript",title:"typescript",description:"### avoidOptionals (`boolean`, default value: `false`)",source:"@site/docs/generated-config/typescript.md",permalink:"/docs/generated-config/typescript",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript.md"},p=[{value:"avoidOptionals (<code>boolean</code>, default value: <code>false</code>)",id:"avoidoptionals-boolean-default-value-false",children:[]},{value:"constEnums (<code>boolean</code>, default value: <code>false</code>)",id:"constenums-boolean-default-value-false",children:[]},{value:"enumsAsTypes (<code>boolean</code>, default value: <code>false</code>)",id:"enumsastypes-boolean-default-value-false",children:[]},{value:"enumsAsConst (<code>boolean</code>, default value: <code>false</code>)",id:"enumsasconst-boolean-default-value-false",children:[]},{value:"fieldWrapperValue (<code>string</code>, default value: <code>T | Promise | (() = T | Promise)</code>)",id:"fieldwrappervalue-string-default-value-t--promise----t--promise",children:[]},{value:"immutableTypes (<code>boolean</code>, default value: <code>false</code>)",id:"immutabletypes-boolean-default-value-false",children:[]},{value:"maybeValue (<code>string</code>, default value: <code>T | null</code>)",id:"maybevalue-string-default-value-t--null",children:[]},{value:"noExport (<code>boolean</code>, default value: <code>false</code>)",id:"noexport-boolean-default-value-false",children:[]},{value:"wrapFieldDefinitions (<code>boolean</code>, default value: <code>true</code>)",id:"wrapfielddefinitions-boolean-default-value-true",children:[]}],c={rightToc:p};function s(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"avoidoptionals-boolean-default-value-false"},"avoidOptionals (",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(i.b)("p",null,"This will cause the generator to avoid using TypeScript optionals (",Object(i.b)("inlineCode",{parentName:"p"},"?"),") on types, so the following definition: ",Object(i.b)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",Object(i.b)("inlineCode",{parentName:"p"},"myField: Maybe<string>")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),Object(i.b)("h4",{id:"usage-example-override-all-definition-types"},"Usage Example: Override all definition types"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals: true\n")),Object(i.b)("h4",{id:"usage-example-override-only-specific-definition-types"},"Usage Example: Override only specific definition types"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals:\n     field: true\n     inputValue: true\n     object: true\n")),Object(i.b)("h3",{id:"constenums-boolean-default-value-false"},"constEnums (",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(i.b)("p",null,"Will prefix every generated ",Object(i.b)("inlineCode",{parentName:"p"},"enum")," with ",Object(i.b)("inlineCode",{parentName:"p"},"const"),", you can read more about const enums ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/enums.html"}),"here"),"."),Object(i.b)("h4",{id:"usage-example"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   constEnums: true\n")),Object(i.b)("h3",{id:"enumsastypes-boolean-default-value-false"},"enumsAsTypes (",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(i.b)("p",null,"Generates enum as TypeScript ",Object(i.b)("inlineCode",{parentName:"p"},"type")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"enum"),". Useful it you wish to genereate ",Object(i.b)("inlineCode",{parentName:"p"},".d.ts")," declartion file instead of ",Object(i.b)("inlineCode",{parentName:"p"},".ts")),Object(i.b)("h4",{id:"usage-example-1"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n")),Object(i.b)("h3",{id:"enumsasconst-boolean-default-value-false"},"enumsAsConst (",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(i.b)("p",null,"Generates enum as TypeScript ",Object(i.b)("inlineCode",{parentName:"p"},"const assertions")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"enum"),". This can even be used to enable enum-like patterns in plain JavaScript code if you choose not to use TypeScript\u2019s enum construct."),Object(i.b)("h4",{id:"usage-example-2"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsConst: true\n")),Object(i.b)("h3",{id:"fieldwrappervalue-string-default-value-t--promise----t--promise"},"fieldWrapperValue (",Object(i.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"T | Promise | (() = T | Promise)"),")"),Object(i.b)("p",null,"Allow to override the type value of ",Object(i.b)("inlineCode",{parentName:"p"},"FieldWrapper"),"."),Object(i.b)("h4",{id:"usage-example-only-allow-values"},"Usage Example: Only allow values"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   fieldWrapperValue: T\n")),Object(i.b)("h3",{id:"immutabletypes-boolean-default-value-false"},"immutableTypes (",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(i.b)("p",null,"Generates immutable types by adding ",Object(i.b)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",Object(i.b)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),Object(i.b)("h4",{id:"usage-example-3"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   immutableTypes: true\n")),Object(i.b)("h3",{id:"maybevalue-string-default-value-t--null"},"maybeValue (",Object(i.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"T | null"),")"),Object(i.b)("p",null,"Allow to override the type value of ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe"),"."),Object(i.b)("h4",{id:"usage-example-allow-undefined"},"Usage Example: Allow undefined"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n   config:\n     maybeValue: T | null | undefined\n")),Object(i.b)("h4",{id:"usage-example-allow-null-in-resolvers"},"Usage Example: Allow ",Object(i.b)("inlineCode",{parentName:"h4"},"null")," in resolvers:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n     - typescript-resolves\n   config:\n     maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'\n")),Object(i.b)("h3",{id:"noexport-boolean-default-value-false"},"noExport (",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(i.b)("p",null,"Set the to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," in order to generate output without ",Object(i.b)("inlineCode",{parentName:"p"},"export")," modifier. This is useful if you are generating ",Object(i.b)("inlineCode",{parentName:"p"},".d.ts")," file and want it to be globally available."),Object(i.b)("h4",{id:"usage-example-disable-all-export-from-a-file"},"Usage Example: Disable all export from a file"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   noExport: true\n")),Object(i.b)("h3",{id:"wrapfielddefinitions-boolean-default-value-true"},"wrapFieldDefinitions (",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(i.b)("p",null,"Set the to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(i.b)("inlineCode",{parentName:"p"},"FieldWrapper"),". This is useful to allow return types such as Promises and functions."),Object(i.b)("h4",{id:"usage-example-enable-wrapping-fields"},"Usage Example: Enable wrapping fields"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: false\n")))}s.isMDXComponent=!0},245:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=l.a.createContext({}),s=function(e){var n=l.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r({},n,{},e)),t},u=function(e){var n=s(e.components);return l.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?l.a.createElement(m,r({ref:n},c,{components:t})):l.a.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<i;c++)o[c]=t[c];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);