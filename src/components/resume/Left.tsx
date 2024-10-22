import InfoBlock from './InfoBlock';
import ContactsBlock from './ContactsBlock';
import AboutBlock from './AboutBlock';
import SkillsBlock from './SkillsBlock';
import LanguagesBlock from './LanguagesBlock';
import Divider from './Divider';

const Left = () => {
  return (
    <section className="flex w-[4/10] flex-col gap-4 rounded-l-lg bg-secondary p-6 pt-[18px]">
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
};

export default Left;
