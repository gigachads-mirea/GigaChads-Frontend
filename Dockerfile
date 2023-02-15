FROM node:lts as dependencies
WORKDIR /CPproj
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /CPproj
COPY .. .
COPY --from=dependencies /CPproj/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /CPproj
ENV NODE_ENV production

COPY --from=builder /public ./public
COPY --from=builder /package.json ./package.json
COPY --from=builder /CPproj/.next ./.next
COPY --from=builder /CPproj/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]