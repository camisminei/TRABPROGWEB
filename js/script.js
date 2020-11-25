class AdicaoCard{

    constructor(){
        this.titulo = "";
        this.descriçao = "";
        this.contador = 0;
        this.idEditar = null;
    }

    lerDados(){
        this.titulo = document.getElementById('titulo').value;
        this.descriçao = document.getElementById('descricao').value;
    }

    inserirCard(){
        this.lerDados();

        if(this.titulo != "" && this.descriçao != ""){
            let novoCard = document.createElement("div");
            let linhaTitulo = document.createElement("h4");
            let linhaDescricao = document.createElement("label");
            let imgEditar = document.createElement('img');
            let imgExcluir = document.createElement('img');

            novoCard.id = this.contador;
            this.contador++;

            imgEditar.setAttribute('src', 'img/pencil.svg');
            imgExcluir.setAttribute('src', 'img/trash.svg');

            imgExcluir.setAttribute('onclick', `gerenciar.excluirCampo('${novoCard.id}')`);
            imgEditar.setAttribute('onclick', `gerenciar.editarCampo('${novoCard.id}')`);

            novoCard.className="card";
            linhaTitulo.innerText = this.titulo;
            linhaDescricao.innerText = this.descriçao;


            novoCard.appendChild(linhaTitulo);
            novoCard.appendChild(linhaDescricao);
            novoCard.appendChild(imgEditar);
            novoCard.appendChild(imgExcluir);
            document.getElementById("card").appendChild(novoCard);
        }
        else{
            alert("Obrigatório preencher todos os campos!");
        }
        this.limparCampo();
    }

    limparCampo(){
        this.titulo = document.getElementById('titulo').value = "";
        this.descriçao = document.getElementById('descricao').value = "";
    }

    editarCampo(id){

        document.getElementById('titulo').value = document.getElementById(id).children[0].textContent;
        document.getElementById('descricao').value = document.getElementById(id).children[1].textContent;
        document.getElementById("modal-forms").style.opacity = 1;

        this.idEditar = id;

    }
    excluirCampo(id){
        if(confirm("Tem ctz que deseja excluir este campo?")){
            document.getElementById(id).remove();
        }
    }

}
let gerenciar = new AdicaoCard();