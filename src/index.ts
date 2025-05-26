#!/usr/bin/env node
import { getUserChoices } from './prompts';
import { scaffoldProject } from './scaffolder';

async function run() {
  const { techStack, projectType, projectName } = await getUserChoices();
  await scaffoldProject(projectType, techStack, projectName);
}

run();
