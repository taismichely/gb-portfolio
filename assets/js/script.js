const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){
  event.preventDefault();

  // Validação do nome com menos de 3 caracteres
  const campoNome = document.querySelector('#name');
  const textNome = document.querySelector('#txtNome');

  if(campoNome.value.length < 3) {
    textNome.innerHTML = "O nome deve ter 3 caracteres!";
    campoNome.focus();
    return;
  } else {
    textNome.innerHTML = '';
  }

  // Validação do formato do e-mail
  const campoEmail = document.querySelector('#email');
  const textEmail = document.querySelector('#txtEmail');

  if(!campoEmail.value.match(emailRegex)) {
    textEmail.innerHTML = 'Insira um e-mail válido!';
    campoEmail.focus();
    return;
  } else {
    textEmail.innerHTML = '';
  }

  // Validação do assunto do formulário com menos de 5 caracteres
  const campoAssunto = document.querySelector('#subject');
  const textAssunto = document.querySelector('#txtSubject');

  if(campoAssunto.value.length < 5) {
    textAssunto.innerHTML = 'O assunto deve ter no minimo 5 caracteres!';
    campoAssunto.focus();
    return;
  } else {
    textAssunto.innerHTML = '';
  }

  // Envio da mensagem do formulário
  const campoMensagem = document.querySelector('#message');
  window.alert('Formulário enviado com sucesso!');

  campoNome.innerHTML = '';
  campoEmail.innerHTML = '';
  campoAssunto.innerHTML = '';
  campoMensagem.innerHTML = '';
});