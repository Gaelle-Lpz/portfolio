// change the title at scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navbarTitle = document.querySelector('nav span');
  const windowHeight = window.innerHeight;
  let sectionActive = sections[0];

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - (windowHeight - (sectionHeight * 0.5))) {
      sectionActive = section;
    }
  });

  if (sectionActive != sections[0]) {
    navbarTitle.textContent = sectionActive.getAttribute('id');
  }
  else {
    navbarTitle.textContent = "";
  }
});
