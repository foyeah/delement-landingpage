export function animateLinks() {
  const animatedLinks = document.querySelectorAll('[data-animated-link]');

  function addActive(linkArrow) {
    linkArrow.classList.remove('card__link-img_inactive');
    linkArrow.classList.add('card__link-img_active');
  }

  function removeActive(linkArrow) {
    linkArrow.classList.add('card__link-img_inactive');
    linkArrow.classList.remove('card__link-img_active');
  }

  animatedLinks.forEach((link) => {
    const [arrow] = link.getElementsByTagName('svg');

    link.addEventListener('mouseover', () => addActive(arrow));

    link.addEventListener('mouseleave', () => removeActive(arrow));
  });
}
