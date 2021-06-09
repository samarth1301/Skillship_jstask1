function add(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let res=parseInt(num1)+parseInt(num2);
    document.getElementById('res').innerHTML= 'Result : '+   res;
}
function subtract(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let res=parseInt(num1)-parseInt(num2);
    document.getElementById('res').innerHTML= 'Result : '+   res;
}
function sqrnum1(){
    let num1=document.getElementById('num1').value;
    let res=parseInt(num1)*parseInt(num1);
    document.getElementById('res').innerHTML= 'Result : '+   res;
}
function sqrnum2(){
    let num1=document.getElementById('num2').value;
    let res=parseInt(num1)*parseInt(num1);
    document.getElementById('res').innerHTML= 'Result : '+   res;
}

function max(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let res=Infinity;
    if(num1>num2){
        res=num1;
    }
    else{
        res=num2;
    }
    document.getElementById('res').innerHTML= 'Result: '+ res;
}
function min(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let res=Infinity;
    if(num1<num2){
        res=num1;
    }
    else{
        res=num2;
    }
    document.getElementById('res').innerHTML= 'Result : '+   res;
}
function quotient(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let res=Math.floor(parseInt(num1)/parseInt(num2));
    document.getElementById('res').innerHTML= 'Result : '+ res;
}
function remainder(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let res=parseInt(num1)%parseInt(num2);
    document.getElementById('res').innerHTML= 'Result : '+res;
}