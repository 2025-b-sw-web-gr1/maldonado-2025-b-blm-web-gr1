// Accessible interactions: dialog and subscribe forms
const openBtn = document.getElementById('openSubscribe');
const dialog = document.getElementById('subscribeDialog');
const closeBtn = document.getElementById('closeDialog');
const dialogForm = document.getElementById('dialogForm');
const live = document.getElementById('liveStatus');
const subscribeForm = document.getElementById('subscribeForm');

function openDialog(){
  dialog.setAttribute('aria-hidden','false');
  const email = document.getElementById('dialogEmail');
  email.focus();
}
function closeDialog(){
  dialog.setAttribute('aria-hidden','true');
  openBtn.focus();
}

openBtn.addEventListener('click', openDialog);
closeBtn.addEventListener('click', closeDialog);

// close on ESC
window.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && dialog.getAttribute('aria-hidden') === 'false') closeDialog();
});

// dialog submit
dialogForm.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('dialogEmail').value;
  live.textContent = `Gracias, ${email} — suscripción confirmada.`;
  closeDialog();
});

// main subscribe form
subscribeForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value || 'amigo';
  const email = document.getElementById('email').value;
  live.textContent = `Gracias, ${name}. Hemos enviado un correo a ${email}`;
  // simulate success
  setTimeout(()=>{
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  }, 400);
});

// Skip link: focus main when clicked
document.querySelector('.skip-link').addEventListener('click', function(e){
  document.getElementById('main').focus();
});