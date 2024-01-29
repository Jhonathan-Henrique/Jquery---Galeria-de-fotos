$(document).ready(function() {
   $('header button').click(function(){
      $('form').slideDown()
   })

   $('form').on('submit', function(e){
      e.preventDefault()
   })

   $('#btn-cancelar').click(function(){
      $('form').slideUp()
   })
})