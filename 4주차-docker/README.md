## About Docker - 도커에 대해서

### 1. 가상화와 docker에 대해 이해하기
   * 참고하면 좋을 사이트
     * https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html

### 2. docker 기초 실습
#### 1. Dockerfile 작성
```
FROM node:12

ARG PROJECT_PATH=/web/service/api

COPY package.json ${PROJECT_PATH}/package.json
COPY package-lock.json ${PROJECT_PATH}/package-lock.json

RUN npm install

COPY . ${PROJECT_PATH}

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```
#### 2. 이미지 빌드하기
```
docker build -t nodejs-study:test .
```
#### 3. 컨테이너 생성하기
```
docker run -d --rm nodejs-study:test
```
#### 4. 컨테이너랑 볼륨 만들기
```
docker run -d --rm -p 3000:3000 --name nodejs-study nodejs-study:test 
```
#### 5. 컨테이너들끼리 연결하기
   
   
### 3. docker를 여러개를 한번에 켜고 끄기
#### 1. docker-compose.yml 작성
#### 2. docker-compose 명령어 쓰기
#### 3. docker로 만든 서비스 올리기(데이터베이스 포함)