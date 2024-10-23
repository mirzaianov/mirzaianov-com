import Contact from './contact';
import { DATA } from '@/data/resume';

export default function ContactsBlock() {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Contacts
      </header>
      <div className="flex flex-col gap-1">
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([_, social]) => (
            <Contact
              key={social.name}
              name={social.name}
              href={social.url}
            />
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
      </div>
    </article>
  );
}
