import './styles/tooltip.css';
class Tooltip {
  // element - the thing that we want to use the tooltip on
  constructor(element) {
    this.element = element;
    this.message = element.getAttribute('data-message');
  }
  // function to initialize the component
  init() {
    // create the bubble
    const tip = document.createElement('div');
    tip.classList.add('tip');
    tip.textContent = this.message;
    this.element.appendChild(tip);

    this.element.addEventListener('mouseenter', () => {
      tip.classList.add('active');
    });
    this.element.addEventListener('mouseleave', () => {
      tip.classList.remove('active');
    });
  }
}

export { Tooltip as default };
