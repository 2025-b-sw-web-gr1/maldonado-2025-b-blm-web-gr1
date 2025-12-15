// Dinámico: añadir un <link> o <style> desde JavaScript
const loadCssBtn = document.getElementById('loadCssBtn');
const dynTarget = document.getElementById('dynTarget');
const insertRuleBtn = document.getElementById('insertRuleBtn');

loadCssBtn?.addEventListener('click', () => {
  // Crear un <link> dinámico hacia un archivo CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/dynamic.css';
  link.onload = () => { dynTarget.textContent = 'CSS dinámico cargado desde css/dynamic.css'; };
  link.onerror = () => { dynTarget.textContent = 'Error al cargar css/dynamic.css'; };
  document.head.appendChild(link);

  // También se puede crear un <style> con reglas inline
  const style = document.createElement('style');
  style.textContent = '.dyn-inline{background:#FFFDE7;padding:.6rem;border-radius:6px;font-weight:700}';
  document.head.appendChild(style);
  const el = document.createElement('div'); el.className='dyn-inline'; el.textContent='Regla inline inyectada con <style>'; dynTarget.appendChild(el);
});

insertRuleBtn?.addEventListener('click', () => {
  // CSSOM: insertar regla en la primera hoja disponible
  const sheet = document.styleSheets[document.styleSheets.length - 1];
  try{
    sheet.insertRule('.cssom-rule{background:#E3F2FD;padding:.6rem;border-radius:6px;font-weight:700}', sheet.cssRules.length);
    const el = document.createElement('div'); el.className='cssom-rule'; el.textContent='Regla inserta con CSSOM (insertRule)'; document.getElementById('omTarget').appendChild(el);
  }catch(e){ console.error('No se pudo insertar regla CSSOM:', e); }
});
