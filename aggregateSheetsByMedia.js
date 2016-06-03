(function(){


 const Call=Function.prototype.call;
 const Slice=Call.bind(Array.prototype.slice);

 const media={all:[]}, m=Slice(document.styleSheets), l=m.length;
 var i=0,p,e,x;
 while(i<l){
  e=m[i++];
  if(e.disabled!==true){
   p=e.media.mediaText;
   if(p!==''){
    x=media[p]||(media[p]=[]);
   }else{
    x=media.all;
   };
   x[x.length]=e;
  };
 };

 console.clear();
 console.group('SheetsByMedia');
 console.dir(media);
 console.groupEnd();

})();






/*
 function toArray(obj,s,e){//start,end
  var k,o=obj,p='length';
  return (o?((p in o)?o.length>0:(k=KeysOf(o),k[p]>0?(o=k.map(p=>o[p]),true):false)):false)?Slice(o,s,e):[];
 };

 const KeysOf=Object.keys;



SheetsGrouped;
 const mediaTypes={
  valid:['all','print','screen','speech'],
  deprecated:['aural','braille','embossed','handheld','projection','tty','tv']
 };
 console.log((mediaTypes.Valid.concat(mediaTypes.Deprecated)).join(','));

all,print,screen,speech,aural,braille,embossed,handheld,projection,tty,tv

@media[^{]+\{([\s\S]+?\})\s*\}
str.replace(/@media.*?}}/g,''

 /(min-width\s*:\s*768px)|(min-width\s*:\s*980px)/i;
 /(max-width\s*:\s*979px)|(max-width\s*:\s*767px)|(max-width\s*:\s*480px)|(max-width\s*:\s*1049px)/i;




 const found={
	valid:{'all':[]},
	deprecable:{},
	custom:{}
 };

 const m=toArray(document.styleSheets),l=m.length;

 var i=0,o,p,e,x;

 while(i<l){
	e=m[i++];
	if(e.disabled!==true){
		p=e.media.mediaText;
		if(p!==''){
			x=o[p]||(o[p]=[]);//(p in o)?o[p]:(o[p]=[]);
		}else{
			x=o.all;
		};
		x[x.length]=e;
	};
 };


console.dir(o);


 function test(v,i){console.log(i,v)}

	var i=0, x, p, e, stack, o=Object.setPrototypeOf(,null);


*/
