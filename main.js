'use strict'; 
  
 /** 
  * navbar toggle 
  */ 
  
 const header = document.querySelector("[data-header]"); 
 const navToggleBtn = document.querySelector("[data-nav-toggle-btn]"); 
 const navLinks = document.querySelectorAll("[data-navbar-link]"); 
  
 navToggleBtn.addEventListener("click", function () { 
   this.classList.toggle("active"); 
   header.classList.toggle("nav-active"); 
 }); 
  
 for (let i = 0; i < navLinks.length; i++) { 
   navLinks[i].addEventListener("click", function () { 
     header.classList.toggle("nav-active"); 
     navToggleBtn.classList.toggle("active"); 
   }); 
 } 
 
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
  
  
  
 /** 
  * header scroll active state & go to top 
  */ 
  
 const goTopBtn = document.querySelector("[data-go-top]"); 
  
 window.addEventListener("scroll", function () { 
  
   if (window.scrollY >= 100) { 
     header.classList.add("active"); 
     goTopBtn.classList.add("active"); 
   } else { 
     header.classList.remove("active"); 
     goTopBtn.classList.remove("active"); 
   } 
  
 });