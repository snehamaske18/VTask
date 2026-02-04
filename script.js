const messages = [
  "Hey! Stop that 😜",
  "Nice try!",
  "You can't catch me!",
  "Almost!",
  "Just click YES 😏",
  "No is not an option 😎",
  "Try again 😂",
  "Hehehe!"
];

let messageIndex = 0;
let moveRight = true;

function handleNoHover() {
  const noButton = document.querySelector('.no-button');

  // Change text
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Move left & right
  if (moveRight) {
    noButton.style.transform = "translateX(220px)";
  } else {
    noButton.style.transform = "translateX(-220px)";
  }

  moveRight = !moveRight;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
