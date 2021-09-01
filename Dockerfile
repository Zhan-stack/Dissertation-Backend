FROM node:14

# ENV GOOGLE_APPLICATION_CREDENTIALS='./serviceAccount.json'
ENV PORT=8000
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 8000

CMD [ "node", "app.js" ]
