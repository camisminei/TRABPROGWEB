class AdicaoCard{

    addCard(){
        var novoCard = document.createElement("div");
        var novoCard2 = document.createElement("div");

        let check = document.createElement("img");
        let check2 = document.createElement("img");
        let imgExcluir = document.createElement("img");
        let imgEditar = document.createElement("img");

        imgExcluir.src = "img/trash.svg";
        imgEditar.src = "img/pencil.svg";

        check.src = "img/circle-outline.png";
        check.addEventListener("click", function(){
            check.remove();
            check2.src = "img/check.png";
        })
        check2.addEventListener("click", function(){
            check.src = "img/circle-outline.png";
        })
        
        novoCard.className="card-col";
        novoCard.innerHTML = "Aqui";


        novoCard2.appendChild(check);
        novoCard2.appendChild(check2);
        document.getElementById("card-col").appendChild(novoCard2);
        

        novoCard.appendChild(imgEditar);
        novoCard.appendChild(imgExcluir);
        document.getElementById("card-col").appendChild(novoCard);
    }

    changeImg(){

    }
}
let add = new AdicaoCard();