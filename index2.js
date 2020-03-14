//Number2
// Arrow Fucntion :Function Anonyme
const reverse=(str)=>{
if(!str)
{
    return str;
}
else
{
    return str.split("").reverse().join("");
}
}
var d=reverse("douae");
console.log(d);