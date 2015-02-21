@echo off
call tiddlywiki .\tw --load .\example.html --output .\blog --build posts
call tiddlywiki .\tw --load .\example.html --output .\blog --build framework
call tiddlywiki .\tw --load .\example.html --output .\blog --build tag
call tiddlywiki .\tw --load .\example.html --output .\blog --build index
call tiddlywiki .\tw --load .\example.html --output .\blog --build css

pause 