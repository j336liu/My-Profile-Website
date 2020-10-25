const triggerFadeIn = () => {
  const allHiddenElements = document.querySelectorAll('.hidden');
  allHiddenElements.forEach((hiddenElement, index) => {
    setTimeout(() => {
      hiddenElement.style.opacity = 1;
      hiddenElement.style.transform = 'translateY(0px)';
    }, index);
  })
}

const toggleMobileNav = (e) => {
  e.preventDefault();
  const mobileNav = document.querySelector('.mobile-nav');
  if (mobileNav.classList.contains('show')) {
    // when it's already shown on the page
    mobileNav.classList.remove('show');
  } else {
    // when it's hidden, and now is clicked
    mobileNav.classList.add('show');
  }
}

const attachMobileNavButton = () => {
  const mobileNavAnchors = document.querySelectorAll('.mobile-nav-anchor')
  mobileNavAnchors.forEach(anchor => {
    anchor.addEventListener('click', toggleMobileNav);
  })
}

const attachOnSubmitToForm = () => {
  const form = document.querySelector('form.contact');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value;
    const message = form.querySelector('[name="message"]').value;
    window.open(`mailto:test@abc.com?subject=Feedback From ${name}&body=${message}`);
  })
}

window.onContactFormSubmit = token => {
  console.log(token);
  const form = document.querySelector('form.contact');
  form.submit();
}

window.onload = function() {
  triggerFadeIn();
  attachMobileNavButton();
  attachOnSubmitToForm();
}

