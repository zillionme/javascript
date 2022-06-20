
function changeColor(){
  document.querySelector(".pin").style.color="red";
};

let changeBt = document.querySelector("#change");
changeBt.onclick = changeColor();


