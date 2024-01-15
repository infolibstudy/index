function hide_show()
{var div=document.getElementById("div").style.display;
var link=document.getElementById("link").innerHTML;
 if(div=="")div="none";
if(div=="block")
  {div="none";
    link="Решение";}
  else
  {div="block";
    link="Решение задачи";}
    document.getElementById("div").style.display=div;
  document.getElementById("link").innerHTML=link;}

function check()
{if ( calc.answer.value == "4, 5, 6, 10, 15, 35, 80" )
     alert("Правильно!");
else alert("Неправильно!");}
