FROM node:20-alpine

WORKDIR /app

# Instalar deps de producción primero (mejor caché)
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar el resto
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
