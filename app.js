let p = document.getElementById("mood-text");
function showMood(mood) {
    let message = "";
  
    // Match mood to the clicked emoji
    if (mood === "happy") {
      message = "You’re feeling Happy! 😊";
    } else if (mood === "sad") {
      message = "You’re feeling Sad 😢";
    } else if (mood === "angry") {
      message = "You’re feeling Angry 😡";
    } else if (mood === "love") {
      message = "You’re in Love! 😍";
    } else if (mood === "tired") {
      message = "You’re feeling Sleepy 😴";
    } else if (mood === "cool") {
      message = "You’re feeling Cool 😎";
    } else if (mood === "surprised") {
      message = "You’re feeling Surprised 😲";
    } else if (mood === "confused") {
      message = "You’re feeling Confused 🤔";
    } else if (mood === "crying") {
      message = "You’re feeling Emotional 😭";
    } else if (mood === "laughing") {
      message = "You’re feeling Hilarious 😂";
    } else if (mood === "shocked") {
      message = "You’re feeling Shocked 😱";
    } else if (mood === "sick") {
      message = "You’re feeling Sick 🤢";
    } else if (mood === "sleeping") {
      message = "You’re feeling Sleepy 😪";
    }else{
        p.style.display = "none";
    }
  
    // Update the mood text displayed on the page
   p.textContent = message;
  }
  