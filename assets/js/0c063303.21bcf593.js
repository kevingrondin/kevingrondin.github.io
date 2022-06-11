"use strict";(self.webpackChunkkevingrondin=self.webpackChunkkevingrondin||[]).push([[8264],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=s(n),d=r,m=v["".concat(l,".").concat(d)]||v[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:2},l="\ud83d\udea2 React Navigation V6",s={unversionedId:"React Native/create-project/navigation",id:"React Native/create-project/navigation",title:"\ud83d\udea2 React Navigation V6",description:"La navigation entre les diff\xe9rente vue ce fait avec",source:"@site/docs/React Native/create-project/navigation.md",sourceDirName:"React Native/create-project",slug:"/React Native/create-project/navigation",permalink:"/wiki/docs/React Native/create-project/navigation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React Native/create-project/navigation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfd7\ufe0f Initialisation",permalink:"/wiki/docs/React Native/create-project/initialisation"},next:{title:"\u23f3 Background",permalink:"/wiki/docs/React Native/create-project/background"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Android",id:"android",level:3},{value:"Type de Navigation",id:"type-de-navigation",level:3},{value:"Impl\xe9mentation",id:"impl\xe9mentation",level:2}],v={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-react-navigation-v6"},"\ud83d\udea2 React Navigation V6"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"La navigation entre les diff\xe9rente vue ce fait avec")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React Navigation")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Installation React Navigation"',title:'"Installation',React:!0,'Navigation"':!0},"npm i @react-navigation/native --save\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm i react-native-screens react-native-safe-area-context --save\n")),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("p",null,"Dans le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity.java")," on rajoute une m\xe9thode \xe0 la Classe"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainActivity.java"',title:'"MainActivity.java"'},"@Override\nprotected void onCreate(Bundle savedInstanceState) {\n  super.onCreate(null);\n}\n")),(0,i.kt)("p",null,"toujours dans le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity.java")," on rajoute une librairie "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainActivity.java"',title:'"MainActivity.java"'},"import android.os.Bundle;\n")),(0,i.kt)("h3",{id:"type-de-navigation"},"Type de Navigation"),(0,i.kt)("p",null,"il existe trois type de navigation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stack")," (Navigation simple)"),(0,i.kt)("li",{parentName:"ul"},"Tab (Navigation avec une tabBar en bas)"),(0,i.kt)("li",{parentName:"ul"},"Drawer (Navigation avec un menu lat\xe9ral)")),(0,i.kt)("p",null,"Dans ce projet uniquement ",(0,i.kt)("strong",{parentName:"p"},"Stack")," est utilis\xe9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @react-navigation/native-stack\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\ud83c\udf8a Installation react-navigation termin\xe9 \ud83c\udf8a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Tout les installations de base sont faite"))),(0,i.kt)("h2",{id:"impl\xe9mentation"},"Impl\xe9mentation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Structure du projet"',title:'"Structure',du:!0,'projet"':!0},"  ... // autre fichier et dossier\n  App.tsx // point d'entr\xe9e au projet\n  src\n      ... // autre dossier\n      navigation\n          index.tsx // d\xe9finition des routes\n      screen\n          screenA.tsx       // screen A\n          screenB.tsx       // screen B\n          screenC.tsx       // screen C\n          detailScreen.tsx  // ecran ou on affiche les d\xe9tails grace au donn\xe9e pass\xe9 en param\xe8tre\n          index.tsx // contient tout les screens (A B et C)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"// On rajoute l'import de NavigationContainer et on Encapsule notre balise navigation\nimport { NavigationContainer } from '@react-navigation/native';\nimport Navigation from './src/navigation';\n\nconst App = () => {\n\n  return (\n    <NavigationContainer>\n      <Navigation />\n    </NavigationContainer>\n  );\n};\n\nexport default App;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/navigation/index.tsx"',title:'"src/navigation/index.tsx"'},"import * as React from 'react';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nimport screen from '../screen';\n\nexport type StackParams = {\n    ScreenA: undefined;\n    ScreenB: undefined;\n    ScreenC: undefined;\n    DetailScreen: \n        | {\n            id: string;\n        }\n        | undefined;\n};\n\nconst Stack = createNativeStackNavigator<StackParams>();\n\nconst Navigation: React.FC = () => {\n    return (\n        <Stack.Navigator initialRouteName='ScreenA' screenOptions={{ headerShown: false }}>\n            <Stack.Screen name=\"ScreenA\" component={screen.ScreenA} />\n            <Stack.Screen name=\"ScreenB\" component={screen.ScreenB} />\n            <Stack.Screen name=\"ScreenC\" component={screen.ScreenC} />\n            <Stack.Screen name=\"DetailScreen\" component={screen.DetailScreen} />\n        </Stack.Navigator>\n    );\n};\n\nexport default Navigation\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/screen/detailScreen.tsx"',title:'"src/screen/detailScreen.tsx"'},"import { NativeStackScreenProps } from '@react-navigation/native-stack';\n\nimport { StackParams } from '../navigation';\n\ntype Props = NativeStackScreenProps<StackParams, 'DetailScreen'>;\n\nconst DetailScreen: React.FC<Props> = (props) => {\n   const id = props.route.params.id;\n};\n\nexport default DetailScreen\n")))}d.isMDXComponent=!0}}]);