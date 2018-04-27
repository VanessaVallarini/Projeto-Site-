var iniciar = document.querySelector("#meuBotaoIniciar");
var fecharBtn = document.querySelector("#fechar")

//chama o formulário ao clicar no botão iniciar 
botaoIniciar.onclick = function() {
	iniciar.style.display = "block";
}

//fecha o formulário quando o usuário clica no botão fechar
fecharBtn.onclick = function() {
	iniciar.style.display = "none";
}

//Validação de campo vazio, e-mail inválido e senha.
function validateForm() {
    var x = document.forms["form1"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (document.form1.email.value == "") {
				window.alert('Preencha o campo com seu e-mail');	
				form1.password.focus();
				return false;
		}
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Insira um e-mail válido!");
        return false;
	}

    if (document.form1.password.value == "") {
				window.alert('Preencha o campo com sua senha');	
				form1.password.focus();
				return false;
		}
		
	else{
		window.open("quiz.html");
		return true;
		}	
    
}
