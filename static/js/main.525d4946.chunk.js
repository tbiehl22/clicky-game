(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://www.koin.com/wp-content/uploads/sites/10/2020/02/ea2b78ab17e04dc49ac643783483e748.jpg?w=250&h=320&crop=1"},{"id":2,"image":"https://www.koin.com/wp-content/uploads/sites/10/2020/01/AP20004039836442.jpg?w=490&h=440&crop=1"},{"id":3,"image":"https://www.koin.com/wp-content/uploads/sites/10/2018/07/AP_18024109609202_1530933961868_47879231_ver1.0.jpg?w=240&h=230&crop=1"},{"id":4,"image":"https://www.koin.com/wp-content/uploads/sites/10/2019/11/AP_19334211453969.jpg?resize=270,370"},{"id":5,"image":"https://img.bleacherreport.net/img/images/photos/003/806/566/hi-res-44687843e75a977c886f044e41646624_crop_north.jpg?1556979471&w=300&h=230"},{"id":6,"image":"https://img.particlenews.com/image.php?type=thumbnail_250x276&url=2xObHs_0OTTZr0J00"},{"id":7,"image":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBYTUGN.img?x=1&y=1&f=PNG&h=200&w=330&m=5&q=60&b=white"},{"id":8,"image":"https://img.particlenews.com/image.php?type=thumbnail_340x195&url=2nUfy0_0NmAGKts00"},{"id":9,"image":"https://img.particlenews.com/image.php?type=thumbnail_340x195&url=0S5iPR_0O3F9dNb00"},{"id":10,"image":"https://img.particlenews.com/image.php?type=thumbnail_370x197&url=1nCvU0_0O5vQaaA00"},{"id":11,"image":"https://img.particlenews.com/image.php?type=thumbnail_380x195&url=3EqGnA_0NwKryaX00"},{"id":12,"image":"https://img.bleacherreport.net/img/images/photos/003/855/615/hi-res-bf023f96b397251605d1d98075b2d717_crop_north.jpg?1583282161&w=270&h=355"}]')},,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),r=a.n(o),c=a(4),s=a(5),l=a(7),m=a(6),p=(a(13),function(e){return i.a.createElement("div",{className:"card img-container hover"},i.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleScoreCard(e.id)},className:"shuffleScore"}))}),u=(a(14),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(15),function(e){return i.a.createElement("div",{className:"gameScore"},i.a.createElement("h3",{className:"score"},"Points: ",e.total),i.a.createElement("h3",{className:"status"},e.status))}),d=a(1),g=(a(16),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={athletes:d,clickedPlayerIds:[],score:0,goal:8,status:""},e.shuffleScoreCard=function(t){var a=e.state.clickedPlayerIds;if(a.includes(t))e.setState({clickedPlayerIds:[],score:0,status:"Game Over! You came up short. Click to play again!"});else{if(a.push(t),8===a.length)return e.setState({score:8,status:"Blazers Win! RIP CITY! Click to play again!",clickedPlayerIds:[]}),void console.log("You Win");e.setState({players:d,clickedPlayerIds:a,score:a.length,status:" "});for(var n=d.length-1;n>0;n--){var i=Math.floor(Math.random()*(n+1)),o=[d[i],d[n]];d[n]=o[0],d[i]=o[1]}}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",{className:"App-title"},"Portland Trail Blazers Clicky Game!"),i.a.createElement("p",{className:"App-intro"},"Click on an image to earn points, but try not to click the same image twice!")),i.a.createElement(h,{total:this.state.score,goal:8,status:this.state.status}),i.a.createElement(u,null,this.state.athletes.map((function(t){return i.a.createElement(p,{shuffleScoreCard:e.shuffleScoreCard,id:t.id,key:t.id,image:t.image})}))),i.a.createElement("footer",null,i.a.createElement("p",null,"\xa92020 Tim Biehl ")))}}]),a}(n.Component)),f=(a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/clicky-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/clicky-game","/service-worker.js");f?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.525d4946.chunk.js.map