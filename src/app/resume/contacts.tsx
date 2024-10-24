import { formatUrl } from '@/lib/utils';
import { type IconProps } from '@/components/icons';

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

export default function Contacts({ contacts, location, locationLink }: Props) {
  return (
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
              <a
                href={contact.url}
                target="_blank"
              >
                {formatUrl(contact.url)}
              </a>
            </li>
          ))}
        <div className="flex items-center gap-2">
          <div className="flex min-w-[59px] items-center gap-1">
            <p>Location</p>
          </div>
          <a
            href={locationLink}
            target="_blank"
          >
            {location}
          </a>
        </div>
      </ul>
    </article>
  );
}
