import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

const generateAliases = (baseDir: string): Record<string, string> => {
  const srcPath = path.resolve(__dirname, baseDir);
  const directories = fs
    .readdirSync(srcPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return directories.reduce<Record<string, string>>(
    (acc, dir) => {
      acc[`@${dir}`] = path.resolve(srcPath, dir);
      return acc;
    },
    { '@': srcPath },
  );
};

export default defineConfig({
  server: {
    port: 5173,
  },
  resolve: {
    alias: generateAliases('./src'),
  },
  plugins: [react(), tailwindcss()],
});
