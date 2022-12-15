// KF Panda Search

//HTML variables
let charNameEl = document.getElementById("char-name")

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value;
  name = name.toLowerCase();

  //If statment test
  if (name === "po" || name=== "dragon warrior") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML = "Buddy, I am the dragon warrior ";
    document.getElementById("char-img").src = "img/po.png"
  }
    
  else if (name === "tigress" || name === "tiger") {
    document.getElementById("char-name").innerHTML = "tigress";
    document.getElementById("char-quote").innerHTML = "That was hard core ";
    document.getElementById("char-img").src = "img/tigress.png"
  }
  else if (name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the bug";
    document.getElementById("char-img").src = "img/mantis.png"
  }
  else if (name === "monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML = ("If you beat me, I will go. If not, then it is you who must leave—without your pants!")
    document.getElementById("char-img").src = "img/monkey.png"
  }
  else   {
    document.getElementById("char-name").innerHTML = "?";
    document.getElementById("char-quote").innerHTML = ("????????????????????")
    document.getElementById("char-img").src = "img/question-mark.png"
  }

}

