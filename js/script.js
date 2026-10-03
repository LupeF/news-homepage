const overlayContainer = document.getElementById('over-lay-cont');
const mobileMenu = document.getElementById('hamburger-menu');
const closeBtn = document.getElementById('close-btn');

mobileMenu.addEventListener('click',()=>{
   overlayContainer.style.display = 'flex';
   mobileMenu.classList.toggle('hidden');
})
closeBtn.addEventListener('click',()=>{
    overlayContainer.style.display = 'none';
    mobileMenu.classList.toggle('hidden');
})
