var i = 0;
var txt = "I am a versatile individual with skills in design and programming, passionate about creating interactive and visually appealing websites and mobile applications. I am open to new challenges and eager to learn new technologies and tools to continually enhance my skills. My imagination and ability for creative thinking allow me to bring original ideas and solutions to projects. I am extremely punctual and consider deadlines to be a crucial aspect of any project. I believe that respecting one's own time and that of others is key to achieving success.";
var speed = 50;
var visible = false;

function typewriter() {
    var demoElement = document.getElementById("typewrite");

    if (i < txt.length && visible) {
        demoElement.innerHTML += txt.charAt(i);
        i++;
    }

    if (i === txt.length) {
        return;
    }

    setTimeout(typewriter, speed);
}

function startTypewriterOnScroll() {
    var demoElement = document.getElementById("typewrite");
    var elementPosition = demoElement.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (elementPosition < windowHeight) {
        visible = true;
    } else {
        visible = false;
    }
}

window.addEventListener("scroll", startTypewriterOnScroll);
typewriter();



window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");

    // Sprawdź, czy strona została przewinięta wystarczająco daleko, aby zmienić kolor tła navbaru
    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled"); // Dodaj klasę "scrolled" do navbaru
    } else {
        navbar.classList.remove("scrolled"); // Usuń klasę "scrolled" z navbaru
    }
});




// Funkcja sprawdzająca, czy element jest w polu widzenia użytkownika
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight
    );
  }
  
  // Funkcja obsługująca animację
  function animateElement() {
    var element = document.querySelector(".skills");
  
    // Sprawdź, czy element jest w polu widzenia użytkownika
    if (isElementInViewport(element)) {
      element.classList.add("animate"); // Dodaj klasę "animate" do uruchomienia animacji
      window.removeEventListener("scroll", animateElement); // Usuń nasłuchiwanie zdarzenia przewijania strony
    }
  }
  
  // Nasłuchiwanie zdarzenia przewijania strony
  window.addEventListener("scroll", animateElement);
  



  // Funkcja sprawdzająca, czy element jest w polu widzenia użytkownika
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight
  );
}

// Funkcja aktualizująca aktywny link nawigacji
function updateActiveLink() {
  var navLinks = document.querySelectorAll('.navbar a');

  for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];
    var sectionId = link.getAttribute('href').substring(1);
    var section = document.getElementById(sectionId);

    if (isElementInViewport(section)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }
}

// Funkcja obsługująca zdarzenie przewijania strony
function handleScroll() {
  updateActiveLink();
}

// Nasłuchiwanie zdarzenia przewijania strony
window.addEventListener('scroll', handleScroll);




document.addEventListener('DOMContentLoaded', function() {
  const myButtons = document.getElementsByClassName('myButton');
  const myWindows = document.getElementsByClassName('myWindow');
  const closeButtons = document.getElementsByClassName('closeButton');
  let activeWindow = null;

  for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener('click', function() {
      const window = this.nextElementSibling;
      if (activeWindow) {
        activeWindow.style.display = 'none';
      }
      window.style.display = 'block';
      activeWindow = window;
    });

    closeButtons[i].addEventListener('click', function() {
      const window = this.parentElement;
      window.style.display = 'none';
      activeWindow = null;
    });
  }
});