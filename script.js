function TC() {
  // A primeira linha localiza o campo de entrada (o input do HTML) e o guarda na variável InputTarefa.
  let InputTarefa = document.getElementById("inputTarefa");
  //A segunda linha pega apenas o texto que está escrito lá dentro naquele momento e guarda na variável tarefa.
  let tarefa = InputTarefa.value.trim();
  let mensagem = document.getElementById("mensagem");

  if (tarefa == "") {
    let mensagemErro = "Erro: Adicione um texto!";
    mensagem.textContent = mensagemErro;
    mensagem.style.color = "red";
  } else if (tarefa == "dalek") {
    let exterminar = "Exterminar!";
    mensagem.textContent = exterminar;
    mensagem.style.color = "blue";
  } else {
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;
    mensagem.style.color = "green";
    //Aqui você localiza onde a lista está (geralmente uma tag <ul> ou <ol>).
    //O comando document.createElement("li") é como se você pedisse para o navegador: "Ei, fabrica um novo item de lista (<li>) para mim na memória, mas ainda não coloca na tela".
    let listaTarefa = document.getElementById("lista");
    let novaTarefa = document.createElement("li");

    //textContent: Você está dizendo que o texto dentro daquela <li> nova será o que você capturou lá no passo 1.
    novaTarefa.textContent = tarefa;
    //appendChild: Esse é o momento "mágico". Você está pegando a novaTarefa (que estava só na memória) e pendurando ela dentro da listaTarefa. Agora ela aparece para o usuário.
    listaTarefa.appendChild(novaTarefa);
  }
  InputTarefa.value = "";
}
