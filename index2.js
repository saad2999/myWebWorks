const value=document.getElementById("value");
let button=document.getElementById("submit");
function myfun(val){
    if((val>=0)&&(val<=99))
    {
        return 'A'

    }
    else  if((val>=100)&&(val<=199))
    {
        return 'B'

    }
    else  if((val>=200)&&(val<=299))
    {
        return 'C'

    }
    else  if((val>=300)&&(val<=399))
    {
        return 'D'

    }
    else  if((val>=400)&&(val<=499))
    {
        return 'E'

    }
    else  if((val>=500)&&(val<=599))
    {
        return 'F'

    }
    else  if((val>=600)&&(val<=699))
    {
        return 'G'

    }
    else  if((val>=700)&&(val<=799))
    {
        return 'H'

    }
    else  if((val>=800)&&(val<=399))
    {
        return 'I'

    }
    else  if((val>=900)&&(val<=999))
    {
        return 'J'

    }
}
function my2(value){
if (value<1000) {
    alert( myfun(value))
    console.log("if")
    
    
} 
else {
    for(let i=0;i<=10;i++)
    {
        console.log()
    }
    
}
}
button.onclick=my2;