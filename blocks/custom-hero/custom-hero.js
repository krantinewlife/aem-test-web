

export default async function decorate(block) {
  const heroImgBlock = block.children[0];
  console.log('heroImgBlock:', heroImgBlock);

  const heroImge = heroImgBlock?.querySelector('picture');
  console.log('heroImge:', heroImge);

  const container = document.createElement('div');
  container.classList.add('hero-container-test');

  if (heroImge) {
    heroImge.classList.add("hero-image");
    container.appendChild(heroImge);
  } else {
    console.warn('No picture element found in heroImgBlock');
  }

  block.textContent = '';
  block.appendChild(container);
}
