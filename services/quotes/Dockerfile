FROM node:16.15.1

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install --frozen-lockfile

COPY . /app

RUN yarn build

EXPOSE 5000

CMD ["yarn", "start"]