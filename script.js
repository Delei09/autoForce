
const botao =  document.querySelector('.fa-angle-up');
let menu = document.querySelector('.menu');

botao.addEventListener('click' , function(){
   if( menu.classList.contains('hide') ){
       menu.classList.add('show');
       menu.classList.remove('hide')
   }else{
    menu.classList.add('hide');
    menu.classList.remove('show')
   }
})
