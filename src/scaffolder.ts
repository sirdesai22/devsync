import fs from "fs-extra";
import path from "path";
import { logInfo } from "./utils/logger";

export async function scaffoldProject(stack: string, auth: string, projectName: string) {
  if (!stack || !auth) {
    console.error("❌ Invalid stack or auth selection.");
    console.log("Received →", { stack, auth });
    process.exit(1);
  }

  const templatePath = path.join(__dirname, '..', 'templates', `${stack.toLowerCase()}-${auth.toLowerCase()}`);
  const targetPath = path.resolve(process.cwd(), projectName);

  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template not found at: ${templatePath}`);
    process.exit(1);
  }

  await fs.copy(templatePath, targetPath);
  logInfo(`✅ Project created at ${targetPath}`);
}