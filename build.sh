#!/bin/sh

version="0.0.3"

cd ./app
npm i
npm run build

if [ $? -eq 0 ]
then
  echo ">>>>>>>> Building !!!"
else
  echo ">>>>>>>> Build failed !!!"
  exit 1
fi
cd ..

echo "PUSHING!!!"

docker buildx create --name mbuilder
docker buildx build --push -t wi4er/admin:$version --platform linux/arm64,linux/amd64 .
