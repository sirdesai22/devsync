#!/usr/bin/env node
import { getUserChoices } from './prompts';
import { scaffoldProject } from './scaffolder';

async function run() {
  const { techStack, auth, projectName } = await getUserChoices();
  await scaffoldProject(techStack, auth, projectName);
}

run();
