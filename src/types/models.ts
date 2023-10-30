export interface IPost {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description?: string;
  user: IUser;
  nofcomment: number;
  nofLike: number;
  comments: IComment[];
}
export interface IUser {
  id: string;
  username: string;
  image?: string;
  bio?: string;
  posts?: string;
  website?: string;
}
export interface IComment {
  id: string;
  comment: string;
  user: IUser;
}
