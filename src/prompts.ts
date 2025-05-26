import inquirer from "inquirer";

export async function getUserChoices() {
  const stackChoices = ["Next.js", "React", "Firebase", "Supabase", "Tailwind"];
  const projectTypes = ["SaaS", "Startup Landing Page", "Portfolio", "Blog CMS"];

  const answers = await inquirer.prompt([
    {
      type: "checkbox",
      name: "techStack",
      message: "Select your tech stack:",
      choices: stackChoices,
    },
    {
      type: "list",
      name: "projectType",
      message: "Select project type:",
      choices: projectTypes,
    },
    {
      type: "input",
      name: "projectName",
      message: "Project folder name:",
      default: "my-app",
    }
  ]);

  return answers;
}