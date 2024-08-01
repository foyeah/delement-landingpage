import { sendData } from './api';
import {
  clearValidationMessages,
  getData,
  isContactFormValid,
  displayValidationMessages,
  clearForm,
} from './validations';

export function modalFunctionality() {
  const ourteamModal = document.getElementById('our-team-modal');
  const ourteamModalForm = document.getElementById('our-team-modal-form');
  const ourteamModalSuccess = document.getElementById('our-team-modal-success');
  const ourteamBtn = document.getElementById('our-team_btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalActiveClass = 'modal_active';
  const modalBackground = document.getElementById('modal-background');

  function openModal() {
    ourteamModal.classList.add(modalActiveClass);
    ourteamModalForm.classList.add('our-team-modal__form_active');
    ourteamModalSuccess.classList.remove('our-team-modal__success_active');
    document.addEventListener('click', handleClick);
  }

  function closeModal() {
    ourteamModal.classList.remove(modalActiveClass);
    document.removeEventListener('click', handleClick);
  }
  
  ourteamBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  const contactForm = document.getElementById('contact-form');
  const errorSpan = document.getElementById('js-form-error');

  function handleClick(event) {
    if (event.target === modalBackground) {
      ourteamModal.classList.remove(modalActiveClass);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    clearValidationMessages(contactForm);
    const [data, inputs] = getData(contactForm);
    const result = isContactFormValid(inputs);
    displayValidationMessages(result, inputs);
    if (result.errors.length === 0) {
      try {
        await sendData(data);

        if (ourteamModalForm) {
          ourteamModalForm.classList.remove('ourteam-modal__form_active');
        }
        if (ourteamModalSuccess) {
          ourteamModalSuccess.classList.add('ourteam-modal__success_active');
        }
        clearForm(contactForm);
      } catch (error) {
        if (errorSpan) {
          errorSpan.textContent = error.errorMessages.message;
        }
      }
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
  }
}