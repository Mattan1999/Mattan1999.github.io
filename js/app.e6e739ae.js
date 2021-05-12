(function(e){function t(t){for(var n,r,a=t[0],u=t[1],l=t[2],d=0,f=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var u=o[a];0!==s[u]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},s={app:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"1dd1":function(e,t,o){"use strict";o("2c92")},2552:function(e,t,o){"use strict";o("f7b2")},"2c92":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),o("router-link",{attrs:{to:"/liked-jokes"}},[e._v("Liked jokes")]),e._v(" | "),o("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),o("router-view")],1)},i=[],r=(o("034f"),o("2877")),a={},u=Object(r["a"])(a,s,i,!1,null,null,null),l=u.exports,c=o("9483");Object(c["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=o("8c4f"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{staticClass:"img",attrs:{src:e.image,width:"125px"}}),o("h1",[e._v("Welcome to funny jokes")]),o("h5",[e._v("Everytime you visit this page 10 jokes will be loaded.")]),o("h5",[e._v("If you want to read more jokes, enter a number!")]),o("Jokes",{on:{"jokes-loaded":e.jokesLoaded,"error-loading-jokes":e.errorLoadingJokes,"loading-new-jokes":e.loadingNewJokes,"not-valid":e.inputError}},[e.isOnline?o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:e.successfullElementVisible,expression:"successfullElementVisible"}],staticClass:"loaded-jokes"},[o("h5",[e._v("Successfully loaded "+e._s(e.numberOfJokes)+"/"+e._s(e.jokesToLoad)+" jokes")]),o("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading",attrs:{label:"Loading..."}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:e.inputErr,expression:"inputErr"}],staticClass:"error-loading-jokes"},[o("h5",[e._v("You must enter a number higher than 1")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.errorElementVisible,expression:"errorElementVisible"}],staticClass:"error-loading-jokes"},[e.errorInfo?o("h5",[e._v(e._s(e.errorInfo.additionalInfo))]):e._e()])]):e._e(),e.isOffline?o("div",{staticClass:"network-status"},[o("h5",[e._v("You are currently offline."),o("br"),e._v("The page might not work!")])]):e._e()])],1)},h=[],k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"joke-page"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.numberOfJokesToLoad,expression:"numberOfJokesToLoad"}],staticClass:"user-input",attrs:{type:"number",placeholder:"Enter a number..."},domProps:{value:e.numberOfJokesToLoad},on:{input:function(t){t.target.composing||(e.numberOfJokesToLoad=t.target.value)}}}),o("button",{staticClass:"fetch-btn",on:{click:function(t){return e.fetchData(e.numberOfJokesToLoad)}}},[e._v("Load jokes")]),e._t("default"),e.jokes?o("div",{staticClass:"joke-template"},[o("div",{class:{"joke-area-3":e.numberOfJokes>2,"joke-area-2":e.numberOfJokes>1&&e.numberOfJokes<3,"joke-area-1":e.numberOfJokes<2}},e._l(e.jokes,(function(t){return o("div",{key:t.id,staticClass:"joke"},[o("p",{staticClass:"joke-setup"},[e._v(e._s(t.setup))]),t.showPunchline?e._e():o("div",[o("input",{staticClass:"punchline-button",attrs:{type:"button",value:"Show punchline"},on:{click:function(o){return e.showJokePunchline(t.id)}}})]),t.showPunchline?o("div",[o("p",{staticClass:"joke-punchline"},[e._v(e._s(t.delivery))]),t.liked?o("b-icon",{staticClass:"like",attrs:{icon:"heart-fill",variant:"danger","font-scale":"1.5"},on:{click:function(o){return e.likedJoke(t.id)}}}):o("b-icon",{staticClass:"like",attrs:{icon:"heart","font-scale":"1.5"},on:{click:function(o){return e.likedJoke(t.id)}}})],1):e._e()])})),0)]):[o("p",[e._v("Error, could not load any jokes...")])]],2)},m=[],p=(o("a9e3"),o("bc3a")),v=o.n(p),b=o("2106"),j=o.n(b);n["default"].use(j.a,v.a);var g={name:"fetch",created:function(){var e=this;this.fetchData(10),this.$on("online",(function(){e.$store.commit("resetLikedJokes"),e.fetchData(10)}))},data:function(){return{jokes:[],numberOfJokes:0,numberOfJokesToLoad:"",foundDuplicate:!1,errorResponse:null}},methods:{fetchData:function(e){var t=this;if(e<1)this.$emit("not-valid"),this.jokes=[];else{0!==this.jokes&&(this.jokes=[]),this.$emit("loading-new-jokes"),this.numberOfJokes=1===e?1:2===e?2:3,this.$store.commit("updateJokesFetched",e);for(var o=0;o<e;o++){var n="https://v2.jokeapi.dev/joke/Any?type=twopart&"+o;this.axios.get(n).then((function(o){o.data["showPunchline"]=!1,o.data["liked"]=!1,t.jokes.push(o.data),t.$emit("jokes-loaded",t.jokes.length,Number(e))})).catch((function(e){e.response?(t.errorResponse=e.response.data,t.$emit("error-loading-jokes",t.errorResponse)):e.request?(console.log("err.request"),console.log(e.request.response.error)):console.log("else (kanske duplicate?)")}))}}},showJokePunchline:function(e){for(var t=0;t<this.jokes.length;t++)this.jokes[t].id===e&&(this.jokes[t].showPunchline=!0)},likedJoke:function(e){for(var t=0;t<this.jokes.length;t++)this.jokes[t].id===e&&(this.jokes[t].liked=!this.jokes[t].liked,this.jokes[t].liked?this.$store.commit("addLikedJoke",this.jokes[t]):this.$store.commit("removeLikedJoke",this.jokes[t]))}}},_=g,w=(o("c015"),Object(r["a"])(_,k,m,!1,null,"15b04978",null)),J=w.exports,O=o("a873"),y=o.n(O),E={name:"Home",components:{Jokes:J},data:function(){return{numberOfJokes:null,jokesToLoad:null,successfullElementVisible:null,errorElementVisible:!1,errorInfo:null,inputErr:!1,loading:!1,image:y.a}},methods:{inputError:function(){var e=this;this.inputErr=!0,this.successfullElementVisible=!1,setTimeout((function(){e.inputErr=!1}),5e3)},jokesLoaded:function(e,t){this.loading=!0,this.inputErr=!1,this.errorElementVisible=!1,this.numberOfJokes=e,this.jokesToLoad=t},loadingNewJokes:function(){this.successfullElementVisible=!0},errorLoadingJokes:function(e){this.successfullElementVisible=!1,this.errorElementVisible=!0,this.errorInfo=e}},watch:{numberOfJokes:function(){var e=this;this.jokesToLoad===this.numberOfJokes&&(setTimeout((function(){e.loading=!1}),1e3),setTimeout((function(){e.successfullElementVisible=!1}),4e3))}}},C=E,L=(o("1dd1"),Object(r["a"])(C,f,h,!1,null,"46767ccc",null)),T=L.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("FetchInfo",{attrs:{amountFetched:e.fetchedAmount}}),e._m(0)],1)},$=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"developer"},[o("p",[e._v("This web-app was programmed by Mattias Ahlström")])])}],F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"fetch-info"},[o("div",{staticClass:"card"},[o("h5",[e._v(e._s(e.numberOfTimesFetchedString))])])])},A=[],P={name:"FetchInfo",data:function(){return{numberOfTimesFetched:this.amountFetched}},props:{amountFetched:{type:Number,default:0}},methods:{},computed:{numberOfTimesFetchedString:function(){return"You have fetched a total amount of '"+this.numberOfTimesFetched+"' jokes since you visited this page"}}},N=P,V=(o("8ee1"),Object(r["a"])(N,F,A,!1,null,"73f2d645",null)),I=V.exports,S={name:"About",components:{FetchInfo:I},created:function(){this.updateInfo()},data:function(){return{fetchedAmount:0}},methods:{updateInfo:function(){this.fetchedAmount=this.$store.state.totalAmountOfJokesFetched}}},D=S,H=(o("b88e"),Object(r["a"])(D,x,$,!1,null,"7b05f575",null)),M=H.exports,Y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",["liked-jokes"===e.$route.params.text?o("h3",[e._v(e._s(e.getHeaderTitle))]):e._e(),0!==e.jokes.length?o("div",{staticClass:"joke-template"},[o("div",{staticClass:"joke-area"},e._l(e.jokes,(function(t){return o("div",{key:t.id,staticClass:"joke"},[o("p",{staticClass:"joke-setup"},[e._v(e._s(t.setup))]),o("p",{staticClass:"joke-punchline"},[e._v(e._s(t.delivery))])])})),0)]):o("div",[e._m(0)])])},q=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"joke-template"},[o("h5",[e._v("You have not liked any jokes yet!")])])}],R={name:"LikedJokes",data:function(){return{jokes:this.$store.state.likedJokes}},computed:{getHeaderTitle:function(){return"Your liked jokes"}}},B=R,W=(o("2552"),Object(r["a"])(B,Y,q,!1,null,"19e5e453",null)),z=W.exports;n["default"].use(d["a"]);var G=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:M},{path:"/:text",name:"LikedJokes",component:z}],K=new d["a"]({routes:G}),Q=K,U=(o("a434"),o("2f62"));n["default"].use(U["a"]);var X=new U["a"].Store({state:{totalAmountOfJokesFetched:0,likedJokes:[]},mutations:{updateJokesFetched:function(e,t){e.totalAmountOfJokesFetched+=Number(t)},addLikedJoke:function(e,t){e.likedJokes.push(t)},removeLikedJoke:function(e,t){for(var o=0;o<e.likedJokes.length;o++)if(e.likedJokes[o].id===t.id){e.likedJokes.splice(o,1);break}},resetLikedJokes:function(e){e.likedJokes=[]}},actions:{},modules:{}}),Z=o("5f5b"),ee=o("b1e0"),te=o("bf4e"),oe=o.n(te);o("abe2");n["default"].use(Z["a"]),n["default"].use(ee["a"]),n["default"].use(oe.a),n["default"].config.productionTip=!1,new n["default"]({router:Q,store:X,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,o){},"8ee1":function(e,t,o){"use strict";o("fe2a")},a81c:function(e,t,o){},a873:function(e,t,o){e.exports=o.p+"img/laugh.7781faec.png"},abe2:function(e,t,o){},b88e:function(e,t,o){"use strict";o("a81c")},c015:function(e,t,o){"use strict";o("ede7")},ede7:function(e,t,o){},f7b2:function(e,t,o){},fe2a:function(e,t,o){}});
//# sourceMappingURL=app.e6e739ae.js.map