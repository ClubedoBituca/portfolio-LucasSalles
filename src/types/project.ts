export interface Project {
  id: string;
  title: string;
  category: "web" | "data" | "management";
  thumbnail: string;
  thumbnailType?: "image" | "video";
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  techStack: string[];
  media: {
    type: "image" | "video";
    url: string;
    alt?: string;
  }[];
  insights: string[];
  improvements: string[];
  links?: {
    github?: string;
    demo?: string;
    live?: string;
  };
}
