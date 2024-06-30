
let flag=0
function darkMode()
{
   if(flag==0)
    {
        let darkMode=document.querySelector("body").style="background-color:black;color:white;";
        document.querySelector("#textChange").innerHTML="LightMode";
        flag=1;
    }
    else{
        let lightMode=document.querySelector("body").style="background-color:white;color:black;";
        document.querySelector("#textChange").innerHTML="DarkMode";
        flag=0;
    }
    
}

