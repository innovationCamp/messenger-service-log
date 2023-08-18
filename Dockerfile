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
# Copy the Nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]