import ContactsList from './ContactsList';

export default function ContactsBlock() {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Contacts
      </header>
      <ContactsList />
    </article>
  );
}
