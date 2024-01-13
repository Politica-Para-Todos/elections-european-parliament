import { EmailSvgIcon, FacebookSvgIcon, GithubSvgIcon, InstagramSvgIcon, MediumSvgIcon, TwitterSvgIcon } from './SvgIcons';

export interface OnlinePlatform {
  type: OnlinePlatformType;
  address: string;
}

export enum OnlinePlatformType {
  WEBSITE = "Website",
  TWITTER = "Twitter",
  FACEBOOK = "Facebook",
  EMAIL = "Email",
  INSTAGRAM = "Instagram",
  MEDIUM = "Medium",
  GITHUB = "Github",
}

interface SocialIconProps {
  icon: OnlinePlatformType;
  theme?: string;
}

export default function SocialIcon({ icon, theme }: SocialIconProps) {
  switch (icon) {
    case OnlinePlatformType.TWITTER:
      return <TwitterSvgIcon theme={theme} />
    case OnlinePlatformType.FACEBOOK:
      return <FacebookSvgIcon theme={theme} />
    case OnlinePlatformType.MEDIUM:
      return <MediumSvgIcon theme={theme} />
    case OnlinePlatformType.EMAIL:
      return <EmailSvgIcon theme={theme} />
    case OnlinePlatformType.INSTAGRAM:
      return <InstagramSvgIcon theme={theme} />
    case OnlinePlatformType.GITHUB:
      return <GithubSvgIcon theme={theme} />
    default:
      return null;
  }
};
