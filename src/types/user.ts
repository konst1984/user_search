export type LocalGithubUser = {
  login: string;
  avatar: string;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  bio: string | null;
  twitter: string | null;
  repos: number;
  followers: number;
  following: number;
  created: string;
};

export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GitHubError = {
  message: string;
  documentation_url: string;
};
