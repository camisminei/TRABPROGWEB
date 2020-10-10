class AdicaoCard{

    addCard(){
        var novoCard = document.createElement("div");
        var novoCard2 = document.createElement("div");

        let check = document.createElement("img");
        let imgExcluir = document.createElement("img");
        let imgEditar = document.createElement("img");

        imgExcluir.src = "img/trash.svg";
        imgEditar.src = "img/pencil.svg";

        check.src = "img/circle-outline.png";
        check.addEventListener("click", function(){

            if(check.getAttribute("src") === "img/circle-outline.png"){
                check.setAttribute("src","img/check.png");
            }
            else{
                check.setAttribute("src","img/circle-outline.png");
            }
        })

        novoCard.className="card-col";
        novoCard.innerHTML = "Aqui";


        novoCard2.appendChild(check);
        document.getElementById("card-col").appendChild(novoCard2);
        

        novoCard.appendChild(imgEditar);
        novoCard.appendChild(imgExcluir);

        document.getElementById("card-col").appendChild(novoCard);
        imgExcluir.setAttribute("onclick",`add.excluir_tela()`);

    }
    excluir_tela(){
        alert("clique em 'ok' para excluir");
       //let novadiv = document.createElement("div");

       // document.getElementById("divexcluir").innerHTML = '<div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">tarefa x</h5><button type="button" class="close" data-dismiss="modal" aria-label="Fechar"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>deseja deletar essa tarefa?</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">Excluir</button><button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button></div></div></div></div>';
       // document.getElementById("divexcluir").appendChild(novadiv);
        //alert("teste2");

    }


}
let add = new AdicaoCard();