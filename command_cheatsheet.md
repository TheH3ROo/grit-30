# Bun commands
bun create vite my-app

cd my-app
bun install

bunx --bun vite

package.json
"scripts": {
  "dev": "vite", change to this -> "dev": "bunx --bun vite",
  "build": "vite build",
  "serve": "vite preview"
},

Now you can start the development server with bun run dev.

The following command will build your app for production.

bunx --bun vite build

------------------------

# Vite commands

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1' // <- Add this server, host option so the application does actually work
  }
})