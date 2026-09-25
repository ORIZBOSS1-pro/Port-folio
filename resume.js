// ==========================================
// ORIZBOSS RESUME JAVASCRIPT
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  
  menuBtn.addEventListener("click", function() {
    
    navLinks.classList.toggle("active");
    
    const icon = menuBtn.querySelector("i");
    
    if (navLinks.classList.contains("active")) {
      
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      
    } else {
      
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      
    }
    
  });
  
  
  // Close menu after clicking a link
  navLinks.querySelectorAll("a").forEach(function(link) {
    
    link.addEventListener("click", function() {
      
      navLinks.classList.remove("active");
      
      const icon = menuBtn.querySelector("i");
      
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      
    });
    
  });
  
}


// ==========================================
// PRINT / DOWNLOAD CV
// ==========================================

const printBtn = document.getElementById("printBtn");

if (printBtn) {
  
  printBtn.addEventListener("click", function() {
    
    window.print();
    
  });
  
}


// ==========================================
// CURRENT YEAR
// ==========================================

const year = document.getElementById("year");

if (year) {
  
  year.textContent = new Date().getFullYear();
  
}


// ==========================================
// SCROLL REVEAL
// ==========================================

const sections =
  document.querySelectorAll(".section");

const observer =
  new IntersectionObserver(
    
    function(entries) {
      
      entries.forEach(function(entry) {
        
        if (entry.isIntersecting) {
          
          entry.target.classList.add("show");
          
        }
        
      });
      
    },
    
    {
      threshold: 0.1
    }
    
  );


sections.forEach(function(section) {
  
  observer.observe(section);
  
});