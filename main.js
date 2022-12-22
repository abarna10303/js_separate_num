var num=parseInt(prompt("Enter the Number"));
var b;
for(i=0;num!=0;i++)
{
    b=num%10;
    num=Math.floor(num/10);
    document.write(b);
    document.write("<br>")
}

