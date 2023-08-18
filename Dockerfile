# ---- Base Node ----
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
# We're only installing production dependencies here.
RUN npm install --only=production

# ---- Release ----
FROM nginx:alpine AS release
# Copy over the built files from your repo
COPY ./dist/ /usr/share/nginx/html
# If there's any configuration you need to do for nginx, do it here.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
