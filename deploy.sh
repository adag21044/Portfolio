#!/usr/bin/env sh

# hata alındığında çık
set -e

# derleme
npm run build

# oluşturulan derleme dizinine geç
cd dist

# eğer özel bir alan adına dağıtıyorsanız
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# eğer https://<KULLANICI_ADI>.github.io adresine dağıtıyorsanız



git push -f git@github.com:adag21044/Portfolio.git github-page:gh-pages

cd -
