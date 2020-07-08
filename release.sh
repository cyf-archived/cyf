#!/bin/bash

languages=(
zh-CN
en
)

for (( i = 0; i < ${#languages[@]}; ++i )); do
    if [ "${languages[i]}" == "zh-CN" ]; then
        hexo clean && hexo g --config _config.yml && gulp
        mkdir ~/build/chenyifaerfans/blog && cd ./public && touch CNAME && echo 'chenyifaer.com' > CNAME && cd ..
        cp -avx ./public/* ../blog/ && cd ~/build/chenyifaerfans/chenyifaerfans
    else
        hexo clean && hexo g --config _config.en.yml && gulp
        mkdir ~/build/chenyifaerfans/blog/en && cp -avx ./public/* ../blog/en/
    fi
done
