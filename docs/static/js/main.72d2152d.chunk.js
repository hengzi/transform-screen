(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),s=a.n(o),l=(a(14),a(3)),r=a(4),c=a(6),m=a(5),h=a(7),d=(a(15),[{value:"scaleToFill",text:"\u4e0d\u4fdd\u6301\u7eb5\u6a2a\u6bd4\u7f29\u653e\u5bb9\u5668\uff0c\u4f7f\u5bb9\u5668\u7684\u5bbd\u9ad8\u5b8c\u5168\u62c9\u4f38\u81f3\u586b\u6ee1"},{value:"aspectFit",text:"\u4fdd\u6301\u7eb5\u6a2a\u6bd4\u7f29\u653e\u5bb9\u5668\uff0c\u4f7f\u5bb9\u5668\u7684\u957f\u8fb9\u80fd\u5b8c\u5168\u663e\u793a\u51fa\u6765\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ef\u4ee5\u5b8c\u6574\u5730\u5c06\u5bb9\u5668\u663e\u793a\u51fa\u6765\u3002"},{value:"aspectFill",text:"\u4fdd\u6301\u7eb5\u6a2a\u6bd4\u7f29\u653e\u5bb9\u5668\uff0c\u53ea\u4fdd\u8bc1\u5bb9\u5668\u7684\u77ed\u8fb9\u80fd\u5b8c\u5168\u663e\u793a\u51fa\u6765\u3002"},{value:"widthFix",text:"\u5bbd\u5ea6\u4e0d\u53d8\uff0c\u9ad8\u5ea6\u81ea\u52a8\u53d8\u5316\uff0c\u4fdd\u6301\u539f\u56fe\u5bbd\u9ad8\u6bd4\u4e0d\u53d8\t"},{value:"heightFix",text:"\u9ad8\u5ea6\u4e0d\u53d8\uff0c\u5bbd\u5ea6\u81ea\u52a8\u53d8\u5316\uff0c\u4fdd\u6301\u539f\u56fe\u5bbd\u9ad8\u6bd4\u4e0d\u53d8\t"}]);var p=[{width:1920,height:1080,ratio:"16:9"},{width:1920,height:1200,ratio:"16:10"},{width:1200,height:1200,ratio:"1:1"},{width:1200,height:1920,ratio:"9:16"},{width:1080,height:1920,ratio:"10:16"}],u=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).myRef=i.a.createRef(),a.state={sizeIndex:0,modeIndex:0},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"onSizeChange",value:function(e){this.setState({sizeIndex:e.target.value})}},{key:"onModeChange",value:function(e){this.setState({modeIndex:e.target.value})}},{key:"onResize",value:function(){console.log("onResize");var e=this.myRef.current,t=this.state,a=t.sizeIndex,n=t.modeIndex,i=p[a],o=d[n];!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1920",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1080",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"aspectFit",i=e.parentElement,o=i.offsetWidth,s=i.offsetHeight,l=0,r=0,c=o/t,m=s/a;if("scaleToFill"===n);else{var h=1;"aspectFit"===n?h=Math.min(c,m):"aspectFill"===n?h=Math.max(c,m):"widthFix"===n?h=c:"heightFix"===n&&(h=m),c=h,m=h,l=(s-a*h)/2,r=(o-t*h)/2}var d="translate(".concat(r,"px, ").concat(l,"px) scale(").concat(c,", ").concat(m,")");e.style.width="".concat(t,"px"),e.style.height="".concat(a,"px"),e.style.MozTransition="transform 0.2s",e.style.webkitTransition="transform 0.2s",e.style.transition="transform 0.2s",e.style.MozTransformOrigin="left top",e.style.webkitTransformOrigin="left top",e.style.transformOrigin="left top",e.style.MozTransform=d,e.style.webkitTransform=d,e.style.transform=d}(e,i.width,i.height,o.value)}},{key:"render",value:function(){var e=this.state,t=e.sizeIndex,a=e.modeIndex;return i.a.createElement("div",{className:"App"},i.a.createElement("main",{className:"App-main",ref:this.myRef},i.a.createElement("div",{className:"App-item"},"top left"),i.a.createElement("div",{className:"App-item"},"top center"),i.a.createElement("div",{className:"App-item"},"top right"),i.a.createElement("div",{className:"App-item"},"center left"),i.a.createElement("div",{className:"App-item"},"center center"),i.a.createElement("div",{className:"App-item"},"center right"),i.a.createElement("div",{className:"App-item"},"bottom left"),i.a.createElement("div",{className:"App-item"},"bottom center"),i.a.createElement("div",{className:"App-item"},"bottom right")),i.a.createElement("div",{className:"App-option"},i.a.createElement("label",{htmlFor:"size"},"size: "),i.a.createElement("select",{name:"size",value:t,onChange:this.onSizeChange.bind(this)},p.map(function(e,t){return i.a.createElement("option",{value:t,key:t},e.width,"*",e.height," (",e.ratio,")")})),i.a.createElement("label",{htmlFor:"mode"},"mode: "),i.a.createElement("select",{name:"mode",value:a,onChange:this.onModeChange.bind(this)},d.map(function(e,t){return i.a.createElement("option",{value:t,key:t},e.value)})),i.a.createElement("div",null,d[a].text)))}},{key:"componentDidUpdate",value:function(){this.onResize()}},{key:"componentDidMount",value:function(){var e=this;this.onResize();var t=null;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(function(){e.onResize()},100)})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.72d2152d.chunk.js.map