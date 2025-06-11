export default async function decorate(block) {

    const heroImgBlock = block.children[0];
    console.log(heroImgBlock + "hi");
  const heroImge = heroImgBlock.querySelector('picture');
  console.log(heroImge + "hi");
  const container = document.createElement('div');
    container.classList.add('hero-container-test');
    heroImge.classList.add("hero-image");
    container.appendChild(heroImge);
}