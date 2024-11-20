const yearDiv = document.getElementById("yr");
for(let i=2000;i <=3000;i++){
    const year = document.createElement("p");
    if((i%4===0 && i%100!==0) || i%400===0){
        year.textContent = i;
        yearDiv.appendChild(year);
    }
   
}

