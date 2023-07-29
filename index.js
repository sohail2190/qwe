let count=0;
let element = document.getElementById('h2')


function counter() {
    count++;
    element.innerHTML=count;
}


function reset() {
    count=0;
    element.innerHTML=count;
    document.getElementById('h3').innerHTML='';
}


function table() {

        element.innerHTML='';
        document.getElementById('h3').innerHTML='';
    for (let count = 1; count < 11; count++) {
        element.innerHTML+="2  x   " + count+ " = " + 2*count +"<br>"
    }
}

 
function oddEven (){
    counter();
    if      (count%2==0) {document.getElementById('h3').innerHTML='Even';}
    else    {document.getElementById('h3').innerHTML='odd'}
}