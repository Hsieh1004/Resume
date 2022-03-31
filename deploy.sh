#!/usr/bin/env sh


git init
git add -A
git commit -m 'deploy'

heroku apps:create example

# 如果釋出到 https://<USERNAME>.github.io/<REPO>
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git