function closeMenu()
{
    
    let closeNav=document.querySelector(".navbar") ;    
    closeNav.style = "width:0;transition : width 0.2s ease-in-out;"; // Adding transition for smooth closing     
}   



function openMenu()
{

    let openNavbar=document.querySelector(".navbar");
    openNavbar.style="width:300px;transition : width 0.2s ease-in;";

}










