import { StaticImageData } from "next/image";

export type MediaItem =
  | { type: "video"; src: string; className?: string }
  | {
      type: "storis" | "analitic" | "post" | "before" | "after" | "introFoto";
      src: string | StaticImageData;
      className?: string;
    }
  | { type: "realsVideo"; src: string; className?: string };

export interface Project {
  title: string;
  url: string;
  image: string;
  request: string;
  description: string;
  media: MediaItem[];
}
