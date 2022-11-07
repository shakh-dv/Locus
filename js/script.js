'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //modal 

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]'),
        a = document.querySelector('nav-link')

    modalTrigger.forEach(element => {
        element.addEventListener('click', showModal)
    })

    function showModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    modalClose.addEventListener('click', closeModal);

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    function close() {
        anchor1.addEventListener('click', (a) => {
            a.closeModal()
        })
    }

    const anchors = document.querySelectorAll('a[href^="#"]')

    for(let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
            document.querySelector(goto).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    }

    const anchor1 = document.querySelector.apply('a[href^="#tour"]')

    for(let anch of anchor1) {
        anch.addEventListener('click',function(i) {
            i.preventDefault()
            const g = anch.hasAttribute('href') ? anch.getAttribute('href'): 'body'
            document.querySelector(goto).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    }



})