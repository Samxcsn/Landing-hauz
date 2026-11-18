const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

function setObjective(value) {
  const select = document.getElementById('objective');
  if (select) select.value = value;
}

document.getElementById('simForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const objective = document.getElementById('objective').value;
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const budget = document.getElementById('budget').value || 'Não informado';
  const property = document.getElementById('property').value || 'Não informado';
  const message = document.getElementById('message').value.trim() || 'Não informada';

  const text =
`Olá, Hauz! Vim pelo site e gostaria de atendimento.

*Objetivo:* ${objective}
*Nome:* ${name}
*Telefone:* ${phone}
*Faixa de valor:* ${budget}
*Finalidade:* ${property}
*Mensagem:* ${message}`;

  window.open(`https://wa.me/5534988617439?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
