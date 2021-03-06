FROM node:12.18.1

#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# istalacion de nodemon en forma global
# al realizarse cambios reiniciar el servidor

RUN npm install nodemon -g --quiet

#bunble app source
COPY . /usr/src/app

EXPOSE 8383

CMD nodemon --exec babel-node -L --watch . app.js
