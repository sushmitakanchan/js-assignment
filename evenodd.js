let num = prompt("Enter a number:");
console.log(num);
function evenodd()
{
    if(num%2==0)
    {
        console.log("The number entered is",'',+num+'',"and the number is even");
    }
    else
    {
        console.log("The number entered is",'',+num+'',"and the number is odd");
    }
}
evenodd();
