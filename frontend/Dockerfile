# Estágio 1: build da aplicação React/Vite
FROM node:22-alpine AS build

WORKDIR /app

# Instala dependências a partir do lockfile (melhor cache)
COPY package.json package-lock.json ./
RUN npm ci

# Copia o restante do código e gera o build de produção
COPY . .
RUN npm run build

# Estágio 2: servir os arquivos estáticos com Nginx
FROM nginx:alpine AS production

# Configuração com fallback de SPA (react-router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os assets gerados no estágio de build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
