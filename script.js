function TC() {
  let InputTarefa = document.getElementById("inputTarefa");
  let tarefa = InputTarefa.value;
  document.getElementById("TudoCerto").textContent = tarefa;
  InputTarefa.value = "";
}
