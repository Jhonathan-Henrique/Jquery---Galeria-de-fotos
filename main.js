$(document).ready(function(){
   $('header button').click(function(){
    alert('Expandir galeria')
   })

   $('form').on('submit', function(e) {
    e.preventDefault();
   })
})