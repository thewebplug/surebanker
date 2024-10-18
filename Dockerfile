# Base image
FROM node:20-alpine AS base

### Dependencies ###
FROM base AS deps
RUN apk add --no-cache libc6-compat git

WORKDIR /app

# Copy only the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
RUN npm install --save-dev cross-env
RUN npm install


# Builder
FROM base AS builder

WORKDIR /app

# Copy node_modules from deps stage and the rest of the app code
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

### Production image runner ###
FROM base AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Set correct permissions for nextjs user and don't run as root
RUN addgroup nodejs
RUN adduser -SDH nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules


USER nextjs

# Exposed port (for orchestrators and dynamic reverse proxies)
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Run the Next.js app
CMD ["npm", "run", "start"]
