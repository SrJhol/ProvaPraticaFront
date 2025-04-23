

exibirTabela(){
const descInput = document.getElementById("descrição");
const valorInput = document.getElementById("valor");
const catInput = document.getElementById("categoria");
const showButton = document.getElementById("show-button");
const dadosExibidos = document.getElementById("dados");

showButton.addEventListener("submit", () => {
  const desc = descInput.value;
  const valor = valorInput.value;
  const categoria = catInput.value;

  dadosExibidos.innerHTML = `<p>Descrição: ${desc}</p><p>Valor: ${valor}</p><p>Categoria: ${categoria}</p>`;

   let somando =+ valorInput
});}

   

document.getElementById("excluirBotao").addEventListener("click", function() {
    document.getElementById("cadastro").reset();
  });

  