!function(a){var r={};function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=a,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=5)}([,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,a,r){if(void 0===a&&(a=""),void 0===r&&(r=-1),-1===t.constructor.toString().indexOf("Array"))-1<r?$(t).eq(r)[e](a):$(t)[e](a);else for(var s=0,c=t.length;s<c;s++)void 0===t[s][2]&&(t[s][2]=-1),-1<t[s][2]?$(t[s][0]).eq(t[s][2])[e](t[s][1]):$(t[s][0])[e](t[s][1])};t.html=function(e,t,a){r("html",e,t,a)},t.attr=function(e,t,a){r("attr",e,t,a)},t.css=function(e,t,a){r("css",e,t,a)}},,,,function(e,t,a){a(6),e.exports=a(11)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),s=a(8),c=a(9),n=a(1),d=n.css,i=n.attr,u=a(10),f=[],p=[],o=r,h=[],g=[],l=s,b=[],m=[],M=c;for(var v in r)f.push(o[v]),r.hasOwnProperty(v)&&p.push("#"+v);for(var v in s)h.push(l[v]),s.hasOwnProperty(v)&&g.push("#"+v);for(var v in c)b.push(M[v]),c.hasOwnProperty(v)&&m.push("#"+v);var y=function(e,t){var a=+$(".menu-bar p.X span:eq(0)").html()/100,r=+$(".menu-bar p.sm.num span:eq(0)").html()/100,s=+$("input#eyesScale").val()/100,c=($("#eye_Left").position().left-$("#avatar").offset().left)/$("#avatar").width()*1024+80,n=($("#eye_Right").position().left-$("#avatar").offset().left)/$("#avatar").width()*1024+80,o=($("#eye_Right").position().top-$("#avatar").offset().top)/$("#avatar").height()*1024+48;return 0<t?n+=e*n*.15:(c=1024-c,n=1024-n),i([["#headClip, #headClip2, #headClip3, #headClip4",{d:$("#head").attr("d")}],["#noseClip",{d:$("#nose").attr("d")}],["#eyeClip_Left",{d:$("#eye_Left").attr("d")}],["#eyeClip_Right",{d:$("#eye_Right").attr("d")}],["#earClip_Right",{d:$("#ear_Right").attr("d")}],["#earClip_Right2",{d:$("#ear_Right_Front").attr("d")||$("#ear_Right").attr("d")}],["#eyeIris_Left",{cx:c-6,cy:o,rx:7.5*s+"%",ry:13.5*s+"%"}],["#eyePupil_Left",{cx:c-6+6*a-15*s,cy:o,rx:6*a*s+"%",ry:10*r*s+"%","transform-origin":c-21+"px "+o+"px"}],["#eyeGlare_Left",{cx:c-21,cy:o,rx:"3%",ry:"5.5%"}],["#eyeGlare2_Left",{cx:c-21,cy:o,rx:"1.25%",ry:"2%"}],["#eyeIris_Right",{cx:n+8,cy:o,rx:7.5*s+"%",ry:13.5*s+"%"}],["#eyePupil_Right",{cx:n+8-6*a+15*s,cy:o,rx:6*a*s+"%",ry:10*r*s+"%","transform-origin":n+23+"px "+o+"px"}],["#eyeGlare_Right",{cx:n+23,cy:o,rx:"3%",ry:"5.5%"}],["#eyeGlare2_Right",{cx:n+23,cy:o,rx:"1.25%",ry:"2%"}]]),d([["#eyeGlare_Left",{"transform-origin":c-21+100+"px "+(o-65)+"px"}],["#eyeGlare2_Left",{"transform-origin":c-21+"px "+o+"px"}],["#eyeGlare_Right",{"transform-origin":n+23+100+"px "+(o-65)+"px"}],["#eyeGlare2_Right",{"transform-origin":n+23+"px "+o+"px"}]]),$("#eyeGlare_Left").parent("g").css({transform:"scale("+-t+", 1)","transform-origin":c-21+"px "+o+"px"}),$("#eyeGlare_Right").parent("g").css({transform:"scale("+-t+", 1)","transform-origin":n+23+"px "+o+"px"}),e},k=function(o,i){void 0===o&&(o=0),void 0===i&&(i=0);var e,t,a=function(e,t,a){isNaN(e)&&(e=p.indexOf("#"+e));var r="",s=Math.round(10*a)/900,c=u.interpolate([f[e][t],f[e][t-1]],{precision:1});switch(e){case 2:r="chin";break;case 4:r="nose";break;case 18:r="jaw";break;default:r=""}if(0<r.length)var n=u.interpolate([b[0][r][t],b[0][r][t-1]],{precision:1}),o=u.interpolate([c(s),n(s)],{precision:1});switch(e){case 2:case 4:case 18:$(p[e]).attr("d",o(R.jaw_Open/100));break;case 5:case 7:0<=i&&0===l?($(p[e]).attr("d",""),$(p[e]+"_Front").attr("d",c(s))):($(p[e]).attr("d",c(s)),$(p[e]+"_Front").attr("d",""));break;case 6:case 8:i<0&&l<22.5?($(p[e]).attr("d",c(s)),$(p[e]+"_Front").attr("d","")):($(p[e]).attr("d",""),$(p[e]+"_Front").attr("d",c(s)));break;default:$(p[e]).attr("d",c(s))}},r=function(e,t,a,r){isNaN(e)&&(e=g.indexOf("#"+e));var s,c=Math.round(10*a)/900,n=(s=h[e][r].main,0<o?u.interpolate([s[t],s[t-1]],{precision:1}):u.interpolate([s[t],s[t+1]],{precision:1}));switch(r){case"tail":0<o||-45<o&&o<=0||"Spiky to side"===O||"Curly ends"===O?($("g.HairBack #tail").attr("d",n(c)),$("g.HairBack2 #tail").attr("d","")):($("g.HairBack #tail").attr("d",""),$("g.HairBack2 #tail").attr("d",n(c)));break;case"back":2!==e&&3!==e?o<0?($("g.HairBack3 #back").attr("d",n(c)),$("g.Hair #back").attr("d","")):($("g.HairBack3 #back").attr("d",""),$("g.Hair #back").attr("d",n(c))):($("g.HairBack3 #back").attr("d",n(c)),$("g.Hair #back").attr("d",""));break;case"front":1===e?0<o?($("g.Hair #front").attr("d",n(c)),$("g.Hair2 #front").attr("d","")):($("g.Hair2 #front").attr("d",n(c)),$("g.Hair #front").attr("d","")):($("g.Hair #front").attr("d",n(c)),$("g.Hair2 #front").attr("d",""));break;default:return}},l=o<0?-o:o;a("head",1,l),a("head2",1,l),32.5<=l?(e=1.55*(l-32.5),t=1):l<=32.5&&25<l?(e=12.55*(l-25),t=2):l<=25&&(e=3.67*l,t=3),a("chin_angle",t,e),l<=25&&15<l?(e=9.1*(l-15),t=3):l<=15&&(e=0,t=3),a("chin",t,e),l<15&&(e=6*l,t=4),console.log(e,l,t),a("bridge",t,e),a("nose",t,e),a("mouth",t,e),a("nostril_left",t,e),a("nostril_right",t,e),t=45<=l?(e=2*(l-45),1):(e=2*l,2);for(var s=5;s<13;)a(s<=8?s:s+2,t,e),s++;a("eye_Left",t=30<=l?(e=1.5*(l-30),1):(e=3*l,2),e),a("eye_Right",t,e),t=45<=l?(e=2*(l-45),0<o?1:3):(e=2*l,2),r(O,t,e,"front"),"Big Bang"!==O?r(O,t,e,"tail"):$("g.HairBack #tail, g.HairBack2 #tail").attr("d",""),"Float"!==O&&"Big Bang"!==O?r(O,t,e,"back"):$("g.Hair #back, g.HairBack3 #back").attr("d","")},_=1,x=30/90,z=0,w=function(e,t){var a=e/($("#avatar").width()/2),r=t/($("#avatar").height()/1.5);z=.33<r?.33:r<-.66?-.66:-.03<r&&r<.03?0:r;var s=(x=1<a?1:a<-1?-1:-.03<a&&a<.03?0:a)<0?-x:x,c=Math.pow(1-s,10),n=180*Math.atan2(s,z)/Math.PI,o=90*x-n*x;_=0<x?1:-1,a<0&&(o=-o),30<o?o=30:o<-30&&(o=-30),k(90*x,90*z),d([[".move, #eyeClip_Left, #eyeClip_Right",{transform:"translate(0, "+12*z*c+"%)"}],[".Head",{transform:"scale("+_+", 1) rotate("+o+"deg)"}],["#headClip",{transform:"translate(0, "+12*-z*c+"%)"}],[".moveEar",{transform:"translate(0, "+4*-z*c+"%)"}],[".moveEarClip",{transform:"translate(99%, "+6*-z*c+"%) scale(-1, 1)"}],[".Neck",{transform:"scale("+_+", 1)"}]]);var i=0<=z?22*z:6*z,l=0<=z?1+z/2*c:1+(.25-(1-z)/4)*c;$(".Hair, .Hair2").css("transform","Spiky to side"!==O&&"Big Bang"!==O?0<=x?"rotate("+o+"deg) translate(0, "+i*c+"%) scale(1, "+l+")":"rotate("+-o+"deg) translate(0, "+i*c+"%) scale(1, "+l+")":0<x?"rotate("+o+"deg) translate(0, "+i*c+"%) scale(-1, "+l+")":"rotate("+-o+"deg) translate(0, "+i*c+"%) scale(1,  "+l+")"),$(".HairBack3").css("transform","Spiky to side"!==O&&"Big Bang"!==O?"translate(0, "+i*c+"%) scale(-1, "+l+")":"translate(0, "+i*c/5+"%) scale(-1, 1)"),"Spiky to side"===O||"Big Bang"===O?$(".HairBack, .HairBack2").css("transform",0<x?"rotate("+o/3+"deg) scale(-1, 1)":"rotate("+-o/3+"deg) scale(1,  1)"):$(".HairBack, .HairBack2").css("transform",""),y(x,_)},H=0,S=0,B=0,q=.3333,C=0,O="Spiky to side",R={jaw_Open:0,sad:0};k(30),y(1,1),$("body").mousedown(function(e){if("menu-back"!==e.target.id&&"transition"!==$(e.target).attr("class")||"slider"!==e.target.id&&"info"!==$(e.target).parent().attr("class"))if("avatar"===e.target.id&&"transition"===$(e.target).attr("class")&&void 0===$(e.target).parent().attr("class"))switch(e.which){case 1:default:S=e.pageX,B=e.pageY,H=1}else{if("sliderBox"!==e.target.id)return;switch(e.which){case 1:default:S=e.pageX,B=e.pageY,H=2}}}).mouseup(function(e){switch(e.which){case 1:default:H=0}}).mousemove(function(e){if(1===H){var t=e.pageX,a=e.pageY;q+=t-S,C+=3*(a-B);var r=Math.abs(q)/($("#avatar").width()/2),s=Math.abs(C)/($("#avatar").height()/1.5);return 1<r&&(q=0<q?$("#avatar").width()/2:-$("#avatar").width()/2),1<s&&(C=0<C?$("#avatar").height()/1.5:-$("#avatar").height()/1.5),w(q,C),S=t,B=a,{resultX:q,resultY:C}}2===H&&y(x,_)}),window.addEventListener("touchmove",function(e){var t=e.touches[0].pageX,a=e.touches[0].pageY;q+=t-S,C+=3*(a-B);var r=Math.abs(q)/($("#avatar").width()/2),s=Math.abs(C)/($("#avatar").height()/1.5);return 1<r&&(q=0<q?$("#avatar").width()/2:-$("#avatar").width()/2),1<s&&(C=0<C?$("#avatar").height()/1.5:-$("#avatar").height()/1.5),w(q,C),S=t,B=a,{resultX:q,resultY:C}}),$("input#eyesScale").mousedown(function(){$("input#eyesScale").mousemove(function(){y(x,_),$(".menu-bar:eq(0) p span#number:eq(0)").html($("input#eyesScale").val().toString())})}),$("input#jawOpen").mousedown(function(){$("input#jawOpen").mousemove(function(){R.jaw_Open=+$("input#jawOpen").val(),k(90*x,90*z),y(x,_),$(".menu-bar:eq(3) p span#number").html($("input#jawOpen").val().toString())})}),$(".MM-block").mousedown(function(e){0!==$(e.target).children().eq(0).text().length&&(O=$(e.target).children().eq(0).text(),$("#menu .menu-bar p.name").html(O),w(q,C))}),$("#menu .menu-bar p.name").html(O)},function(e){e.exports={head:["M252,512a260,260 0 1,0 520,0a260,260 0 1,0 -520,0","M267,512a245,260 0 1,0 490,0a245,260 0 1,0 -490,0"],bridge:["M752 601c19 26 60 17 61 43","M717 611c18 24 75 10 76 36","M665 603c21 17 71 9 60 44","M589 604c10-11 45 0 56 10","M489 603c10-10 40-9 51 0"],chin:["M813 644c0 9-4 33-21 60v1c-56 88-180 80-280 66","M793 647c0 11-4 44-38 73v1c-48 43-158 56-243 50","M725 647c-7 10-18 26-34 44v1c-75 70-127 80-179 80","M722 647c-6 10-16 26-32 44-58 62-112 81-178 81"],chin_angle:["M513 772s0 0 0 0","M513 772s0 0 0 0","M513 772s0 0 0 0","M513 772s-43 0-93-19"],nose:["M510 763s198 55 278-61l1-1c9-14 15-31 19-50 5-32-51-24-66-53-151-57-232 165-232 165z","M510 765s186 24 250-54l1-1c14-15 23-33 28-56 5-32-65-14-80-43-144-44-199 154-199 154z","M510 765s107 10 189-90v-1l19-27c14-32-41-18-61-42-101 10-147 160-147 160z","M510 765s103 9 129-95v-1c3-14 5-30 5-49-27-14-27-14-56-10-113 77-78 155-78 155z","M510 765s40-6 51-46c5-16 5-39-5-70-4-11-9-24-16-38-26-11-26-11-51 0-71 142 21 154 21 154z"],ear_Left:["M378 357c1-57-3-133-61-155-65 0-84 164-84 164","M575 341c11-62 3-166-40-166-72 9-77 140-77 140","M759 494c53-45 24-262-63-280-54 15-47 82-47 82"],ear_Right:["M255 479c-49-55-16-265 62-277 61 3 61 155 61 155","M260 501c-81-46-16-279 62-291 56 8 50 147 50 147","M266 494c-53-45-24-262 63-280 54 15 47 82 47 82"],ear_Left_Inside:["M378 357c1-57-3-133-61-155-65 0-84 164-84 164z","M575 341c11-62 3-166-40-166-72 9-77 140-77 140z","M759 494c53-45 24-262-63-280-54 15-47 82-47 82z"],ear_Right_Inside:["M255 479c-49-55-16-265 62-277 61 3 61 155 61 155z","M260 501c-81-46-16-279 62-291 56 8 50 147 50 147z","M266 494c-53-45-24-262 63-280 54 15 47 82 47 82z"],eye_Left:["M810 554c0 68-10 123-23 123s-23-55-23-123 10-123 23-123 23 55 23 123z","M820 554c0 68-26 123-59 123-32 0-58-55-58-123s26-123 58-123 59 55 59 123z","M735 550c-7 81-49 143-94 140-44-4-74-73-67-154s48-143 93-139c44 4 75 72 68 153z"],eye_Right:["M650 502c28 76 7 154-48 174s-119-26-147-102-7-155 47-174 120 26 148 102z","M618 520c28 77 7 154-48 174s-119-26-147-102-7-155 47-174 120 26 148 102z","M450 535c7 81-24 149-68 153-45 4-86-58-93-139s23-150 67-154c45-3 87 59 94 140z"],neck:["M535 771c9 177-14 236-14 236S413 872 267 880c35-75 47-162 22-235l246 126z","M494 773c18 125-1 243-1 243S354 878 239 883c11-24 75-105 60-232l195 122z","M605 753c7 118 22 130 22 130s-115-18-230 0c-8 1 25-21 23-130h185z"],neck_back_right:["M267 881c31-63 51-156 21-236","M239 883c51-83 67-134 60-232","M397 883c4-7 25-21 23-130"],neck_front_left:["M521 1008s22-57 14-237","M493 1016s18-59 2-242","M627 883s-15-12-22-130"],chest:["M525 971a145 145 0 1 1-290 0c0-80 65-144 145-144s145 64 145 144z","M499 971a145 145 0 1 1-290 0c0-80 65-144 145-144s145 64 145 144z","M657 971a145 145 0 1 1-290 0c0-80 65-144 145-144s145 64 145 144z"],head2:["M267,512a245,245 0 1,0 490,0a245,245 0 1,0 -490,0","M282,512a230,245 0 1,0 460,0a230,245 0 1,0 -460,0"],nostril_left:["M874 654s-8 8-16 9","M856 654s-8 8-16 9","M757 650s-5 6-13 7","M640 636s0 8-8 9","M550 632s0 8-8 9"],nostril_right:["M771 654s6 8 14 9","M744 654s6 8 14 9","M684 643s3 8 11 9","M584 632s0 8 8 9","M474 632s0 8 8 9"],mouth:["M731 698s15 21 48 21c35 0 50-21 50-21s-15 20-49 20c-33 0-49-20-49-20z","M701 697s15 21 48 21c35 0 50-21 50-21s-15 20-49 20c-33 0-49-20-49-20z","M616 680s15 21 48 21c35 0 50-21 50-21s-15 20-49 20c-33 0-49-20-49-20z","M557 662s9 23 39 28c31 6 47-12 47-12s-16 17-47 12c-29-5-39-28-39-28z","M463 680s15 21 48 21c35 0 50-21 50-21s-15 20-49 20c-33 0-49-20-49-20z"]}},function(e){e.exports={Float:{front:{main:["M736 186c-108 0-207-10-360 78 22 101 38 162 36 263 156-106 333-116 569-116-14-48-79-225-245-225z","M701 202c-108 0-224 36-334 42 42 97 47 152 36 261 271-85 353-57 561-9 4-51-13-294-263-294z","M654 252c-96-7-160-67-278-67-109 0-233 87-223 327 274-159 430 24 624-92 1-52-34-168-123-168z","M658 244c-97-7-216-42-334-42-109 0-263 56-263 294 283-74 366-49 562 10a290 290 0 0 1 35-262z","M649 264c-76-42-233-78-351-78-109 0-229 88-284 225 181 0 401-27 599 116-9-130 9-157 36-263z"],second:[],addition:[]},tail:{main:["M284 574s91 179 94 244c19 137 271 261 271 261s12-85 0-306c-65-94-290-92-365-199z","M324 588s67 165 54 230c-36 134 221 252 221 252s22-73 10-294c-60-107-210-81-285-188z","M704 494s21 200-102 259c-36 134 118 319 118 319s61-5 49-226c-32-135-61-201-65-352z","M730 488s-8 193-92 273c-49 136 85 315 85 315s120-13 108-234c-45-139-97-203-101-354z","M766 488s-32 245-168 292c-49 136 80 303 80 303s155-23 143-244c-45-139-51-200-55-351z"],second:[],addition:[]}},"Curly ends":{front:{main:["M349 180S928-17 793 335c-36 76-88 133-88 133l-23 26","M352 96S843-51 687 299c-32 63-109 55-109 55s-14-31-80 8","M253 159S637-28 710 354c-94-130-197 0-197 0s-104-60-195 0","M229 197S655 23 702 340c-249-62-335 112-335 112s-52-67-79-44","M183 165S651-48 717 352c-290-168-399 2-399 2s-20 24-30 54"],second:[],addition:[]},back:{main:["M349 180s-139 36-105 509c16 229 56 264 165 379 154 163 377-26 165-111 21 51 65 114 0 87-43-18-133-148-78-272 68-154 186-278 186-278","M352 96S6 223 7 690c0 216 104 384 203 477 163 153 379-86 199-157 47 49 25 133-67 52-42-37-53-188-44-347 14-259 200-353 200-353","M253 159S13 278 157 584c91 194 96 245 90 381-7 158-131 61-40 17-100-1-114 117 37 148 80 16 131-164 50-460-73-265 24-316 24-316","M229 197S13 315 48 521c39 229 262 299 271 447 10 175-243 101-75 15-73-55-219 74-29 157 179 78 335-111 256-410-19-71-104-278-104-278","M183 165S-40 236 28 521c53 226 245 303 239 450-8 192-276 72-108-14-73-55-168 115 21 199 167 74 295-141 263-430-8-73-143-366-143-366"],second:[],addition:[]},tail:{main:["M637 479s-112 77 102 364c191 256 152 480-22 569-258 98-222-206-138-121-23-44-44 56 7 78 0 0 122 6-32-309-249-507 83-581 83-581z","M663 354s-195 57 25 361c187 259 146 519-25 569-258 98-220-236-104-98-23-44-73 30-22 52 0 0 166 12-11-410-202-482 137-474 137-474z","M690 383s124-159 126 156c1 279-200 587-77 614 83 9 64-102 1-69 83-135 178 141-73 141 0 0-185 0-79-416 84-334 102-426 102-426z","M694 374s135-142 174 170c39 313-237 635-62 714 39 15 55-85-8-52 122-137 134 230-104 98 0 0-285-199-72-499 259-366 72-431 72-431z","M694 374s105-157 161 194c66 414-288 672-148 791 58 48 91-101 28-68 113-66 74 247-177 101 0 0-259-183 28-564 269-359 108-454 108-454z"],second:[],addition:[]}},"Spiky to side":{front:{main:["M652 302s-139 15-211 59c9-72 106-91 106-91s-293 8-529 261c44-223 287-311 287-311s-166 46-196 67c106-145 269-159 269-159s-41-26-73-25a297 297 0 0 1 360 130","M652 302s-168 58-178 85c-7-70 53-92 53-92S283 283 69 539C54 330 288 245 288 245s-165 45-195 66c94-152 243-164 243-164s-66-21-109-9c289-117 438 95 438 95","M652 302s-74 49-84 76c4-60 42-93 42-93s-190-55-384 241c-30-216 113-304 113-304s-117 39-147 60c94-152 205-113 205-113s-86-31-129-19c289-117 397 83 397 83","M652 302s-168 58-178 85c-7-70 53-92 53-92S283 283 69 539C54 330 288 245 288 245s-165 45-195 66c94-152 243-164 243-164s-66-21-109-9c289-117 438 95 438 95","M652 302s-139 15-211 59c9-72 106-91 106-91s-293 8-529 261c44-223 287-311 287-311s-166 46-196 67c106-145 269-159 269-159s-41-26-73-25a297 297 0 0 1 360 130"],second:[],addition:[]},back:{main:["M352 317S18 354 46 931c4-94 138-228 138-228S84 982 314 1159c-16-148 37-208 37-208s31 60 97 99c-28-74 20-180 20-180s10 47 55 56c-12-52-10-74-10-74s39 49 73 49c-26-41-32-72-32-72s27 5 59 2c-44-65-262-123-262-123s-137-141 1-391z","M352 317S-58 354 51 924c4-94 76-210 76-210s-65 249 165 426c-44-152-19-194-19-194s23 57 97 92c-31-73-14-177-14-177s11 54 53 68c-12-52 0-82 0-82s28 36 62 36c-26-41-28-65-28-65s26 8 58 5c-44-65-150-115-150-115s-137-141 1-391z","M349 233S73 222 174 919c1-96 46-193 46-193s-72 240 165 339C276 939 276 899 276 899s29 50 102 59c-59-89-59-124-59-124s22 42 59 42c-36-41-34-58-34-58s10 13 48 6c-34-33-24-45-24-45s3 3 35 0c-46-50-52-71-52-71s-164-165-2-475z","M352 317S-58 354 51 924c4-94 76-210 76-210s-65 249 165 426c-44-152-19-194-19-194s23 57 97 92c-31-73-14-177-14-177s11 54 53 68c-12-52 0-82 0-82s28 36 62 36c-26-41-28-65-28-65s26 8 58 5c-44-65-150-115-150-115s-137-141 1-391z","M352 317S18 354 46 931c4-94 138-228 138-228S84 982 314 1159c-16-148 37-208 37-208s31 60 97 99c-28-74 20-180 20-180s10 47 55 56c-12-52-10-74-10-74s39 49 73 49c-26-41-32-72-32-72s27 5 59 2c-44-65-262-123-262-123s-137-141 1-391z"],second:[],addition:[]},tail:{main:["M735 432s51 99-18 246c0 0-5 38-52 67 46 8 71-30 71-30s4 57-54 108c82-13 104-140 104-140s25 96 13 149c47-39 44-176 44-176s28 36 38 93c78-159-62-354-105-394l-41 77z","M751 431s35 124-54 263c0 0-21 42-43 72 37 19 69-48 69-48s7 70-17 114c42 6 62-145 62-145s30 78 18 131c47-39 35-164 35-164s36 17 46 74c26-57-41-325-84-365l-32 68z","M730 431s35 160-76 292c0 0-22 27-48 41 26 7 81-32 81-32l-54 100c42 6 93-118 93-118s4 48-8 101c47-39 67-151 67-151s10 10 20 67c26-57 3-312-41-353 1 1-34 53-34 53z","M751 431s35 124-54 263c0 0-21 42-43 72 37 19 69-48 69-48s7 70-17 114c42 6 62-145 62-145s30 78 18 131c47-39 35-164 35-164s36 17 46 74c26-57-41-325-84-365l-32 68z","M735 432s51 99-18 246c0 0-5 38-52 67 46 8 71-30 71-30s4 57-54 108c82-13 104-140 104-140s25 96 13 149c47-39 44-176 44-176s28 36 38 93c78-159-62-354-105-394l-41 77z"],second:[],addition:[]}},"Big Bang":{front:{main:["M725 321s-267 40-380 221c0 0-6-64 31-119-38-7-126 207-386 176 164-75 136-272 198-337-46 10-100 64-100 64s15-132 261-134c-78-38-201-23-201-23S351 23 725 321z","M720 327s-215 58-316 217c0 0-34-58 10-114-31 1-197 206-315 200 135-110 55-266 140-370-64 42-90 90-90 90s0-148 234-151c-80-30-192-4-192-4S446 49 720 327z","M697 289S537 445 397 542c0 0 87-77 84-138-30 2-220 124-291 243-27-85-42-194 49-294-79 24-102 91-102 91s50-230 232-254c-81-15-177-8-177-8S485 36 697 289z","M720 327s-215 58-316 217c0 0-34-58 10-114-31 1-197 206-315 200 135-110 55-266 140-370-64 42-90 90-90 90s0-148 234-151c-80-30-192-4-192-4S446 49 720 327z","M725 321s-267 40-380 221c0 0-6-64 31-119-38-7-126 207-386 176 164-75 136-272 198-337-46 10-100 64-100 64s15-132 261-134c-78-38-201-23-201-23S351 23 725 321z"],second:[],addition:[]},tail:{main:["M410 827s208-36 267-121l80-194c177 513-203 367-299 566-80-44-13-168-13-168s-91 68-67 154c-175-181 32-237 32-237z","M501 804s117-14 176-99l81-150c71 312-152 328-185 516-82-20-48-149-48-149s-77 58-65 138c-155-204 41-256 41-256z","M566 805s52-15 111-100l68-110c40 122-98 350-78 476-82-20-61-155-61-155s-54 58-42 138c-144-201 2-249 2-249z","M501 804s117-14 176-99l81-150c71 312-152 328-185 516-82-20-48-149-48-149s-77 58-65 138c-155-204 41-256 41-256z","M410 827s208-36 267-121l80-194c177 513-203 367-299 566-80-44-13-168-13-168s-91 68-67 154c-175-181 32-237 32-237z"],second:[],addition:[]}},Other:["M373 298s-156 56-91 423c27 12 72-17 74-16 0 0 13 20 13 67 28-2 61-37 61-37s16 40 30 94c17-24 55-49 55-49s28 60 42 153c38-38 42-69 42-69s33 27 78 153c93-113 23-358 23-358s86 81 135 186c7-92-49-259-49-259S685 126 373 298z","M475 277S208 161 262 696c4 17 9 30 11 31 0 0-5 26 14 75-8-15 4-10 4-10s7 33 37 65c-10-26-1-31-1-31s51 159 93 173c-12-52 0-49 0-49s57 151 95 144c-41-95-95-409-95-409s62 160 109 208c-8-75-46-261-46-261s-40-192-8-355z"]}},function(e){e.exports={open:{jaw:["M723 672s-35 94 4 101c49 9 107-75 107-75l-25 4c-42 23-86-30-86-30z","M701 702s-14 67 34 67c50 0 64-73 64-73s-15 21-50 21c-32 0-48-15-48-15z","M616 679s4 74 52 74c50 0 52-70 52-70s-9 17-44 17c-32 0-60-21-60-21z","M557 662s-22 62 24 74c48 13 63-59 63-59s-16 19-49 10c-32-8-38-25-38-25z","M463 680s0 71 48 71c50 0 50-71 50-71s-15 20-49 20c-33 0-49-20-49-20z"],chin:["M813 644c0 10 0 43-18 59-4 4-63 24-67 70-49 15-77 18-216-2","M793 647c0 5-8 52-44 70a72 72 0 0 0-21 52c-37 32-80 12-216 2","M725 647c-4 6-9 35-28 48-20 15-31 42-34 56-35 27-86 21-151 21","M722 647c-6 10-16 26-32 44-8 9-36 35-53 46-37 24-59 35-125 35"],nose:["M510 763s123 42 218 9c1-30 39-59 66-68 17-18 15-36 14-53 5-32-51-24-66-53-151-57-232 165-232 165z","M510 765s196 47 218 3c4-8 4-40 21-52 37-25 36-43 40-62 5-32-65-14-80-43-144-44-199 154-199 154z","M510 765s87 28 153-15c5-25 16-41 37-58 16-13 16-34 18-45 5-34-41-18-61-42-101 10-147 160-147 160z","M510 765s53 9 92-27c16-15 30-36 37-69 3-14 5-30 5-49-27-14-27-14-56-10-113 77-78 155-78 155z","M510 765s40-6 51-46c5-16 5-39-5-70-4-11-9-24-16-38-26-11-26-11-51 0-71 142 21 154 21 154z"]},sad:{jaw:["M725 733s21-14 54-14c35 0 45 26 45 26s-10-27-44-27c-33 0-55 15-55 15z","M799 744s-15-27-49-27c-33 0-49 14-49 14","M604 721s27-20 60-20c35 0 46 37 46 37s-11-38-45-38c-33 0-61 21-61 21z","M544 704s22-19 52-13c31 5 31 27 31 27s0-22-31-28c-29-5-52 14-52 14z","M463 721s15-20 48-20c35 0 50 19 50 19s-15-20-49-20c-33 0-49 21-49 21z"]}}},function(e,t){e.exports=polymorph},function(e,t,a){var r=a(1),c=r.html,n=r.css,o=r.attr,s=a(12),d=a(13),i=function(e){var t=e.replace(/[^\d,]/g,"").split(","),a=t[0],r=t[1],s=t[2];a/=255,r/=255,s/=255;var c,n,o=Math.max(a,r,s),i=Math.min(a,r,s),l=(o+i)/2;if(o==i)c=n=0;else{var d=o-i;switch(n=.5<l?d/(2-o-i):d/(o+i),o){case a:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-a)/d+2;break;case s:c=(a-r)/d+4}c/=6}return[c,n,l]},l=0,u=function(){o([["#menu-button #button",{fill:"#fff"}],["#menu-button #bars path",{fill:"#333"}]]),n([["#menu-circle",{transform:"translate(50%, 50%) scale(0)"}],[".menu-bar #title #arrowDown",{transform:"translate(-50%, -50%) scale(1)",opacity:1}],[".menu-bar #title #close",{transform:"translate(-80%, -50%) scale(0)",opacity:0}]]),d(".menu-bar *").not("#title, #title *").css({opacity:0})},f=function(e){void 0===e&&(e=0),n([["#menu",{"pointer-events":"none"}],[".menu-bar",{top:"-30vmin",opacity:0,"padding-bottom":"0",height:"6vmin","pointer-events":"none"}]]),0<e&&(n([["#menu-button #close",{transform:"scale(0)",opacity:0}],["#menu-button #bars",{transform:"scale(1)",opacity:1}]]),setTimeout(function(){o("#menu-back",{r:"0%"}),n("#avatar",{left:"50%"})},250))},p=function(){o("#menu svg",{preserveAspectRatio:"none"}),s({targets:"#mask_Menu path",d:[{value:["M-400 0c108 255 108 545 0 800h625V0h-625z","M10 0c0 255 0 545 0 800h625V0h-625z"]}],easing:"easeInOutQuart",duration:250}),n(".MM-block",{right:"-150%"})},h=0,g=100,b=50,m=100,M=function(e,t){var a=e-(d("#color_pallete #body").offset().left+d("#color_pallete #body").width()/2),r=d("#color_pallete #body").offset().top+d("#color_pallete #body").height()/2-t,s=180*Math.atan2(a,r)/Math.PI;o("#body #color",{"stop-color":"hsl("+(h=s)+", 100%, 50%)"}),n([["#color_circle",{transform:"translate(-50%, -1075%) rotate("+s+"deg)"}],["#color_pallete #color",{background:"hsl("+h+", "+g+"%, "+b+"%)"}]]),y("#color_pallete #color")},v=function(e,t){var a=(e-d("#body #box").offset().left)/d("#body #box").outerWidth(),r=(t-d("#body #box").offset().top)/d("#body #box").outerHeight(),s=1900*a-1e3,c=1900*r-1e3;1<a?(a=1,s=900):a<0&&(a=0,s=-1e3),1<r?(r=1,c=900):r<0&&(r=0,c=-1e3),m=-100*r+100,n([["#color_box",{transform:"translate("+s+"%, "+c+"%)"}],["#color_box circle",{stroke:.5<r?"#fff":"#000"}],["#color_pallete #color",{background:"hsl("+h+", "+(g=100*a)+"%, "+(b=15+.7*(-100*r+50*a*r-50*a+100))+"%)"}]]),y("#color_pallete #color")},y=function(e){var t,a,r,s,c=d(e).css("background-color").match(/\d+/g);switch(d(e).parents("#color_pallete").find("p.h").text()){case"fur":a=3;break;case"eyes":a=2;break;case"mane":a=1,t=".Hair #front, #back, .Head #hair_Front, .Hair2 #front, .HairBack #tail, .HairBack2 #tail, .HairBack3 #back"}switch(a){case 2:s=d(".menu-bar").eq(0),n([[".menu-bar:eq(0) #color",{background:d("defs #grad_Eyes #1").css("stop-color")}],["defs #grad_Eyes #1",{"stop-color":d(e).css("background-color")}],["defs #grad_Eyes #2",{"stop-color":"rgb("+c[0]/1.5+","+c[1]/1.5+","+c[2]/1.5+")"}]]),r=i(d("defs #grad_Eyes #1").css("stop-color")),h=360*r[0],g=100*r[1],b=100*r[2],s.find("#sliderBox svg > path").eq(0).css({stroke:d("defs #grad_Eyes #1").css("stop-color")}),s.find("p span#number:eq(0), p span#number:eq(1), p span#number:eq(2), #favColor, input#eyesScale").css({background:d("defs #grad_Eyes #1").css("stop-color")});break;case 1:s=d(".menu-bar").eq(1),o(t,{fill:d(e).css("background-color")}),n([[".menu-bar:eq(1) #color",{background:d(e).css("background-color")}],[t,{stroke:"rgb("+c[0]/1.5+","+c[1]/1.5+","+c[2]/1.5+")"}]]),s.find("#favColor").css({background:d(".Hair #front").css("fill")}),r=i(d(".Hair #front").css("fill")),h=360*r[0],g=100*r[1],b=100*r[2];break;case 3:s=d(".menu-bar").eq(2),d(".Head path, .Neck path").not(".inner, .inner2, .inner3, .HairBack3 #back, .eyes, #mouth").attr({fill:d(e).css("background-color")}).css({stroke:"rgb("+c[0]/1.5+","+c[1]/1.5+","+c[2]/1.5+")"}),o(".Neck .inner, .Head .inner2, .Head .inner3",{fill:d(e).css("background-color")}),n([[".Neck .inner, .Head .inner2, .Head .inner3",{stroke:d(e).css("background-color")}],["#mouth",{stroke:"rgb("+c[0]/1.5+","+c[1]/1.5+","+c[2]/1.5+")"}],[".menu-bar:eq(2) #color",{background:d(".Head #head").css("fill")}]]),s.find("#favColor").css({background:d(".Head #head").css("fill")}),r=i(d(".Head #head").css("fill")),h=360*r[0],g=100*r[1],b=100*r[2];break;default:return}},k=function(e,t,a){var r=(e-d("#menu #sliderBox").eq(a).offset().left)/d("#menu #sliderBox").eq(a).outerWidth(),s=1-(t-d("#menu #sliderBox").eq(a).offset().top)/d("#menu #sliderBox").eq(a).outerHeight();r<.35&&s<.35&&(s<r?r=.35:s=.35),1<r?r=1:r<0&&(r=0),1<s?s=1:s<0&&(s=0),c([["p span#number",Math.round(10+115*r),a+1],["p span#number",Math.round(10+115*s),a+2]]),n("#sliderBox #tapPoint",{transform:"translate("+(755*r-50)+"%, "+(-730*s+365)+"%)"},a)},_=0;d("#menu-button").click(function(e){switch(e.which){case 1:default:l=l<1?(n("#menu-circle",{transform:"translate(50%, 50%) scale(1)"}),o([["#menu-button #button",{fill:"#333"}],["#menu-button #bars path",{fill:"#fff"}]]),1):(u(),f(1),p(),0)}}),d("#menu-circle #menu-avatar").click(function(e){switch(e.which){case 1:default:o([["#menu-back",{r:"165%"}],["#menu-button #button",{fill:"#333"}],["#menu-button #bars path",{fill:"#fff"}]]),n([["#avatar",{left:"33%"}],["#menu-button #bars",{transform:"scale(0)",opacity:0}],["#menu-button #close",{transform:"scale(1)",opacity:1}],["#menu",{"pointer-events":"all"}]]),setTimeout(function(){n(".menu-bar",{top:"0",opacity:1,height:"6vmin","pointer-events":"all"})},250),u()}}),d("#menu_of_models").click(function(e){switch(e.which){case 1:default:t=0,f(),o("#menu svg",{preserveAspectRatio:"xMaxYMid meet"}),s({targets:"#mask_Menu path",d:[{value:["M10 0c0 255 0 545 0 800h625V0h-625z","M-400 0c108 255 108 545 0 800h625V0h-625z"]}],easing:"easeInOutQuart",duration:250}),n([["#avatar",{left:"30vmax"}],[".MM-block",{right:"-1%"}]]),d("body").mousewheel(function(e){(t+=3*e.deltaY)<0?t=0:t>8*(d(".MM-bar").length-1)&&(t=8*(d(".MM-bar").length-1)),d(".MM-bar").each(function(e){d(".MM-bar").eq(e).css({transform:"translate(-110%, -50%) rotate("+(8*e-t)+"deg)"})})})}var t}),d("#menu .mark-arrow").not("#favColor").click(function(e){switch(e.which){case 1:default:l=d((t=e).target).parents(".menu-bar"),a=function(e,t,a,r,s,c){if(l.css({height:e}),l.find("*").not("#title, #title *").css({opacity:t,"pointer-events":a}),l.find("#title #arrowDown").css({transform:"translate(-50%, -50%) scale("+r+")",opacity:r}),l.find("#title #close").css({transform:"translate(-50%, -50%) scale("+s+")",opacity:s}),l.index()!==d(".menu-bar").length){for(var n=l.find("#title").css("border-radius").match(/\S+/g),o=d(".menu-bar").eq(l.index()).find("#title").css("border-radius").match(/\S+/g),i=0;i<n.length;i++)n[i]=n[i].replace(/undefined/g,"0");for(i=0;i<o.length;i++)o[i]=o[i].replace(/undefined/g,"0");n.length<4&&(n[3]=0),o.length<4&&(o[3]=0),d(".menu-bar").eq(l.index()-1).find("#title").css({"border-radius":n[0]+" 0 0 "+c}),d(".menu-bar").eq(l.index()).find("#title").css({"border-radius":c+" 0 0 "+o[3]})}else n=l.find("#title").css("border-radius").match(/\S+/g),d(".menu-bar").eq(l.index()-1).find("#title").css({"border-radius":n[0]+" 0 0 1.5vmax"})},l.height()===d(t.target).parent().height()?a("",1,"",0,1,"1.5vmax"):a("6vmin",0,"none",1,0,"0")}var t,l,a}),u(),d("body").mousedown(function(e){if(0===d(e.target).index(".menu-bar #sliderBox")&&"sliderBox"===e.target.id)switch(e.which){case 1:default:_=3}else if("picker"===d(e.target).parent().attr("id"))switch(e.which){case 1:default:_=1}else{if("box"!==e.target.id)return;switch(e.which){case 1:default:_=2}}}).mouseup(function(e){switch(e.which){case 1:default:_=0}}).mousemove(function(e){switch(_){case 1:M(e.pageX,e.pageY);break;case 2:v(e.pageX,e.pageY);break;case 3:k(e.pageX,e.pageY,0)}}).click(function(e){switch(d(e.target).attr("id")){case"color":var t=/\S+/g.exec(d(e.target).parents(".menu-bar").find("#title p").text());!function(e){var t=[".Head #head","defs #grad_Eyes #1",".Hair #front"],a=0;switch(e){case"Mane":a=2;break;case"Eyes":a=1;break;case"Fur":a=0}var r=i(1===a?d(t[a]).css("stop-color"):d(t[a]).css("fill"));h=360*r[0],g=100*r[1],b=100*r[2],o("#body #color",{"stop-color":"hsl("+h+", 100%, 50%)"}),n([["#color_circle",{transform:"translate(-50%, -1075%) rotate("+h+"deg)"}],["#color_pallete #color",{background:"hsl("+h+", "+g+"%, "+b+"%)"}],["#color_box",{transform:"translate("+(19*g-1e3)+"%, "+(-19*m+900)+"%)"}],["#color_box circle",{stroke:m<50?"#fff":"#000"}]])}(t[0]),d("#color_pallete").css({top:"0%",opacity:1,"pointer-events":"all"}),d("#color_pallete p.h").text(t[0].toLowerCase());break;case"close":d(e.target).parents("#color_pallete").css({top:"-40vmax",opacity:0,"pointer-events":"none"});break;default:return}}),window.addEventListener("touchmove",function(e){switch(_){case 1:M(e.touches[0].pageX,e.touches[0].pageY);break;case 2:v(e.touches[0].pageX,e.touches[0].pageY);break;case 3:k(e.touches[0].pageX,e.touches[0].pageY,0)}}),d(".menu-bar").each(function(t){var e,a=/\S+/g.exec(d(".menu-bar").eq(t).find("#title p").text())[0],r=d(".menu-bar").eq(t).find("#color"),s=function(e){return d(".menu-bar").eq(t).find(e)};switch(a){case"Mane":r.css({background:d(".Hair #front").css("fill")}),s("#favColor").css({background:d(".Hair #front").css("fill")}),e=i(d(".Hair #front").css("fill")),h=360*e[0],g=100*e[1],b=100*e[2];break;case"Eyes":r.css({background:d("defs #grad_Eyes #1").css("stop-color")}),s("#favColor").css({background:d("defs #grad_Eyes #1").css("stop-color")}),e=i(d("defs #grad_Eyes #1").css("stop-color")),h=360*e[0],g=100*e[1],b=100*e[2],s("#sliderBox svg > path").eq(0).css({stroke:d("defs #grad_Eyes #1").css("stop-color")}),s("p span#number:eq(0), p span#number:eq(1), p span#number:eq(2)").css({background:d("defs #grad_Eyes #1").css("stop-color")}),s("input#eyesScale").css({background:d("defs #grad_Eyes #1").css("stop-color")});break;case"Fur":r.css({background:d(".Head #head").css("fill")}),s("#favColor").css({background:d(".Head #head").css("fill")}),e=i(d(".Head #head").css("fill")),h=360*e[0],g=100*e[1],b=100*e[2];break;default:return}}),d(".menu-bar *").not("#title, #title *").css({opacity:0}),n("#avatar",{bottom:0}),setTimeout(function(){d("#avatar").css({transition:"all .25s ease"})},1500),d(".menu-bar").each(function(e){d(".menu-bar").eq(e).find("*").not("#title, #title *").css({opacity:0,"pointer-events":"none"})})},function(e,t){e.exports=anime},function(e,t){e.exports=jQuery}]);