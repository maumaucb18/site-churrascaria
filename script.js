// array que armazena os produtos do carrinho
//let carrinho = [];

// função para adicionar um produto ao carrinho
/*function addToCart(nome, preco) {
  // objeto que representa um item do carrinho
  const item = {
    nome: nome,
    preco: preco
  };
  // adiciona o item ao carrinho
  carrinho.push(item);
  // exibe mensagem de sucesso
  alert(`${nome} adicionado ao carrinho!`);*/
//}

// função para calcular o total da compra
//function calcularTotal() {
 // let total = 0;
  // percorre os itens do carrinho e soma os preços
//  for (let i = 0; i < carrinho.length; i++) {
  //  total += carrinho[i].preco;
 // }
 // return total;
//}

// exemplo de uso das funções
//addToCart('Margherita', 30.00);
//addToCart('Pepperoni', 35.00);
//console.log(carrinho);
//console.log(`Total da compra: R$ ${calcularTotal().toFixed(2)}`);
//res.innerHTML += `Total da compra: R$ ${calcularTotal().toFixed(2)}`;




    startList = function() {
    if (document.all&&document.getElementById) {
    navRoot = document.getElementById("");
    for (i=0; i<navRoot.childNodes.length; i++) {
    node = navRoot.childNodes[i];
    if (node.nodeName=="LI") {
    node.onmouseover=function() {
    this.className+=" over";
      }
      node.onmouseout=function() {
      this.className=this.className.replace
      (" over", "");
       }
       }
      }
     }
    }
    window.onload=startList;

    
      (document).readyfunction () 
        // Add smooth scrolling to all links
        ("a").on("click", function (event) {
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
  
            // Store hash
            var hash = this.hash;
  
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top,
              },
              800,
              function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              }
            );
          } // End if
        });
      
   
  
  
 