FROM node:12.6.0-alpine AS development

ARG BRANCH=dev
ENV BRANCH=$BRANCH
ENV NODE_ENV=development

WORKDIR /opt/app/

RUN apk add --no-cache \
    bash gawk curl sed grep bc coreutils

RUN npm i -g npm-check-updates

COPY package.json package-lock.json ./

RUN npm i && \
    chmod -R 777 .

COPY . ./

CMD npm i || echo "could not verify node packages, trying to run anyways" && \
    npm run dev


FROM node:12.6.0-alpine AS production

ENV NODE_ENV=production

WORKDIR /opt/app

COPY --from=dev /opt/app/dist dist
COPY --from=dev /opt/app/dist_server dist_server
COPY --from=dev /opt/app/node_modules /tmp/node_modules

RUN npm prune

CMD npm run prod:run
