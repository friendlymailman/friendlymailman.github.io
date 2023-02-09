const words = ["and", "govern", "student", "child", "school", "without", "with", "dog", "fast", "slow", "then", "old", "house"];
let text = "";

function writeWords(num){
  for(let i = 0; i < num; i++){
    text+=(words[Math.floor(Math.random() * words.length)]+" ");
  }
  document.getElementById("typeWriter").innerHTML = text;
}

let j = 0;
let currentWordStart = 0;
let startTime;

function myKeyPress(e){
  var keynum;

  if(window.event) { // IE
    keynum = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keynum = e.which;
  }

  if(text.charAt(j) == " "){
    currentWordStart = j + 1;
  }

  document.getElementById("typeWriter").innerHTML = text.slice(0, currentWordStart) +
    "<span style='color: lime'>" + text.slice(currentWordStart, j+1) + "</span>" + text.slice(j+1);

  if (j == 0) {
    startTime = Date.now();
  }

  if(String.fromCharCode(keynum) == text.charAt(j)){
    j++;
  }else{
    document.getElementById("typeWriter").innerHTML = text.slice(0, currentWordStart) +
      "<span style='color: red'>" + text.slice(currentWordStart, j+1) + "</span>" + text.slice(j+1);
    j++;
  }

  if (j == text.length-1) {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    const elapsedTimeInSeconds = elapsedTime / 1000;
    const wordsTyped = text.split(" ").length;
    const wpm = (wordsTyped / elapsedTimeInSeconds) * 60;
    document.getElementById("wpm").innerHTML = `WPM: ${wpm.toFixed(2)}`;
  }
}
