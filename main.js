$(document).ready(function() {
   $('header button').click(function(){
      alert('teste')
   })

   $('form').on('submit', function(e){
      e.preventDefault()
   })
})