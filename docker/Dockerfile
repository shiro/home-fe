FROM node:11.10.0-alpine AS dev

ARG BRANCH=dev
ENV BRANCH=$BRANCH

RUN apk add --no-cache \
    bash gawk curl sed grep bc coreutils

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile && \
    chmod -R 777 .

COPY . ./

CMD yarn --frozen-lockfile || echo "could not verify node packages, trying to run anyways" && \
    yarn dev


FROM node:11.10.0-alpine AS prod

WORKDIR /opt/app

COPY --from=dev /opt/app/dist dist
COPY --from=dev /opt/app/dist_server dist_server
COPY --from=dev /opt/app/node_modules /tmp/node_modules

RUN yarn --production --frozen-lockfile --ignore-scripts


CMD yarn prod:run
