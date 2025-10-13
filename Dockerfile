FROM node:20-alpine

WORKDIR /app

# Instala dependencias usando el lockfile existente
COPY package.json yarn.lock ./
RUN corepack enable && yarn install --frozen-lockfile

# Copia el resto del código
COPY . .

# Comando por defecto: ejecutar la verificación de formato con Prettier
CMD ["yarn", "run", "prettier", "--check", "httpdocs/**/*.{js,json,css}"]
