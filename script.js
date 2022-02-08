const openNav =  document.querySelector('.navbar');
const overlay =  document.querySelector('.overlay');

function toggleNav()

{
   openNav.classList.toggle('navbar--open');
   if(openNav.classList.contains('navbar--open'))
   {
       overlay.classList.toggle('hidden');
   }else
   {
    overlay.classList.add('hidden');
   }
    
}

overlay.classList.add('hidden');