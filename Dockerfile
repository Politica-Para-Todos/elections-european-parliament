# FROM oven/bun:alpine as base

# WORKDIR /app

# ENV NODE_ENV=production

# FROM base as deps

# COPY package.json bun.lockb ./

# RUN bun install

# FROM node:18 as build

# WORKDIR /app

# COPY --from=deps /app/node_modules ./node_modules

# COPY . .

# RUN npm run build

# FROM base as final

# USER bun

# COPY --from=build /app/package.json ./package.json
# COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/.next ./.next
# COPY --from=build /app/public ./public

# EXPOSE 3000

# CMD ["bun", "run", "start"]

# ARG BUN_VERSION=1.0.0

# FROM oven/bun:latest as base

# FROM base as deps

# WORKDIR /app

# COPY package.json bun.lockb ./

# RUN bun install

# FROM node:18.14.2 as builder

# WORKDIR /app

# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# RUN npm run build --no-lint

# FROM base as runner

# WORKDIR /app

# ENV NODE_ENV=production

# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

# USER nextjs

# EXPOSE 3000

# CMD ["bun", "run", "start"]

FROM imbios/bun-node:18-slim AS base

WORKDIR /nextjs

ARG DEBIAN_FRONTEND=noninteractive
ARG COMMON_DATA_SPREADHSEET_ID
ARG GOOGLE_SERVICE_ACCOUNT_EMAIL
ARG GOOGLE_PRIVATE_KEY

ENV COMMON_DATA_SPREADHSEET_ID=${COMMON_DATA_SPREADHSEET_ID}
ENV GOOGLE_SERVICE_ACCOUNT_EMAIL=${GOOGLE_SERVICE_ACCOUNT_EMAIL}
ENV GOOGLE_PRIVATE_KEY=${GOOGLE_PRIVATE_KEY}

FROM base as deps

WORKDIR /nextjs

# Install dependencies based on the preferred package manager
COPY package.json bun.lockb ./
RUN bun install

# Build the app
FROM deps AS builder

WORKDIR /nextjs

COPY . .
RUN bun run build

# Production image, copy all the files and run next
FROM node:18-slim AS runner

WORKDIR /nextjs

# ARG CONFIG_FILE
# COPY $CONFIG_FILE ./.env
ENV NODE_ENV production

COPY --from=builder /nextjs/.next/standalone ./
COPY --from=builder /nextjs/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
