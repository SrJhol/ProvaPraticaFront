// Seleciona os elementos do Dom
const form = document.getElementById("cadastro");
const descricaoInput =  document.getElementById("descrição");
const valorInput = document.getElementById("valor");
const categoriaInput = document.getElementById("categoria");
const dadosExibidos = document.getElementById("dados");



//Lista para armazenar os dados localmente
let dados = [];


// Função para renderizar os dados na tela
function renderizarDados(){
  dadosExibidos.innerHTML = "";//Limpa o conteúdo antes de redenizar

dados.forEach((item, index) => {
  // Criação de uma nova div para o item
  const div = document.createElement("div");
  div.innerHTML = `
  <p><strong>Descrição:</strong> ${item.descricao}</p>
      <p><strong>Valor:</strong> R$ ${parseFloat(item.valor).toFixed(2)}</p>
      <p><strong>Categoria:</strong> ${item.categoria}</p>
      <button onclick="editarItem(${index})">Editar</button>
      <button onclick="excluirItem(${index})">Excluir</button>
      <hr>
      `;
      dadosExibidos.appendChild(div);
});
}

//Adiciona o evento de submit ao formulário
form.addEventListener("submit", function (e) {
  e.preventDefault();// Impede o recarregamento da página

  const descricao = descricaoInput.value.trim();
  const valor = valorInput.value.trim();
  const categoria = categoriaInput.value;

  if(!descricao || !valor || !categoria) {
    alert("Preencha todos os campos!");
    return;
  }

  dados.push({ descricao, valor, categoria}); //Salva o item na lista
  renderizarDados(); // Atualiza a exibição
  form.reset(); // Limpa o formulário

});


//Função para excluir item 
function excluirItem(index){
  dados.splice(index, 1); //Remove item do array
  renderizarDados(); // Atualiza a tela
}

//Função para editar item
function editarItem(index){
  const item = dados[index];
  descricaoInput.value = item.descricao;
  valorInput.value = item.valor;
  categoriaInput.value = item.categoria;

  dados.splice(index, 1); // Remove temporariamente até o novo submit
  renderizarDados(); // Atualiza a exibição
}