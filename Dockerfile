# Dockerfile para desarrollo con Vite
FROM node:20-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto de Vite
EXPOSE 3000

# Comando para desarrollo
CMD ["npm", "run", "dev"]

