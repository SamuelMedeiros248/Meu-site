function TC() {
  let InputTarefa = document.getElementById("inputTarefa");
  let tarefa = InputTarefa.value;
  //document.getElementById("TudoCerto").textContent = tarefa;

  let listaTarefa = document.getElementById("lista");
  let novaTarefa = document.createElement("li");

  novaTarefa.textContent = tarefa;

  listaTarefa.appendChild(novaTarefa);

  InputTarefa.value = "";
}
console.log("script carregado");
