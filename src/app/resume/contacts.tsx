import { formatUrl } from '@/lib/utils';
import { type IconProps } from '@/components/icons';
import BlurFade from '@/components/magicui/blur-fade';
import Link from 'next/link';

type Contact = {
  name: string;
  url: string;
  icon: (props: IconProps) => JSX.Element;
  navbar?: boolean;
};

type Location = string;

type LocationLink = string;

type Props = {
  contacts: {
    [key: string]: Contact;
  };
  location: Location;
  locationLink: LocationLink;
};

const BLUR_FADE_DELAY = 0.04;

export default function Contacts({ contacts, location, locationLink }: Props) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 14}>
      <article className="flex flex-col gap-2">
        <header className="text-xl font-bold uppercase leading-[1.2]">
          Contacts
        </header>
        <ul className="flex flex-col gap-1">
          {Object.entries(contacts)
            .filter(([_, contact]) => contact.navbar)
            .map(([_, contact]) => (
              <li
                key={contact.name}
                className="flex items-center gap-2"
              >
                <div className="flex min-w-[59px] items-center gap-1">
                  <p>{contact.name}</p>
                </div>
                <Link
                  className="link-hover-effect link-hover-effect:hover truncate [direction:rtl] hover:text-clip"
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formatUrl(contact.url)}
                </Link>
              </li>
            ))}
          <div className="flex items-center gap-2">
            <div className="flex min-w-[59px] items-center gap-1">
              <p>Location</p>
            </div>
            <Link
              className="link-hover-effect link-hover-effect:hover truncate [direction:rtl] hover:text-clip"
              href={locationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {location}
            </Link>
          </div>
        </ul>
      </article>
    </BlurFade>
  );
}
