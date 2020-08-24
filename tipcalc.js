const btn = document.querySelector(".btn");
const error=document.querySelector(".errormsg");
const option=document.querySelector("#percent");
const bill=document.querySelector("#tbill");
const share=document.querySelector("#pershare");
const tips=document.querySelector("#tamount");
const money=document.querySelector("#money");
const person=document.querySelector("#person");

console.log(btn);

btn.addEventListener("click",function(){

if( option.value===""|| money.value===""|| person.value===""){
error.classList.add("show");
}

else {
  const atips=money.value*person.value*option.value/100;
  const total=(money.value*person.value)+atips;
  const bshare=total/person.value;

  bill.textContent=`Your total bill is :${total}`
  tips.textContent=`Your have to give ${atips}`
  share.textContent=`Per person have to pay ${bshare} amount`

  error.classList.remove("show");
}





})
