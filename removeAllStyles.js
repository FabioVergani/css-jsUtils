function eachOf(a,b){
 var i='length';
 const m=a,l=(m&&(i in m))?m[i]:0,f=b;
 i=0;
 while(i<l){f(m[i],i,m);++i;};
}
//
function removeAllStyles(){
 const f=eachOf,d=document;
 f(d.querySelectorAll('link,style'),function(x){x.remove();});
 f(d.querySelectorAll('[style]'),function(x){x.removeAttribute('style');});
}
