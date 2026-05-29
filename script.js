// Loader

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
  });
  
  
  // Typing Effect
  
  const textArray = [
    "Finance Enthusiast",
    "Accountancy Undergraduate",
    "Junior Executive – Finance",
    "Corporate Level CA Student"
  ];
  
  let typingElement = document.getElementById("typing");
  
  let textIndex = 0;
  let charIndex = 0;
  
  function typeEffect() {
  
    if(charIndex < textArray[textIndex].length){
  
      typingElement.innerHTML += textArray[textIndex].charAt(charIndex);
  
      charIndex++;
  
      setTimeout(typeEffect, 100);
  
    }
    else{
  
      setTimeout(eraseEffect, 1500);
  
    }
  }
  
  function eraseEffect(){
  
    if(charIndex > 0){
  
      typingElement.innerHTML =
        textArray[textIndex].substring(0, charIndex - 1);
  
      charIndex--;
  
      setTimeout(eraseEffect, 50);
  
    }
    else{
  
      textIndex++;
  
      if(textIndex >= textArray.length){
        textIndex = 0;
      }
  
      setTimeout(typeEffect, 500);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if(textArray.length){
      setTimeout(typeEffect, 500);
    }
  });
  
  
  // Back to Top Button
  
  const topBtn = document.getElementById("topBtn");
  
  window.onscroll = function(){
  
    if(document.body.scrollTop > 300 ||
       document.documentElement.scrollTop > 300){
  
      topBtn.style.display = "block";
  
    }
    else{
  
      topBtn.style.display = "none";
    }
  };
  
  topBtn.onclick = function(){
  
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  
  };
  
  
  // Contact Form
  
  document.getElementById("contactForm")
  .addEventListener("submit", function(e){
  
    e.preventDefault();
  
    alert("Message Sent Successfully!");
  
  });