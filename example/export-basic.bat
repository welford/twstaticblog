rd .\temp\blog-basic /s /q
call tiddlywiki --load .\example.html --savewikifolder .\temp\blog-basic
XCOPY /E /I /Y .\tw-basic .\temp\blog-basic
call tiddlywiki .\temp\blog-basic --output .\blog-basic --build css
call tiddlywiki .\temp\blog-basic --output .\blog-basic --build framework
call tiddlywiki .\temp\blog-basic --output .\blog-basic --build tag
call tiddlywiki .\temp\blog-basic --output .\blog-basic --build posts
call tiddlywiki .\temp\blog-basic --output .\blog-basic --build index
rd .\temp\blog-basic /s /q

pause