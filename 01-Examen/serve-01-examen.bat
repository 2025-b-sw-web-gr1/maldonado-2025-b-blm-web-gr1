@echo off
REM Script para servir la carpeta 01-Examen en el puerto 9003
pushd "%~dp0"
echo Sirviendo 01-Examen en http://localhost:9003/
python -m http.server 9003
popd
pause