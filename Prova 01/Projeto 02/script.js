function voltarValores(){
    let quantidade = document.getElementById('inputQuantidade').value;
    let indexItemSelecionado = document.getElementById('ComboBox').selectedIndex;


    if(indexItemSelecionado === 0 || !(quantidade)){
        texto.textContent='Existem campos que não foram informados corretamente';
    } else {
        if(arrayQuantidadeEmEstoque[indexItemSelecionado - 1] >= quantidade){
            let total = quantidade * arrayPrecos[indexItemSelecionado - 1];
            texto.textContent = 'Total a pagar: R$ ' + total + ',00';
        } else {
            texto.textContent = 'Desculpe, não temos essa quantidade em estoque, temos apenas ' + arrayQuantidadeEmEstoque[indexItemSelecionado - 1] + ' unidades desse produto.';
        }
    }
}


var ComboBox = document.getElementById('ComboBox');
var Quantidade = document.getElementById('inputQuantidade');
var texto = document.getElementById('mensagem');
texto.textContent = 'Verifique um item';

var arrayItens = ['Video Game', 'Radio', 'Geladeira', 'Fogão', 'Bola de futebol', 'Raquete de Tenis', 'Tenis', 'Calca'];
var arrayPrecos = [900, 80, 250, 350, 30, 500, 250, 70];
var arrayQuantidadeEmEstoque = [2, 5, 5, 2, 10, 30, 8, 20];
var arrayImagens = [];

arrayItens.forEach((texto) => {
        let item = document.createElement('option');
        item.textContent = texto;

        ComboBox.appendChild(item);
    }
);