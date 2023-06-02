FROM node:16.15.1

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install --frozen-lockfile

COPY . /app

EXPOSE 5001

CMD ["yarn", "start"]