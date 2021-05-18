(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7115],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8726:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o={id:"android-sdk",title:"Android SDK",sidebar_label:"Android SDK"},l={unversionedId:"developer/android-sdk",id:"developer/android-sdk",isDocsHomePage:!1,title:"Android SDK",description:"These steps indicate how to install the Android SDK, for that you must follow the instructions explained below.",source:"@site/docs/developer/android-sdk.md",sourceDirName:"developer",slug:"/developer/android-sdk",permalink:"/developer/android-sdk",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/developer/android-sdk.md",version:"current",lastUpdatedBy:"Munkhjargal",lastUpdatedAt:1590570298,formattedLastUpdatedAt:"5/27/2020",sidebar_label:"Android SDK",frontMatter:{id:"android-sdk",title:"Android SDK",sidebar_label:"Android SDK"},sidebar:"docs",previous:{title:"GraphQL API Schema",permalink:"/developer/graphql-api"},next:{title:"iOS SDK",permalink:"/developer/ios-sdk"}},d=[{value:"Installation",id:"installation",children:[{value:"Installation with Gradle",id:"installation-with-gradle",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Requirement",id:"requirement",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Default configuration",id:"default-configuration",children:[]},{value:"Start Erxes SDK",id:"start-erxes-sdk",children:[]}]}],s={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These steps indicate how to install the Android SDK, for that you must follow the instructions explained below."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"installation-with-gradle"},"Installation with Gradle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the JitPack repository to your build file\nAdd it in your root build.gradle at the end of repositories:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},"allprojects {\n    repositories {\n        ...\n        maven { url 'https://jitpack.io' }\n    }\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add the dependency")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dependencies {\n        implementation 'com.github.erxes:erxes-android-sdk:{latest-version}'\n}\n")),(0,a.kt)("p",null,"Click ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/erxes/erxes-android-sdk/releases"},"here")," to show erxes-android-sdk latest version."),(0,a.kt)("h3",{id:"permissions"},"Permissions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To enable file send and receiving feature you have to add the following code to the",(0,a.kt)("inlineCode",{parentName:"li"}," AndroidManifest.xml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n<uses-permission android:name="android.permission.CAMERA" />\n<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\n<uses-feature\n    android:name="android.hardware.camera"\n    android:required="true" />\n')),(0,a.kt)("h3",{id:"requirement"},"Requirement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"minSdkVersion is 15")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You must add the library in the app gradle:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"implementation 'androidx.multidex:multidex:2.x.x'\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After, add in the defaultConfig of the app gradle:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"multiDexEnabled true\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"default-configuration"},"Default configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"brandCode - generated unique code of your brand"),(0,a.kt)("li",{parentName:"ul"},"apiHost - erxes-widgets-api server url"),(0,a.kt)("li",{parentName:"ul"},"subsHost - erxes-api subscription url"),(0,a.kt)("li",{parentName:"ul"},"uploadUrl - erxes-api server url")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class CustomActivity extends AppCompatActivity {\n    Config config;\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        config = new Config.Builder("brandid")\n                .setApiHost("https://url/graphql")\n                .setSubscriptionHost("wss://url/subscriptions")\n                .setUploadHost("https://url/upload-file")\n                .build(this);\n    }\n }\n')),(0,a.kt)("h3",{id:"start-erxes-sdk"},"Start Erxes SDK"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Call a ErxesSdk with login form")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    config.Start();\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"following example user will log-in to erxes with email without login form")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    config.Start_login_email("example@email.com");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"following example user will log-in to erxes with phoneNumber without login form")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    config.Start_login_email("phoneNumber");\n```}\n')))}u.isMDXComponent=!0}}]);