let menuHamburguer = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navBarLinks = document.querySelectorAll('header nav a');

// FUNÇÃO PARA JANELA DE NAVEGAÇÃO 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navBarLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
           });
        }
    })
}


// FUNÇÃO MENU HAMBURGUER
menuHamburguer.onclick = () => {
    menuHamburguer.classList.toggle('bx-x');
    navBar.classList.toggle('active')
}

// Função para o botão submit do formulário
// document.querySelector('#contact-form').onsubmit = function(event){
//     // verificando campos
//     validateForm();
//     return false; // Evita o envio padrão do formulário
// }
// // Função para validar o formulário
// function validateForm(){
//     let name = document.querySelector('#name').value;
//     let email = document.querySelector('#email').value;
//     let number = document.querySelector('#number').value;
//     let assunt = document.querySelector('#assunt').value;
//     // let mensage = document.querySelector('#mensage').value;

//     if(name === '' || email === '' || number === '' || assunt === ''){
//         alert('Por favor, preencha todos os campos do formulário.');
//         console.log('Formulário não enviado. Campos incompletos.');
//         return false;
//     }
//     sendForm();
//     alert('Formulário enviado com sucesso!');
// }

// // Função para enviar o formulário
// function sendForm(){
//     let name = document.querySelector('#name').value;
//     let email = document.querySelector('#email').value;
//     let number = document.querySelector('#number').value;
//     let assunt = document.querySelector('#assunt').value;

//     // Configuração do EmailJS
//     const serviceID = 'service_win98ok';
//     const templateID = 'template_oskhbur'; 

//     emailjs.send(serviceID, templateID, {
//         from_name: name,
//         from_email: email,
//         from_number: number,
//         from_assunt: assunt,
//     })
//     .then(() => {
//         console.log('Formulário enviado com sucesso!');
//         // Limpar os campos do formulário após o envio
//         document.querySelector('#name').value = '';
//         document.querySelector('#email').value = '';
//         document.querySelector('#number').value = '';
//         document.querySelector('#assunt').value = '';
//     }, (err) => {
//         console.error('Erro ao enviar o formulário:', err);
//     });
// }

// Configurações do EmailJS
const serviceID = 'service_win98ok'; // Substitua pelo seu Service ID
const templateID = 'template_oskhbur'; // Substitua pelo seu Template ID
const userID = 'jHmL6WtxDXfIwW2z6'; // Substitua pelo seu User ID

// Função para enviar e-mail
function enviarEmail() {
    if (!validacaoForm()) {
        // Se a validação falhar, interrompe o envio
        return;
    }

    // Captura os valores dos campos do formulário
    const params = {
        name: document.querySelector('#name').value,
        time: new Date().toLocaleString('pt-BR', { 
            timeZone: 'America/Sao_Paulo', 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit' 
        }),
        assunt: document.querySelector('#assunt').value,
        number: document.querySelector('#number').value,
        email: document.querySelector('#email').value,
        mensage: document.querySelector('#mensage').value
    };

    // Envia o e-mail usando o EmailJS
    emailjs.send(serviceID, templateID, params, userID)
        .then(response => {
            console.log('E-mail enviado com sucesso!', response.status, response.text);
            alert('E-mail enviado com sucesso!');
            limparFormulario();
        })
        .catch(error => {
            console.error('Erro ao enviar e-mail:', error);
            alert('Erro ao enviar o e-mail. Tente novamente mais tarde.');
        });
}

// Função para validar o formulário
function validacaoForm() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    let assunt = document.querySelector('#assunt').value;

    if (name === '' || email === '' || number === '' || assunt === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }
    return true;
}

// Função para limpar o formulário após o envio
function limparFormulario() {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#number').value = '';
    document.querySelector('#assunt').value = '';
    document.querySelector('#mensage').value = '';
}

// Adiciona o evento de clique ao botão de enviar e-mail
document.querySelector('#enviarEmail').addEventListener('click', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do botão
    enviarEmail();
});