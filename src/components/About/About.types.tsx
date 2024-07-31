import { IconType } from "react-icons";

export interface SocialLink {
  href: string;
  icon: IconType;
}

export interface AboutProps {
  profileImage: string;
  name: string;
  description: string;
  moreInfo1?: string;
  moreInfo2?: string;
  moreInfo3?: string;
  moreInfo4?: string;
  moreInfo5?: string;
  socialLinks: SocialLink[];
  galleryImages: string[];
}
