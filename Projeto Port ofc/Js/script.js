
// Preenche automaticamente o ano atual no footer


// Busca o elemento com id="anoAtual" no HTML
document.getElementById('anoAtual').textContent = new Date().getFullYear();
// • new Date().getFullYear() → retorna o ano atual (ex: 2025)
// • textContent → insere o ano dentro do elemento



// Atualiza o conteúdo do modal ao clicar em um card com botão

// Seleciona o modal na página
var detailModal = document.getElementById('detailModal');

/*
  O evento "show.bs.modal" é disparado pelo Bootstrap
  ANTES do modal abrir — ideal para inserir conteúdo dinamicamente
*/
detailModal.addEventListener('show.bs.modal', function (event) {

  // "event.relatedTarget" pega o botão que abriu o modal
  var button = event.relatedTarget;

  /*
    Busca nos atributos do botão:
    - data-title → título do modal
    - data-body  → descrição/texto do modal
    Caso algum não exista, usa valor padrão.
  */
  var title = button.getAttribute('data-title') || 'Detalhe';
  var body = button.getAttribute('data-body') || 'Descrição';

  // Atualiza o título do modal
  
  detailModal.querySelector('.modal-title').textContent = title;

  // Atualiza o conteúdo do corpo do modal

  detailModal.querySelector('#modalBody').textContent = body;
});