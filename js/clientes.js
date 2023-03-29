//QUANTITATIVOS DE CLIENTES

fetch('clientes.json')
  .then(response => response.json())
  .then(data => {
    const clientesCadastrados = data.clientes.length;
    const clientesAtivos = data.clientes.filter(cliente => cliente.status === 'ativo').length;
    const clientesInativos = data.clientes.filter(cliente => cliente.status === 'inativo').length;

    document.querySelector('#clientes-cadastrados').textContent = clientesCadastrados;
    document.querySelector('#clientes-ativos').textContent = clientesAtivos;
    document.querySelector('#clientes-inativos').textContent = clientesInativos;
  });



window.addEventListener('load', () => {
  const cells = document.querySelectorAll('#clientes-table tbody td');

  function editarCelula(cell) {
    cell.addEventListener('click', () => {
      // Obter o valor atual da célula
      const currentValue = cell.innerHTML.trim();
  
      // Criar um elemento de entrada de texto e definir o valor atual como padrão
      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentValue;
  
      // Substituir a célula pelo elemento de entrada de texto
      cell.innerHTML = '';
      cell.appendChild(input);
  
      // Dar foco ao elemento de entrada de texto e selecionar todo o texto
      input.focus();
      input.select();
  
      // Quando o usuário pressionar a tecla Enter, salvar o novo valor e atualizar o arquivo JSON
      input.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
          const newValue = input.value.trim();
          cell.innerHTML = newValue;
  
          // Atualizar o arquivo JSON com os novos valores
          // ...
  
          // Salvar o arquivo JSON
          // ...
        }
      });
    });
  }
  
  cells.forEach(editarCelula);
});
