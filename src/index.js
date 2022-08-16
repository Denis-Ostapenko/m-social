import './styles/styles.sass'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.products__swiper', {
    breakpoints: {
        320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
            grabCursor: true,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4,
            spaceBetween: 73,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletClass: 'products__pagination-bullet',
        bulletActiveClass: 'products__pagination-bullet--active',
    },
    navigation: {
        nextEl: ".products__button-next",
        prevEl: ".products__button-prev",
        disabledClass: 'products__button--disabled',
    },
});

// header
const buttonMenu = document.querySelector('.header__menu')
const contentMenu = document.querySelector('.header__menu-content')
// header изменение класса при скролле
window.addEventListener('scroll', function () {
    if (window.scrollY >= 200) {
        buttonMenu.classList.remove('header__menu--active')
        contentMenu.classList.remove('header__menu-content--active')
    }
})
// header изменение класса при клике
buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('header__menu--active')
    contentMenu.classList.toggle('header__menu-content--active')
})


//модальное окно
const buttonLogIn = document.querySelector('.header__log-in');
const buttonRegistration = document.querySelector('.header__registration');
const elemModal = createModal();
buttonLogIn.addEventListener('click', () => {
    elemModal.classList.add('modal__show');
});
buttonRegistration.addEventListener('click', () => {
    elemModal.classList.add('modal__show');
});

function createModal(options) {
    const elemModal = document.createElement('div')
    elemModal.classList.add('modal');
    const containerModal = document.createElement('div')
    containerModal.classList.add('modal__container');
    elemModal.appendChild(containerModal);
    const headerModal = document.createElement('div')
    headerModal.classList.add('modal__header');
    containerModal.appendChild(headerModal);
    const mainModal = document.createElement('div')
    mainModal.classList.add('modal__main');
    containerModal.appendChild(mainModal);
    const footerModal = document.createElement('div')
    footerModal.classList.add('modal__footer');
    containerModal.appendChild(footerModal);
    const closeModal = document.createElement('button')
    closeModal.classList.add('modal__close');
    closeModal.innerHTML = 'закрыть';
    headerModal.appendChild(closeModal);
    if (!!options?.header) {
        headerModal.innerHTML = options.header;
    }
    if (!!options?.main) {
        mainModal.innerHTML = options.main;
    }
    if (!!options?.footer) {
        footerModal.innerHTML = options.footer;
    }
    document.body.appendChild(elemModal);
    closeModal.addEventListener('click', (event) => {
        elemModal.classList.remove('modal__show');
    });
    elemModal.addEventListener('click', (event) => {
        if (event.target.className === 'modal modal__show') {
            elemModal.classList.remove('modal__show');
        }
    });
    return elemModal
};