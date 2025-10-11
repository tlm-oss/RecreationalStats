FROM node:20-alpine

# Install pnpm
RUN corepack enable pnpm

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including devDependencies for build)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Create user for security
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Change ownership of the app directory
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

EXPOSE 3000

# Use the standard Next.js start command
CMD ["pnpm", "start"]