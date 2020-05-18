// this is a comment

var btns = document.querySelectorAll(".drum");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // btns[i].addEventListener("click", function(event) {
    makeSound(this.innerHTML);
    buttonAnimation(this);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);

  var btn = document.querySelector("button." + event.key + ".drum")
  buttonAnimation(btn);
})

function makeSound(key) {
  var audio = new Audio("");

  switch (key) {
    case "w":
      audio.setAttribute("src", "sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio.setAttribute("src", "sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio.setAttribute("src", "sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio.setAttribute("src", "sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio.setAttribute("src", "sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio.setAttribute("src", "sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio.setAttribute("src", "sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("key entered is: " + key);
  }
}


function buttonAnimation(currentBtn) {
  // currentBtn.animate(
  //   [
  //   // keyframes
  //   { transform: 'rotate(15deg)'},
  //   { transform: 'rotate(-15deg)'}
  //   ],
  //   {
  //   // timing options
  //   duration: 100,
  //   iterations: 1,
  //   }
  // );

  currentBtn.classList.add("pressed");
  setTimeout(function() {
    currentBtn.classList.remove("pressed");
  }, 100);
}
