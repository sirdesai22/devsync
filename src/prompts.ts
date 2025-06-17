import inquirer from "inquirer";

export async function getUserChoices() {
  const stackChoices = ["Nextjs", "React"];
  // const databaseChoices = ["None", "Supabase", "Firebase", "Postgres", "Neon"];
  const authChoices = ["Better-Auth", "Clerk", "Supabase-Auth", "Firebase-Auth"];
  // const projectTypes = ["SaaS", "Portfolio", "Blog CMS"];

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "techStack",
      message: "Select your tech stack:",
      choices: stackChoices,
    },
    // {
    //   type: "list",
    //   name: "database",
    //   message: "Select your database:",
    //   choices: databaseChoices,
    // },
    {
      type: "list",
      name: "auth",
      message: "Select your authentication provider:",
      choices: authChoices,
    },
    // {
    //   type: "list",
    //   name: "projectType",
    //   message: "Select project type:",
    //   choices: projectTypes,
    // },
    {
      type: "input",
      name: "projectName",
      message: "Project folder name:",
      default: "my-app",
    }
  ]);

  return answers;
}