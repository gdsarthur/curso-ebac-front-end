$(document).ready(function(){
    $("#telefone").mask("(00) 00000-0000")

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            mensagem: {
                required: true
            },
        },
        submitHandler: function (form) {
            alert('Formulário registrado!')
            $('#formulario').each (function(){
                this.reset();
            });
        },
        invalidHandler: function(evento, validador){
            var camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})