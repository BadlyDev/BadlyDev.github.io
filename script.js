var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // make sure they're display none
  for (const slide of slides){
    slide.style.display = 'none'
  }
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Optional: Stop observing once visible
          }
      });
  }, {
      threshold: 0.1 // Adjust as needed
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll('#items p1'); // Select navigation links

  navbarLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default anchor click behavior
          const sectionId = link.id.replace('link-', ''); // Assume IDs are directly usable, replace 'link-' with ''
          const section = document.getElementById(sectionId); // Attempt to get the section

          if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the section if it exists
          } else {
              console.error('No section found for ID:', sectionId); // Log an error if section not found
          }
      });
  });
});
