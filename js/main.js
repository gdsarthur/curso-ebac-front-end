$(document).ready(function(){
    $("#telefone").mask("(00) 00000-0000")
    $("#cpf").mask("000.000.000-00")
    $("#cep").mask("00.000-000")

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
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