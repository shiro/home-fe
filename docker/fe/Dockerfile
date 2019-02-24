FROM node:11.10.0-alpine

ARG BRANCH=dev
ENV BRANCH=$BRANCH

RUN apk add --no-cache \
    bash gawk curl sed grep bc coreutils

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn --check-files --frozen-lockfile && \
    chmod -R 777 .

COPY . ./

CMD yarn dev

