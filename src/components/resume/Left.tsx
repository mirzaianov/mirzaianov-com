import InfoBlock from './InfoBlock';
import ContactsBlock from './contacts-block';
import AboutBlock from './about-block';
import SkillsBlock from './SkillsBlock';
import LanguagesBlock from './LanguagesBlock';

export default function Left() {
  return (
    <section className="flex w-[325px] flex-col justify-between rounded-l-lg bg-secondary p-6 pt-[18px]">
      <InfoBlock />
      <Divider />
      <ContactsBlock />
      <Divider />
      <AboutBlock />
      <Divider />
      <SkillsBlock />
      <Divider />
      <LanguagesBlock />
    </section>
  );
}

function Divider() {
  return <div className="block min-h-[1px] w-full rounded-sm bg-primary" />;
}
