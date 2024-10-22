import LanguagesList from './LanguagesList';

const LanguagesBlock = () => {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Languages
      </header>
      <LanguagesList />
    </article>
  );
};

export default LanguagesBlock;
