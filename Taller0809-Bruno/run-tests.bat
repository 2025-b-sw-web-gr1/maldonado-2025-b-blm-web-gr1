@echo off
setlocal enableDelayedExpansion
md "%~dp0test-results" 2>nul

echo Ejecutando comprobaciones básicas contra https://jsonplaceholder.typicode.com/

echo 1) GET /posts
curl -s "https://jsonplaceholder.typicode.com/posts" -o "%~dp0test-results/get-all-posts.json" -w "get-all-posts -> HTTP %{http_code}\n"

echo 2) GET /posts/1
curl -s "https://jsonplaceholder.typicode.com/posts/1" -o "%~dp0test-results/get-post-by-id.json" -w "get-post-by-id -> HTTP %{http_code}\n"

echo 3) POST /posts
curl -s -X POST "https://jsonplaceholder.typicode.com/posts" -H "Content-Type: application/json" -d "{\"title\":\"Prueba Bruno Equipo\",\"body\":\"Cuerpo de prueba\",\"userId\":99}" -o "%~dp0test-results/create-post.json" -w "create-post -> HTTP %{http_code}\n"

echo 4) PUT /posts/1
curl -s -X PUT "https://jsonplaceholder.typicode.com/posts/1" -H "Content-Type: application/json" -d "{\"id\":1,\"title\":\"PUT Test\",\"body\":\"Reemplazo completo\",\"userId\":1}" -o "%~dp0test-results/update-post-put.json" -w "update-post-put -> HTTP %{http_code}\n"

echo 5) PATCH /posts/1
curl -s -X PATCH "https://jsonplaceholder.typicode.com/posts/1" -H "Content-Type: application/json" -d "{\"title\":\"PATCH Test\"}" -o "%~dp0test-results/update-post-title.json" -w "update-post-title -> HTTP %{http_code}\n"

echo 6) DELETE /posts/1
curl -s -X DELETE "https://jsonplaceholder.typicode.com/posts/1" -o "%~dp0test-results/delete-post.json" -w "delete-post -> HTTP %{http_code}\n"

echo 7) GET /comments
curl -s "https://jsonplaceholder.typicode.com/comments" -o "%~dp0test-results/get-all-comments.json" -w "get-all-comments -> HTTP %{http_code}\n"

echo 8) GET /comments?postId=1
curl -s "https://jsonplaceholder.typicode.com/comments?postId=1" -o "%~dp0test-results/get-comments-by-post.json" -w "get-comments-by-post -> HTTP %{http_code}\n"

echo 9) POST /comments
curl -s -X POST "https://jsonplaceholder.typicode.com/comments" -H "Content-Type: application/json" -d "{\"name\":\"Alumno Test\",\"email\":\"alumno@example.com\",\"body\":\"Comentario de prueba\",\"postId\":1}" -o "%~dp0test-results/create-comment.json" -w "create-comment -> HTTP %{http_code}\n"

echo 10) GET /albums
curl -s "https://jsonplaceholder.typicode.com/albums" -o "%~dp0test-results/get-all-albums.json" -w "get-all-albums -> HTTP %{http_code}\n"

echo 11) GET /albums/1
curl -s "https://jsonplaceholder.typicode.com/albums/1" -o "%~dp0test-results/get-album-by-id.json" -w "get-album-by-id -> HTTP %{http_code}\n"

echo 12) POST /albums
curl -s -X POST "https://jsonplaceholder.typicode.com/albums" -H "Content-Type: application/json" -d "{\"title\":\"Album Prueba\",\"userId\":5}" -o "%~dp0test-results/create-album.json" -w "create-album -> HTTP %{http_code}\n"

echo 13) GET /photos
curl -s "https://jsonplaceholder.typicode.com/photos" -o "%~dp0test-results/get-all-photos.json" -w "get-all-photos -> HTTP %{http_code}\n"

echo 14) GET /photos?albumId=1
curl -s "https://jsonplaceholder.typicode.com/photos?albumId=1" -o "%~dp0test-results/get-photos-by-album.json" -w "get-photos-by-album -> HTTP %{http_code}\n"

echo 15) GET /todos
curl -s "https://jsonplaceholder.typicode.com/todos" -o "%~dp0test-results/get-all-todos.json" -w "get-all-todos -> HTTP %{http_code}\n"

echo 16) GET /todos/1
curl -s "https://jsonplaceholder.typicode.com/todos/1" -o "%~dp0test-results/get-todo-by-id.json" -w "get-todo-by-id -> HTTP %{http_code}\n"

echo 17) POST /todos
curl -s -X POST "https://jsonplaceholder.typicode.com/todos" -H "Content-Type: application/json" -d "{\"userId\":7,\"title\":\"Tarea de prueba\",\"completed\":false}" -o "%~dp0test-results/create-todo.json" -w "create-todo -> HTTP %{http_code}\n"

echo 18) GET /users
curl -s "https://jsonplaceholder.typicode.com/users" -o "%~dp0test-results/get-all-users.json" -w "get-all-users -> HTTP %{http_code}\n"

echo 19) GET /users/1
curl -s "https://jsonplaceholder.typicode.com/users/1" -o "%~dp0test-results/get-user-by-id.json" -w "get-user-by-id -> HTTP %{http_code}\n"


echo \nComprobaciones completadas. Las respuestas se guardaron en: %~dp0test-results\
pause