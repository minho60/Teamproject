@echo off
chcp 65001 > nul

echo ==================================================
echo [1단계] "dodram-all" Git 저장소 다운로드 중..
echo ==================================================
:: 만약 이전에 받다 만 폴더가 있으면 지우고 다시 받기
if exist "dodram-all" rmdir /s /q "dodram-all"
git clone https://github.com/kahyou22/dodram-all.git

echo.
echo ==================================================
echo [2단계] 파일 복사 중..
echo ==================================================

if not exist "assets\css" mkdir "assets\css"
if not exist "assets\js" mkdir "assets\js"
if not exist "assets\img" mkdir "assets\img"

:: 'assets' 폴더 가져오기 (덮어씀)
@REM xcopy "dodram-all\assets" "assets" /E /H /Y /I
xcopy "dodram-all\assets\img\layout" "assets\img\layout" /E /H /Y /I

copy /Y "dodram-all\template.html" .
copy /Y "dodram-all\assets\css\layout.css" "assets\css\"
copy /Y "dodram-all\assets\js\layout.js" "assets\js\"

echo.
echo ==================================================
echo [3단계] 임시 폴더 삭제 중..
echo ==================================================
rmdir /s /q "dodram-all"

echo.
echo [완료] 업데이트가 완료되었습니다.
pause