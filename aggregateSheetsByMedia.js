(function(){
 const toArray=Function.call.bind(Array.prototype.slice);

 const o={'all':[]}, m=toArray(document.styleSheets), l=m.length;

 var i=0,p,e,x;

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

 console.clear();
 console.group('SheetsByMedia');
 console.dir(o);
 console.groupEnd();
})();
