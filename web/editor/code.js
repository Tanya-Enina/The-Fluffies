!function(a){var s={};function r(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=a,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=jQuery},function(t,e,a){a(2),t.exports=a(7)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(3),r=a(4),c=a(5),f=a(0),d=a(6),u=[],p=[],o=s,h=[],g=[],n=r,m=[],i=[],l=c;for(var b in s)u.push(o[b]),s.hasOwnProperty(b)&&p.push("#"+b);for(var b in r)h.push(n[b]),r.hasOwnProperty(b)&&g.push("#"+b);for(var b in c)m.push(l[b]),c.hasOwnProperty(b)&&i.push("#"+b);var M=function(t,e){var a=f(".menu-bar p.X span:eq(0)").html()/100,s=f(".menu-bar p.sm.num span:eq(0)").html()/100,r=f("input#eyesScale").val()/100,c=(f("#eye_Left").position().left-f("#avatar").offset().left)/f("#avatar").width()*1024+80,o=(f("#eye_Right").position().left-f("#avatar").offset().left)/f("#avatar").width()*1024+80,n={left:(f("#eye_Left").position().top-f("#avatar").offset().top)/f("#avatar").height()*1024+48,right:(f("#eye_Right").position().top-f("#avatar").offset().top)/f("#avatar").height()*1024+48};return 0<e?o+=t*o*.15:(c=1024-c,o=1024-o),f("#headClip, #headClip2, #headClip3, #headClip4").attr("d",f("#head").attr("d")),f("#noseClip").attr("d",f("#nose").attr("d")),f("#eyeClip_Left").attr("d",f("#eye_Left").attr("d")),f("#eyeClip_Right").attr("d",f("#eye_Right").attr("d")),f("#eyeIris_Left").attr({cx:c-6,cy:n.left,rx:7.5*r+"%",ry:13.5*r+"%"}),f("#eyePupil_Left").attr({cx:c-6+6*a-15*r,cy:n.left,rx:6*a*r+"%",ry:10*s*r+"%","transform-origin":c-21+"px "+n.left+"px"}),f("#eyeGlare_Left").attr({cx:c-21,cy:n.left,rx:"3%",ry:"5.5%"}).css({"transform-origin":c-21+100+"px "+(n.left-65)+"px"}),f("#eyeGlare2_Left").attr({cx:c-21,cy:n.left,rx:"1.25%",ry:"2%"}).css({"transform-origin":c-21+"px "+n.left+"px"}),f("#eyeGlare_Left").parent("g").css({transform:"scale("+-e+", 1)","transform-origin":c-21+"px "+n.left+"px"}),f("#eyeIris_Right").attr({cx:o+8,cy:n.right,rx:7.5*r+"%",ry:13.5*r+"%"}),f("#eyePupil_Right").attr({cx:o+8-6*a+15*r,cy:n.right,rx:6*a*r+"%",ry:10*s*r+"%","transform-origin":o+23+"px "+n.right+"px"}),f("#eyeGlare_Right").attr({cx:o+23,cy:n.right,rx:"3%",ry:"5.5%"}).css({"transform-origin":o+23+100+"px "+(n.right-65)+"px"}),f("#eyeGlare2_Right").attr({cx:o+23,cy:n.right,rx:"1.25%",ry:"2%"}).css({"transform-origin":o+23+"px "+n.right+"px"}),f("#eyeGlare_Right").parent("g").css({transform:"scale("+-e+", 1)","transform-origin":o+23+"px "+n.right+"px"}),t},v=function(n,i){void 0===n&&(n=0),void 0===i&&(i=0);var t,e,a=function(t,e,a){isNaN(t)&&(t=p.indexOf("#"+t));var s="",r=Math.round(10*a)/900,c=d.interpolate([u[t][e],u[t][e-1]],{precision:1});switch(t){case 2:s="chin";break;case 4:s="nose";break;case 18:s="jaw";break;default:s=""}if(0<s.length)var o=d.interpolate([m[0][s][e],m[0][s][e-1]],{precision:1}),n=d.interpolate([c(r),o(r)],{precision:1});switch(t){case 2:case 4:case 18:f(p[t]).attr("d",n(O.jaw_Open/100));break;case 5:case 7:0<=i&&0===l?(f(p[t]).attr("d",""),f(p[t]+"_Front").attr("d",c(r))):(f(p[t]).attr("d",c(r)),f(p[t]+"_Front").attr("d",""));break;case 6:case 8:i<0&&l<22.5?(f(p[t]).attr("d",c(r)),f(p[t]+"_Front").attr("d","")):(f(p[t]).attr("d",""),f(p[t]+"_Front").attr("d",c(r)));break;default:f(p[t]).attr("d",c(r))}},s=function(t,e,a,s){isNaN(t)&&(t=g.indexOf("#"+t));var r,c=Math.round(10*a)/900,o=(r=h[t][s].main,0<n?d.interpolate([r[e],r[e-1]],{precision:1}):d.interpolate([r[e],r[e+1]],{precision:1}));switch(s){case"tail":0<n?(f("g.HairBack #tail").attr("d",o(c)),f("g.HairBack2 #tail").attr("d","")):(f("g.HairBack #tail").attr("d",""),f("g.HairBack2 #tail").attr("d",o(c)));break;case"back":n<0?(f("g.HairBack3 #back").attr("d",o(c)),f("g.Hair #back").attr("d","")):(f("g.HairBack3 #back").attr("d",""),f("g.Hair #back").attr("d",o(c)));break;case"front":0!==t?0<n?(f("g.Hair #front").attr("d",o(c)),f("g.Hair2 #front").attr("d","")):(f("g.Hair2 #front").attr("d",o(c)),f("g.Hair #front").attr("d","")):(f("g.Hair #front").attr("d",o(c)),f("g.Hair2 #front").attr("d",""))}},l=n<0?-n:n;a("head",1,l),a("head2",1,l),32.5<=l?(t=1.55*(l-32.5),e=1):l<=32.5&&25<l?(t=12.55*(l-25),e=2):l<=25&&15<l?(t=9*(l-15),e=3):l<15&&(t=0,e=3),a("chin",e,t),32.5<=l?(t=1.55*(l-32.5),e=1):l<=32.5&&25<l?(t=12.55*(l-25),e=2):l<25&&(t=3.67*l,e=3),a("chin_angle",e,t),32.5<=l?(t=1.5*(l-32.5),e=1):l<=32.5&&25<l?(t=12.5*(l-25),e=2):l<=25&&15<l?(t=9.1*(l-15),e=3):l<15&&(t=6*l,e=4),a("bridge",e,t),a("nose",e,t),a("mouth",e,t),a("nostril_left",e,t),a("nostril_right",e,t),e=45<=l?(t=2*(l-45),1):(t=2*l,2),90<t&&(t=90);for(var r=5;r<13;)a(r<=8?r:r+2,e,t),r++;30<=l?(t=3*(l-30),e=1):l<45&&(t=3*l,e=2),90<t&&(t=90),a("eye_Left",e,t),a("eye_Right",e,t),e=45<=l?(t=2*(l-45),0<n?1:3):(t=2*l,2),"Spiky to side"!==B?s(B,e,t,"front"):f("g.Hair #front, g.Hair2 #front").attr("d",""),"Curly ends"!==B&&"Spiky to side"!==B?s(B,e,t,"tail"):f("g.HairBack #tail, g.HairBack2 #tail").attr("d",""),"Float"!==B?s(B,e,t,"back"):f("g.Hair #back, g.HairBack3 #back").attr("d","")},y=1,k=30/90,_=0,x=function(t,e){var a=t/(f("#avatar").width()/2),s=e/(f("#avatar").height()/1.5);_=.33<s?.33:s<-.66?-.66:-.03<s&&s<.03?0:s;var r=(k=1<a?1:a<-1?-1:-.03<a&&a<.03?0:a)<0?-k:k,c=Math.pow(1-r,10),o=180*Math.atan2(r,_)/Math.PI,n=90*k-o*k;y=0<k?1:-1,a<0&&(n=-n),30<n?n=30:n<-30&&(n=-30),v(90*k,90*_),f(".Head").css("transform","scale("+y+", 1) rotate("+n+"deg)"),f(".move, #eyeClip_Left, #eyeClip_Right").css("transform","translate(0, "+12*_*c+"%)"),f("#headClip").css("transform","translate(0, "+12*-_*c+"%)"),f(".moveEar").css("transform","translate(0, "+6*-_*c+"%)"),f(".Neck").css("transform","scale("+y+", 1)"),f(".HairBack2").css("transform","translate(0%, "+-_/1.5+"%)");var i=0<=_?22*_:6*_,l=0<=_?1+_/2*c:1+(.25-(1-_)/4)*c;f(".Hair, .Hair2, .HairBack3").css("transform",0<=k?"rotate("+n+"deg) translate(0, "+i*c+"%) scale(1, "+l+")":"rotate("+-n+"deg) translate(0, "+i*c+"%) scale(1, "+l+")"),M(k,y)},w=0,z=0,H=0,S=.3333,q=0,B="Float",O={jaw_Open:0};v(30),M(1,1),f("body").mousedown(function(t){if("menu-back"!==t.target.id&&"transition"!==f(t.target).attr("class")||"slider"!==t.target.id&&"info"!==f(t.target).parent().attr("class"))if("Head"===f(t.target).parent().attr("class")||""===t.target.id&&"morphing"===f(t.target).attr("class")||"menu"===t.target.id&&void 0===f(t.target).attr("class"))switch(t.which){case 1:default:z=t.pageX,H=t.pageY,w=1}else{if("sliderBox"!==t.target.id)return;switch(t.which){case 1:default:z=t.pageX,H=t.pageY,w=2}}}).mouseup(function(t){switch(t.which){case 1:default:w=0}}).mousemove(function(t){if(1===w){var e=t.pageX,a=t.pageY;S+=e-z,q+=3*(a-H);var s=Math.abs(S)/(f("#avatar").width()/2),r=Math.abs(q)/(f("#avatar").height()/1.5);return 1<s&&(S=0<S?f("#avatar").width()/2:-f("#avatar").width()/2),1<r&&(q=0<q?f("#avatar").height()/1.5:-f("#avatar").height()/1.5),x(S,q),z=e,H=a,{resultX:S,resultY:q}}2===w&&M(k,y)}),window.addEventListener("touchmove",function(t){var e=t.touches[0].pageX,a=t.touches[0].pageY;S+=e-z,q+=3*(a-H);var s=Math.abs(S)/(f("#avatar").width()/2),r=Math.abs(q)/(f("#avatar").height()/1.5);return 1<s&&(S=0<S?f("#avatar").width()/2:-f("#avatar").width()/2),1<r&&(q=0<q?f("#avatar").height()/1.5:-f("#avatar").height()/1.5),x(S,q),z=e,H=a,{resultX:S,resultY:q}}),f("input#eyesScale").mousedown(function(){f("input#eyesScale").mousemove(function(){M(k,y),f(".menu-bar:eq(0) p span#number:eq(0)").html(f("input#eyesScale").val())})}),f("input#jawOpen").mousedown(function(){f("input#jawOpen").mousemove(function(){O.jaw_Open=f("input#jawOpen").val(),v(90*k,90*_),M(k,y),f(".menu-bar:eq(3) p span#number").html(f("input#jawOpen").val())})}),f(".MM-block").mousedown(function(t){B=""!=f(t.target).children().text()?f(t.target).children().text():void 0,f("#menu .menu-bar p.name").html(B),x(S,q)}),f("#menu .menu-bar p.name").html(B)},function(t){t.exports={head:["M252,512a260,260 0 1,0 520,0a260,260 0 1,0 -520,0","M267,512a245,260 0 1,0 490,0a245,260 0 1,0 -490,0"],bridge:["M752 601c19 26 60 17 61 43","M717 611c18 24 75 10 76 36","M665 603c21 17 71 9 60 44","M589 604c10-11 45 0 56 10","M489 603c10-10 40-9 51 0"],chin:["M813 644c0 9-4 33-21 60v1c-56 88-180 80-280 66","M793 647c0 11-4 44-38 73v1c-48 43-158 56-243 50","M725 647c-7 10-18 26-34 44v1c-75 70-127 80-179 80","M722 647c-6 10-16 26-32 44-58 62-112 81-178 81"],chin_angle:["M513 772s0 0 0 0","M513 772s0 0 0 0","M513 772s0 0 0 0","M513 772s-43 0-93-19"],nose:["M510 763s198 55 278-61l1-1c9-14 15-31 19-50 5-32-51-24-66-53-151-57-232 165-232 165z","M510 765s186 24 250-54l1-1c14-15 23-33 28-56 5-32-65-14-80-43-144-44-199 154-199 154z","M510 765s107 10 189-90v-1l19-27c14-32-41-18-61-42-101 10-147 160-147 160z","M510 765s103 9 129-95v-1c3-14 5-30 5-49-27-14-27-14-56-10-113 77-78 155-78 155z","M510 765s72-12 46-116c-4-11-9-24-16-38-26-11-26-11-51 0-71 142 21 154 21 154z"],ear_Left:["M378 357c1-57-3-133-61-155-65 0-84 164-84 164","M575 341c11-62 3-166-40-166-72 9-77 140-77 140","M759 494c53-45 24-262-63-280-54 15-47 82-47 82"],ear_Right:["M255 479c-49-55-16-265 62-277 61 3 61 155 61 155","M260 501c-81-46-16-279 62-291 56 8 50 147 50 147","M266 494c-53-45-24-262 63-280 54 15 47 82 47 82"],ear_Left_Inside:["M378 357c1-57-3-133-61-155-65 0-84 164-84 164z","M575 341c11-62 3-166-40-166-72 9-77 140-77 140z","M759 494c53-45 24-262-63-280-54 15-47 82-47 82z"],ear_Right_Inside:["M255 479c-49-55-16-265 62-277 61 3 61 155 61 155z","M260 501c-81-46-16-279 62-291 56 8 50 147 50 147z","M266 494c-53-45-24-262 63-280 54 15 47 82 47 82z"],eye_Left:["M810 554c0 68-10 123-23 123s-23-55-23-123 10-123 23-123 23 55 23 123z","M820 554c0 68-26 123-59 123-32 0-58-55-58-123s26-123 58-123 59 55 59 123z","M735 550c-7 81-49 143-94 140-44-4-74-73-67-154s48-143 93-139c44 4 75 72 68 153z"],eye_Right:["M650 502c28 76 7 154-48 174s-119-26-147-102-7-155 47-174 120 26 148 102z","M618 520c28 77 7 154-48 174s-119-26-147-102-7-155 47-174 120 26 148 102z","M450 535c7 81-24 149-68 153-45 4-86-58-93-139s23-150 67-154c45-3 87 59 94 140z"],neck:["M535 771c9 177-14 236-14 236S413 872 267 880c35-75 47-162 22-235l246 126z","M494 773c18 125-1 243-1 243S354 878 239 883c11-24 75-105 60-232l195 122z","M605 753c7 118 22 130 22 130s-115-18-230 0c-8 1 25-21 23-130h185z"],neck_back_right:["M267 881c31-63 51-156 21-236","M239 883c51-83 67-134 60-232","M397 883c4-7 25-21 23-130"],neck_front_left:["M521 1008s22-57 14-237","M493 1016s18-59 2-242","M627 883s-15-12-22-130"],chest:["M525 971a145 145 0 1 1-290 0c0-80 65-144 145-144s145 64 145 144z","M499 971a145 145 0 1 1-290 0c0-80 65-144 145-144s145 64 145 144z","M657 971a145 145 0 1 1-290 0c0-80 65-144 145-144s145 64 145 144z"],head2:["M267,512a245,245 0 1,0 490,0a245,245 0 1,0 -490,0","M282,512a230,245 0 1,0 460,0a230,245 0 1,0 -460,0"],nostril_left:["M874 654s-8 8-16 9","M856 654s-8 8-16 9","M757 650s-5 6-13 7","M640 636s0 8-8 9","M550 632s0 8-8 9"],nostril_right:["M771 654s6 8 14 9","M744 654s6 8 14 9","M684 643s3 8 11 9","M584 632s0 8 8 9","M474 632s0 8 8 9"],mouth:["M731 698s15 21 48 21c35 0 50-21 50-21s-15 20-49 20c-33 0-49-20-49-20z","M701 697s15 21 48 21c35 0 50-21 50-21s-15 20-49 20c-33 0-49-20-49-20z","M616 680s15 21 48 21c35 0 50-21 50-21s-15 20-49 20c-33 0-49-20-49-20z","M557 662s9 23 39 28c31 6 47-12 47-12s-16 17-47 12c-29-5-39-28-39-28z","M463 680s15 21 48 21c35 0 50-21 50-21s-15 20-49 20c-33 0-49-20-49-20z"]}},function(t){t.exports={Float:{front:{main:["M736 186c-108 0-207-10-360 78 22 101 38 162 36 263 156-106 333-116 569-116-14-48-79-225-245-225z","M701 202c-108 0-224 36-334 42 64 75 79 152 36 261 271-85 353-57 561-9 4-51-13-294-263-294z","M654 252c-96-7-160-67-278-67-109 0-233 87-223 327 274-159 430 24 624-92 1-52-34-168-123-168z","M658 244c-97-7-216-42-334-42-109 0-263 56-263 294 283-74 366-49 562 10a225 225 0 0 1 35-262z","M649 264c-76-42-233-78-351-78-109 0-229 88-284 225 181 0 401-27 599 116-9-130 9-157 36-263z"],second:[],addition:[]},tail:{main:["M284 574s91 179 94 244c19 137 271 261 271 261s12-85 0-306c-65-94-290-92-365-199z","M324 588s67 165 54 230c-36 134 221 252 221 252s22-73 10-294c-60-107-210-81-285-188z","M704 494s21 200-102 259c-36 134 118 319 118 319s61-5 49-226c-32-135-61-201-65-352z","M730 488s-8 193-92 273c-49 136 85 315 85 315s120-13 108-234c-45-139-97-203-101-354z","M766 488s-32 245-168 292c-49 136 80 303 80 303s155-23 143-244c-45-139-51-200-55-351z"],second:[],addition:[]}},"Curly ends":{front:{main:["M349 180S928-17 793 335c-36 76-111 159-111 159","M352 96S988-21 687 299c-76 64-109 55-109 55s-33-68-127-82","M253 159S637-28 710 354c-94-130-197 0-197 0s-104-60-195 0","M229 197S655 23 702 340c-249-62-335 112-335 112s-52-67-79-44","M183 165S651-48 717 352c-290-168-399 2-399 2s-20 24-30 54"],second:[],addition:[]},back:{main:["M349 180s-139 36-105 509c16 229 56 264 165 379 154 163 377-26 165-111 21 51 65 114 0 87-43-18-133-148-78-272 68-154 186-278 186-278","M352 96S-51 152 7 690c23 215 104 384 203 477 163 153 379-86 199-157 47 49 25 133-67 52-42-37-53-188-44-347a890 890 0 0 1 153-443","M253 159S13 278 157 584c91 194 96 245 90 381-7 158-131 61-40 17-100-1-114 117 37 148 80 16 131-164 50-460-73-265 24-316 24-316","M229 197S13 315 48 521c39 229 262 299 271 447 10 175-243 101-75 15-73-55-219 74-29 157 179 78 335-111 256-410-19-71-104-278-104-278","M183 165S-40 236 28 521c53 226 245 303 239 450-8 192-276 72-108-14-73-55-168 115 21 199 167 74 295-141 263-430-8-73-143-366-143-366"],second:[],addition:[]},tail:{main:["M694 374s105-157 161 194c66 414-288 672-148 791 58 48 91-101 28-68 113-66 74 247-177 101 0 0-259-183 28-564 269-359 108-454 108-454z","M694 374s135-142 174 170c39 313-237 635-62 714 39 15 55-85-8-52 122-137 134 230-104 98 0 0-285-199-72-499 259-366 72-431 72-431z","M694 374s123-114 122 165-202 598-77 614c70 6 64-102 1-69 79-129 180 132-73 141 0 0-180 21-79-416s106-435 106-435z","M694 374s135-142 174 170c39 313-237 635-62 714 39 15 55-85-8-52 122-137 134 230-104 98 0 0-285-199-72-499 259-366 72-431 72-431z","M694 374s105-157 161 194c66 414-288 672-148 791 58 48 91-101 28-68 113-66 74 247-177 101 0 0-259-183 28-564 269-359 108-454 108-454z"],second:[],addition:[]}},"Spiky to side":{back:{main:["M373 298s-156 56-91 423c27 12 72-17 74-16 0 0 13 20 13 67 28-2 61-37 61-37s16 40 30 94c17-24 55-49 55-49s28 60 42 153c38-38 42-69 42-69s33 27 78 153c93-113 23-358 23-358s86 81 135 186c7-92-49-259-49-259S685 126 373 298z","M475 277S208 161 262 696c4 17 9 30 11 31 0 0-5 26 14 75-8-15 4-10 4-10s7 33 37 65c-10-26-1-31-1-31s51 159 93 173c-12-52 0-49 0-49s57 151 95 144c-41-95-95-409-95-409s62 160 109 208c-8-75-46-261-46-261s-40-192-8-355z","M329 317S32 277 161 896c4-94 34-197 34-197s-62 306 165 441c-81-156-81-221-81-221s0 81 74 116c-31-73-45-178-45-178s7 44 49 58c-12-52-21-72-21-72s9 26 47 19c-26-41-22-62-22-62s4 6 36 3c-44-65-46-95-46-95s-159-140-22-391z","M352 317S-58 354 51 924c4-94 76-210 76-210s-65 249 165 426c-44-152-19-194-19-194s23 57 97 92c-31-73-14-177-14-177s11 54 53 68c-12-52 0-82 0-82s28 36 62 36c-26-41-28-65-28-65s26 8 58 5c-44-65-150-115-150-115s-137-141 1-391z","M352 317S18 354 46 931c4-94 138-228 138-228S84 982 314 1159c-16-148 37-208 37-208s31 60 97 99c-28-74 20-180 20-180s10 47 55 56c-12-52-10-74-10-74s39 49 73 49c-26-41-32-72-32-72s27 5 59 2c-44-65-262-123-262-123s-137-141 1-391z"],second:[],addition:[]}}}},function(t){t.exports={open:{jaw:["M723 672s-35 94 4 101c49 9 107-75 107-75l-25 4c-42 23-86-30-86-30z","M701 702s-14 67 34 67c50 0 64-73 64-73s-15 21-50 21c-32 0-48-15-48-15z","M616 679s4 74 52 74c50 0 52-70 52-70s-9 17-44 17c-32 0-60-21-60-21z","M557 662s-22 62 24 74c48 13 63-59 63-59s-16 19-49 10c-32-8-38-25-38-25z","M463 680s0 71 48 71c50 0 50-71 50-71s-15 20-49 20c-33 0-49-20-49-20z"],chin:["M813 644c0 10 0 43-18 59-4 4-63 24-67 70-49 15-77 18-216-2","M793 647c0 5-8 52-44 70a72 72 0 0 0-21 52c-37 32-80 12-216 2","M725 647c-4 6-9 35-28 48-20 15-31 42-34 56-35 27-86 21-151 21","M722 647c-6 10-16 26-32 44-8 9-36 35-53 46-37 24-59 35-125 35"],nose:["M510 763s123 42 218 9c1-30 39-59 66-68 17-18 15-36 14-53 5-32-51-24-66-53-151-57-232 165-232 165z","M510 765s196 47 218 3c4-8 4-40 21-52 37-25 36-43 40-62 5-32-65-14-80-43-144-44-199 154-199 154z","M510 765s87 28 153-15c5-25 16-41 37-58 16-13 16-34 18-45 5-34-41-18-61-42-101 10-147 160-147 160z","M510 765s53 9 92-27c16-15 30-36 37-69 3-14 5-30 5-49-27-14-27-14-56-10-113 77-78 155-78 155z","M510 765s40-6 51-46c5-16 5-39-5-70-4-11-9-24-16-38-26-11-26-11-51 0-71 142 21 154 21 154z"]},sad:{jaw:["M707 719s25 29 20 54c45-14 97-20 97-20s0-43-15-51c-64-4-102 17-102 17z","M681 742s27 0 54 27c44-19 60-28 60-28s-11-16-46-24c-33-7-68 25-68 25z","M615 735s12 3 53 18c37-18 57-19 57-19s-14-34-49-34c-40 8-61 35-61 35z","M536 725s16-9 49-1c32 8 30 13 30 13s29-40-20-50c-51-9-59 38-59 38z","M463 751s20-4 49-4 49 4 49 4 0-51-49-51-49 51-49 51z"]}}},function(t,e){t.exports=polymorph},function(t,e,a){var o=a(0),s=a(8),n=function(t){var e=t.replace(/[^\d,]/g,"").split(","),a=e[0],s=e[1],r=e[2];a/=255,s/=255,r/=255;var c,o,n=Math.max(a,s,r),i=Math.min(a,s,r),l=(n+i)/2;if(n==i)c=o=0;else{var f=n-i;switch(o=.5<l?f/(2-n-i):f/(n+i),n){case a:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-a)/f+2;break;case r:c=(a-s)/f+4}c/=6}return[c,o,l]},r=0,c=function(){o("#menu-circle").css({transform:"translate(50%, 50%) scale(0)"}),o("      #menu-button #button").attr({fill:"#fff"}),o("#menu-button .fa.fa-reorder").css({color:"#333"}),o(".menu-bar #title .fa-caret-down").css({transform:"translate(-50%, -50%) scale(1)",opacity:1}),o("     .menu-bar #title .fa-times").css({transform:"translate(-80%, -50%) scale(0)",opacity:0}),o(".menu-bar *").not("#title, #title *").css({opacity:0})},i=function(t){void 0===t&&(t=0),o(".menu-bar").css({top:"-10%",opacity:0,"padding-bottom":"0",height:"6vmin","pointer-events":"none"}),o("#menu").css({"pointer-events":"none"}),0<t&&(o("#menu-button .fa.fa-reorder").css({color:"#333",transform:"scale(1)",opacity:1}),o("  #menu-button .fa.fa-times").css({transform:"scale(0)",opacity:0}),setTimeout(function(){o("#menu-back").attr({r:"0%"}),o("#avatar").css({left:"50%"})},250))},l=function(){o("#menu svg").attr({preserveAspectRatio:"none"}),s({targets:"#mask_Menu path",d:[{value:["M-400 0c108 255 108 545 0 800h625V0h-625z","M10 0c0 255 0 545 0 800h625V0h-625z"]}],easing:"easeInOutQuart",duration:250}),o(".MM-block").css({right:"-150%"})},f=0,d=100,u=50,p=100,h=function(t,e){var a=t-(o("#color_pallete #body").offset().left+o("#color_pallete #body").width()/2),s=o("#color_pallete #body").offset().top+o("#color_pallete #body").height()/2-e,r=180*Math.atan2(a,s)/Math.PI;f=r,o("#color_circle").css({transform:"translate(-50%, -1075%) rotate("+r+"deg)"}),o("#body #color").attr({"stop-color":"hsl("+f+", 100%, 50%)"}),o("#color_pallete #color").css({background:"hsl("+f+", "+d+"%, "+u+"%)"}),m("#color_pallete #color")},g=function(t,e){var a=(t-o("#body #box").offset().left)/o("#body #box").outerWidth(),s=(e-o("#body #box").offset().top)/o("#body #box").outerHeight(),r=1900*a-1e3,c=1900*s-1e3;1<a?(a=1,r=900):a<0&&(a=0,r=-1e3),1<s?(s=1,c=900):s<0&&(s=0,c=-1e3),d=100*a,u=15+.85*(-100*s+50*a*s-50*a+100),p=-100*s+100,o("#color_box").css({transform:"translate("+r+"%, "+c+"%)"}),o("#color_box circle").css({stroke:.5<s?"#fff":"#000"}),o("#color_pallete #color").css({background:"hsl("+f+", "+d+"%, "+u+"%)"}),m("#color_pallete #color")},m=function(t){var e,a,s=o(t).css("background-color").replace(/[^\d,]/g,"").split(",");switch(o(t).parents("#color_pallete").find("p.h").text()){case"fur":a=3;break;case"eyes":a=2;break;case"mane":a=1,e=".Hair #front, #back, .Head #hair_Front, .Hair2 #front, .HairBack #tail, .HairBack2 #tail, .HairBack3 #back"}if(2===a){var r=o(".fa.fa-tint").eq(0).parents(".menu-bar");o("defs #grad_Eyes #1").css({"stop-color":o(t).css("background-color")}),o("defs #grad_Eyes #2").css({"stop-color":"rgb("+s[0]/1.5+","+s[1]/1.5+","+s[2]/1.5+")"}),o(".fa.fa-tint").eq(0).css({background:o("defs #grad_Eyes #1").css("stop-color")}),r.find("p.h").eq(0).css({border:".33vmin solid "+o("defs #grad_Eyes #1").css("stop-color")});var c=n(o("defs #grad_Eyes #1").css("stop-color"));f=360*c[0],d=100*c[1],u=100*c[2],r.css({"background-image":"linear-gradient(to bottom right, hsl("+(f+210)+", "+d+"%, "+u+"%, 25%), #333)"}),r.find("#sliderBox svg > path").eq(0).css({stroke:o("defs #grad_Eyes #1").css("stop-color")}),r.find("p span#number:eq(0), p span#number:eq(1), p span#number:eq(2), #favColor, input#eyesScale").css({background:o("defs #grad_Eyes #1").css("stop-color")})}else if(1===a){r=o(".fa.fa-tint").eq(1).parents(".menu-bar");o(e).attr({fill:o(t).css("background-color")}).css({stroke:"rgb("+s[0]/1.5+","+s[1]/1.5+","+s[2]/1.5+")"}),o("   .fa.fa-tint").eq(1).css({background:o(".Hair #front").css("fill")}),r.find("      p.h").css({border:".33vmin solid "+o(".Hair #front").css("fill")}),r.find("#favColor").css({background:o(".Hair #front").css("fill")});c=n(o(".Hair #front").css("fill"));f=360*c[0],d=100*c[1],u=100*c[2],r.css({"background-image":"linear-gradient(to bottom right, hsl("+(f+210)+", "+d+"%, "+u+"%, 25%), #333)"})}else{r=o(".fa.fa-tint").eq(2).parents(".menu-bar");o(".Head path, .Neck path").not(".inner, .inner2, .eyes, #mouth").attr({fill:o(t).css("background-color")}).css({stroke:"rgb("+s[0]/1.5+","+s[1]/1.5+","+s[2]/1.5+")"}),o("#mouth").css({stroke:"rgb("+s[0]/1.5+","+s[1]/1.5+","+s[2]/1.5+")"}),o(".Neck .inner, .Head .inner2").attr({fill:o(t).css("background-color")}).css({stroke:o(t).css("background-color")}),o("   .fa.fa-tint").eq(2).css({background:o(".Head #head").css("fill")}),r.find("      p.h").css({border:".33vmin solid "+o(".Head #head").css("fill")}),r.find("#favColor").css({background:o(".Head #head").css("fill")});c=n(o(".Head #head").css("fill"));f=360*c[0],d=100*c[1],u=100*c[2],r.css({"background-image":"linear-gradient(to bottom right, hsl("+(f+210)+", "+d+"%, "+u+"%, 25%), #333)"})}},b=function(t,e,a){var s=(t-o("#menu #sliderBox").eq(a).offset().left)/o("#menu #sliderBox").eq(a).outerWidth(),r=1-(e-o("#menu #sliderBox").eq(a).offset().top)/o("#menu #sliderBox").eq(a).outerHeight();s<.35&&r<.35&&(r<s?s=.35:r=.35),1<s?s=1:s<0&&(s=0),1<r?r=1:r<0&&(r=0),o("p span#number").eq(a+1).html(Math.round(10+115*s)),o("p span#number").eq(a+2).html(Math.round(10+115*r)),o("#sliderBox #tapPoint").eq(a).css({transform:"translate("+(755*s-50)+"%, "+(-730*r+365)+"%)"})},M=0;o("#menu-button").click(function(t){switch(t.which){case 1:default:r=r<1?(o("#menu-circle").css({transform:"translate(50%, 50%) scale(1)"}),o("         #menu-button #button").attr({fill:"#333"}),o("#menu-button .fa.fa.fa-reorder").css({color:"#fff"}),1):(c(),i(1),l(),0)}}),o("#menu-circle #menu-avatar").click(function(t){switch(t.which){case 1:default:o("#menu-back").attr({r:"165%"}),o("#avatar").css({left:"33%"}),o("      #menu-button #button").attr({fill:"#333"}),o("#menu-button .fa.fa-reorder").css({color:"#fff",transform:"scale(0)",opacity:0}),o("  #menu-button .fa.fa-times").css({transform:"scale(1.25)",opacity:1}),o("#menu").css({"pointer-events":"all"}),setTimeout(function(){o(".menu-bar").css({top:"0",opacity:1,height:"6vmin","pointer-events":"all"})},250),c()}}),o("#menu_of_models").click(function(t){switch(t.which){case 1:default:e=0,i(),o("#menu svg").attr({preserveAspectRatio:"xMaxYMid meet"}),s({targets:"#mask_Menu path",d:[{value:["M10 0c0 255 0 545 0 800h625V0h-625z","M-400 0c108 255 108 545 0 800h625V0h-625z"]}],easing:"easeInOutQuart",duration:250}),o("#avatar").css({left:"30vmax"}),o(".MM-block").css({right:"-1%"}),o("body").mousewheel(function(t){(e+=3*t.deltaY)<0?e=0:e>8*(o(".MM-bar").length-1)&&(e=8*(o(".MM-bar").length-1)),o(".MM-bar").each(function(t){o(".MM-bar").eq(t).css({transform:"translate(-110%, -50%) rotate("+(8*t-e)+"deg)"})})})}var e}),o("#menu .mark-arrow").not("#favColor").click(function(t){switch(t.which){case 1:default:(a=o((e=t).target).parents(".menu-bar")).height()===o(e.target).parent().height()?(a.css({height:""}),a.find("*").not("#title, #title *").css({opacity:1}),a.find("#title .fa-caret-down").css({transform:"translate(-50%, -50%) scale(0)",opacity:0}),a.find("#title .fa-times").css({transform:"translate(-80%, -50%) scale(1)",opacity:1})):(a.css({height:"6vmin"}),a.find("*").not("#title, #title *").css({opacity:0}),a.find("#title .fa-caret-down").css({transform:"translate(-50%, -50%) scale(1)",opacity:1}),a.find("#title .fa-times").css({transform:"translate(-80%, -50%) scale(0)",opacity:0}))}var e,a}),o("i.fa").click(function(t){var e=/\S+/g.exec(o(t.target).parents(".menu-bar").find("#title p").text());switch(t.which){case 1:default:switch(o(t.target).parents(".menu-bar").find("#title p").text()){case"":"fa fa-times"===o(t.target).attr("class")&&o(t.target).parents("#color_pallete").css({top:"-31vmax",opacity:0,"pointer-events":"none"});break;default:!function(t){var e=[".Head #head","defs #grad_Eyes #1",".Hair #front"],a=0;switch(t){case"Fur":a=2;break;case"Eyes":a=1;break;case"Mane":a=0}var s=n(1===a?o(e[a]).css("stop-color"):o(e[a]).css("fill"));f=360*s[0],d=100*s[1],u=100*s[2],o("#color_circle").css({transform:"translate(-50%, -1075%) rotate("+f+"deg)"}),o("#body #color").attr({"stop-color":"hsl("+f+", 100%, 50%)"}),o("#color_pallete #color").css({background:"hsl("+f+", "+d+"%, "+u+"%)"}),o("#color_box").css({transform:"translate("+(19*d-1e3)+"%, "+(-19*p+900)+"%)"}),o("#color_box circle").css({stroke:p<50?"#fff":"#000"})}(e[0]),o("#color_pallete").css({top:"0%",opacity:1,"pointer-events":"all"}),o("#color_pallete p.h").text(e[0].toLowerCase())}}}),c(),o("body").mousedown(function(t){if("picker"===o(t.target).parent().attr("id"))switch(t.which){case 1:default:M=1}else if("box"===t.target.id)switch(t.which){case 1:default:M=2}else{if(0!==o(t.target).index(".menu-bar #sliderBox")||"sliderBox"!==t.target.id)return;switch(t.which){case 1:default:M=3}}}).mouseup(function(t){switch(t.which){case 1:default:M=0}}).mousemove(function(t){switch(M){case 1:h(t.pageX,t.pageY);break;case 2:g(t.pageX,t.pageY);break;case 3:b(t.pageX,t.pageY,0)}}),window.addEventListener("touchmove",function(t){switch(M){case 1:h(t.touches[0].pageX,t.touches[0].pageY);break;case 2:g(t.touches[0].pageX,t.touches[0].pageY);break;case 3:b(t.touches[0].pageX,t.touches[0].pageY,0)}}),o(".fa.fa-tint").each(function(t){var e=/\S+/g.exec(o(".fa.fa-tint").eq(t).parents(".menu-bar").find("#title p").text())[0],a=o(".fa.fa-tint").eq(t),s=a.parents(".menu-bar");if("Mane"===e){a.css({background:o(".Hair #front").css("fill")}),s.find("#favColor").css({background:o(".Hair #front").css("fill")});var r=n(o(".Hair #front").css("fill"));f=360*r[0],d=100*r[1],u=100*r[2],s.css({"background-image":"linear-gradient(to bottom right, hsl("+(f+210)+", "+d+"%, "+u+"%, 10%), #333)"}),s.find("p.h").css({border:".33vmin solid "+o(".Hair #front").css("fill")})}else if("Eyes"===e){a.css({background:o("defs #grad_Eyes #1").css("stop-color")}),s.find("#favColor").css({background:o("defs #grad_Eyes #1").css("stop-color")});r=n(o("defs #grad_Eyes #1").css("stop-color"));f=360*r[0],d=100*r[1],u=100*r[2],s.css({"background-image":"linear-gradient(to bottom right, hsl("+(f+210)+", "+d+"%, "+u+"%, 10%), #333)"}),s.find("p.h:eq(0)").css({border:".33vmin solid "+o("defs #grad_Eyes #1").css("stop-color")}),s.find("#sliderBox svg > path").eq(0).css({stroke:o("defs #grad_Eyes #1").css("stop-color")}),s.find("p span#number:eq(0), p span#number:eq(1), p span#number:eq(2)").css({background:o("defs #grad_Eyes #1").css("stop-color")}),s.find("input#eyesScale").css({background:o("defs #grad_Eyes #1").css("stop-color")})}else if("Fur"===e){a.css({background:o(".Head #head").css("fill")}),s.find("#favColor").css({background:o(".Head #head").css("fill")});r=n(o(".Head #head").css("fill"));f=360*r[0],d=100*r[1],u=100*r[2],s.css({"background-image":"linear-gradient(to bottom right, hsl("+(f+210)+", "+d+"%, "+u+"%, 10%), #333)"}),s.find("p.h").css({border:".33vmin solid "+o(".Head #head").css("fill")})}}),o(".menu-bar *").not("#title, #title *").css({opacity:0}),o("#avatar").css({bottom:0}),setTimeout(function(){o("#avatar").css({transition:"all .25s ease"})},1500)},function(t,e){t.exports=anime}]);