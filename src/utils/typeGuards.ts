import { GitHubUser } from "../types";

export const isGitHybUser = (user: any): user is GitHubUser => {
  return "id" in user;
};
