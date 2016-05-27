(function aggregateSheetsByMedia(){
	
	const toArray=Function.call.bind(Array.prototype.slice);
	const Clear=Object.setPrototypeOf;
	const nakedArray=Clear([]);
	
	//const Clear=Function.call.bind(Object.setPrototypeOf,null);
	//const nakedArray2=Clear([]);console.dir(nakedArray2);
	
	
	const m=toArray(document.styleSheets),l=m.length;
	
	var i=0, x, p, e, stack, o=Object.setPrototypeOf({'all':nakedArray()},null);

	while(i<l){
		x=m[i];
		
		if(x.disabled!==true){
			p=x.media.mediaText;
			if(p!==''){	
				e=(p in o)?o[p]:(o[p]=[[]]);
			}else{
				e=o.all;
			};
			e[i]=[x];
		
		};
		i++;
	};	
	console.dir(o);
})();
console.info('end');



			//if(i>e.length){}
			//stack=e[i];console.dir(stack);
			//stack[stack.length]=x;			


//	


		
