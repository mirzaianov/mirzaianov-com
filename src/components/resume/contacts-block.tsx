import { DATA } from '@/data/resume';
import { formatUrl } from '@/lib/utils';

export default function ContactsBlock() {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Contacts
      </header>
      <ul className="flex flex-col gap-1">
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([_, social]) => (
            <li
              key={social.name}
              className="flex items-center gap-2"
            >
              <div className="flex min-w-[59px] items-center gap-1">
                <p>{social.name}</p>
              </div>
              <a
                href={social.url}
                target="_blank"
              >
                {formatUrl(social.url)}
              </a>
            </li>
          ))}
        <div className="flex items-center gap-2">
          <div className="flex min-w-[59px] items-center gap-1">
            <p>Location</p>
          </div>
          <a
            href={DATA.locationLink}
            target="_blank"
          >
            {DATA.location}
          </a>
        </div>
      </ul>
    </article>
  );
}
