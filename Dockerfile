FROM oven/bun:alpine

WORKDIR /bun

COPY package.json yarn.lock /bun/

COPY . /bun

RUN bun install

EXPOSE 3000

CMD [ "bun", "run", "start" ]
