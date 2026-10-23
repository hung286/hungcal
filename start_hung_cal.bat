@echo off
chcp 65001 > nul
title HUNG-CAL — Bộ máy tính khoa học và bảng vẽ sư phạm
echo ================================================================
echo    HUNG-CAL — BỘ MÁY TÍNH KHOA HỌC VÀ BẢNG VẼ SƯ PHẠM
echo    Tác giả: Thầy Hùng (NMH)
echo ================================================================
echo.
echo Đang khởi động máy chủ cục bộ cho HUNG-CAL...
echo.

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo Khởi chạy bằng Node.js...
    start http://localhost:8080
    node -e "const http=require('http'),fs=require('fs'),path=require('path');const m={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.wasm':'application/wasm','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf'};http.createServer((q,s)=>{let u=q.url.split('?')[0].split('#')[0];if(u==='/'||u==='')u='/index.html';if(u==='/realmath')u='/realmath.html';let p=path.join(__dirname,u);if(fs.existsSync(p)&&fs.statSync(p).isFile()){s.writeHead(200,{'Content-Type':m[path.extname(p)]||'application/octet-stream','Access-Control-Allow-Origin':'*'});fs.createReadStream(p).pipe(s);}else{s.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});fs.createReadStream(path.join(__dirname,'index.html')).pipe(s);}}).listen(8080,()=>{console.log('HUNG-CAL đang chạy tại: http://localhost:8080');});"
    goto end
)

where python >nul 2>nul
if %errorlevel% equ 0 (
    echo Khởi chạy bằng Python...
    start http://localhost:8080
    python -m http.server 8080
    goto end
)

echo Không tìm thấy Node.js hoặc Python. Đang mở trực tiếp qua trình duyệt...
start index.html

:end
pause
