class Controller{

    constructor(){
        this.cards = [];
        this.geradorId = 0;
        this.idEditar = null;
    }

    lerDados(){
        let card = {};

        card.titulo = document.getElementById("titulo").value;
        card.descricao = document.getElementById("descricao").value;
        
        return card;
    }

    validarEntrada(card){

        let msg = "";

        if(card.titulo == ""){
            msg+= "Obrigatório preencher campo título\n";
        }

        if(card.descricao == ""){
            msg+="Obrigatório preencher campo descrição\n";
        }

        if(msg != ""){
            alert(msg);
            return false;
        }

        return true;
    }

    limparCampos(){
        let card = {};

        card.titulo = document.getElementById("titulo").value = "";
        card.descricao = document.getElementById("descricao").value = "";
        
        return card;
    }

    adicionar(card){
        card.id = this.geradorId;
        this.cards.push(card);
        this.geradorId++;
    }

    atualizarEstado() {
        if (localStorage.getItem('cards') != null) {
            this.cards = JSON.parse(localStorage.getItem('cards'))
        }

        if (localStorage.getItem('geradorId') != null) {
            this.geradorId = JSON.parse(localStorage.getItem('geradorId'))
        }

        this.gerarCard()
    }

    sincronizarLocalStorage(){
        console.log(this.cards);
        localStorage.setItem('cards', JSON.stringify(this.cards));
        localStorage.setItem('geradorId', this.geradorId);
    }

    salvar(){
        let card = this.lerDados();

        if(this.validarEntrada(card)){
            if(this.idEditar == null){
                this.adicionar(card);
            }
            else{
                this.salvarEdicao(card);
            }
        }

        this.limparCampos();
        this.sincronizarLocalStorage();
        this.gerarCard(); 
    }

    salvarEdicao(card) {
        let i = 0
        let achou = false

        while (i < this.cards.length && !achou) {
            if (this.cards[i].id == this.idEditar) {
                this.cards[i].titulo = card.titulo;
                this.cards[i].descricao = card.descricao;
                achou = true
            }
            i++
        }
    }

    editar(id) {
        let i = 0
        let achou = false

        while (i < this.cards.length && !achou) {
            if (this.cards[i].id == id) {
                document.getElementById('titulo').value = this.cards[i].titulo;
                document.getElementById('descricao').value = this.cards[i].descricao;
                document.getElementById("modal-forms").style.opacity = 1;
                this.idEditar = id
                achou = true
            }
            i++
        }
    }

    excluir(id) {
        if (confirm("Tem certeza que deseja excluir essa tarefa?")) {
            let i = 0
            let achou = false

            while (i < this.cards.length && !achou) {
                if (this.cards[i].id == id) {
                    achou = true
                } else {
                    i++
                }
            }

            if (achou) {
                this.cards.splice(i, 1)
                this.gerarCard()
            }
        }
    }

    gerarCard(){
        let modalCard = document.getElementById("card");
        modalCard.innerHTML = "";

        for(let i=0; i<this.cards.length; i++){

            let novoCard = document.createElement('div');
            let title = document.createElement('h4');
            let description = document.createElement('label');
            let imgEditar = document.createElement('img');
            let imgExcluir = document.createElement('img');

            imgEditar.src = "img/pencil.svg";
            imgExcluir.src = "img/trash.svg";

            imgEditar.setAttribute('onclick', `gerenciar.editar('${this.cards[i].id}')`);
            imgExcluir.setAttribute('onclick', `gerenciar.excluir('${this.cards[i].id}')`);

            title.innerText = this.cards[i].titulo;
            description.innerText = this.cards[i].descricao;

            novoCard.className = "card";
            novoCard.appendChild(title);
            novoCard.appendChild(description);
            novoCard.appendChild(imgEditar);
            novoCard.appendChild(imgExcluir);
            modalCard.appendChild(novoCard);

        }
    }
}

let gerenciar = new Controller();