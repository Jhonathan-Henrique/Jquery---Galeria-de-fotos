$(document).ready(function() {
   
   $('header button').click(function(){
      $('form').slideDown()
   })

   $('form').on('submit', function(e){
      e.preventDefault()
      const enderecoDaNovaImg = $('#endereco-img-nova').val()
      const novoItem = $('<li style="display: none"></li>')
      $(`<img src="${enderecoDaNovaImg}" />`).appendTo(novoItem)
      $(`
         <div class="overlay-link-img">
            <a href="${enderecoDaNovaImg}" title="Ver imagem em tamanho real" target="_blank">
               Ver imagem em tamanho real
            </a>
         </div>`).appendTo(novoItem)
         $(novoItem).appendTo('ul')
         $(novoItem).fadeIn(1000)
         $('#endereco-img-nova').val(' ')
   })

   $('#btn-cancelar').click(function(){
      $('form').slideUp()
   })
})