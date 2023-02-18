FROM node:18.12.0 as dependencies
WORKDIR /client
COPY package.json /client/package.json
COPY yarn.lock /client/yarn.lock
RUN yarn install --frozen-lockfile
COPY . /client
RUN yarn build

EXPOSE 3406
CMD ["yarn", "start", "-p", "3406"]
