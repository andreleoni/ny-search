FROM node:6

ENV INSTALL_PATH /ny-search

RUN npm install -g angular-cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
