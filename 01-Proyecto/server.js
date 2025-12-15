const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Datos en memoria (simples para demo)
let stores = [
  { id: 1, name: 'Tienda Central', address: 'Calle Principal 123' },
  { id: 2, name: 'Tienda Sur', address: 'Avenida Sur 45' }
];
let products = [
  { id: 1, storeId: 1, name: 'Cafetera Pro', price: 120.5 },
  { id: 2, storeId: 1, name: 'Tostadora XL', price: 45.0 },
  { id: 3, storeId: 2, name: 'Licuadora 3000', price: 78.9 }
];

let nextStoreId = 3;
let nextProductId = 4;

// Helpers
function findStore(id) { return stores.find(s => s.id === id); }
function findProduct(id) { return products.find(p => p.id === id); }

// Stores CRUD
app.get('/stores', (req, res) => res.json(stores));
app.post('/stores', (req, res) => {
  const { name, address } = req.body;
  const store = { id: nextStoreId++, name, address };
  stores.push(store);
  res.status(201).json(store);
});
app.get('/stores/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const s = findStore(id);
  if (!s) return res.status(404).json({ message: 'Store not found' });
  res.json(s);
});
app.put('/stores/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const s = findStore(id);
  if (!s) return res.status(404).json({ message: 'Store not found' });
  s.name = req.body.name ?? s.name;
  s.address = req.body.address ?? s.address;
  res.json(s);
});
app.patch('/stores/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const s = findStore(id);
  if (!s) return res.status(404).json({ message: 'Store not found' });
  if (req.body.name !== undefined) s.name = req.body.name;
  if (req.body.address !== undefined) s.address = req.body.address;
  res.json(s);
});
app.delete('/stores/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = stores.findIndex(s => s.id === id);
  if (idx === -1) return res.status(404).json({ message: 'Store not found' });
  stores.splice(idx, 1);
  // eliminar productos asociados
  products = products.filter(p => p.storeId !== id);
  res.status(204).send();
});

// Products CRUD
app.get('/products', (req, res) => res.json(products));
app.post('/products', (req, res) => {
  const { storeId, name, price } = req.body;
  if (!findStore(storeId)) return res.status(400).json({ message: 'Invalid storeId' });
  const product = { id: nextProductId++, storeId, name, price };
  products.push(product);
  res.status(201).json(product);
});
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const p = findProduct(id);
  if (!p) return res.status(404).json({ message: 'Product not found' });
  res.json(p);
});
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const p = findProduct(id);
  if (!p) return res.status(404).json({ message: 'Product not found' });
  p.storeId = req.body.storeId ?? p.storeId;
  p.name = req.body.name ?? p.name;
  p.price = req.body.price ?? p.price;
  res.json(p);
});
app.patch('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const p = findProduct(id);
  if (!p) return res.status(404).json({ message: 'Product not found' });
  if (req.body.storeId !== undefined) p.storeId = req.body.storeId;
  if (req.body.name !== undefined) p.name = req.body.name;
  if (req.body.price !== undefined) p.price = req.body.price;
  res.json(p);
});
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ message: 'Product not found' });
  products.splice(idx, 1);
  res.status(204).send();
});

// List products by store
app.get('/stores/:id/products', (req, res) => {
  const storeId = parseInt(req.params.id);
  if (!findStore(storeId)) return res.status(404).json({ message: 'Store not found' });
  res.json(products.filter(p => p.storeId === storeId));
});

app.listen(port, () => console.log(`API escuchando en http://localhost:${port}`));
