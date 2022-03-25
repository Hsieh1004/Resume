#!/usr/bin/env sh

# 確保指令碼丟擲遇到的錯誤
set -e

# 生成靜態檔案
npm run docs:build

# 進入生成的資料夾
cd docs/.vuepress

git init
git add -A
git commit -m 'deploy'

# 如果釋出到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Hsieh1004/resume.git
cd -