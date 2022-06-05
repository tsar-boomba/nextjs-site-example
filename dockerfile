# Base on offical Node.js Alpine image
FROM public.ecr.aws/docker/library/node:16.14.2-alpine3.15 AS build

# add curl and bash for node-prune
RUN apk update && apk add curl bash && rm -rf /var/cache/apk/*

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json ./

COPY ./ ./

# Build app
RUN npm run build

RUN npm prune --production

FROM public.ecr.aws/docker/library/node:16.14.2-alpine3.15

WORKDIR /app

# Install PM2 globally
RUN npm install --global pm2

COPY --from=build /src/.next ./.next
COPY --from=build /src/public ./public
COPY --from=build /src/node_modules ./node_modules
COPY --from=build /src/next.config.js ./next.config.js
COPY --from=build /src/package.json ./package.json
COPY --from=build /src/.env.production ./.env.production

EXPOSE 3000

ENV NODE_ENV=production

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]