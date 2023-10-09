// فاكشن تاخد الارتفاع والقاعده وترجع المساحه
function area (base , hight){
    var area = (base * hight) * 0.5 ;
    return area
}
console.log(area(100,500));

// فاكشن تاخد وقمين وترحع مجموعهم
function calcc(nunl1 , nunl2){
    var calcc = (nunl1 + nunl2);
    return calcc
}
console.log(calcc(40,30));

// فاكشن لطباعه الاسم
function myname (){
    return " mahmoud mohamed mahmoud elmeshad"
}
console.log(myname())

//اعمل فانكشن بتاخد اربع ارقام وترجع مجموعهم لو اكتر من ٣٥٠ أظهر true لو أقل من
function calccc (a , b , c , d){
    var total = a + b + c + d ;
    if (total > 350){
        return true
    }
    {
        return false 
    }
}
calccc (10000 , 20 , 30 , 40)
console.log(calccc())
document.getElementById("four").innerHTML=calccc


// الساعات لثواني
function calock (minutes){
    var calock = (minutes * 60);
    return calock
}

console.log(calock (1))


// طباعه الاسم
document.getElementById("four").innerHTML="mahmoud mohamed mahmoud"



// لعدض اول عنصر في باستخدام arry وهي تبدا من 0index

var group = ["mahmoud","ahmed","aya","ibrahem"];
document.getElementById("demo").innerHTML = group [0];



