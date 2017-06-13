$(document).ready(function(){
        $("#ini_prot").click(function(){
                 $("#area").append("<figure><img src='../paginas/img/inicio_prot.png' width='62' height='62' id='inicio'><figcaption id='inicio'>Inicio do protocolo</figcaption></figure>");
                $("#inicio").draggable();       
        }); 
    
     $("#dec_prot").click(function(){
                $("#area").append("<img src='../paginas/img/decisao_prot.png' width='62' height='62'id='decisao'> ");
                $("#decisao").draggable();
        }); 
    
         $("#nome_prot").click(function(){
                legenda_acao= prompt("Digite a ação a ser realizado.");
                 $("#area").append("<figure><img src='../paginas/img/nome_prot.png' width='62' height='62' id='nome'></figure><figcaption>"+legenda_acao+"</figcaption>");
                $("#nome").draggable();       
        }); 
    
        $("#caminho_prot").click(function(){
                legenda_caminho = prompt("Digite uma legenda para a situação");
               $("#area").append("<figure><img src='../paginas/img/caminho_prot.png' width='62' height='62' id='caminho'></figure><figcaption>"+legenda_caminho+"</figcaption>");
                $("#caminho").draggable();       
        }); 
    
    
});
