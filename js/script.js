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
    }
}
let add = new AdicaoCard();