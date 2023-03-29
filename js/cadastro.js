function msg() {
  $("#mensagem").addClass('ver');
  setTimeout(function () { $("#mensagem").removeClass('ver'); }, 3000);
}

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const data = {
    nome: form.nome.value,
    email: form.email.value,
    empresa: form.empresa.value,
    telefone: form.telefone.value,
    status: 'ativo'
  };

  fetch('/clientes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        alert('Cliente cadastrado com sucesso!');
        form.reset();
      } else {
        throw new Error('Erro ao cadastrar o cliente');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Erro ao cadastrar o cliente');
    });
});
