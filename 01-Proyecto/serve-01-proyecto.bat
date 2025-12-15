@echo off
REM Sirve la carpeta 01-Proyecto en http://localhost:3001/swagger-ui/
pushd "%~dp0"
echo Sirviendo 01-Proyecto en http://localhost:3001/
python -m http.server 3001
popd
pause