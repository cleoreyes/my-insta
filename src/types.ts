export interface PostType {
  id: string;
  images: string[];
  caption: string;
  timestamp: Date;
  username: string;
  profilePicture?: string;
  likes?: number;
} 