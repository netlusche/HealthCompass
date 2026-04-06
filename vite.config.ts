import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Custom Plugin to hide PHP tags in development
const phpDevPlugin = (): Plugin => ({
  name: 'php-lookup-dev',
  transformIndexHtml: {
    order: 'pre',
    handler(html, ctx) {
      if (ctx.server) {
        // In dev mode, provide sensible English defaults instead of empty strings
        return html
          .replace(/<html lang="<\?php[\s\S]*?\?>">/, '<html lang="en">')
          .replace(/<\?php echo \$title; \?>/g, 'HealthCompass – Anonymous Health Risk Checks')
          .replace(/<\?php echo \$description; \?>/g, 'Private self-assessments for heart attack, dementia, and more.')
          .replace(/<\?php[\s\S]*?\?>/g, ''); // Strip any remaining PHP tags
      }
      return html;
    }
  }
});

export default defineConfig({
  plugins: [react(), phpDevPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './', // CRITICAL: Makes all assets and scripts relative for portability
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
