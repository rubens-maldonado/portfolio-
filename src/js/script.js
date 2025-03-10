const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const btnContato = document.querySelector('.btn-contato');
const contatoDiv = document.querySelector('.contato');

// Função para fechar o menu de contato
function closeContato() {
    contatoDiv.classList.remove('active');
}

// Função para fechar o menu de navegação
function closeMenu() {
    navMenu.classList.remove('active');
}

// Toggle do menu (hamburguer)
menuToggle.addEventListener('click', () => {
    closeContato();
    navMenu.classList.toggle('active');
});

// Toggle do botão de contato
btnContato.addEventListener('click', () => {
    closeMenu();
    contatoDiv.classList.toggle('active');
});

// Alternância de tema
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
let currentTheme = localStorage.getItem("theme");

if (!currentTheme) {
    currentTheme = prefersDarkScheme ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
}

if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", toggleTheme);

// Capturar IP Público
fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("ip-info").textContent = `Seu IP: ${data.ip}`;
    })
    .catch(error => {
        document.getElementById("ip-info").textContent = "Não foi possível obter o IP.";
        console.error("Erro ao buscar IP:", error);
    }
);

// ESPECIALIDADES 
