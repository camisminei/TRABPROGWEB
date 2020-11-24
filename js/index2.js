class Gerenciador{
    closeNav() {
        document.getElementById("topnav").style.width = "0%";
        document.getElementById("openbtn").style.color="white";
        document.getElementById("top-add-hidden-search").style.width="100%";
        document.getElementById("card-todos").style.width="100%";
        document.getElementById("card-todos").style.margin="60px 0px 0px 0px";
      
        
    }

    openNav(){
        document.getElementById("topnav").style.width = "15%";
        document.getElementById("openbtn").style.color="transparent";
        document.getElementById("top-add-hidden-search").style.width="85%";
        document.getElementById("card-todos").style.margin="60px 0px 0px 14.7%";
        document.getElementById("card-todos").style.width="85%";
    }

    abrirModal(){
        document.getElementById("modal-forms").style.opacity = 1;
    }

    fecharModal(){
        document.getElementById("modal-forms").style.opacity = 0;
    }
}

let gerencia = new Gerenciador();