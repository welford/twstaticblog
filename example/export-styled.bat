rd .\temp\blog-styled /s /q
call tiddlywiki --load .\example.html --savewikifolder .\temp\blog-styled
XCOPY /E /I /Y .\tw-styled .\temp\blog-styled
call tiddlywiki .\temp\blog-styled --output .\blog-styled --build css
call tiddlywiki .\temp\blog-styled --output .\blog-styled --build framework
call tiddlywiki .\temp\blog-styled --output .\blog-styled --build tag
call tiddlywiki .\temp\blog-styled --output .\blog-styled --build posts
call tiddlywiki .\temp\blog-styled --output .\blog-styled --build index
rd .\temp\blog-styled /s /q

pause