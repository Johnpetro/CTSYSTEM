const scroll = ScrollReveal({
    reset:true,
    duration:2600,
    distance:'60px'
  
  })
  scroll.reveal('.form-transform',{delay:300,origin:'top'})
  scroll.reveal('.text-transform',{delay:100,origin:'left'})
  scroll.reveal('.text-hero',{delay:200,origin:'top'})
  scroll.reveal('.hero-transform',{delay:100,origin:'right'})


const menu =  document.querySelector('#menu');
menu.addEventListener('click',(e)=>{
   let list =  document.querySelector('#list');
   if(list.classList.contains('men')){
    list.classList.toggle('hidden')
   }
  e.preventDefault();
})