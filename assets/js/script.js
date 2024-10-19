// executa um bloco de código ou funções, quando o scroll é feito na janela.
function none() {
    var posicaoAtual = document.documentElement.scrollTop;

    if (posicaoAtual >= 350) { 
        document.getElementById("btn-topo").style.display = "flex";
    } else {
        document.getElementById("btn-topo").style.display = "none";
            
    }

    if (posicaoAtual > 350) { 
        document.getElementById("nav-color").style.display = "none"; 
    } else {
        document.getElementById("nav-color").style.display = "flex"; 
        
    }
}

// Quando ocorre o scroll
window.onscroll = function(oEvent) {
    none();
}

$(document).ready(function() {

    $("#btn-topo").click(function() {
        var posicao = $("#home").offset().top;
        $("html, body").animate({ scrollTop: posicao }, 500);
    });

    $("#item-home").click(function(event) {
        event.preventDefault()
        var posicao = $("#home").offset().top;
        $("html, body").animate({ scrollTop: posicao }, 500);
    });

    $("#item-servicos").click(function() {
        var posicao = $("#servicos").offset().top;
        $("html, body").animate({ scrollTop: posicao }, 500);
    });

    $("#item-planos").click(function() {
        var posicao = $("#planos").offset().top;
        $("html, body").animate({ scrollTop: posicao }, 500);
    });

    $("#item-contato").click(function() {
        var posicao = $("#contato").offset().top;
        $("html, body").animate({ scrollTop: posicao }, 500);
    });

    document.getElementById('planCard').addEventListener('click', function() {
        window.location.href = 'https://drive.google.com/file/d/1B0-hinS2XLS2yaWKdzykncci-jXUBsqm/view?usp=sharing';
    });
    document.getElementById('planCard2').addEventListener('click', function() {
        window.location.href = 'https://drive.google.com/file/d/1vQ1vt5e-cNIH-TQOTmhqIhP1a8BCu_yz/view?usp=sharing';
    });
    document.getElementById('planCard3').addEventListener('click', function() {
        window.location.href = 'https://drive.google.com/file/d/1N0lK2vLD93rmjOiHRSvA7xShm_uXDwD2/view?usp=sharing';
    });

});




