!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequire78b5;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequire78b5=o);var a=o("bpxeT"),i=o("2TvXO"),s=o("fKAmx"),c=o("4Nugj");function u(e){c.refs.slickSlider.innerHTML=e.map((function(e){var n=e.original_title,t=e.poster_path,r=e.vote_average,o=e.movie_id,a=e.name;return'<div class="slider__item"><img class="slider-image" src='.concat(s.IMG_URL).concat(t,' alt="').concat(n).concat(a,'" data-id="').concat(o,'" onerror="this.onerror=null;this.src="https://i.postimg.cc/6pzyh7Wc/pngwing-com.png";" /><span class="trending-raiting">').concat(r.toFixed(1),"</span></div>")})).join(""),$(".slider").slick({arrows:!1,centerMode:!0,lazyLoad:"progressive",autoplay:!0,autoplaySpeed:1e3,infinite:!0,speed:1e3,adaptiveHeigt:!0,cssEase:"ease",slidesToShow:8,responsive:[{breakpoint:1100,settings:{slidesToShow:4,infinite:!0}},{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:2}}]})}fetch("https://api.themoviedb.org/3/trending/all/day?api_key=2b316c342fe13f9049052886494c29f1").then((function(e){return e.json()})).then((function(e){return e.results})).then(u).catch((function(e){return console.log(e)}));var l=o("jREuN"),p=o("fkNhc"),d=o("gQOBw"),f=o("6m2hf");console.log("Firebase!");var h,g,v=(0,p.initializeApp)({apiKey:"AIzaSyAQNEF1EZQq4hRQq21AEqmnTA4ysock-bY",authDomain:"filmoteka-77997.firebaseapp.com",projectId:"filmoteka-77997",storageBucket:"filmoteka-77997.appspot.com",messagingSenderId:"555325927364",appId:"1:555325927364:web:5f447ca8d4265db75c3e91",measurementId:"G-LZ05WYL8RJ"}),w=(0,d.getAuth)(v),m=(0,f.getFirestore)(v),b=(h=e(a)(e(i).mark((function n(){var t,r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=txtEmail.value,r=txtPassword.value,e.prev=2,e.next=5,(0,d.signInWithEmailAndPassword)(w,t,r);case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),console.log("There was an error: ".concat(e.t0)),(0,l.showLoginError)(e.t0);case 11:case"end":return e.stop()}}),n,null,[[2,7]])}))),function(){return h.apply(this,arguments)}),x=(g=e(a)(e(i).mark((function n(){var t,r,o,s,c;return e(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=txtEmail.value,r=txtPassword.value,n.prev=2,n.next=5,(0,d.createUserWithEmailAndPassword)(w,t,r);case 5:o=n.sent,s=(0,f.doc)(m,"users",o.user.uid),c=function(){var n=e(a)(e(i).mark((function n(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.setDoc)(s,{email:t});case 3:console.log("This user has been written to the Firestore"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("I got an error! ".concat(error));case 9:case"end":return e.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),c(),console.log("This user has been written to the database"),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(2),console.log("There was an error: ".concat(n.t0)),(0,l.showLoginError)(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,12]])}))),function(){return g.apply(this,arguments)}),k=function(){var n=e(a)(e(i).mark((function n(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,d.onAuthStateChanged)(w,(function(e){e?((0,l.showApp)(),(0,l.showLoginState)(e),(0,l.hideLoginError)()):((0,l.showLoginForm)(),lblAuthState.innerHTML="You're not logged in.")}));case 1:case"end":return e.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){var n=e(a)(e(i).mark((function n(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.signOut)(w);case 2:case"end":return e.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();l.btnLogin.addEventListener("click",b),l.btnSignup.addEventListener("click",x),l.btnLogout.addEventListener("click",y),k();var L,E,S=(L=e(a)(e(i).mark((function n(){var t;return e(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=[],(0,d.onAuthStateChanged)(w,(function(n){if(n){console.log("Generating watched list");var r=(0,f.collection)(m,"users",n.uid,"watched"),o=function(){var n=e(a)(e(i).mark((function n(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.getDocs)(r);case 3:return e.sent.forEach((function(e){console.log(e.id),t.push(Number(e.id))})),console.log(t),e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(0),console.log("I got an error! ".concat(error));case 12:case"end":return e.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();o()}else(0,l.showLoginForm)(),lblAuthState.innerHTML="You're not logged in."}));case 2:case"end":return n.stop()}}),n)}))),function(){return L.apply(this,arguments)}),T=(E=e(a)(e(i).mark((function n(){var t;return e(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=[],(0,d.onAuthStateChanged)(w,(function(n){if(n){console.log("Generating queue list");var r=(0,f.collection)(m,"users",n.uid,"queue"),o=function(){var n=e(a)(e(i).mark((function n(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.getDocs)(r);case 3:return e.sent.forEach((function(e){console.log(e.id),t.push(e.id)})),console.log(t),e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(0),console.log("I got an error! ".concat(error));case 12:case"end":return e.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();o()}else(0,l.showLoginForm)(),lblAuthState.innerHTML="You're not logged in."}));case 2:case"end":return n.stop()}}),n)}))),function(){return E.apply(this,arguments)}),A=document.querySelector(".library__watched-btn"),_=document.querySelector(".library__queue-btn");A.addEventListener("click",(function(){S()})),_.addEventListener("click",(function(){T()}))}();
//# sourceMappingURL=library.113dd796.js.map
