$(document).ready(function () {

    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: true, 
        dots: true,  
        autoplaySpeed: 3000 
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });  
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    $('#form').validate({
        rules: {
            nome: "required",
            email: {
                required: true,
                email: true
            },
            telefone: "required",
            cpf: "required",
            endereco: "required",
            cep: "required"
        },
        messages: {
            nome: "Por favor, insira seu nome completo.",
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: "Por favor, insira seu telefone.",
            cpf: "Por favor, insira seu CPF.",
            endereco: "Por favor, insira seu endereço.",
            cep: "Por favor, insira seu CEP."
        },
        errorClass: "error",
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha todos os campos corretamente para prosseguir com a compra!");
        }
    });
});
