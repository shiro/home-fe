FROM node:8-slim

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn --check-files --frozen-lockfile && \
    chmod -R 777 node_modules

RUN ls

COPY . ./

RUN ls

RUN pwd

CMD yarn dev

