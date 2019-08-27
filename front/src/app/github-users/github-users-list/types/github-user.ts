import {Type} from './type';

export interface GithubUser {
  login: string;
  id: number;
  nodeID: string;
  avatarURL: string;
  gravatarID: string;
  url: string;
  htmlURL: string;
  followersURL: string;
  followingURL: string;
  gistsURL: string;
  starredURL: string;
  subscriptionsURL: string;
  organizationsURL: string;
  reposURL: string;
  eventsURL: string;
  receivedEventsURL: string;
  type: Type;
  siteAdmin: boolean;
}
