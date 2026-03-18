function TC() {
  let InputTarefa = document.getElementById("inputTarefa");
  let tarefa = InputTarefa.value.trim();
  let mensagem = document.getElementById("mensagem");

  if (tarefa == "") {
    let mensagemErro = "Erro: Adicione um texto!";
    mensagem.textContent = mensagemErro;
    mensagem.style.color = "red";
  } else if (tarefa == "cyborg" || tarefa == "Cyborg") {
    let deletar = "Deletar";
    mensagem.textContent = deletar;
    mensagem.style.color = "blue";
  } else if (tarefa == "dalek" || tarefa == "Dalek") {
    let exterminar = "Exterminar!";
    mensagem.textContent = exterminar;
    mensagem.style.color = "red";
  } else {
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;
    mensagem.style.color = "green";

    let listaTarefa = document.getElementById("lista");
    let novaTarefa = document.createElement("li");

    novaTarefa.textContent = tarefa;
    listaTarefa.appendChild(novaTarefa);
  }
  InputTarefa.value = "";
}
let scriptV = document.getElementById("scriptV");
scriptV.textContent = "Script: V0.0.2";
