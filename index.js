

document.getElementById("mybutton").onclick=function(){

    let tmp;

    if(document.getElementById("cel").checked){
        tmp=document.getElementById("textbox").value;
        
        tmp=Number(tmp);
        
        tmp=celsius(tmp);
        console.log(tmp)
        document.getElementById("demo").innerHTML=tmp;
    }
    else if(document.getElementById("faher").checked){
        tmp=document.getElementById("textbox").value;
        tmp=Number(tmp);
        tmp=fahrenheit(tmp);
        document.getElementById("demo").innerHTML=tmp;
    }
    else{
        document.getElementById("demo").innerHTML=`Enter the temperature`;
    }
}

function celsius(tmp){
    return (tmp-32)*(5/9);
}

function fahrenheit(tmp){
    return (tmp*9/5 +32);
}