FROM node:18.12.0 as dependencies
WORKDIR /client
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install --frozen-lockfile
RUN yarn build
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
