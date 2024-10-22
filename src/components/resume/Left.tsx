import InfoBlock from './InfoBlock';
import ContactsBlock from './ContactsBlock';
import AboutBlock from './AboutBlock';
import SkillsBlock from './SkillsBlock';
import LanguagesBlock from './LanguagesBlock';

export default function Left() {
  return (
    <section className="flex w-[325px] flex-col justify-between rounded-l-lg bg-secondary p-6 pt-[18px]">
      <InfoBlock />
      <div className="block min-h-[1px] w-full rounded-sm bg-primary" />
      <ContactsBlock />
      <div className="block min-h-[1px] w-full rounded-sm bg-primary" />
      <AboutBlock />
      <div className="block min-h-[1px] w-full rounded-sm bg-primary" />
      <SkillsBlock />
      <div className="block min-h-[1px] w-full rounded-sm bg-primary" />
      <LanguagesBlock />
    </section>
  );
}
