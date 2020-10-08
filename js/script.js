class AdicaoCard{

    addCard(){
        var novoCard = document.createElement("div");
        let imgExcluir = document.createElement("img");
        let imgEditar = document.createElement("img");
        imgExcluir.src = "img/trash.svg";
        imgEditar.src = "img/pencil.svg";
        novoCard.className="card-col";
        novoCard.innerHTML = "Aqui";
        novoCard.appendChild(imgEditar);
        novoCard.appendChild(imgExcluir);
        document.getElementById("card-col").appendChild(novoCard);
    }
}
let add = new AdicaoCard();