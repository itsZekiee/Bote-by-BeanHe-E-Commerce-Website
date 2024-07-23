// home contents transition
document.addEventListener("DOMContentLoaded", function() {
  const homeData = document.querySelector(".home__data");
  homeData.classList.add("animate");
});

// Sign In & Sign Up Form Slider
const container = document.getElementById('register__container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

//Favorite Feauture
const heart = document.querySelector('.heart');

heart.addEventListener('mouseover', () => {
  heart.classList.add('fa-bounce');
});

heart.addEventListener('mouseout', () => {
  heart.classList.remove('fa-bounce');
});

heart.addEventListener('click', () => {
  heart.classList.toggle('active');
  if (heart.classList.contains('active')) {
    heart.classList.remove('fa-bounce');
  } else {
    heart.classList.add('fa-bounce');
  }
});

// Initialize Owl Carousel
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 3
      }
    }
  });
});

// FAQs 
/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}