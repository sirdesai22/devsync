import fs from 'fs-extra';
import path from 'path';
import { logInfo } from './utils/logger';

export async function scaffoldProject(type: string, stack: string[], projectName: string) {
  const templatePath = path.join(__dirname, '..', 'templates', `${type.toLowerCase().replace(/\s/g, '-')}-${stack[0].toLowerCase()}`);
  const targetPath = path.resolve(process.cwd(), projectName);

  if (!fs.existsSync(templatePath)) {
    console.error("❌ Template not found for this combo.");
    process.exit(1);
  }

  await fs.copy(templatePath, targetPath);
  logInfo(`✅ Project created at ${targetPath}`);
}