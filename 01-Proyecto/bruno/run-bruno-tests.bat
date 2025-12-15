@echo off
REM Ejecuta una serie de peticiones (simula Bruno) usando curl y guarda respuestas en bruno/test-results/
set OUT_DIR=%~dp0test-results
if not exist "%OUT_DIR%" mkdir "%OUT_DIR%"

echo Ejecutando pruebas Bruno (curl)...

echo 1) GET /stores
curl -s -o "%OUT_DIR%/get_stores.json" -w "%%{http_code}%%" http://localhost:3001/stores && echo

echo 2) POST /stores
curl -s -o "%OUT_DIR%/create_store.json" -H "Content-Type: application/json" -d "{\"name\":\"Tienda Norte\",\"address\":\"Calle Norte 77\"}" -w "%%{http_code}%%" http://localhost:3001/stores && echo

echo 3) POST /products
curl -s -o "%OUT_DIR%/create_product.json" -H "Content-Type: application/json" -d "{\"storeId\":1,\"name\":\"Molino Premium\",\"price\":89.9}" -w "%%{http_code}%%" http://localhost:3001/products && echo

echo 4) GET /stores/1/products
curl -s -o "%OUT_DIR%/get_products_by_store_1.json" -w "%%{http_code}%%" http://localhost:3001/stores/1/products && echo

echo Pruebas finales guardadas en %OUT_DIR%
pause