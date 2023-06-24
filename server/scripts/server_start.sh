#!/usr/bin/env bash
cd /home/ubuntu/build
sudo nohup java -jar server-0.0.1-SNAPSHOT.jar > /dev/null 2> /dev/null < /dev/null &
export RDS_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names RDS_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export GOOGLE_CLIENT_ID=$(aws ssm get-parameters --region ap-northeast-2 --names GOOGLE_CLIENT_ID --query Parameters[0].Value | sed 's/"//g')
export GOOGLE_CLIENT_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names GOOGLE_CLIENT_SECRET --query Parameters[0].Value | sed 's/"//g')
export JWT_SECRET_KEY=$(aws ssm get-parameters --region ap-northeast-2 --names JWT_SECRET_KEY --query Parameters[0].Value | sed 's/"//g')