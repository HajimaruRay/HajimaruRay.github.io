@echo off
echo ============================
echo      START DEPLOY
echo ============================

cd /d %~dp0

echo Adding files...
git add .

echo Committing...
git commit -m "auto deploy %date% %time%"

echo Pushing to GitLab...
git push origin main

echo.
echo ===== DEPLOY FINISHED =====
pause
