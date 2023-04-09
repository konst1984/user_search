import { GitHubUser } from "../types";

export const isGitHubUser = (user: any): user is GitHubUser => {
  return "id" in user;
};
