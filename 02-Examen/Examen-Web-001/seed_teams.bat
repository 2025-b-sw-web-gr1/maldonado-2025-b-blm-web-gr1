@echo off
echo Creating Team 1...
curl -X POST http://localhost:3000/teams -H "Content-Type: application/json" -d "{\"name\": \"Real Madrid\", \"country\": \"Spain\"}"
echo.
echo Creating Team 2...
curl -X POST http://localhost:3000/teams -H "Content-Type: application/json" -d "{\"name\": \"Barcelona\", \"country\": \"Spain\"}"
echo.
echo Creating Team 3...
curl -X POST http://localhost:3000/teams -H "Content-Type: application/json" -d "{\"name\": \"Manchester City\", \"country\": \"England\"}"
echo.
echo Creating Team 4...
curl -X POST http://localhost:3000/teams -H "Content-Type: application/json" -d "{\"name\": \"Bayern Munich\", \"country\": \"Germany\"}"
echo.
echo Creating Team 5...
curl -X POST http://localhost:3000/teams -H "Content-Type: application/json" -d "{\"name\": \"PSG\", \"country\": \"France\"}"
echo.
echo Done.
