(this.webpackJsonpreact1st=this.webpackJsonpreact1st||[]).push([[0],[,,,,,function(e,r,t){e.exports=t(13)},,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),c=t(4),o=t.n(c),i=(t(10),t(11),t(2)),l=(t(12),t(1)),h=function e(){Object(l.a)(this,e),this.createNewCard=function(){for(var e=[],r=2;r<15;r++)r<10?(e.push("0"+r+"H"),e.push("0"+r+"D"),e.push("0"+r+"C"),e.push("0"+r+"S")):(e.push(r+"H"),e.push(r+"D"),e.push(r+"C"),e.push(r+"S"));return e},this.createNewDeck=function(){for(var e=[],r=2;r<15;r++)r<10?(e.push({card:"0"+r+"H",show:"show"}),e.push({card:"0"+r+"D",show:"show"}),e.push({card:"0"+r+"C",show:"show"}),e.push({card:"0"+r+"S",show:"show"})):(e.push({card:r+"H",show:"show"}),e.push({card:r+"D",show:"show"}),e.push({card:r+"C",show:"show"}),e.push({card:r+"S",show:"show"}));return e}},s=function e(){Object(l.a)(this,e),this.straightFlushCheck=function(e){for(var r=function(e,r,t){for(var n=e;n<t.length;n++)if(Number(t[e][0]-r)===Number(t[n][0])&&t[e][1]===t[n][1])return t[n][0];return""},t=0;t<e.length-4;t++){for(var n="",a=0;a<5;a++)n+=r(t,a,e);if(n.length>=10)return Number("9"+n)}},this.fourOfAKindCheck=function(e){for(var r=function(e,r){for(var t=0;t<r.length;t++)if(r[t][0]!==e)return r[t][0]},t=0;t<e.length-3;t++){for(var n="",a=t;a<e.length;a++)e[t][0]===e[a][0]&&(n+=e[a][0]);if(n.length>=8)return n+=r(e[t][0],e),Number("8"+n)}},this.fullHouseCheck=function(e){for(var r=function(e,r){for(var t=0;t<e.length-1;t++){for(var n="",a=t;a<e.length;a++)e[t][0]===e[a][0]&&e[t][0]!==r&&n.length<4&&(n+=e[a][0]);if(n.length>=4)return n}},t=0;t<e.length-2;t++){for(var n="",a=t;a<e.length;a++)e[t][0]===e[a][0]&&(n+=e[a][0]);if(n.length>=6){var c=r(e,e[t][0]);if(void 0!==c)return Number("7"+n+c)}}},this.colorCheck=function(e){for(var r=0;r<e.length-4;r++)for(var t="",n=r;n<e.length;n++)if(e[r][1]===e[n][1]&&t.length<=8&&(t+=e[n][0]),t.length>=10)return Number("6"+t)},this.straightCheck=function(e){for(var r=function(e,r,t){for(var n=e;n<t.length;n++)if(Number(t[e][0]-r)===Number(t[n][0]))return t[n][0];return""},t=0;t<e.length-4;t++){for(var n="",a=0;a<5;a++)n+=r(t,a,e);if(n.length>=10)return Number("5"+n)}},this.threeOfAKindCheck=function(e){for(var r=function(e,r,t){for(var n=0;n<e.length;n++)if(e[n][0]!==r&&e[n][0]!==t)return e[n][0]},t=0;t<e.length-2;t++){for(var n="",a=t;a<e.length;a++)e[t][0]===e[a][0]&&(n+=e[a][0]);if(n.length>=6){var c=r(e,e[t][0]);return n+=c+r(e,e[t][0],c),Number("4"+n)}}},this.twoPairCheck=function(e){for(var r=function(e,r){for(var t=0;t<e.length-1;t++){for(var n="",a=t;a<e.length;a++)e[t][0]===e[a][0]&&e[t][0]!==r&&n.length<4&&(n+=e[a][0]);if(n.length>=4)return n}},t=function(e,r,t){for(var n=0;n<e.length;n++)if(e[n][0]!==r&&e[n][0]!==t)return e[n][0]},n=0;n<e.length-1;n++){for(var a="",c=n;c<e.length;c++)e[n][0]===e[c][0]&&(a+=e[c][0]);if(a.length>=4){var o=r(e,e[n][0]);if(void 0!==o){var i=t(e,e[n][0],o[0]+o[1]);return Number("3"+a+o+i)}}}},this.pairCheck=function(e){for(var r=function(e,r,t,n){for(var a=0;a<e.length;a++)if(e[a][0]!==r&&e[a][0]!==t&&e[a][0]!==n)return e[a][0]},t=0;t<e.length-1;t++){for(var n="",a=t;a<e.length;a++)e[t][0]===e[a][0]&&(n+=e[a][0]);if(n.length>=4){var c=r(e,e[t][0]),o=r(e,e[t][0],c);return n+=c+o+r(e,e[t][0],c,o),Number("2"+n)}}},this.strongestCardCheck=function(e){for(var r="",t=0;t<5;t++)r+=e[t][0];return Number("1"+r)}},u=function e(){var r=this;Object(l.a)(this,e),this.SortCards=function(e){for(var r=[],t=[],n=(e=e.sort()).length-1;n>=0;n-=1)r.push(e[n][0]+e[n][1]),t.push(e[n][2]);for(var a=[],c=0;c<r.length;c++)a.push([r[c],t[c]]);return a},this.PointsCheck=function(e){e=r.SortCards(e);var t=new s;return void 0!==t.straightFlushCheck(e)?t.straightFlushCheck(e):void 0!==t.fourOfAKindCheck(e)?t.fourOfAKindCheck(e):void 0!==t.fullHouseCheck(e)?t.fullHouseCheck(e):void 0!==t.colorCheck(e)?t.colorCheck(e):void 0!==t.straightCheck(e)?t.straightCheck(e):void 0!==t.threeOfAKindCheck(e)?t.threeOfAKindCheck(e):void 0!==t.twoPairCheck(e)?t.twoPairCheck(e):void 0!==t.pairCheck(e)?t.pairCheck(e):void 0!==t.strongestCardCheck(e)?t.strongestCardCheck(e):void 0},this.getWinners=function(r,t){var n=r[0].filter((function(e){return"gray_back"!==e})),a=r[1].filter((function(e){return"gray_back"!==e}));if(n.length>=2&&a.length>=2){var c=function(){for(var c=r[2].filter((function(e){return"gray_back"!==e})),o=c.concat(n.concat(a)),i=t,l=function(e){i=i.filter((function(r){return r!==o[e]}))},h=0;h<o.length;h++)l(h);for(var s=0,u=0,f=0,d=0;d<5e3;d++){for(var g=r[2].filter((function(e){return"gray_back"!==e})),m=i,v=function(e){var r=m[Math.floor(Math.random()*m.length)];m=m.filter((function(e){return e!==r})),g.push(r)},C=0;C<5-c.length;C++)v();var w=n.concat(g),k=a.concat(g),b=new e;(w=b.PointsCheck(w))>(k=b.PointsCheck(k))&&s++,w===k&&u++,w<k&&f++}return{v:{winChance:100*s/(s+u+f),loseChance:100*f/(s+u+f),drawChance:100*u/(s+u+f)}}}();if("object"===typeof c)return c.v}}};var f=function(e){return a.a.createElement("img",{src:"/TexasHoldemOddsCalculator/Images/"+e.card+".png",alt:e.card,number:e.myNumber,width:"50"})};var d=function(){var e=a.a.useState([["gray_back","gray_back"],["gray_back","gray_back"],["gray_back","gray_back","gray_back","gray_back","gray_back"]]),r=Object(i.a)(e,2),t=r[0],n=r[1],c=a.a.useState(),o=Object(i.a)(c,2),l=(o[0],o[1]),s=a.a.useState(""),d=Object(i.a)(s,2),g=d[0],m=d[1],v=a.a.useState({winChance:0,loseChance:0,drawChance:0}),C=Object(i.a)(v,2),w=C[0],k=C[1],b=new h,p=b.createNewCard(),y=b.createNewDeck(),N=a.a.useState(y),E=Object(i.a)(N,2),_=E[0];E[1],console.log(_);var O=function(e){if(""!==g){var r=t[g].length;if("gray_back"===t[g][r-1]){var a=e.target.attributes[1].nodeValue;document.getElementsByClassName(a)[0].style.display="none",t[g].splice(r-1,r),t[g].push(a),t[g]=t[g].sort(),n(t),l(Math.random())}}var c=t[0].filter((function(e){return"gray_back"!==e})),o=t[1].filter((function(e){return"gray_back"!==e}));if(c.length>=2&&o.length>=2){var i=(new u).getWinners(t,p);w.winChance=i.winChance,w.loseChance=i.loseChance,w.drawChance=i.drawChance,k(w),l(Math.random())}else w.winChance=0,w.loseChance=0,w.drawChance=0},S=function(e){var r=e.target.attributes[1].nodeValue,a=Number(e.target.attributes[2].nodeValue);if("gray_back"!==r&&a===g){document.getElementsByClassName(r)[0].style.display="block",t[a]=t[a].filter((function(e){return e!==r})),t[a].push("gray_back"),n(t),l(Math.random());var c=t[0].filter((function(e){return"gray_back"!==e})),o=t[1].filter((function(e){return"gray_back"!==e}));if(c.length>=2&&o.length>=2){var i=(new u).getWinners(t,p);w.winChance=i.winChance,w.loseChance=i.loseChance,w.drawChance=i.drawChance,k(w),l(Math.random())}else w.winChance=0,w.loseChance=0,w.drawChance=0}m(a),j(),document.getElementsByClassName("player"+a)[0].style.border="1px solid red"},j=function(){var e=document.getElementsByClassName("player0"),r=document.getElementsByClassName("player1"),t=document.getElementsByClassName("player2");e[0].style.border="none",r[0].style.border="none",t[0].style.border="none"};return a.a.createElement("div",null,a.a.createElement("div",{className:"row"},p.map((function(e){return a.a.createElement("div",{className:e,deletingTarget:e,onClick:O},a.a.createElement(f,{card:e})," ")}))),a.a.createElement("div",{className:"row spaceequal"},a.a.createElement("div",{className:"centre"},a.a.createElement("div",{className:"column"},a.a.createElement("div",null,"Win Chance = ~",w.winChance,"%"),a.a.createElement("div",null,"Draw Chance = ~",w.drawChance,"%"),a.a.createElement("div",{className:"row centre"},a.a.createElement("div",{className:"row player0"},t[0].map((function(e){return a.a.createElement("div",{deletingTarget:e,onClick:S},a.a.createElement(f,{card:e,myNumber:0})," ")})))))),a.a.createElement("div",{className:"column"},a.a.createElement("div",null,"Win Chance = ~",w.loseChance,"%"),a.a.createElement("div",null,"Draw Chance = ~",w.drawChance,"%"),a.a.createElement("div",{className:"row centre"},a.a.createElement("div",{className:"row player1"},t[1].map((function(e){return a.a.createElement("div",{deletingTarget:e,onClick:S},a.a.createElement(f,{card:e,myNumber:1})," ")})))))),a.a.createElement("div",{className:"row  spaceequal"},a.a.createElement("div",{className:"row player2"},t[2].map((function(e){return a.a.createElement("div",{deletingTarget:e,onClick:S},a.a.createElement(f,{card:e,myNumber:2})," ")})))),a.a.createElement("div",{className:"centre"},a.a.createElement("img",{className:"centre",src:"/TexasHoldemOddsCalculator/Images/logo.png",alt:"logo",width:"250px"})))};var g=function(){return a.a.createElement("div",null,a.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.c7268c6e.chunk.js.map