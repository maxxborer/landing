FROM node:16

ENV NODE_ENV=production
WORKDIR /app
COPY / ./
COPY package.json .
COPY yarn.lock .

RUN yarn global add pm2
RUN rm -rf node_modules && yarn install --frozen-lockfile

EXPOSE 80
ENV PORT 80

CMD ["pm2", "start", "--no-daemon", "./server.js"]
