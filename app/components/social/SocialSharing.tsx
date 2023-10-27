import { SOCIAL_OPTIONS } from '../../utils/social';
import SocialIcon, { OnlinePlatform, OnlinePlatformType } from './SocialIcon';

interface SocialSharingProps {
  theme?: string;
}

export default function SocialSharing({ theme }: SocialSharingProps) {
  return (
    <ul className='social-media-list'>
      {SOCIAL_OPTIONS.map((op: OnlinePlatform) => (
        <li key={op.type}>
          <a
            href={
              op.type === OnlinePlatformType.EMAIL
                ? `mailto:${op.address}`
                : op.address
            }
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon icon={op.type} theme={theme} />
          </a>
        </li>
      ))}
    </ul>
  )
}
