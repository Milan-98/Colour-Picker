let selection = document.querySelectorAll("button");
for(let i=0;i<selection.length;i++)
{
    selection[i].addEventListener("click",function(){
        let milan = getComputedStyle(selection[i]);
        

        document.querySelector(".main").style.backgroundColor = milan.backgroundColor;
    })
}