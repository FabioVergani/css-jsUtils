function aCssBlob(x){return new Blob([x],{type:'text/css'});}


function link2Blob(x,a){
 const e=document.createElement('a');
 e.href=URL.createObjectURL(x);
 e.download=a;
 return e;
};



link2Blob(aCssBlob('zzzz'),'nome.css').click();
