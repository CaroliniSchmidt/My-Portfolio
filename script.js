// Adiciona efeito de rolagem suave nos links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
      });
  });
});

// Animação de fade-in para as seções ao rolar a página
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Validação e envio do formulário com EmailJS
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('form-message');

  if (name === "" || email === "" || message === "") {
      formMessage.innerHTML = "Por favor, preencha todos os campos.";
      formMessage.style.color = "red";
      return;
  }
  
  if (!email.includes("@") || !email.includes(".")) {
      formMessage.innerHTML = "Digite um e-mail válido.";
      formMessage.style.color = "red";
      return;
  }

  emailjs.send("service_izwpg01", "template_9qjksfv", {
      name: name,
      email: email,
      message: message,
  })
  .then(() => {
      formMessage.innerHTML = "Mensagem enviada com sucesso!";
      formMessage.style.color = "green";
      document.getElementById('contactForm').reset();
  })
  .catch(() => {
      formMessage.innerHTML = "Erro ao enviar mensagem. Tente novamente.";
      formMessage.style.color = "red";
  });
});

// Modo Noturno na Navbar
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "☀️";
  } else {
      darkModeToggle.textContent = "🌙";
  }

  // Salva a preferência do usuário no localStorage
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Aplica a preferência do usuário ao carregar a página
window.addEventListener("load", () => {
  if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
      darkModeToggle.textContent = "☀️";
  }
});
