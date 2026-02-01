@echo off
echo Testing Team Creation...
curl -X POST http://localhost:3000/teams -H "Content-Type: application/json" -d "{\"name\":\"Independiente del Valle\", \"country\":\"Ecuador\"}"
echo.
echo.
echo Testing Get Teams...
curl http://localhost:3000/teams
echo.
echo.
echo Testing Player Creation...
curl -X POST http://localhost:3000/players -H "Content-Type: application/json" -d "{\"name\":\"Kendry Paez\", \"position\":\"Midfielder\", \"team\": { \"id\": 1 }}"
echo.
echo.
echo Testing Get Players...
curl http://localhost:3000/players
echo.
echo.
echo Testing Get Team Players...
curl http://localhost:3000/teams/1/players
echo.
echo.
