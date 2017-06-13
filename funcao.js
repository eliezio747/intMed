        $(document).ready(function(){
            $("#btnEntrar").click(function(){
                    usuario = $("#loginUsuario").val();
                    senha = $("#loginSenha").val();
                if((usuario=="admin")&&(senha=="admin")){
                   window.location.assign("principal.html");
                }else{
                    $("#loginUsuario").before("<h5 id='men_error'>Usuario ou senha incorretos</h5>");
                    $("#men_error").attr({"font family":"Open Sans","font-size":"14","color":"#990000","margin-left":"10px"});                          
                }
            });
});

   