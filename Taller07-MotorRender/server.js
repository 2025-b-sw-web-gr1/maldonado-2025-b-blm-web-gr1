const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8050;

// Views (Pug)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Sample data for the "línea de muebles de cocina de lujo"
const products = [
  {
    id: 1,
    name: 'Encimera Nova Marble',
    desc: 'Encimera de mármol italiano, acabado pulido y resistencia premium.',
    price: '€2.399',
    img: 'https://picsum.photos/seed/encimera/800/600'
  },
  {
    id: 2,
    name: 'Módulo Habana Premium',
    desc: 'Módulos lacados con bisagras silenciosas y sistema soft-close.',
    price: '€1.499',
    img: 'https://picsum.photos/seed/modulo/800/600'
  },
  {
    id: 3,
    name: 'Isla Central Atelier',
    desc: 'Isla multifunción con espacio de almacenaje oculto y plan de trabajo integrado.',
    price: '€3.299',
    img: 'https://picsum.photos/seed/isla/800/600'
  }
];

app.get('/', (req, res) => {
  res.render('index', { title: 'Cocinas de Lujo - Colección Atelier', products });
});

app.get('/product/:id', (req, res) => {
  const p = products.find(x => x.id == req.params.id);
  if (!p) return res.status(404).send('Producto no encontrado');
  res.render('product', { title: p.name, product: p });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // En un taller hacemos un simple redirect con mensaje
  res.render('thanks', { title: 'Gracias', name, email, message });
});

app.listen(PORT, () => {
  console.log(`Servidor Pug escuchando en http://localhost:${PORT}`);
});