document.getElementById("btn_enviar").addEventListener("click", validaForm)

function validaForm(){

  var nome = document.getElementById("nome").value
  var email = document.getElementById("email").value
  var tel = document.getElementById("tel").value

  if (nome != "" && email != "" && tel != "") {
    alert("Prontinho! Você receberá as novidades por email.")
  } else {
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}