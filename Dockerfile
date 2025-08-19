FROM node:20-alpine

WORKDIR /app

# Instalar deps primero para cache
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar el resto
COPY . .

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
