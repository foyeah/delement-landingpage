import './styles/common.scss';
import './styles/header.scss';
import './styles/hero.scss';
import './styles/footer.scss';
import './styles/our-clients.scss';
import './styles/what-we-do.scss'
import './styles/modal.scss'

import { modalFunctionality } from './components/ModalFunctionality';
import { animateLinks } from './components/animateLinks';

document.addEventListener('DOMContentLoaded', () => {
  modalFunctionality();
  animateLinks();
});
