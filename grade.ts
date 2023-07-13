let a=prompt("Enter Mathematic Marks:");
let math=Number(a);
let b=prompt("Enter Physics Marks:");
let phy=Number(b);
let c=prompt("Enter Chemistry Marks:");
let chem=Number(c);
let sum:number;
sum=math+phy+chem;
alert("Sum :=> "+sum);
let aveg:number;
aveg=sum/3;
alert("Averge :=> "+aveg);
if(aveg<70)
{
    alert("Averge : "+aveg+" :=> C Grade");
}
else if((aveg>70)&&(aveg<90))
{
    alert("Averge : "+aveg+" :=> B Grade");
}
else if(aveg>90)
{
    alert("Averge : "+aveg+" :=> A Grade");
}
else
{
    alert("Averge : "+aveg+" :=> Fail")
}